'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Activity,
  Bone,
  Brain,
  Zap,
  Home as HomeIcon,
  UserCheck,
  Stethoscope,
  HeartPulse,
  ArrowRight,
  MapPin,
  Info,
  BookOpen,
  PhoneCall,
  Calendar,
} from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'

const getServiceIcon = (slug: string) => {
  switch (slug) {
    case 'orthopedic-physiotherapy':
      return <Bone className="w-5 h-5 text-[#D97B4F]" />
    case 'neuro-physiotherapy':
      return <Brain className="w-5 h-5 text-[#D97B4F]" />
    case 'sports-physiotherapy':
      return <Zap className="w-5 h-5 text-[#D97B4F]" />
    case 'home-physiotherapy':
      return <HomeIcon className="w-5 h-5 text-[#D97B4F]" />
    case 'pediatric-physiotherapy':
      return <UserCheck className="w-5 h-5 text-[#D97B4F]" />
    case 'post-surgery-rehabilitation':
      return <Stethoscope className="w-5 h-5 text-[#D97B4F]" />
    default:
      return <HeartPulse className="w-5 h-5 text-[#D97B4F]" />
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>('locations')
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [conditionsDropdownOpen, setConditionsDropdownOpen] = useState(false)
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false)
  const pathname = usePathname()

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const conditionsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
    setServicesDropdownOpen(true)
  }

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 180)
  }

  const handleConditionsEnter = () => {
    if (conditionsTimeoutRef.current) clearTimeout(conditionsTimeoutRef.current)
    setConditionsDropdownOpen(true)
  }

  const handleConditionsLeave = () => {
    conditionsTimeoutRef.current = setTimeout(() => {
      setConditionsDropdownOpen(false)
    }, 180)
  }

  const handleLocationsEnter = () => {
    if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current)
    setLocationsDropdownOpen(true)
  }

  const handleLocationsLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setLocationsDropdownOpen(false)
    }, 180)
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesDropdownOpen(false)
    setConditionsDropdownOpen(false)
    setLocationsDropdownOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Main Header / Navbar */}
      <header className={`sticky top-0 z-50 bg-white/95 border-b border-[#E8E4DF] shadow-sm transition-all ${mobileMenuOpen ? '' : 'backdrop-blur-md'}`}>
        <div className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1.5" aria-label="RonEx Physiotherapy Home">
            <Image
              src="/logo.png"
              alt="RonEx Physiotherapy & Rehabilitation Center"
              width={190}
              height={75}
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            <Link
              href="/"
              className={`nav-link ${isActive('/') && pathname === '/' ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href="/services"
                className={`nav-link flex items-center gap-1.5 transition-all ${servicesDropdownOpen
                  ? 'bg-[#F5DCC8] text-[#B85E37] font-bold px-3 py-1.5 rounded-xl'
                  : isActive('/services')
                    ? 'nav-link-active'
                    : ''
                  }`}
              >
                <span>Services</span>
                {servicesDropdownOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#B85E37]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 pt-1 w-[650px] z-50 animate-fadeIn font-sans">
                  <div className="bg-white border border-[#E8E4DF] rounded-3xl shadow-2xl p-6 relative before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column: CORE THERAPIES */}
                      <div>
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">
                          CORE THERAPIES
                        </span>

                        <div className="space-y-3">
                          <Link
                            href="/services"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Activity className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Advanced Physiotherapy
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Evidence-based, MPT-led...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/services/orthopedic-physiotherapy"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Bone className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Orthopedic Physiotherapy
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Back, knee, neck &amp; joint...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/services/neuro-physiotherapy"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Brain className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Neurological Physiotherapy
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Stroke, paralysis &amp;...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/services/sports-physiotherapy"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Zap className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Sports Physiotherapy
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                ACL, ligament &amp; athletic...
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: SPECIALIZED CARE */}
                      <div>
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">
                          SPECIALIZED CARE
                        </span>

                        <div className="space-y-3">
                          <Link
                            href="/services/post-surgery-rehabilitation"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Stethoscope className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Post-Surgery Rehabilitation
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Knee/hip replacement...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/conditions/stroke-rehabilitation"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Brain className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Stroke Rehabilitation
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Intensive mobility &amp; gait...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/services/home-physiotherapy"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <HomeIcon className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Home Visit Physiotherapy
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Therapist at your doorstep...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/services"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Activity className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                All Services &amp; Modalities
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Electrotherapy, dry needlin...
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="border-t border-[#E8E4DF] mt-5 pt-4 flex items-center justify-between">
                      <Link
                        href="/book-appointment"
                        className="bg-[#D97B4F] hover:bg-[#B85E37] text-white px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95"
                      >
                        <FaCalendarCheck className="w-3.5 h-3.5 text-[#F5DCC8]" />
                        <span className="text-white">Book Appointment</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Conditions Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleConditionsEnter}
              onMouseLeave={handleConditionsLeave}
            >
              <Link
                href="/conditions"
                className={`nav-link flex items-center gap-1.5 transition-all ${conditionsDropdownOpen
                  ? 'bg-[#F5DCC8] text-[#B85E37] font-bold px-3 py-1.5 rounded-xl'
                  : isActive('/conditions')
                    ? 'nav-link-active'
                    : ''
                  }`}
              >
                <span>Conditions</span>
                {conditionsDropdownOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#B85E37]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </Link>

              {conditionsDropdownOpen && (
                <div className="absolute top-full -left-48 pt-1 w-[650px] z-50 animate-fadeIn font-sans">
                  <div className="bg-white border border-[#E8E4DF] rounded-3xl shadow-2xl p-6 relative before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column: SPINE & JOINTS */}
                      <div>
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">
                          SPINE &amp; JOINTS
                        </span>

                        <div className="space-y-3">
                          <Link
                            href="/conditions/back-pain"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Bone className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Back Pain &amp; Lumbar
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Lower back &amp; disc relief...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/conditions/neck-pain"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Bone className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Neck Pain &amp; Posture
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Cervical strain &amp; spondylosis...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/conditions/knee-pain"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Activity className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Knee Pain &amp; OA
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Knee arthritis &amp; rehab...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/conditions/sciatica"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Zap className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Sciatica Relief
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Sciatic nerve decompression...
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: NEURO & INJURIES */}
                      <div>
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">
                          NEURO &amp; INJURIES
                        </span>

                        <div className="space-y-3">
                          <Link
                            href="/conditions/stroke-rehabilitation"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Brain className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Stroke Rehabilitation
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Hemiplegia &amp; paralysis rehab...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/conditions/sports-injury"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Zap className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Sports Injuries
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Ligament &amp; muscle strains...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/conditions/frozen-shoulder"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Bone className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                Frozen Shoulder
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Capsule stretch &amp; mobility...
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/conditions"
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5DCC8]/80">
                              <Activity className="w-5 h-5 text-[#D97B4F]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#2E2A26] group-hover:text-[#B85E37] transition-colors block leading-snug">
                                All Patient Guides
                              </span>
                              <span className="text-xs text-[#76726E] block truncate max-w-[210px] leading-relaxed mt-0.5">
                                Explore all 12+ conditions...
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="border-t border-[#E8E4DF] mt-5 pt-4 flex items-center justify-between">
                      <Link
                        href="/conditions"
                        className="text-xs font-bold text-[#D97B4F] hover:text-[#B85E37] flex items-center gap-1"
                      >
                        <span>Explore All 12 Patient Condition Guides</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/book-appointment"
                        className="bg-[#D97B4F] hover:bg-[#B85E37] text-white px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95"
                      >
                        <FaCalendarCheck className="w-3.5 h-3.5 text-[#F5DCC8]" />
                        <span className="text-white">Book Evaluation</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleLocationsEnter}
              onMouseLeave={handleLocationsLeave}
            >
              <Link
                href="/locations"
                className={`nav-link flex items-center gap-1.5 transition-all ${locationsDropdownOpen
                  ? 'bg-[#F5DCC8] text-[#B85E37] font-bold px-3 py-1.5 rounded-xl'
                  : isActive('/locations')
                    ? 'nav-link-active'
                    : ''
                  }`}
              >
                <span>Locations</span>
                {locationsDropdownOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#B85E37]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </Link>

              {locationsDropdownOpen && (
                <div className="absolute top-full -left-28 pt-1 w-[540px] z-50 animate-fadeIn font-sans">
                  <div className="bg-white border border-[#E8E4DF] rounded-3xl shadow-2xl p-6 relative before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-6">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">
                      CLINIC & HOME PHYSIOTHERAPY CARE
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="/locations/bhaniyawala"
                        className="p-3.5 rounded-2xl bg-[#FAF9F7] hover:bg-[#F5DCC8]/50 border border-[#E8E4DF] hover:border-[#D97B4F] transition-all group space-y-1.5"
                      >
                        <div className="flex items-center gap-2 text-[#D97B4F] font-bold text-sm">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>Bhaniyawala Clinic Center</span>
                        </div>
                        <p className="text-xs text-[#76726E] leading-relaxed">
                          Rama Market, Thano Chowk, Bhaniyawala, Dehradun.
                        </p>
                      </Link>

                      <Link
                        href="/services/home-physiotherapy"
                        className="p-3.5 rounded-2xl bg-[#FAF9F7] hover:bg-[#F5DCC8]/50 border border-[#E8E4DF] hover:border-[#D97B4F] transition-all group space-y-1.5"
                      >
                        <div className="flex items-center gap-2 text-[#D97B4F] font-bold text-sm">
                          <HomeIcon className="w-4 h-4 shrink-0" />
                          <span>Home Visit Physiotherapy</span>
                        </div>
                        <p className="text-xs text-[#76726E] leading-relaxed">
                          Personalized home rehabilitation across all Dehradun areas.
                        </p>
                      </Link>
                    </div>

                    <div className="border-t border-[#E8E4DF] mt-4 pt-3 flex items-center justify-between">
                      <Link
                        href="/locations"
                        className="text-xs font-bold text-[#D97B4F] hover:text-[#B85E37] flex items-center gap-1"
                      >
                        <span>Explore Clinic Location &amp; Driving Directions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/team"
              className={`nav-link ${isActive('/team') ? 'nav-link-active' : ''}`}
            >
              Team
            </Link>

            <Link
              href="/blog"
              className={`nav-link ${isActive('/blog') ? 'nav-link-active' : ''}`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="p-2.5 rounded-lg text-[#D97B4F] hover:bg-[#F5DCC8] transition-colors"
              title="Call Helpline"
            >
              <FaPhoneAlt className="w-4 h-4" />
            </a>
            <Link
              href="/book-appointment"
              className="btn-primary py-2.5 px-5 text-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#2E2A26] bg-[#FAF9F7] hover:bg-[#F5DCC8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Full Screen Menu Drawer matching reference design */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-xs flex justify-end lg:hidden font-sans animate-fadeIn">
            {/* Backdrop click overlay */}
            <div className="absolute inset-0" onClick={() => setMobileMenuOpen(false)} />

            {/* Slide-over Drawer Panel */}
            <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl z-10 overflow-hidden animate-slideLeft">

              {/* Drawer Header (Matching reference: Logo + Title/Subtitle on left, round X button on right) */}
              <div className="px-5 py-4 border-b border-[#E8E4DF] flex items-center justify-between bg-white shrink-0">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center py-1"
                  aria-label="RonEx Physiotherapy Home"
                >
                  <Image
                    src="/logo.png"
                    alt="RonEx Physiotherapy & Rehabilitation Center"
                    width={160}
                    height={62}
                    className="h-11 w-auto object-contain"
                  />
                </Link>

                {/* Round Close Button (X) */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 rounded-full bg-[#F0F2F5] hover:bg-[#E4E7EC] text-[#2E2A26] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Scrollable Drawer Content */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3">

                {/* 1. Home Link */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${isActive('/') && pathname === '/'
                    ? 'bg-[#FDF6F0] border-[#D97B4F] text-[#D97B4F]'
                    : 'bg-white border-[#E8E4DF] hover:border-[#D97B4F]/60 text-[#2E2A26]'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4F6FB] border border-[#E8E4DF]/60 flex items-center justify-center shrink-0 text-[#D97B4F]">
                      <HomeIcon className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-base tracking-tight">Home</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                {/* 2. Services Accordion */}
                <div>
                  <button
                    onClick={() =>
                      setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')
                    }
                    className={`w-full flex items-center justify-between p-3.5 cursor-pointer rounded-2xl border transition-all ${mobileExpandedSection === 'services' || isActive('/services')
                      ? 'bg-[#FDF6F0] border-[#D97B4F] text-[#2E2A26]'
                      : 'bg-white border-[#E8E4DF] text-[#2E2A26]'
                      }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#F4F6FB] border border-[#E8E4DF]/60 flex items-center justify-center shrink-0 text-[#D97B4F]">
                        <Activity className="w-5 h-5" />
                      </div>
                      <span className="font-extrabold text-base tracking-tight">Services</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-[#F5DCC8] text-[#B85E37] text-xs font-extrabold px-3 py-1 rounded-full">
                        6 Services
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileExpandedSection === 'services' ? 'rotate-90 text-[#D97B4F]' : ''
                          }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Services Grid */}
                  {mobileExpandedSection === 'services' && (
                    <div className="bg-[#FAF9F7] border border-[#E8E4DF] rounded-2xl p-3.5 mt-2 space-y-3 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-white rounded-xl p-2.5 border border-[#E8E4DF] hover:border-[#D97B4F] flex items-center gap-2 text-xs font-bold text-[#2E2A26] shadow-xs transition-all hover:bg-[#FDF6F0]/60"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#FDF6F0] text-[#D97B4F] flex items-center justify-center shrink-0">
                              {getServiceIcon(s.slug)}
                            </div>
                            <span className="truncate">{s.shortTitle}</span>
                          </Link>
                        ))}
                      </div>

                      <div className="pt-2.5 border-t border-dashed border-[#E8E4DF] text-center">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs font-extrabold text-[#D97B4F] hover:text-[#B85E37] inline-flex items-center gap-1 transition-colors py-1"
                        >
                          <span>View All 6 Services →</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>


                {/* 4. Patient Guides / Conditions Accordion */}
                <div>
                  <button
                    onClick={() =>
                      setMobileExpandedSection(mobileExpandedSection === 'conditions' ? null : 'conditions')
                    }
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${mobileExpandedSection === 'conditions' || isActive('/conditions')
                      ? 'bg-[#FDF6F0] border-[#D97B4F] text-[#2E2A26]'
                      : 'bg-white border-[#E8E4DF] text-[#2E2A26]'
                      }`}
                  >
                    <div className="flex items-center gap-3.5 cursor-pointer">
                      <div className="w-11 h-11 rounded-2xl bg-[#F4F6FB] border border-[#E8E4DF]/60 flex items-center justify-center shrink-0 text-[#D97B4F] ">
                        <HeartPulse className="w-5 h-5" />
                      </div>
                      <span className="font-extrabold text-base tracking-tight">Conditions</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-[#F5DCC8] text-[#B85E37] text-xs font-extrabold px-3 py-1 rounded-full">
                        12 Guides
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileExpandedSection === 'conditions' ? 'rotate-90 text-[#D97B4F]' : ''
                          }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Conditions Grid */}
                  {mobileExpandedSection === 'conditions' && (
                    <div className="bg-[#FAF9F7] border border-[#E8E4DF] rounded-2xl p-3.5 mt-2 space-y-3 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-2">
                        {CONDITIONS.slice(0, 8).map((c) => (
                          <Link
                            key={c.slug}
                            href={`/conditions/${c.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-white rounded-xl p-2.5 border border-[#E8E4DF] hover:border-[#D97B4F] flex items-center gap-2 text-xs font-bold text-[#2E2A26] shadow-xs transition-all hover:bg-[#FDF6F0]/60"
                          >
                            <Activity className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                            <span className="truncate">{c.shortTitle}</span>
                          </Link>
                        ))}
                      </div>

                      <div className="pt-2.5 border-t border-dashed border-[#E8E4DF] text-center">
                        <Link
                          href="/conditions"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs font-extrabold text-[#D97B4F] hover:text-[#B85E37] inline-flex items-center gap-1 transition-colors py-1"
                        >
                          <span>Explore All 12 Patient Guides →</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. About Us */}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${isActive('/about')
                    ? 'bg-[#FDF6F0] border-[#D97B4F] text-[#D97B4F]'
                    : 'bg-white border-[#E8E4DF] hover:border-[#D97B4F]/60 text-[#2E2A26]'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4F6FB] border border-[#E8E4DF]/60 flex items-center justify-center shrink-0 text-[#D97B4F]">
                      <Info className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-base tracking-tight">About Us</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                {/* 6. Doctors & Team */}
                <Link
                  href="/team"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${isActive('/team')
                    ? 'bg-[#FDF6F0] border-[#D97B4F] text-[#D97B4F]'
                    : 'bg-white border-[#E8E4DF] hover:border-[#D97B4F]/60 text-[#2E2A26]'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4F6FB] border border-[#E8E4DF]/60 flex items-center justify-center shrink-0 text-[#D97B4F]">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-base tracking-tight">Doctors &amp; Team</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>


                {/* 7. Blog */}
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${isActive('/blog')
                    ? 'bg-[#FDF6F0] border-[#D97B4F] text-[#D97B4F]'
                    : 'bg-white border-[#E8E4DF] hover:border-[#D97B4F]/60 text-[#2E2A26]'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4F6FB] border border-[#E8E4DF]/60 flex items-center justify-center shrink-0 text-[#D97B4F]">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-base tracking-tight">Blog</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                {/* 8. Contact Us */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${isActive('/contact')
                    ? 'bg-[#FDF6F0] border-[#D97B4F] text-[#D97B4F]'
                    : 'bg-white border-[#E8E4DF] hover:border-[#D97B4F]/60 text-[#2E2A26]'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4F6FB] border border-[#E8E4DF]/60 flex items-center justify-center shrink-0 text-[#D97B4F]">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-base tracking-tight">Contact Us</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

              </div>

              {/* Bottom Sticky Action Footer */}
              <div className="p-4 bg-white border-t border-[#E8E4DF] shrink-0 space-y-2.5">
                <Link
                  href="/book-appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#D97B4F] hover:bg-[#B85E37] text-white py-3.5 px-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="py-2.5 px-3 rounded-xl border border-[#E8E4DF] bg-[#FAF9F7] hover:bg-[#F5DCC8]/40 text-[#2E2A26] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5 text-[#D97B4F]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1ebe5d] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  )
}
