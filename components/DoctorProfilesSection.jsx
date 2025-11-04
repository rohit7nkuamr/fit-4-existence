'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Placeholder doctor profiles (to be replaced with actual doctor information)
const doctors = [
  {
    id: 1,
    name: 'Dr. Amit Kumar',
    specialty: 'Pain Management Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    bio: 'Dr. Kumar specializes in treating various types of pain conditions with a focus on personalized care and holistic treatment approaches.',
    experience: '10+ years',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Physiotherapist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Dr. Sharma is an expert in physical therapy and rehabilitation, helping patients recover from injuries and manage chronic pain conditions.',
    experience: '8+ years',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DoctorProfilesSection() {
  return (
    <section id="doctors" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-2 text-primary-900 mb-3 md:mb-4">Meet Our Specialists</h2>
          <p className="text-base md:text-lg text-gray-700 px-4 md:px-0">
            Our team of experienced medical professionals is dedicated to providing you with the best care possible.
          </p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div key={doctor.id} variants={item} className="card overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative h-[250px] sm:h-[280px] md:h-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-800 mb-1">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium text-sm md:text-base mb-2 md:mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{doctor.bio}</p>
                  <div className="flex items-center text-gray-700 text-sm md:text-base mb-3 md:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Experience: {doctor.experience}</span>
                  </div>
                  <button className="btn-secondary w-full text-sm md:text-base py-2 md:py-3">View Profile</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500">
            These are placeholder profiles. Actual doctor information and images will be added here.
          </p>
        </div>
      </div>
    </section>
  );
}
