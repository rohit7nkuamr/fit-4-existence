'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Knee Pain',
    description: 'Specialized treatment for acute and chronic knee pain conditions.',
    icon: '/images/icons/knee.svg',
    image: '/images/services/knee-pain.jpg' /* Place your image at this path */
  },
  {
    id: 2,
    title: 'Back Pain',
    description: 'Effective therapies for lower and upper back pain relief.',
    icon: '/images/icons/back.svg',
    image: '/images/services/back-pain.jpg' /* Place your image at this path */
  },
  {
    id: 3,
    title: 'Paralysis',
    description: 'Rehabilitation and treatment for various types of paralysis.',
    icon: '/images/icons/paralysis.svg',
    image: '/images/services/paralysis.jpg' /* Place your image at this path */
  },
  {
    id: 4,
    title: 'Cervical Pain',
    description: 'Relief for neck and cervical spine discomfort and pain.',
    icon: '/images/icons/cervical.svg',
    image: '/images/services/cervical-pain.jpg' /* Place your image at this path */
  },
  {
    id: 5,
    title: 'Cupping Therapy',
    description: 'Traditional therapy to improve blood flow and reduce pain.',
    icon: '/images/icons/cupping.svg',
    image: '/images/services/cupping-therapy.jpg' /* Place your image at this path */
  },
  {
    id: 6,
    title: 'Sciatica',
    description: 'Targeted treatment for sciatic nerve pain and related conditions.',
    icon: '/images/icons/sciatica.svg',
    image: '/images/services/sciatica.jpg' /* Place your image at this path */
  },
  {
    id: 7,
    title: 'Shoulder Pain',
    description: 'Treatment for shoulder injuries, stiffness, and chronic pain.',
    icon: '/images/icons/shoulder.svg',
    image: '/images/services/shoulder-pain.jpg' /* Place your image at this path */
  },
  {
    id: 8,
    title: 'Muscle Pain',
    description: 'Relief for muscle strains, tension, and chronic muscle pain.',
    icon: '/images/icons/muscle.svg',
    image: '/images/services/muscle-pain.jpg' /* Place your image at this path */
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-2 text-primary-900 mb-3 md:mb-4">Our Specialized Services</h2>
          <p className="text-base md:text-lg text-gray-700 px-4 md:px-0">
            We offer home visits for a variety of conditions, bringing expert care directly to your doorstep.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item} className="card group">
              <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{service.description}</p>
                <Link href="/#contact" className="flex items-center text-gold-600 text-sm md:text-base font-medium hover:text-gold-700 transition-colors">
                  Contact Us <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile swipe indicator */}
        <div className="mt-6 text-center text-gray-500 text-sm md:hidden">
          <p>Swipe to see more services</p>
          <div className="flex justify-center mt-2">
            <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
