import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { VideoGallery } from '@/components/sections/VideoGallery'
import { VideoCollectionSchema } from '@/components/schema/JsonLd'
import { getVideos } from '@/lib/videos'
import { SITE_URL, CLINIC_NAME, CONTACT, WHATSAPP_URL } from '@/data/clinic'
import { Play, Calendar, Phone, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Videos & Visual Stories | RonEx Physiotherapy Clinic Dehradun',
  description:
    'Watch real clinical physiotherapy sessions, joint mobilization demonstrations, post-surgery rehabilitation, and patient recovery videos at RonEx Physiotherapy in Dehradun.',
  alternates: {
    canonical: `${SITE_URL}/video`,
  },
  openGraph: {
    title: 'Physiotherapy Videos & Clinical Demonstrations | Dehradun',
    description:
      'Explore guided exercise demonstrations, orthopedic manual therapy, and neuro rehabilitation videos by licensed MPT physiotherapists in Dehradun.',
    url: `${SITE_URL}/video`,
    type: 'website',
  },
}

export default function VideoPage() {
  // Discover videos dynamically from public/video/ on the server
  const videos = getVideos()

  return (
    <>
      {/* Structured Schema Data */}
      <VideoCollectionSchema videos={videos} />

      {/* Hero Section Reusing the Existing PageHero Component & Aesthetics */}
      <PageHero
        title="Videos & Visual Stories"
        subtitle="Explore our real physical therapy recordings, clinical joint mobilizations, patient recovery milestones, and guided exercise demonstrations conducted across our Bhaniyawala clinic and dedicated home visits in Dehradun."
        tag="Clinical Practice & Therapy Videos"
        breadcrumbItems={[{ name: 'Videos', url: '/video' }]}
        primaryCta={{
          text: 'Explore Videos',
          href: '#video-gallery',
          icon: <Play className="w-4 h-4 fill-current" />,
        }}
        heroImage="/images/heroes/services-hero.jpg"
        heroImageAlt="Clinical physiotherapy demonstrations and treatment videos in Dehradun"
      />

      {/* Main Interactive Video Gallery */}
      <VideoGallery videos={videos} />

      {/* Bottom Conversion & Trust Banner */}
      <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF]">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#2E2A26] to-[#1E1B18] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden text-center sm:text-left">
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D97B4F]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97B4F]/25 text-[#F5DCC8] border border-[#D97B4F]/40 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#D97B4F]" />
                  <span>Personalized Rehabilitation</span>
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Need a Customized Assessment for Your Pain or Mobility?
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                  Every recovery journey starts with a comprehensive clinical evaluation. Visit our fully equipped center at Bhaniyawala, or schedule dedicated home physiotherapy anywhere across Dehradun.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                    <span>MPT Qualified Doctors</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                    <span>Evidence-Based Treatment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                    <span>Clinic &amp; Home Visits</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/book-appointment"
                  className="btn-primary py-3 px-6 text-sm font-bold shadow-lg hover:shadow-xl w-full justify-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-3 px-6 text-sm font-bold w-full justify-center"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
