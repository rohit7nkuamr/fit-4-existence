'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1.5 md:py-2' : 'bg-transparent py-3 md:py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 md:h-10 md:w-10 mr-2">
            {/* Replace with actual logo */}
            <div className="bg-primary-600 h-full w-full rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
              F4E
            </div>
          </div>
          <span className="font-display font-bold text-lg md:text-xl text-primary-800">Fit 4 Existence</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="/#home" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link href="/#services" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
            Services
          </Link>
          <Link href="/#about" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
            About Us
          </Link>
          <Link href="/#testimonials" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
            Testimonials
          </Link>
          <Link href="/#contact" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
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
          className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-[53px] left-0 right-0 max-h-[calc(100vh-53px)] overflow-y-auto z-50">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link href="/#home" className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-2 active:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/#services" className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-2 active:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/#about" className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-2 active:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/#testimonials" className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-2 active:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href="/#contact" className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-2 active:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Link href="/#contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
