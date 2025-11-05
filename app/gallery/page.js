'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function GalleryPage() {
  // Set page title and meta description dynamically
  useEffect(() => {
    document.title = 'Patient Gallery - Fit 4 Existence | Physiotherapy Treatment Photos';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our patient treatment gallery showcasing successful physiotherapy sessions, rehabilitation progress, and recovery journeys at Fit 4 Existence, Gaya.');
    }
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images - Add your patient treatment photos here
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/treatment-1.jpg',
      alt: 'Patient treatment session 1',
      category: 'Physiotherapy'
    },
    {
      id: 2,
      src: '/images/gallery/treatment-2.jpg',
      alt: 'Patient treatment session 2',
      category: 'Rehabilitation'
    },
    {
      id: 3,
      src: '/images/gallery/treatment-3.jpg',
      alt: 'Patient treatment session 3',
      category: 'Therapy'
    },
    {
      id: 4,
      src: '/images/gallery/treatment-4.jpg',
      alt: 'Patient treatment session 4',
      category: 'Recovery'
    },
    {
      id: 5,
      src: '/images/gallery/treatment-5.jpg',
      alt: 'Patient treatment session 5',
      category: 'Physiotherapy'
    },
    {
      id: 6,
      src: '/images/gallery/treatment-6.jpg',
      alt: 'Patient treatment session 6',
      category: 'Rehabilitation'
    },
    {
      id: 7,
      src: '/images/gallery/treatment-7.jpg',
      alt: 'Patient treatment session 7',
      category: 'Therapy'
    },
    {
      id: 8,
      src: '/images/gallery/treatment-8.jpg',
      alt: 'Patient treatment session 8',
      category: 'Recovery'
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f5f1] to-[#f5efe6]">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 text-gray-900 mb-4 md:mb-6">
              Patient <span className="text-gold-600">Treatment Gallery</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 px-4 md:px-0">
              Witness the journey of recovery and healing. Here are some moments from our successful treatment sessions with patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={item}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm md:text-base">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={32} />
          </button>
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </main>
  );
}
