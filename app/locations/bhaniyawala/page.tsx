import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { CTAButton } from '@/components/ui/CTAButton'
import { LocalBusinessSchema } from '@/components/schema/JsonLd'
import { MapPin, Clock, ExternalLink, ShieldCheck, Stethoscope, Activity, ArrowRight } from 'lucide-react'
import { FaPhoneAlt } from 'react-icons/fa'
import { BRANCHES, CONTACT } from '@/data/clinic'
import { SERVICES } from '@/data/services'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { FAQS } from '@/data/faqs'
import { BLOG_POSTS } from '@/data/blog'
import { BlogCard } from '@/components/sections/BlogCard'
import { LOCATION_IMAGES } from '@/data/locationImages'

const branch = BRANCHES.bhaniyawala

export const metadata: Metadata = {
  title: `Physiotherapist in Bhaniyawala Dehradun | Branch Clinic`,
  description: `Physiotherapy clinic at Rama Market, Thano Chowk, Bhaniyawala, Dehradun. Orthopedic, neuro & sports rehabilitation. Call ${CONTACT.phone}.`,
}

export default function BhaniyawalaLocationPage() {
  const images = LOCATION_IMAGES['bhaniyawala']
  const relatedBlogs = BLOG_POSTS.slice(0, 2)

  return (
    <>
      <LocalBusinessSchema branch="bhaniyawala" />
      <PageHero
        title="Physiotherapy Clinic at Bhaniyawala, Dehradun"
        subtitle="Our Bhaniyawala branch is located at Rama Market, Thano Chowk, opposite Ranjit Singh Marg, providing accessible clinical care for residents in and around Bhaniyawala."
        tag="Branch Clinic"
        breadcrumbItems={[
          { name: 'Locations', url: '/locations' },
          { name: branch.name, url: `/locations/${branch.slug}` },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">

          {/* BLOCK 1: Content on LEFT, Image 1 on RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-label">Clinic Information</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                Clinic Details &amp; Operating Hours
              </h2>
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-4 shadow-xs">
                <div className="space-y-3 text-sm text-[#4A4744]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> {branch.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="w-4 h-4 text-[#D97B4F] shrink-0" />
                    <span><strong>Phone:</strong> {CONTACT.phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span><strong>Operating Hours:</strong> Mon-Sat 9AM-10PM | Sun 10AM-6PM</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-5 text-xs font-semibold inline-flex items-center gap-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Image 1 on RIGHT Side */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group">
                <Image
                  src={images[0]}
                  alt="Bhaniyawala physiotherapy clinic center in Dehradun"
                  width={800}
                  height={600}
                  className="w-full h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 bg-[#D97B4F] text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-2 shadow-sm">
                    <Stethoscope className="w-4 h-4" />
                    <span>Branch Facility</span>
                  </div>
                  <h4 className="text-lg font-bold">Bhaniyawala Rehabilitation Center</h4>
                  <p className="text-xs text-gray-200 mt-1">
                    Warm wooden aesthetics &amp; specialized exercise therapy space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2: Image 2 on LEFT, Content on RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Image 2 on LEFT Side */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group">
                <Image
                  src={images[1]}
                  alt="Posture exercise therapy at Bhaniyawala Dehradun clinic"
                  width={800}
                  height={600}
                  className="w-full h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 bg-[#D97B4F] text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-2 shadow-sm">
                    <Activity className="w-4 h-4" />
                    <span>Exercise Rehabilitation</span>
                  </div>
                  <h4 className="text-lg font-bold">Guided Therapeutic Exercises</h4>
                  <p className="text-xs text-gray-200 mt-1">
                    Customized mobility &amp; muscle strengthening under expert physical therapists.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="section-label">Available Care</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                Services &amp; Nearby Areas Served
              </h2>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#2E2A26]">Services Available at Bhaniyawala:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="p-3 rounded-xl border border-[#E8E4DF] bg-[#FAF9F7] hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] transition-all flex items-center justify-between"
                    >
                      <span>{s.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D97B4F]" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E8E4DF]">
                <h3 className="text-xs font-bold text-[#2E2A26]">Nearby Areas Served:</h3>
                <div className="flex flex-wrap gap-2">
                  {branch.areas.map((area) => (
                    <span key={area} className="tag text-xs py-1 px-3">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Location Section */}
          <div className="mb-20 space-y-4 max-w-4xl mx-auto text-center">
            <span className="section-label">Map View</span>
            <h2 className="text-2xl font-bold text-[#2E2A26]">Branch Map Location</h2>
            <div className="rounded-2xl overflow-hidden border border-[#E8E4DF] shadow-md h-80 w-full">
              <iframe
                title="Bhaniyawala Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.0000!2d78.148636!3d30.186417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDExJzExLjEiTiA3OMKwMDgnNTUuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA Banner Card */}
          <div className="bg-[#FAF9F7] rounded-2xl p-8 border border-[#E8E4DF] max-w-4xl mx-auto text-center space-y-4 mb-20 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-[#F5DCC8] text-[#D97B4F] px-3.5 py-1 rounded-full text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Bhaniyawala Branch Clinic</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2E2A26]">
              Book Consultation at Bhaniyawala
            </h3>
            <p className="text-sm text-[#4A4744] max-w-2xl mx-auto leading-relaxed">
              Schedule your appointment at our Bhaniyawala clinic center or request dedicated home visit physiotherapy.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <CTAButton variant="primary" className="px-8 py-3 text-sm">
                Book Consultation
              </CTAButton>
              <CTAButton variant="whatsapp" className="px-8 py-3 text-sm">
                WhatsApp Inquiry
              </CTAButton>
            </div>
          </div>

          {/* BLOCK 3: CENTERED Related Articles & CENTERED FAQs */}
          <div className="max-w-4xl mx-auto space-y-16 border-t border-[#E8E4DF] pt-16">
            {/* Centered Health Articles */}
            {relatedBlogs.length > 0 && (
              <div className="space-y-8 text-center">
                <div className="max-w-2xl mx-auto space-y-2">
                  <span className="section-label">Educational Insights</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                    Related Dehradun Physiotherapy Articles
                  </h2>
                  <p className="text-sm text-[#4A4744]">
                    Read expert advice and clinical recovery guides written by our senior specialists.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 text-left">
                  {relatedBlogs.map((b) => (
                    <BlogCard key={b.slug} post={b} />
                  ))}
                </div>
              </div>
            )}

            {/* Centered FAQs */}
            <div className="space-y-8 text-center">
              <div className="max-w-2xl mx-auto space-y-2">
                <span className="section-label">Branch FAQ Guide</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                  Bhaniyawala Branch FAQs
                </h2>
                <p className="text-sm text-[#4A4744]">
                  Answers to common questions about visiting our Bhaniyawala physiotherapy clinic.
                </p>
              </div>

              <div className="text-left max-w-3xl mx-auto">
                <FAQAccordion faqs={FAQS.contact} title="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
