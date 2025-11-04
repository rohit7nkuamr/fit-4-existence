'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Real Google reviews
const testimonials = [
  {
    id: 1,
    name: 'Rohit Kumar',
    role: 'Neck & Shoulder Pain',
    image: '/images/testimonials/avatar1.png',
    stars: 4,
    text: 'Years of \'work from home\' and bad posture finally caught up with me. My neck and shoulder were so stiff I could barely turn my head. In just a month, I\'m fully mobile again. This place is a lifesaver!',
  },
  {
    id: 2,
    name: 'Sonu Kumar',
    role: 'Physiotherapy Patient',
    image: '/images/testimonials/avatar2.png',
    stars: 5,
    text: 'Best physiotherapy service in Gaya city.',
  },
  {
    id: 3,
    name: 'Rekha Kumari',
    role: 'Low Back Pain',
    image: '/images/testimonials/avatar3.png',
    stars: 5,
    text: 'A best physiotheraist for home visit... Regionable charges... God behaviour ❤️ I was suffering from low back pain...in 20 days session I am rid of my pain.. Thanks to fit 4 life physiotheraist',
  },
  {
    id: 4,
    name: 'Satyam Kumar',
    role: 'Back Pain Patient',
    image: '/images/testimonials/avatar4.png',
    stars: 5,
    text: 'I wasn\'t able to move due to back pain for 1 hour after waking up in morning but after I met him he started treating me I\'m normal like before thanks to him and also behavior is so friendly and you will not feel like he is doctor the way he is treating is so nice thanks doctor',
  },
  {
    id: 5,
    name: 'Swarna Sinha',
    role: 'Family Member of Patient',
    image: '/images/testimonials/avatar5.png',
    stars: 5,
    text: 'Excellent physiotherapist! Very knowledgeable, patient, and professional. Helped my father recover quickly with a clear treatment plan and personalized exercises. Highly recommend!',
  },
  {
    id: 6,
    name: 'Aryan Kumar',
    role: 'Pain Management',
    image: '/images/testimonials/avatar6.png',
    stars: 5,
    text: 'Dr is professional and friendly for all age groups and gender...god bless him he cured my pain in just session of 1 week',
  },
  {
    id: 7,
    name: 'Prince Yadav',
    role: 'Joint Pain Patient',
    image: '/images/testimonials/avatar7.png',
    stars: 5,
    text: 'Best physio in Gaya city for any physiotherapy related problem..in affordable rate than others. I was having joint pain and it was cured in only 5 session...I will recommend everyone to visit once',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-[#f5efe6] to-[#f8f5f1]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-2 text-gray-900 mb-3 md:mb-4">What Our Patients Say</h2>
          <p className="text-base md:text-lg text-gray-600 px-4 md:px-0">
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
                <div className="bg-[#faf7f2] border border-gold-300 rounded-xl shadow-md p-4 md:p-6 h-full flex flex-col">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full mr-3 md:mr-4 flex-shrink-0 bg-gold-600 flex items-center justify-center text-black font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base md:text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-gold-500 mb-3 md:mb-4">
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
                    <div className="text-[10px] md:text-xs text-black bg-gold-500 px-2 py-1 rounded-full font-medium">Verified Patient</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="text-center mt-6 md:mt-8">
          <div className="mb-4">
            <a 
              href="https://www.google.com/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9LL-AojkBUccdUJiCP19x6xfGWzjPRCFWDTBHvzZ0Lg7Sy7biHTUplrZomTuJCl15lo_A3urcUgWLYnt53m5ygl7DwBi2HIdFsLhMaRkVy6gaIT6FxpM6B2o8W3okvzBFXqo4U%3D&hl=en-IN&q=fit%204%20existence%20-%20physiotherapy%20gaya%20reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white border border-gold-500 text-gold-600 hover:bg-gold-50 px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#fbbc05">
                <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
              </svg>
              See All Google Reviews
            </a>
          </div>
          
          <div className="mt-3 flex justify-center items-center space-x-1 text-gold-500">
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
