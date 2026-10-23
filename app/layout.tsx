import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganizationSchema } from '@/components/schema/JsonLd'
import { SITE_NAME, SITE_URL } from '@/data/clinic'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Physiotherapist in Dehradun | Physiotherapy & Rehabilitation',
    template: '%s | Physiotherapist in Dehradun',
  },
  description:
    'Leading physiotherapy clinic in Dehradun offering evidence-based orthopedic, neurological, sports, pediatric and home visit physiotherapy. Clinic at Bhaniyawala and home care across Dehradun.',
  keywords: [
    'physiotherapist in dehradun',
    'physiotherapy in dehradun',
    'physiotherapy clinic in dehradun',
    'best physiotherapist in dehradun',
    'home physiotherapy in dehradun',
    'neuro physiotherapy in dehradun',
    'orthopedic physiotherapy in dehradun',
    'sports physiotherapy in dehradun',
    'back pain physiotherapy dehradun',
    'knee pain physiotherapy dehradun',
  ],
  authors: [{ name: 'Physiotherapist in Dehradun' }],
  creator: 'Physiotherapist in Dehradun',
  publisher: 'Physiotherapist in Dehradun',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Physiotherapist in Dehradun | Physiotherapy & Rehabilitation',
    description:
      'Evidence-based physiotherapy and neurological rehabilitation in Dehradun. Expert care for back pain, knee pain, stroke recovery and sports injuries.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Physiotherapist in Dehradun Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physiotherapist in Dehradun | Multi-Speciality Clinic',
    description:
      'Expert physiotherapy for orthopedic, neuro, sports, pediatric and post-surgery rehabilitation in Dehradun.',
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'POvYu7t_VX0s54dJ3a7iLeHKnt11S2GDcBfC_PXyHvY',
  },
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.jpg',
  },
}

import { FloatingCTA } from '@/components/ui/FloatingCTA'
import { MobileStickyBar } from '@/components/ui/MobileStickyBar'
import { SiloInternalLinks } from '@/components/sections/SiloInternalLinks'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <OrganizationSchema />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/jpeg" />
      </head>
      <body className="min-h-screen flex flex-col font-sans relative">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <SiloInternalLinks />
        <Footer />
        <MobileStickyBar />
        <FloatingCTA />
      </body>
    </html>
  )
}
