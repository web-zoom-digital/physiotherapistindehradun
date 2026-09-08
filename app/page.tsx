import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Activity,
  Home as HomeIcon,
  Brain,
  Zap,
  Bone,
  MessageSquare,
  ExternalLink,
} from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { AppointmentForm } from '@/components/sections/AppointmentForm'
import { LocalBusinessSchema } from '@/components/schema/JsonLd'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { CONDITION_IMAGES } from '@/data/conditionImages'
import { TEAM } from '@/data/team'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'
import { CONTACT, BRANCHES, HOURS, WHATSAPP_URL } from '@/data/clinic'

import { CounterStats } from '@/components/ui/CounterStats'

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema branch="rajpurRoad" />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Trust / Credibility Strip with Dynamic Scroll Counter */}
      <CounterStats />

      {/* 4. About Clinic Section */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="section-label">Patient-Centered Care</span>
              <h2 className="section-title">
                Evidence-Based Physiotherapy & Rehabilitation in Dehradun
              </h2>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Physiotherapy is an essential healthcare service designed to restore movement, reduce pain and rebuild strength after an injury, surgery or neurological diagnosis. At our Dehradun clinics, we believe every patient deserves a personalized, individual assessment rather than standard generalized exercises.
              </p>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Our team of qualified Master of Physiotherapy (MPT) specialists works across orthopedic conditions, neurological rehabilitation, sports injuries, pediatric physical therapy and women&apos;s health. Whether you visit our main clinic on Rajpur Road, our Bhaniyawala branch, or receive home visit care, our focus remains on evidence-based treatment and functional patient recovery.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#2E2A26]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                  <span>Comprehensive Physical Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                  <span>Hands-On Manual Therapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                  <span>Modern Electrotherapy Modalities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                  <span>Personalized Home Exercises</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/about" className="btn-secondary py-2.5 px-6 text-sm">
                  Learn More About Our Clinic
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF9F7] rounded-2xl p-6 sm:p-8 border border-[#E8E4DF] space-y-6">
                <h3 className="text-xl font-semibold text-[#2E2A26]">
                  Our Clinical Principles
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#D97B4F] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#E8E4DF]">
                      1
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-[#2E2A26]">Accurate Diagnostic Assessment</h4>
                      <p className="text-sm text-[#4A4744] mt-1 leading-relaxed">
                        Understanding the root cause of your symptoms through detailed physical examination and posture analysis before treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#D97B4F] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#E8E4DF]">
                      2
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-[#2E2A26]">Targeted Rehabilitation</h4>
                      <p className="text-sm text-[#4A4744] mt-1 leading-relaxed">
                        Structuring exercise progression and therapeutic modalities around your specific lifestyle, work demands and recovery goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#D97B4F] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#E8E4DF]">
                      3
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-[#2E2A26]">Empowering Self-Management</h4>
                      <p className="text-sm text-[#4A4744] mt-1 leading-relaxed">
                        Equipping patients with self-management knowledge and home exercise protocols to maintain progress and prevent recurrence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Physiotherapy Services */}
      <section className="section-py bg-[#FAF9F7]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Specialized Services</span>
            <h2 className="section-title">Comprehensive Physiotherapy Services in Dehradun</h2>
            <p className="text-base text-[#4A4744] leading-relaxed">
              We offer structured physiotherapy and rehabilitation across major clinical specialties. Select a service to explore treatment approaches and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <div key={service.slug} className="card p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E2A26]">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-[#4A4744] line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-[#D97B4F] hover:text-[#B85E37] flex items-center gap-1 group"
                  >
                    <span>Read Service Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <Link href="/services" className="btn-primary py-3 px-8 text-base font-medium">
              View All Physiotherapy Services
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Conditions Treated */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Topical Authority</span>
            <h2 className="section-title">Conditions We Assess & Manage</h2>
            <p className="text-base text-[#4A4744] leading-relaxed">
              Explore details on common musculoskeletal, neurological and sports-related conditions treated at our Dehradun clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONDITIONS.map((cond) => {
              const condImage = CONDITION_IMAGES[cond.slug]?.[0] || '/images/conditions/back-pain-1.jpg'
              return (
                <Link
                  key={cond.slug}
                  href={`/conditions/${cond.slug}`}
                  className="rounded-2xl border border-[#E8E4DF] bg-white overflow-hidden hover:border-[#D97B4F] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden border-b border-[#E8E4DF]">
                    <img
                      src={condImage}
                      alt={`Physiotherapy ${cond.shortTitle} treatment in Dehradun`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 bg-[#D97B4F] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {cond.shortTitle}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors leading-snug">
                        {cond.shortTitle}
                      </h3>
                      <p className="text-xs text-[#76726E] mt-1.5 line-clamp-2 leading-relaxed">
                        {cond.symptoms[0]}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs text-[#D97B4F] font-bold pt-2 border-t border-[#E8E4DF]/60">
                      <span>Explore {cond.shortTitle} Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center pt-8">
            <Link href="/conditions" className="btn-secondary py-2.5 px-6 text-base font-medium">
              Explore All 12+ Condition Guides
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">
              Clinical Quality
            </span>
            <h2 className="section-title">
              Why Patients Choose Our Physiotherapy Practice
            </h2>
            <p className="text-base text-[#4A4744] mt-2 font-normal leading-relaxed">
              Combining experienced specialists, transparent clinical communication and evidence-backed rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 border border-[#E8E4DF] shadow-xs hover:border-[#D97B4F] hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold group-hover:bg-[#D97B4F] group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors">MPT Specialist Doctors</h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Our clinic team consists of Master of Physiotherapy (MPT) qualified specialists in Orthopedics, Neurology, Sports and Pediatrics with years of verified clinical experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 border border-[#E8E4DF] shadow-xs hover:border-[#D97B4F] hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold group-hover:bg-[#D97B4F] group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors">Evidence-Based Protocols</h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                We utilize verified therapeutic techniques — such as Maitland joint mobilization, Bobath concepts, PNF, dry needling and progressive exercise loading — avoiding unproven shortcuts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 border border-[#E8E4DF] shadow-xs hover:border-[#D97B4F] hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold group-hover:bg-[#D97B4F] group-hover:text-white transition-colors">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors">Clinic & Home Care</h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Whether you visit our Rajpur Road clinic or require home visit physiotherapy for stroke, post-surgery or mobility restrictions, we deliver high-standard care across Dehradun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Treatment Approach */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Structured Pathway</span>
            <h2 className="section-title">How Our Physiotherapy Process Works</h2>
            <p className="text-base text-[#4A4744] leading-relaxed">
              From your initial consultation to full functional recovery, we follow a transparent four-step care model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-3 cursor-pointer hover:bg-white hover:border-[#D97B4F]/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <span className="section-label">Step 1</span>
              <h3 className="text-lg font-semibold text-[#2E2A26]">Comprehensive Evaluation</h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Detailed clinical history, posture analysis, joint mobility measurement and functional testing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-3 cursor-pointer hover:bg-white hover:border-[#D97B4F]/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <span className="section-label">Step 2</span>
              <h3 className="text-lg font-semibold text-[#2E2A26]">Targeted Treatment Plan</h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Developing an individualized care plan combining hands-on manual therapy, electrotherapy and exercises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-3 cursor-pointer hover:bg-white hover:border-[#D97B4F]/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <span className="section-label">Step 3</span>
              <h3 className="text-lg font-semibold text-[#2E2A26]">Guided Exercise Progression</h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Supervised exercise sessions to systematically rebuild strength, flexibility, balance and coordination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-3 cursor-pointer hover:bg-white hover:border-[#D97B4F]/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <span className="section-label">Step 4</span>
              <h3 className="text-lg font-semibold text-[#2E2A26]">Self-Management & Prevention</h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Educating you on ergonomic habits, home exercise routines and strategies to prevent future flare-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Meet the Physiotherapists */}
      <section className="section-py bg-[#FAF9F7]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Verified Experience</span>
            <h2 className="section-title">Meet Our Specialist Physiotherapists</h2>
            <p className="text-sm text-[#4A4744]">
              Qualified, experienced healthcare professionals dedicated to patient-first rehabilitation care in Dehradun.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((doctor) => (
              <div key={doctor.slug} className="card p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                    <img
                      src={doctor.imageUrl}
                      alt={`${doctor.name} - Physiotherapist in Dehradun`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#D97B4F] block">
                      {doctor.qualification} • {doctor.experience}
                    </span>
                    <h3 className="text-lg font-bold text-[#2E2A26] mt-0.5">{doctor.name}</h3>
                    <p className="text-xs text-gray-500 font-medium">{doctor.title}</p>
                  </div>
                  <p className="text-xs text-[#4A4744] line-clamp-3 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-[#E8E4DF] mt-4">
                  <Link
                    href="/team"
                    className="text-xs font-bold text-[#D97B4F] hover:text-[#B85E37]"
                  >
                    View Full Profile
                  </Link>
                  <Link
                    href="/book-appointment"
                    className="btn-primary py-1.5 px-3.5 text-xs"
                  >
                    Consult Doctor
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/team" className="btn-secondary py-2.5 px-6 text-sm">
              Learn More About Our Team Credentials
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Home Physiotherapy */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="bg-[#F5DCC8]/50 rounded-3xl p-5 sm:p-8 md:p-12 border border-[#F5DCC8]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="section-label">In-Home Rehabilitation</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2E2A26]">
                  Professional Home Physiotherapy in Dehradun
                </h2>
                <p className="text-sm text-[#4A4744] leading-relaxed">
                  For patients recovering from stroke, major joint replacement surgery or severe mobility impairment, traveling to a clinic can be challenging. Our home visit physiotherapy service brings qualified physical therapists equipped with portable electrotherapy units directly to your home across Dehradun.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#2E2A26]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                    <span>In-Home Stroke & Paralysis Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                    <span>Post Knee/Hip Replacement Rehab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                    <span>Portable TENS / IFT / Ultrasound</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
                    <span>Elderly Mobility & Fall Prevention</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link href="/services/home-physiotherapy" className="btn-primary py-2.5 px-6 text-sm">
                    Explore Home Visit Details
                  </Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-2.5 px-6 text-sm flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Inquire Home Visit via WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-6 border border-[#E8E4DF] shadow-sm space-y-3">
                  <h3 className="text-sm font-bold text-[#2E2A26]">Key Dehradun Areas Served for Home Visit:</h3>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {[
                      'Rajpur Road',
                      'Clock Tower',
                      'Dalanwala',
                      'Ballupur',
                      'GMS Road',
                      'Prem Nagar',
                      'Kargi',
                      'Dharampur',
                      'Race Course',
                      'Bhaniyawala',
                      'Jakhan',
                    ].map((area) => (
                      <span key={area} className="tag">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Dehradun Locations */}
      <section className="section-py bg-[#FAF9F7]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Verified Branches</span>
            <h2 className="section-title">Visit Our Physiotherapy Clinics in Dehradun</h2>
            <p className="text-sm text-[#4A4744]">
              We operate two modern, well-equipped clinic branches located for easy access across Dehradun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rajpur Road Branch */}
            <div className="card p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-[#D97B4F] uppercase tracking-wider block">Main Clinic</span>
                  <h3 className="text-lg font-bold text-[#2E2A26] mt-0.5">{BRANCHES.rajpurRoad.name}</h3>
                </div>
                <MapPin className="w-6 h-6 text-[#D97B4F]" />
              </div>

              <p className="text-xs text-[#4A4744] leading-relaxed">
                {BRANCHES.rajpurRoad.fullAddress}
              </p>

              <div className="space-y-1.5 text-xs text-gray-600">
                <p><strong>Timings:</strong> Mon-Sat 9AM-10PM | Sun 10AM-6PM</p>
                <p className="flex items-center gap-1.5"><FaPhoneAlt className="w-3 h-3 text-[#D97B4F]" /> <strong>Phone:</strong> {CONTACT.phone}</p>
                <p><strong>Nearby Areas:</strong> {BRANCHES.rajpurRoad.areas.join(', ')}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={BRANCHES.rajpurRoad.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 px-4 text-xs"
                >
                  Get Google Maps Directions
                </a>
                <Link
                  href={`/locations/${BRANCHES.rajpurRoad.slug}`}
                  className="btn-primary py-2 px-4 text-xs"
                >
                  Branch Page
                </Link>
              </div>
            </div>

            {/* Bhaniyawala Branch */}
            <div className="card p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-[#D97B4F] uppercase tracking-wider block">Branch Clinic</span>
                  <h3 className="text-lg font-bold text-[#2E2A26] mt-0.5">{BRANCHES.bhaniyawala.name}</h3>
                </div>
                <MapPin className="w-6 h-6 text-[#D97B4F]" />
              </div>

              <p className="text-xs text-[#4A4744] leading-relaxed">
                {BRANCHES.bhaniyawala.fullAddress}
              </p>

              <div className="space-y-1.5 text-xs text-gray-600">
                <p><strong>Timings:</strong> Mon-Sat 9AM-10PM | Sun 10AM-6PM</p>
                <p className="flex items-center gap-1.5"><FaPhoneAlt className="w-3 h-3 text-[#D97B4F]" /> <strong>Phone:</strong> {CONTACT.phone}</p>
                <p><strong>Nearby Areas:</strong> {BRANCHES.bhaniyawala.areas.join(', ')}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={BRANCHES.bhaniyawala.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 px-4 text-xs"
                >
                  Get Google Maps Directions
                </a>
                <Link
                  href={`/locations/${BRANCHES.bhaniyawala.slug}`}
                  className="btn-primary py-2 px-4 text-xs"
                >
                  Branch Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Embedded Google Maps Section */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="section-label">Find Us On Map</span>
            <h2 className="section-title">Location & Navigation</h2>
            <p className="text-sm text-[#4A4744]">
              Located conveniently at Rajpur Road, Chukkuwala, near New Empire Cinema Complex, Clock Tower.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E8E4DF] shadow-md h-96 w-full">
            <iframe
              title="Clinic Location Map - Rajpur Road Dehradun"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8967!2d78.0322!3d30.3255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c546b4129b%3A0x2899478f77395ef3!2sClock%20Tower%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 13. Testimonials */}
      <section className="section-py bg-[#FAF9F7]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Verified Patient Care</span>
            <h2 className="section-title">What Patients Say About Our Care</h2>
            <p className="text-base text-[#4A4744] leading-relaxed">
              Genuine patient feedback and verified Google Business Profile ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Excellent physiotherapy care! My back pain of 3 years was resolved in just 8 sessions with targeted manual therapy and core strengthening. Professional and caring staff.&rdquo;
              </p>
            </div>

            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;My mother had a stroke and the home visit physiotherapy team was outstanding. Their patience, neuro-rehab exercises and gait training helped her walk independently again.&rdquo;
              </p>
            </div>

            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Highly effective treatment for severe cervical spondylosis and neck stiffness. Dr. Om Prakash explained every exercise clearly and relieved my pain within two weeks.&rdquo;
              </p>
            </div>

            {/* Row 2 */}
            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Outstanding post-knee replacement rehabilitation at Rajpur Road clinic. Progressive exercise loading and gait training helped me walk without support.&rdquo;
              </p>
            </div>

            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Relieved my frozen shoulder stiffness completely. Professional Maitland joint mobilization technique and guided stretching exercises restored full range of motion.&rdquo;
              </p>
            </div>

            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Prompt and dedicated home visit physiotherapy for my father after hip surgery in Dehradun. Electrotherapy equipment and exercises brought directly to home.&rdquo;
              </p>
            </div>

            {/* Row 3 */}
            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Best sports physiotherapy in Dehradun for ACL tear recovery. Biomechanical analysis, neuromuscular training, and agility drills helped me return to football safely.&rdquo;
              </p>
            </div>

            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Instant relief from acute sciatica leg shooting pain. Traction therapy, nerve gliding exercises, and posture correction made a huge difference in my daily life.&rdquo;
              </p>
            </div>

            <div className="card p-6 space-y-3 cursor-pointer">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;Extremely polite doctors, clean clinic atmosphere at Bhaniyawala branch, and modern modalities. Very happy with the systematic pain management approach.&rdquo;
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/testimonials" className="btn-secondary py-2.5 px-5 text-sm font-medium">
              View All Patient Feedback
            </Link>
          </div>
        </div>
      </section>

      {/* 14. FAQs Section */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Patient Clarifications</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-base text-[#4A4744] leading-relaxed">
              Find answers to common questions about clinic visits, home physiotherapy services, doctor qualifications, and session bookings in Dehradun.
            </p>
          </div>
          <FAQAccordion faqs={FAQS.home} title="" />
        </div>
      </section>

      {/* 14.5. Clinic Locations & Maps Section */}
      <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Visit Our Clinics</span>
            <h2 className="section-title">Our Physiotherapy Clinic Locations in Dehradun</h2>
            <p className="text-base text-[#4A4744] leading-relaxed">
              We operate two fully equipped, modern physiotherapy centers in Dehradun. Choose your nearest branch for in-person consultation or directions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Branch 1: Rajpur Road Main Clinic */}
            <div className="card p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5DCC8] text-[#D97B4F] text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Main Branch</span>
                  </div>
                  <span className="text-xs font-semibold text-[#D97B4F]">Clock Tower Area</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#2E2A26]">
                    {BRANCHES.rajpurRoad.name}
                  </h3>
                  <p className="text-sm text-[#4A4744] mt-1 leading-relaxed">
                    {BRANCHES.rajpurRoad.fullAddress}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#4A4744] pt-2 border-t border-[#E8E4DF]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D97B4F] shrink-0" />
                    <span>{HOURS.weekdays.label} • {HOURS.sunday.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                    <span>{CONTACT.phone}</span>
                  </div>
                </div>
              </div>

              {/* Map Iframe 1 */}
              <div className="space-y-4 pt-2">
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#E8E4DF] shadow-xs">
                  <iframe
                    title="Rajpur Road Physiotherapy Clinic Dehradun Google Map"
                    src="https://maps.google.com/maps?q=30.3255,78.0322&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={BRANCHES.rajpurRoad.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-5 text-sm flex-1 justify-center gap-2 font-medium"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/locations/rajpur-road"
                    className="btn-secondary py-2.5 px-5 text-sm flex-1 justify-center font-medium"
                  >
                    View Branch Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Branch 2: Bhaniyawala Branch */}
            <div className="card p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5DCC8] text-[#D97B4F] text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Branch Clinic</span>
                  </div>
                  <span className="text-xs font-semibold text-[#D97B4F]">Thano Chowk Area</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#2E2A26]">
                    {BRANCHES.bhaniyawala.name}
                  </h3>
                  <p className="text-sm text-[#4A4744] mt-1 leading-relaxed">
                    {BRANCHES.bhaniyawala.fullAddress}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#4A4744] pt-2 border-t border-[#E8E4DF]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D97B4F] shrink-0" />
                    <span>{HOURS.weekdays.label} • {HOURS.sunday.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                    <span>{CONTACT.phone}</span>
                  </div>
                </div>
              </div>

              {/* Map Iframe 2 */}
              <div className="space-y-4 pt-2">
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#E8E4DF] shadow-xs">
                  <iframe
                    title="Bhaniyawala Physiotherapy Clinic Dehradun Google Map"
                    src="https://maps.google.com/maps?q=30.186417,78.148636&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={BRANCHES.bhaniyawala.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-5 text-sm flex-1 justify-center gap-2 font-medium"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/locations/bhaniyawala"
                    className="btn-secondary py-2.5 px-5 text-sm flex-1 justify-center font-medium"
                  >
                    View Branch Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Latest Health & Physiotherapy Blogs */}
      <section className="section-py bg-[#FAF9F7]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label">Patient Education</span>
            <h2 className="section-title">Latest Physiotherapy Articles & Health Guides</h2>
            <p className="text-base text-[#4A4744] leading-relaxed">
              Read evidence-based guides written and reviewed by our clinical physiotherapy specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div key={post.slug} className="card p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="section-label mb-0">{post.category}</span>
                  <h3 className="text-lg font-semibold text-[#2E2A26] leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#D97B4F] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#4A4744] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8E4DF] mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{post.readTime}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-[#D97B4F] hover:text-[#B85E37] flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/blog" className="btn-secondary py-2.5 px-6 text-sm">
              View All Blog Articles
            </Link>
          </div>
        </div>
      </section>

      {/* 16. Appointment CTA Section */}
      <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="section-label">
                Start Your Recovery Today
              </span>
              <h2 className="section-title">
                Book a Consultation With a Specialist Physiotherapist in Dehradun
              </h2>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Whether you need in-clinic assessment at Rajpur Road or Bhaniyawala, or require home visit physiotherapy, we are here to support your recovery.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a href={`tel:${CONTACT.phoneRaw}`} className="btn-primary py-3 px-6 text-sm flex items-center gap-2">
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  <span>Call {CONTACT.phone}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3 px-6 text-sm flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

