"use client";

import { memo, useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import gsap from "gsap";
import { onAppReady } from "../motion/appReady";

function recolorRedToPurple(map: THREE.Texture) {
  const source = map.image as CanvasImageSource & {
    width: number;
    height: number;
  };
  if (!source?.width) return null;

  const c = document.createElement("canvas");
  c.width = source.width;
  c.height = source.height;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  ctx.drawImage(source, 0, 0);
  const data = ctx.getImageData(0, 0, c.width, c.height);
  const px = data.data;

  for (let i = 0; i < px.length; i += 4) {
    const r = px[i];
    const g = px[i + 1];
    const b = px[i + 2];
    if (r > 90 && r > g * 1.5 && r > b * 1.5) {
      px[i] = Math.min(255, r * 0.74);
      px[i + 1] = Math.min(255, r * 0.37);
      px[i + 2] = Math.min(255, r * 1.0);
    }
  }

  ctx.putImageData(data, 0, 0);

  const next = new THREE.CanvasTexture(c);
  next.flipY = map.flipY;
  next.colorSpace = map.colorSpace;
  next.wrapS = map.wrapS;
  next.wrapT = map.wrapT;
  next.needsUpdate = true;
  return next;
}

function buildScene(canvas: HTMLCanvasElement, animate: boolean) {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  const scene = new THREE.Scene();

  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envRT.texture;

  const camera = new THREE.PerspectiveCamera(
    40,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    60,
  );

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
  keyLight.position.set(3, 5, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
  fillLight.position.set(-4, 2, 3);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0xbd5fff, 45, 0, 1.7);
  rimLight.position.set(-2.5, 1.4, -3);
  scene.add(rimLight);

  const accentLight = new THREE.PointLight(0xbd5fff, 25, 0, 1.9);
  accentLight.position.set(2.8, 0.6, -2);
  scene.add(accentLight);

  const pivot = new THREE.Group();
  pivot.rotation.y = -0.55;
  scene.add(pivot);

  let disposed = false;
  let keyTimer: ReturnType<typeof setTimeout> | undefined;

  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);

  loader.load("/models/keyboard.glb", (gltf) => {
    if (disposed) return;

    const model = gltf.scene;

    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 4.3 / Math.max(size.x, size.z);

    model.scale.setScalar(scale);
    model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

    fitRadius = size.length() * 0.5 * scale;
    fitCamera();

    const recolored = new Set<THREE.Texture>();
    model.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        const std = mat as THREE.MeshStandardMaterial;
        for (const slot of ["map", "emissiveMap"] as const) {
          const map = std[slot];
          if (!map || recolored.has(map)) continue;
          recolored.add(map);
          const next = recolorRedToPurple(map);
          if (next) {
            std[slot] = next;
            std.needsUpdate = true;
            recolored.add(next);
          }
        }
        if (std.emissive && std.emissive.r > std.emissive.b) {
          std.emissive.setHex(0xbd5fff);
        }
      }
    });

    pivot.add(model);

    const keycaps: THREE.Object3D[] = [];
    const capBox = new THREE.Box3();
    const capSize = new THREE.Vector3();
    model.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      capBox.setFromObject(obj);
      capBox.getSize(capSize);
      const small = Math.max(capSize.x, capSize.z) < size.x * 0.09;
      const high = capBox.max.y > center.y;
      if (small && high) keycaps.push(obj);
    });

    if (animate) {
      gsap.from(pivot.position, { y: -1.5, duration: 1.6, ease: "expo.out" });

      const travel = size.y * 0.14;
      const typeLoop = () => {
        if (disposed) return;
        const cap = keycaps[Math.floor(Math.random() * keycaps.length)];
        if (cap) {
          gsap.to(cap.position, {
            y: cap.position.y - travel,
            duration: 0.09,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          });
        }
        keyTimer = setTimeout(typeLoop, 90 + Math.random() * 320);
      };
      if (keycaps.length) keyTimer = setTimeout(typeLoop, 900);
    } else {
      render();
    }
  });

  const AUTO_SPIN = 0.004;
  const spin = { velY: AUTO_SPIN, tilt: 0, tiltVel: 0 };
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  const onPointerDown = (e: PointerEvent) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = "grabbing";
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    spin.velY = (e.clientX - lastX) * 0.006;
    spin.tiltVel = (e.clientY - lastY) * 0.004;
    lastX = e.clientX;
    lastY = e.clientY;
  };

  const onPointerUp = (e: PointerEvent) => {
    dragging = false;
    if (canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
    canvas.style.cursor = "grab";
  };

  if (animate) {
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
  }

  const REST_TILT = 0;
  const view = { zoom: 1, elevation: 0.82 };
  let fitRadius = 0;
  let fitDistance = 6;

  const fitCamera = () => {
    if (!fitRadius) return;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    fitDistance = Math.max(
      fitRadius / Math.sin(vFov / 2),
      fitRadius / Math.sin(hFov / 2),
    );
  };

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    fitCamera();
  };
  window.addEventListener("resize", resize);
  resize();

  const render = () => {
    const d = fitDistance * view.zoom;
    camera.position.set(
      0,
      Math.sin(view.elevation) * d,
      Math.cos(view.elevation) * d,
    );
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  };

  const tick = () => {
    const t = performance.now() / 1000;

    pivot.rotation.y += spin.velY;
    spin.tilt = THREE.MathUtils.clamp(spin.tilt + spin.tiltVel, -0.85, 0.2);
    pivot.rotation.x = spin.tilt;

    if (dragging) {
      spin.velY *= 0.82;
      spin.tiltVel *= 0.82;
    } else {
      spin.velY += (AUTO_SPIN - spin.velY) * 0.02;
      spin.tiltVel *= 0.9;
      spin.tilt += (REST_TILT - spin.tilt) * 0.03;
    }

    pivot.position.y = Math.sin(t * 1.2) * 0.03;
    render();
  };

  let stopReady = () => {};

  if (animate) {
    renderer.setAnimationLoop(tick);
    stopReady = onAppReady(() => {
      gsap.from(view, { zoom: 2.3, duration: 2.4, ease: "expo.out" });
      gsap.from(view, { elevation: 1.25, duration: 2.4, ease: "expo.out" });
    });
  } else {
    render();
  }

  return () => {
    disposed = true;
    clearTimeout(keyTimer);
    stopReady();
    renderer.setAnimationLoop(null);
    window.removeEventListener("resize", resize);
    canvas.removeEventListener("pointerdown", onPointerDown);
    canvas.removeEventListener("pointermove", onPointerMove);
    canvas.removeEventListener("pointerup", onPointerUp);
    canvas.removeEventListener("pointercancel", onPointerUp);
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) obj.geometry.dispose();
    });
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const m = obj.material;
      if (Array.isArray(m)) m.forEach((x) => x.dispose());
      else m.dispose();
    });
    envRT.texture.dispose();
    pmrem.dispose();
    renderer.dispose();
  };
}

function HeroScene({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = buildScene(canvas, !reduced.matches);
    const onChange = () => {
      cleanup?.();
      cleanup = buildScene(canvas, !reduced.matches);
    };
    reduced.addEventListener("change", onChange);
    return () => {
      reduced.removeEventListener("change", onChange);
      cleanup?.();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`block h-full w-full cursor-grab touch-none ${className ?? ""}`}
    />
  );
}

export default memo(HeroScene);
