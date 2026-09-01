"use client";

import { memo, useEffect, useRef } from "react";
import * as THREE from "three";

const FRAG = `
precision highp float;

uniform vec2 u_res;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.0 + vec2(13.7, 7.3);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0);
  float t = u_time * 0.06;

  float n1 = fbm(p * 1.6 + vec2(t, -t * 0.6));
  float n2 = fbm(p * 2.2 - vec2(t * 0.8, t * 0.4) + n1);
  float veil = fbm(p * 1.1 + vec2(n2 * 1.5, t * 0.5));

  vec3 base = vec3(0.039, 0.039, 0.039);
  vec3 deepPurple = vec3(0.28, 0.07, 0.36);
  vec3 brightPurple = vec3(0.55, 0.24, 0.78);

  float band = smoothstep(0.35, 0.85, veil) * smoothstep(0.95, 0.45, uv.y + n1 * 0.3);
  vec3 col = base;
  col += deepPurple * band * 0.5;
  col += brightPurple * pow(smoothstep(0.55, 0.95, n2 * veil + band * 0.3), 2.0) * 0.32;

  float vignette = smoothstep(1.3, 0.25, length(uv - vec2(0.5, 0.42)));
  col *= mix(0.35, 1.0, vignette);

  float grain = (hash(gl_FragCoord.xy + fract(u_time)) - 0.5) * 0.035;
  col += grain;

  gl_FragColor = vec4(col, 1.0);
}
`;

function startAurora(canvas: HTMLCanvasElement, animate: boolean) {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "low-power",
    });
  } catch {
    return null;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const uniforms = {
    u_res: { value: new THREE.Vector2(1, 1) },
    u_time: { value: 40.0 },
  };
  const material = new THREE.ShaderMaterial({
    fragmentShader: FRAG,
    uniforms,
    depthTest: false,
    depthWrite: false,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(quad);

  const resize = () => {
    const dpr = Math.min(
      window.devicePixelRatio || 1,
      window.innerWidth < 768 ? 0.75 : 1,
    );
    renderer.setPixelRatio(dpr);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    uniforms.u_res.value.set(
      canvas.clientWidth * dpr,
      canvas.clientHeight * dpr,
    );
  };
  resize();

  let raf = 0;
  let revealed = false;
  const start = performance.now();
  const draw = () => {
    uniforms.u_time.value = (performance.now() - start) / 1000 + 40.0;
    renderer.render(scene, camera);
    if (!revealed) {
      revealed = true;
      canvas.style.opacity = "1";
    }
    if (animate) raf = requestAnimationFrame(draw);
  };
  draw();

  const onResize = () => {
    resize();
    if (!animate) draw();
  };
  window.addEventListener("resize", onResize);

  const onVisibility = () => {
    if (!animate) return;
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(draw);
  };
  document.addEventListener("visibilitychange", onVisibility);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("visibilitychange", onVisibility);
    quad.geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}

function AuroraBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = startAurora(canvas, !reduced.matches);
    const onChange = () => {
      cleanup?.();
      cleanup = startAurora(canvas, !reduced.matches);
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
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-700 motion-reduce:transition-none"
    />
  );
}

export default memo(AuroraBackground);
