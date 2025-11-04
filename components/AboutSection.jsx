'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

export default function AboutSection() {
  const features = [
    'Personalized treatment plans',
    'Home visits for your convenience',
    'Experienced medical professionals',
    'Holistic approach to pain management',
    'Modern techniques and equipment',
    'Compassionate care for all patients'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-xl md:rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                alt="Doctor with patient"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg md:shadow-xl max-w-[200px] md:max-w-xs">
              <div className="flex items-center space-x-3 md:space-x-4 mb-2 md:mb-4">
                <div className="bg-primary-100 p-2 md:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-base md:text-lg">Our Experience</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                With over 10 years of experience, we've helped thousands of patients recover from pain.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="heading-2 text-primary-900 mb-4 md:mb-6 text-center lg:text-left">Our Commitment to Your Health</h2>
            <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-6 text-center lg:text-left">
              We are committed to providing personalized, compassionate medical care to ensure your well-being and cure you through any pain. Our team of experts is dedicated to helping you achieve optimal health and recovery.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center py-1">
                  <FiCheckCircle className="text-primary-600 mr-2 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg md:rounded-xl">
              <h3 className="font-display font-semibold text-lg md:text-xl mb-2 md:mb-4">Why Choose Us?</h3>
              <p className="text-sm md:text-base text-gray-700">
                Our approach combines traditional healing methods with modern medical techniques to provide the most effective treatment for your condition. We understand that each patient is unique, which is why we create personalized treatment plans tailored to your specific needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
