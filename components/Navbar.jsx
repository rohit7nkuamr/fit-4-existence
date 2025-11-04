'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#faf7f2] shadow-md py-1.5 md:py-2' : 'bg-transparent py-3 md:py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <Logo size="sm" />
          </div>
          <span className="font-display font-bold text-lg md:text-xl text-gold-600">Fit 4 Existence</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="/#home" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            Home
          </Link>
          <Link href="/#services" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            Services
          </Link>
          <Link href="/#about" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            About Us
          </Link>
          <Link href="/#testimonials" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            Testimonials
          </Link>
          <Link href="/#contact" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/#contact" className="btn-primary text-sm lg:text-base py-2 px-4 lg:py-3 lg:px-6">
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gold-500 hover:text-gold-400 focus:outline-none p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#faf7f2] shadow-lg fixed top-[53px] left-0 right-0 max-h-[calc(100vh-53px)] overflow-y-auto z-50 border-t border-[#e5d8c3]">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link href="/#home" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/#services" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/#about" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/#testimonials" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href="/#contact" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Link href="/#contact" className="btn-secondary w-full text-center" onClick={() => setIsOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
