'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f8f5f1] to-[#f5efe6]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="heading-1 text-gray-900 mb-4 md:mb-6 text-center lg:text-left">
              Your Journey To <span className="text-gold-600">Better Health</span> Starts Here
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              We are committed to providing personalized, compassionate medical care to ensure your well-being and cure you through any pain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/#contact" className="btn-primary text-center w-full sm:w-auto px-6 py-3">
                Book Appointment
              </Link>
              <Link href="/#services" className="btn-secondary text-center w-full sm:w-auto">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-8 md:mt-12 flex items-center space-x-4 md:space-x-6 justify-center lg:justify-start">
              <div className="flex -space-x-3 md:-space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for patient images */}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base">500+ Happy Patients</p>
                <div className="flex text-gold-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-xl md:rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/main-hero.jpg" /* Place your hero image at this path */
                alt="Dr. Prince Raj providing physiotherapy treatment"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Mobile-optimized info cards */}
            <div className={`absolute ${isMobile ? '-bottom-4 left-4' : '-bottom-6 -left-6'} bg-[#faf7f2] p-3 md:p-4 rounded-lg shadow-xl max-w-[160px] md:max-w-none border border-[#e5d8c3]`}>
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="bg-gold-100 p-2 md:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Quick Response</p>
                  <p className="text-xs md:text-sm text-gray-500">Home visits available</p>
                </div>
              </div>
            </div>
            
            <div className={`absolute ${isMobile ? '-top-4 right-4' : '-top-6 -right-6'} bg-[#faf7f2] p-3 md:p-4 rounded-lg shadow-xl max-w-[160px] md:max-w-none border border-[#e5d8c3]`}>
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="bg-gold-100 p-2 md:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Expert Care</p>
                  <p className="text-xs md:text-sm text-gray-500">Personalized treatment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
