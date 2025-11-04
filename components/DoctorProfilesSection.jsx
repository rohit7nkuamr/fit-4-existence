'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Doctor profiles with local image paths
const doctors = [
  {
    id: 1,
    name: 'Dr. Prince Raj',
    specialty: 'Physiotherapist',
    image: '/images/doctors/prince-raj.jpg', // Place your image in public/images/doctors/
    bio: 'I am a dedicated and licensed physiotherapist with over 3 years of clinical experience in orthopedic and sports rehabilitation. My goal is to empower patients to take an active role in their recovery journey, providing them with the tools and education needed for long-term health and injury prevention. I am passionate about helping people get back to the activities they love, whether it\'s running a marathon or simply enjoying daily activities pain-free.',
    experience: '3+ years',
    certification: 'Certified Orthopedic Manual Therapist (COMT), Myofacialrelease (MFR), Cupping therapy, Dry needling, ISTAM deep tissue release, Kynesio taping and many other techniques.',
    education: 'Bachelor of Physiotherapy (BPT)',
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
    <section id="doctors" className="section-padding bg-gradient-to-b from-[#f8f5f1] to-[#f5efe6]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-2 text-gray-900 mb-3 md:mb-4">Meet Our Specialists</h2>
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
            <motion.div key={doctor.id} variants={item} className="bg-[#faf7f2] border border-[#e5d8c3] rounded-xl shadow-md overflow-hidden">
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
                  <h3 className="text-xl md:text-2xl font-semibold text-gold-600 mb-1">{doctor.name}</h3>
                  <p className="text-gold-500 font-medium text-sm md:text-base mb-2 md:mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">{doctor.bio}</p>
                  
                  <div className="flex items-center text-gray-700 text-sm mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Experience: {doctor.experience}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 text-sm mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{doctor.education}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-700 text-sm mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-1 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <span className="font-medium">Certifications:</span>
                      <ul className="list-disc ml-4 mt-1 space-y-1">
                        {doctor.certification.split(',').map((cert, index) => (
                          <li key={index} className="text-xs text-gray-600">{cert.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="btn-secondary w-full text-sm md:text-base py-2 md:py-3">View Profile</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500">
          </p>
        </div>
      </div>
    </section>
  );
}
