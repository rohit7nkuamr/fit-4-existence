'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Fit 4 Existence</h3>
            <p className="text-gray-300 mb-4">
              We are committed to providing personalized, compassionate medical care to ensure your well-being and cure you through any pain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Knee Pain</li>
              <li className="text-gray-300">Back Pain</li>
              <li className="text-gray-300">Paralysis</li>
              <li className="text-gray-300">Cervical Pain</li>
              <li className="text-gray-300">Cupping Therapy</li>
              <li className="text-gray-300">Sciatica</li>
              <li className="text-gray-300">Shoulder Pain</li>
              <li className="text-gray-300">Muscle Pain</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-300">+91 6287811094</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-300">contact@fit4existence.com</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-300">Your Location, City, State, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Footer with Accordions */}
        <div className="md:hidden">
          <div className="mb-6">
            <h3 className="font-display font-bold text-xl mb-4 text-center">Fit 4 Existence</h3>
            <p className="text-gray-300 mb-4 text-center">
              We are committed to providing personalized, compassionate medical care.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Accordion */}
          <div className="border-t border-gray-800 py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('links')}
            >
              <h3 className="font-display font-bold text-lg">Quick Links</h3>
              {expandedSection === 'links' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {expandedSection === 'links' && (
              <ul className="space-y-3 mt-4 pl-2">
                <li>
                  <Link href="/#home" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
          {/* Services Accordion */}
          <div className="border-t border-gray-800 py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('services')}
            >
              <h3 className="font-display font-bold text-lg">Services</h3>
              {expandedSection === 'services' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {expandedSection === 'services' && (
              <ul className="space-y-3 mt-4 pl-2 grid grid-cols-2">
                <li className="text-gray-300">Knee Pain</li>
                <li className="text-gray-300">Back Pain</li>
                <li className="text-gray-300">Paralysis</li>
                <li className="text-gray-300">Cervical Pain</li>
                <li className="text-gray-300">Cupping Therapy</li>
                <li className="text-gray-300">Sciatica</li>
                <li className="text-gray-300">Shoulder Pain</li>
                <li className="text-gray-300">Muscle Pain</li>
              </ul>
            )}
          </div>
          
          {/* Contact Accordion */}
          <div className="border-t border-gray-800 py-4">
            <button 
              className="w-full flex justify-between items-center text-left" 
              onClick={() => toggleSection('contact')}
            >
              <h3 className="font-display font-bold text-lg">Contact Us</h3>
              {expandedSection === 'contact' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {expandedSection === 'contact' && (
              <ul className="space-y-4 mt-4 pl-2">
                <li className="flex items-start">
                  <FiPhone className="mt-1 mr-3 text-primary-400" />
                  <span className="text-gray-300">+91 6287811094</span>
                </li>
                <li className="flex items-start">
                  <FiMail className="mt-1 mr-3 text-primary-400" />
                  <span className="text-gray-300">contact@fit4existence.com</span>
                </li>
                <li className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-primary-400" />
                  <span className="text-gray-300">Your Location, City, State, India</span>
                </li>
              </ul>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Fit 4 Existence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
