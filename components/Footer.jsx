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
    <footer className="bg-[#ebe3d5] text-gray-800">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex justify-start mb-4">
              <div style={{ width: '120px', height: '120px' }}>
                <Logo size="xl" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              We are committed to providing personalized, compassionate medical care to ensure your well-being and cure you through any pain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-gray-600 hover:text-gold-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-gold-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-gold-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-600 hover:text-gold-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-gold-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold-600">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Knee Pain</li>
              <li className="text-gray-600">Back Pain</li>
              <li className="text-gray-600">Paralysis</li>
              <li className="text-gray-600">Cervical Pain</li>
              <li className="text-gray-600">Cupping Therapy</li>
              <li className="text-gray-600">Sciatica</li>
              <li className="text-gray-600">Shoulder Pain</li>
              <li className="text-gray-600">Muscle Pain</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold-600">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-gold-500" />
                <span className="text-gray-600">+91 6287811094</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-gold-500" />
                <span className="text-gray-600">fit4existence@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-gold-500" />
                <span className="text-gray-600">Gaya, Bodhgaya, Bihar, India</span>
                <a href="https://www.google.com/maps/search/fit+4+existence+physiotherapy+gaya/" target="_blank" rel="noopener noreferrer" className="text-gold-600 text-xs ml-2 hover:text-gold-700">
                  (Map)
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Footer with Accordions */}
        <div className="md:hidden">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div style={{ width: '120px', height: '120px' }}>
                <Logo size="xl" />
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center">
              We are committed to providing personalized, compassionate medical care.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-100 transition-colors bg-gold-600 p-2 rounded-full">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Accordion */}
          <div className="border-t border-[#e5d8c3] py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('links')}
            >
              <h3 className="font-display font-bold text-lg text-gold-600">Quick Links</h3>
              {expandedSection === 'links' ? <FiChevronUp className="text-gold-600" /> : <FiChevronDown className="text-gold-600" />}
            </button>
            {expandedSection === 'links' && (
              <ul className="space-y-3 mt-4 pl-2">
                <li>
                  <Link href="/#home" className="text-gray-600 hover:text-gold-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-600 hover:text-gold-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-600 hover:text-gold-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-gray-600 hover:text-gold-600 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-600 hover:text-gold-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
          {/* Services Accordion */}
          <div className="border-t border-[#e5d8c3] py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('services')}
            >
              <h3 className="font-display font-bold text-lg text-gold-600">Services</h3>
              {expandedSection === 'services' ? <FiChevronUp className="text-gold-600" /> : <FiChevronDown className="text-gold-600" />}
            </button>
            {expandedSection === 'services' && (
              <ul className="space-y-3 mt-4 pl-2 grid grid-cols-2">
                <li className="text-gray-600">Knee Pain</li>
                <li className="text-gray-600">Back Pain</li>
                <li className="text-gray-600">Paralysis</li>
                <li className="text-gray-600">Cervical Pain</li>
                <li className="text-gray-600">Cupping Therapy</li>
                <li className="text-gray-600">Sciatica</li>
                <li className="text-gray-600">Shoulder Pain</li>
                <li className="text-gray-600">Muscle Pain</li>
              </ul>
            )}
          </div>
          
          {/* Contact Accordion */}
          <div className="border-t border-[#e5d8c3] py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('contact')}
            >
              <h3 className="font-display font-bold text-lg text-gold-600">Contact Us</h3>
              {expandedSection === 'contact' ? <FiChevronUp className="text-gold-600" /> : <FiChevronDown className="text-gold-600" />}
            </button>
            {expandedSection === 'contact' && (
              <ul className="space-y-4 mt-4 pl-2">
                <li className="flex items-start">
                  <FiPhone className="mt-1 mr-3 text-gold-500" />
                  <span className="text-gray-600">+91 6287811094</span>
                </li>
                <li className="flex items-start">
                  <FiMail className="mt-1 mr-3 text-gold-500" />
                  <span className="text-gray-600">fit4existence@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-gold-500" />
                  <span className="text-gray-600">Gaya, Bodhgaya, Bihar, India</span>
                  <a href="https://www.google.com/maps/search/fit+4+existence+physiotherapy+gaya/" target="_blank" rel="noopener noreferrer" className="text-gold-600 text-xs ml-2 hover:text-gold-700">
                    (Map)
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        
        <div className="border-t border-[#e5d8c3] mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Fit 4 Existence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
