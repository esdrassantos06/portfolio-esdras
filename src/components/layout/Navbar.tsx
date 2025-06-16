"use client";
import {
  HouseIcon,
  InfoIcon,
  UserIcon,
  DesktopIcon,
} from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

type ScrollDirection = "up" | "down" | null;

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  const t = useTranslations("Header");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-12 left-1/2 transform -translate-x-1/2 flex justify-center z-999 transition-all duration-300"
      animate={{ y: scrollDirection === "down" ? -110 : 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
        mass: 1,
        ease: "easeOut",
      }}
    >
      <nav className="flex bg-fundo2 w-fit px-4 h-14 items-center text-principal justify-around border border-gray-200/50 rounded-lg">
        <ul className="flex gap-4 font-semibold items-center">
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label="Home" className="hidden sm:flex" href="/#home">
              {t("home")}
            </Link>
            <Link aria-label="Home" className="flex sm:hidden" href="/#home">
              <HouseIcon size={35} />
            </Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link
              aria-label="About Me"
              className="hidden sm:flex"
              href="/#about"
            >
              {t("about")}
            </Link>
            <Link
              aria-label="About Me"
              className="flex sm:hidden"
              href="/#about"
            >
              <InfoIcon size={35} />
            </Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label="My Work" className="hidden sm:flex" href="/#work">
              {t("work")}
            </Link>
            <Link aria-label="My Work" className="flex sm:hidden" href="/#work">
              <DesktopIcon size={35} />
            </Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link
              aria-label="Contact Me"
              className="hidden sm:flex"
              href="/#contact"
            >
              {t("contact")}
            </Link>
            <Link
              aria-label="Contact Me"
              className="flex sm:hidden"
              href="/#contact"
            >
              <UserIcon size={35} />
            </Link>
          </li>
          <LocaleSwitcher />
        </ul>
      </nav>
    </motion.header>
  );
}
