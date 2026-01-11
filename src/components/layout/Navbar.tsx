"use client";
import {
  HouseIcon,
  InfoIcon,
  UserIcon,
  DesktopIcon,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Inter } from "next/font/google";
import { FadeIn } from "@/components/ui/ScrollAnimation";

const inter = Inter({ subsets: ["latin"] });

type ScrollDirection = "up" | "down" | null;

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  const t = useTranslations("Header");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setScrollDirection("down");
          } else {
            setScrollDirection("up");
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = ["home", "about", "work", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "/#home", label: t("home"), icon: HouseIcon, id: "home" },
    { href: "/#about", label: t("about"), icon: InfoIcon, id: "about" },
    { href: "/#work", label: t("work"), icon: DesktopIcon, id: "work" },
    { href: "/#contact", label: t("contact"), icon: UserIcon, id: "contact" },
  ];

  return (
    <motion.header
      className="fixed top-6 left-1/2 z-[99999] -translate-x-1/2 transform transition-all duration-300"
      animate={{
        y: scrollDirection === "down" ? -120 : 0,
        scale: scrollDirection === "down" ? 0.95 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
    >
      <nav
        aria-label="Main navigation"
        className={`${inter.className} relative z-[99999] overflow-hidden rounded-2xl border border-gray-200/50 backdrop-blur-xl`}
      >
        {/* Content */}
        <div className="relative flex min-w-fit items-center px-4 py-2 sm:px-6">
          <ul className="flex items-center gap-1 font-medium" role="list">
            {navItems.map((item) => {
              const isActive = pathname === "/" && activeSection === item.id;
              return (
                <FadeIn key={item.id} direction="down" once>
                  <li>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      aria-current={isActive ? "page" : undefined}
                      className={`group focus-visible:outline-principal relative flex items-center justify-center rounded-xl px-2 py-2.5 transition-all duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 sm:px-4 ${
                        isActive ? "bg-white/10" : ""
                      }`}
                    >
                      {/* Hover background effect */}
                      <div className="from-principal/0 via-principal/5 to-principal/0 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Desktop text */}
                      <span className="text-principal/90 group-hover:text-principal relative z-10 hidden text-center transition-colors duration-300 sm:block">
                        {item.label}
                      </span>

                      {/* Mobile icon */}
                      <item.icon
                        size={24}
                        className="text-principal/90 group-hover:text-principal relative z-10 transition-all duration-300 group-hover:scale-110 sm:hidden"
                        aria-hidden="true"
                      />

                      {/* Active indicator dot */}
                      <div
                        className={`bg-principal absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full transition-opacity duration-300 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </FadeIn>
              );
            })}

            {/* Separator */}
            <FadeIn direction="down" once>
              <li>
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300/30 to-transparent sm:mx-2" />
              </li>
            </FadeIn>

            {/* Locale Switcher */}
            <FadeIn direction="down" once>
              <li>
                <LocaleSwitcher />
              </li>
            </FadeIn>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
