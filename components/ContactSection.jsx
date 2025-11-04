'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-2 text-primary-900 mb-3 md:mb-4">Contact Us</h2>
          <p className="text-base md:text-lg text-gray-700 px-4 md:px-0">
            Have questions or ready to book an appointment? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-5 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-800 mb-4 md:mb-6">Get in Touch</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  Thank you for reaching out! We'll contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Knee Pain">Knee Pain</option>
                        <option value="Back Pain">Back Pain</option>
                        <option value="Paralysis">Paralysis</option>
                        <option value="Cervical Pain">Cervical Pain</option>
                        <option value="Cupping Therapy">Cupping Therapy</option>
                        <option value="Sciatica">Sciatica</option>
                        <option value="Shoulder Pain">Shoulder Pain</option>
                        <option value="Muscle Pain">Muscle Pain</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-primary-900 text-white rounded-xl shadow-md p-5 md:p-8 h-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-800 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <FiPhone className="text-white text-sm md:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-0.5 md:mb-1">Phone</h4>
                    <p className="text-primary-100 text-sm md:text-base">+91 6287811094</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-800 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <FiMail className="text-white text-sm md:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-0.5 md:mb-1">Email</h4>
                    <p className="text-primary-100 text-sm md:text-base break-all">fit4existence@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-800 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <FiMapPin className="text-white text-sm md:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-0.5 md:mb-1">Location</h4>
                    <p className="text-primary-100 text-sm md:text-base">
                      Gaya, Bodhgaya, Bihar, India
                    </p>
                    <a href="https://www.google.com/maps/search/fit+4+existence+physiotherapy+gaya/" target="_blank" rel="noopener noreferrer" className="text-gold-400 text-sm md:text-base hover:text-gold-300 mt-1 inline-block">
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-800 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <FiClock className="text-white text-sm md:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-0.5 md:mb-1">Working Hours</h4>
                    <p className="text-primary-100 text-sm md:text-base">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-primary-100 text-sm md:text-base">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8">
                <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Follow Us</h4>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="#" className="bg-primary-800 p-2 md:p-3 rounded-full hover:bg-primary-700 transition-colors active:bg-primary-600 touch-action-manipulation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-800 p-2 md:p-3 rounded-full hover:bg-primary-700 transition-colors active:bg-primary-600 touch-action-manipulation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-800 p-2 md:p-3 rounded-full hover:bg-primary-700 transition-colors active:bg-primary-600 touch-action-manipulation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-800 p-2 md:p-3 rounded-full hover:bg-primary-700 transition-colors active:bg-primary-600 touch-action-manipulation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
