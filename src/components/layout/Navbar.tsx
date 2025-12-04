"use client";
import {
  HouseIcon,
  InfoIcon,
  UserIcon,
  DesktopIcon,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Inter } from "next/font/google";
import { FadeIn } from "@/components/ui/ScrollAnimation";

const inter = Inter({ subsets: ["latin"] });

type ScrollDirection = "up" | "down" | null;

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  const t = useTranslations("Header");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        className={`${inter.className} relative z-[99999] overflow-hidden rounded-2xl border border-gray-200/50 backdrop-blur-xl`}
      >
        {/* Content */}
        <div className="relative flex min-w-fit items-center px-6 py-2">
          <ul className="flex items-center gap-1 font-medium">
            {navItems.map((item, index) => (
              <FadeIn key={item.id} direction="down" once>
                <li>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className="group relative flex items-center justify-center rounded-xl px-2 py-2.5 transition-all duration-300 hover:bg-white/10 active:scale-95 sm:px-4"
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
                    />

                    {/* Active indicator dot */}
                    <div className="bg-principal absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              </FadeIn>
            ))}

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

        {/* Bottom glow effect */}
        <div className="via-principal/20 absolute -bottom-2 left-1/2 h-1 w-3/4 -translate-x-1/2 transform bg-gradient-to-r from-transparent to-transparent blur-sm" />
      </nav>
    </motion.header>
  );
}
