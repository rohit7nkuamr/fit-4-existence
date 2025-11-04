'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState(null);
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  return (
    <footer className="bg-black text-gold-500">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo size="md" />
              <h3 className="font-display font-bold text-xl ml-3 text-gold-500">Fit 4 Existence</h3>
            </div>
            <p className="text-gold-300 mb-4">
              We are committed to providing personalized, compassionate medical care to ensure your well-being and cure you through any pain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-gold-400 hover:text-gold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gold-400 hover:text-gold-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gold-400 hover:text-gold-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gold-400 hover:text-gold-300 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gold-400 hover:text-gold-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold-500">Services</h3>
            <ul className="space-y-2">
              <li className="text-gold-400">Knee Pain</li>
              <li className="text-gold-400">Back Pain</li>
              <li className="text-gold-400">Paralysis</li>
              <li className="text-gold-400">Cervical Pain</li>
              <li className="text-gold-400">Cupping Therapy</li>
              <li className="text-gold-400">Sciatica</li>
              <li className="text-gold-400">Shoulder Pain</li>
              <li className="text-gold-400">Muscle Pain</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-gold-500" />
                <span className="text-gold-400">+91 6287811094</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-gold-500" />
                <span className="text-gold-400">contact@fit4existence.com</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-gold-500" />
                <span className="text-gold-400">Gaya, Bodhgaya, Bihar, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Footer with Accordions */}
        <div className="md:hidden">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <Logo size="md" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4 text-center text-gold-500">Fit 4 Existence</h3>
            <p className="text-gold-400 mb-4 text-center">
              We are committed to providing personalized, compassionate medical care.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors bg-black p-2 rounded-full border border-gold-600">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Accordion */}
          <div className="border-t border-gold-800 py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('links')}
            >
              <h3 className="font-display font-bold text-lg text-gold-500">Quick Links</h3>
              {expandedSection === 'links' ? <FiChevronUp className="text-gold-500" /> : <FiChevronDown className="text-gold-500" />}
            </button>
            {expandedSection === 'links' && (
              <ul className="space-y-3 mt-4 pl-2">
                <li>
                  <Link href="/#home" className="text-gold-400 hover:text-gold-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gold-400 hover:text-gold-300 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gold-400 hover:text-gold-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-gold-400 hover:text-gold-300 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gold-400 hover:text-gold-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
          {/* Services Accordion */}
          <div className="border-t border-gold-800 py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('services')}
            >
              <h3 className="font-display font-bold text-lg text-gold-500">Services</h3>
              {expandedSection === 'services' ? <FiChevronUp className="text-gold-500" /> : <FiChevronDown className="text-gold-500" />}
            </button>
            {expandedSection === 'services' && (
              <ul className="space-y-3 mt-4 pl-2 grid grid-cols-2">
                <li className="text-gold-400">Knee Pain</li>
                <li className="text-gold-400">Back Pain</li>
                <li className="text-gold-400">Paralysis</li>
                <li className="text-gold-400">Cervical Pain</li>
                <li className="text-gold-400">Cupping Therapy</li>
                <li className="text-gold-400">Sciatica</li>
                <li className="text-gold-400">Shoulder Pain</li>
                <li className="text-gold-400">Muscle Pain</li>
              </ul>
            )}
          </div>
          
          {/* Contact Accordion */}
          <div className="border-t border-gold-800 py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('contact')}
            >
              <h3 className="font-display font-bold text-lg text-gold-500">Contact Us</h3>
              {expandedSection === 'contact' ? <FiChevronUp className="text-gold-500" /> : <FiChevronDown className="text-gold-500" />}
            </button>
            {expandedSection === 'contact' && (
              <ul className="space-y-4 mt-4 pl-2">
                <li className="flex items-start">
                  <FiPhone className="mt-1 mr-3 text-gold-500" />
                  <span className="text-gold-400">+91 6287811094</span>
                </li>
                <li className="flex items-start">
                  <FiMail className="mt-1 mr-3 text-gold-500" />
                  <span className="text-gold-400">contact@fit4existence.com</span>
                </li>
                <li className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-gold-500" />
                  <span className="text-gold-400">Gaya, Bodhgaya, Bihar, India</span>
                </li>
              </ul>
            )}
          </div>
        </div>
        
        <div className="border-t border-gold-800 mt-8 pt-6 text-center text-gold-400 text-sm">
          <p>&copy; {currentYear} Fit 4 Existence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
