import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Fit 4 Existence - Best Physiotherapy Clinic in Gaya, Bodhgaya | Dr. Prince Raj',
  description: 'Expert physiotherapy services in Gaya, Bodhgaya, Bihar. Specialized in orthopedic rehabilitation, sports injury treatment, pain management, and physical therapy. Book appointment with Dr. Prince Raj - 3+ years experience.',
  keywords: 'physiotherapy Gaya, physiotherapist Bodhgaya, physical therapy Bihar, sports injury treatment, orthopedic rehabilitation, pain management, Dr Prince Raj, best physiotherapy clinic Gaya, physiotherapy near me',
  authors: [{ name: 'Dr. Prince Raj' }],
  creator: 'Fit 4 Existence',
  publisher: 'Fit 4 Existence',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fit4existence.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fit 4 Existence - Best Physiotherapy Clinic in Gaya, Bodhgaya',
    description: 'Expert physiotherapy services in Gaya, Bodhgaya. Specialized in orthopedic rehabilitation, sports injury treatment, and pain management.',
    url: 'https://fit4existence.vercel.app',
    siteName: 'Fit 4 Existence',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Fit 4 Existence - Physiotherapy Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fit 4 Existence - Best Physiotherapy Clinic in Gaya',
    description: 'Expert physiotherapy services in Gaya, Bodhgaya. Book your appointment today!',
    images: ['/images/logo/Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-[#f8f5f1]">
        {children}
      </body>
    </html>
  )
}