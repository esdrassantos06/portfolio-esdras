'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "motion/react"

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
      className="fixed top-12 left-1/2 transform -translate-x-1/2 flex justify-center z-50 transition-all duration-300"
      animate={{ y: scrollDirection === 'down' ? -110 : 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 1, ease: "easeOut" }}
    >
      <nav className="flex bg-fundo2 w-80 h-14 items-center text-principal justify-around border border-gray-200/50 rounded-lg">
        <ul className="flex gap-4 items-center">
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <a href="#home">Home</a>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <a href="#about">About</a>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <a href="#work">Work</a>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
