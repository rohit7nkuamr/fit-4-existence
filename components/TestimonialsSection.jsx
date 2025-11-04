'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Placeholder testimonials (to be replaced with Google reviews)
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Recovered from Back Pain',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    stars: 5,
    text: 'I had been suffering from chronic back pain for years. After just a few sessions with Fit 4 Existence, I experienced significant relief. Their home visit service was incredibly convenient.',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    role: 'Knee Pain Patient',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    stars: 5,
    text: 'The personalized care I received for my knee pain was exceptional. The doctor took the time to understand my condition and created a treatment plan that worked wonders for me.',
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    role: 'Recovered from Cervical Pain',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    stars: 4,
    text: 'I had been struggling with cervical pain that affected my daily life. The treatment I received was effective and the home visits made it so much easier for me to get the care I needed.',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Shoulder Pain Patient',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    stars: 5,
    text: 'The cupping therapy for my shoulder pain was incredibly effective. I appreciate the holistic approach to treatment and the compassionate care provided by the entire team.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-2 text-primary-900 mb-3 md:mb-4">What Our Patients Say</h2>
          <p className="text-base md:text-lg text-gray-700 px-4 md:px-0">
            Don't just take our word for it. Here's what our patients have to say about their experience with us.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-1 md:px-0"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl shadow-md p-4 md:p-6 h-full flex flex-col">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden mr-3 md:mr-4 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 48px, 56px"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base md:text-lg">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-5 md:w-5"
                        viewBox="0 0 20 20"
                        fill={i < testimonial.stars ? 'currentColor' : 'none'}
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-700 flex-grow">{testimonial.text}</p>
                  
                  <div className="mt-3 md:mt-4 flex justify-end">
                    <div className="text-[10px] md:text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">Verified Patient</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="text-center mt-6 md:mt-8">
          <p className="text-xs md:text-sm text-gray-500">
            These are placeholder testimonials. Real Google reviews will be added here.
          </p>
          <div className="mt-3 flex justify-center items-center space-x-1 text-primary-600">
            <span className="text-sm md:text-base font-medium">Swipe</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
