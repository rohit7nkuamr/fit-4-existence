import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DoctorProfilesSection from '../components/DoctorProfilesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DoctorProfilesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
