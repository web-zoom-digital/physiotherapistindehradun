import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { ExternalLink, Star } from 'lucide-react'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Verified Patient Reviews & Testimonials | Dehradun Physiotherapy',
  description:
    'Read verified patient feedback for our physiotherapy clinic in Dehradun. Transparent reviews and link to our verified Google Business Profile.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Patient Testimonials & Verified Reviews"
        subtitle="We value patient feedback and are committed to maintaining transparent clinical care standards across our Bhaniyawala clinic and home visits."
        tag="Verified Patient Feedback"
        breadcrumbItems={[{ name: 'Testimonials', url: '/testimonials' }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6 mb-12">
            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-base text-[#4A4744] italic leading-relaxed">
                &ldquo;Excellent physiotherapy care! My back pain of 3 years was resolved in just 8 sessions. Dr. Om Prakash conducted a thorough assessment and explained my exercises clearly. Highly professional team.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#E8E4DF] flex justify-between items-center text-xs">
                <strong className="text-[#2E2A26]">Priya Sharma</strong>
                <span className="text-gray-500">Back Pain Rehabilitation • Bhaniyawala Clinic</span>
              </div>
            </div>

            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-base text-[#4A4744] italic leading-relaxed">
                &ldquo;My mother had a stroke and the home visit physiotherapy team was life-changing. Dr. Nawal Soni was patient, professional and skilled in neuro rehabilitation. Her walking and balance improved significantly.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#E8E4DF] flex justify-between items-center text-xs">
                <strong className="text-[#2E2A26]">Rajesh Kumar</strong>
                <span className="text-gray-500">Stroke Home Physiotherapy • Dehradun Home Visit</span>
              </div>
            </div>
          </div>

          {/* Google Business Profile Note */}
          <div className="bg-[#FAF9F7] rounded-2xl p-8 border border-[#E8E4DF] text-center space-y-4 mb-16">
            <h2 className="section-title">View Our Verified Google Reviews</h2>
            <p className="text-base text-[#4A4744] max-w-xl mx-auto leading-relaxed">
              We do not publish manufactured ratings or unverified statistics. You can view genuine, independent patient reviews on our verified Google Business Profile.
            </p>
            <div className="pt-2">
              <a
                href="https://www.google.com/maps?q=30.3255,78.0322"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2.5 px-6 text-base font-medium inline-flex items-center gap-2"
              >
                <span>Open Verified Google Business Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center mb-16">
            <CTAButton variant="primary">Book Your Own Session Today</CTAButton>
          </div>

          {/* Testimonial FAQs */}
          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Patient Clarifications</span>
              <h2 className="section-title">Review Verification FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.testimonials} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
