'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
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
    <>
      {/* Floating Logo - Independent of Navbar */}
      <Link href="/" className="fixed top-0 left-4 md:left-8 z-[60] transition-all duration-300 hover:scale-110">
        <div style={{ width: '120px', height: '120px' }}>
          <Logo size="xl" />
        </div>
      </Link>
      
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#faf7f2] shadow-md py-1 md:py-1.5' : 'bg-transparent py-1.5 md:py-2'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Empty space for logo */}
        <div className="w-28 md:w-36"></div>

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
          <Link href="/gallery" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            Gallery
          </Link>
          <Link href="/#testimonials" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            Testimonials
          </Link>
          <Link href="/#contact" className="font-medium text-gold-500 hover:text-gold-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          <a 
            href="tel:+916287811094" 
            className="bg-gold-600 text-white p-2 lg:p-3 rounded-lg hover:bg-gold-700 transition-colors"
            aria-label="Call Us"
            title="Call Now"
          >
            <FiPhone size={18} />
          </a>
          <a 
            href="https://wa.me/916287811094" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-2 lg:p-3 rounded-lg hover:bg-green-600 transition-colors"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
          <Link href="/#contact" className="btn-primary text-sm lg:text-base py-2 px-3 lg:py-3 lg:px-5">
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
            <Link href="/gallery" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="/#testimonials" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href="/#contact" className="font-medium text-gold-500 hover:text-gold-400 transition-colors py-2 px-2 active:bg-[#f0e6d6] rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="pt-2 space-y-3">
              <div className="flex space-x-3">
                <a 
                  href="tel:+916287811094" 
                  className="flex-1 bg-gold-600 text-white py-3 rounded-lg hover:bg-gold-700 transition-colors flex items-center justify-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FiPhone size={18} />
                  <span>Call</span>
                </a>
                <a 
                  href="https://wa.me/916287811094" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FaWhatsapp size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
              <Link href="/#contact" className="btn-secondary w-full text-center block" onClick={() => setIsOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
