'use client';
import { House, Info, User, Desktop  } from '@phosphor-icons/react';
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
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
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
      <nav className="flex bg-fundo2 w-70 sm:w-80 h-14 items-center text-principal justify-around border border-gray-200/50 rounded-lg">
        <ul className="flex gap-4 font-semibold items-center">
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='Home' className='hidden sm:flex' href="/#home">Home</Link>
            <Link aria-label='Home' className='flex sm:hidden' href="/#home"><House size={35}/></Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='About Me' className='hidden sm:flex' href="/#about">About</Link>
            <Link aria-label='About Me' className='flex sm:hidden' href="/#about"><Info size={35}/></Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='My Work' className='hidden sm:flex'  href="/#work">Work</Link>
            <Link aria-label='My Work' className='flex sm:hidden' href="/#work"><Desktop size={35} /></Link>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60">
            <Link aria-label='Contact Me'  className='hidden sm:flex' href="/#contact">Contact</Link>
            <Link aria-label='Contact Me'  className='flex sm:hidden' href="/#contact"><User size={35} /></Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
