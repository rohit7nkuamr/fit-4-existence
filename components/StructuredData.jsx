export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://fit4existence.vercel.app/#organization",
        "name": "Fit 4 Existence",
        "url": "https://fit4existence.vercel.app",
        "logo": "https://fit4existence.vercel.app/images/logo/Logo.png",
        "image": "https://fit4existence.vercel.app/images/logo/Logo.png",
        "description": "Expert physiotherapy services in Gaya, Bodhgaya, Bihar. Specialized in orthopedic rehabilitation, sports injury treatment, and pain management.",
        "telephone": "+91-6287811094",
        "email": "fit4existence@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gaya",
          "addressLocality": "Bodhgaya",
          "addressRegion": "Bihar",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.6952",
          "longitude": "84.9929"
        },
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://instagram.com/fit4existence",
          "https://linkedin.com/in/prince-raj-physiotherapist"
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://fit4existence.vercel.app/#physician",
        "name": "Dr. Prince Raj",
        "jobTitle": "Physiotherapist",
        "worksFor": {
          "@id": "https://fit4existence.vercel.app/#organization"
        },
        "alumniOf": "Bachelor of Physiotherapy (BPT)",
        "hasCredential": [
          "Certified Orthopedic Manual Therapist (COMT)",
          "Myofascial Release (MFR)",
          "Cupping Therapy",
          "Dry Needling",
          "IASTM Deep Tissue Release",
          "Kinesio Taping"
        ],
        "telephone": "+91-6287811094",
        "email": "fit4existence@gmail.com"
      },
      {
        "@type": "WebSite",
        "@id": "https://fit4existence.vercel.app/#website",
        "url": "https://fit4existence.vercel.app",
        "name": "Fit 4 Existence",
        "description": "Best physiotherapy clinic in Gaya, Bodhgaya offering expert treatment for sports injuries, orthopedic rehabilitation, and pain management.",
        "publisher": {
          "@id": "https://fit4existence.vercel.app/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://fit4existence.vercel.app/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://fit4existence.vercel.app/#localbusiness",
        "name": "Fit 4 Existence - Physiotherapy Clinic",
        "image": "https://fit4existence.vercel.app/images/logo/Logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gaya",
          "addressLocality": "Bodhgaya",
          "addressRegion": "Bihar",
          "postalCode": "823001",
          "addressCountry": "IN"
        },
        "telephone": "+91-6287811094",
        "email": "fit4existence@gmail.com",
        "url": "https://fit4existence.vercel.app",
        "paymentAccepted": "Cash, UPI, Card",
        "currenciesAccepted": "INR",
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "100"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
