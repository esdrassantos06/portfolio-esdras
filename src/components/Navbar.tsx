'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "motion/react"
import Link from 'next/link';

type ScrollDirection = 'up' | 'down' | null;

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down'); // rolando para baixo
      } else {
        setScrollDirection('up'); // rolando para cima
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-12 left-1/2 transform -translate-x-1/2 flex justify-center z-999 transition-all duration-300"
      animate={{ y: scrollDirection === 'down' ? -110 : 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 1, ease: "easeOut" }}
    >
      <nav className="flex bg-fundo2 w-80 h-14 items-center text-principal justify-around border border-gray-200/50 rounded-lg">
        <ul className="flex gap-4 font-semibold items-center">
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='Home' href="/#home">Home</Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='About Me' href="/#about">About</Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='My Work' href="/#work">Work</Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='Contact Me' href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
