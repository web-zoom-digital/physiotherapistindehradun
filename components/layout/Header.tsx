'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#D97B4F] text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#B85E37] transition-colors">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-[#2E2A26] tracking-tight block leading-tight">
                Physiotherapist
              </span>
              <span className="text-xs font-semibold text-[#D97B4F] tracking-wider uppercase block">
                in Dehradun
              </span>
            </div>
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
                className={`nav-link flex items-center gap-1.5 transition-all ${
                  servicesDropdownOpen
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
                        <span>Book Appointment</span>
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
                className={`nav-link flex items-center gap-1.5 transition-all ${
                  conditionsDropdownOpen
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
                        <span>Book Evaluation</span>
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
                className={`nav-link flex items-center gap-1.5 transition-all ${
                  locationsDropdownOpen
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
                      DEHRADUN CLINIC BRANCHES
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="/locations/rajpur-road"
                        className="p-3.5 rounded-2xl bg-[#FAF9F7] hover:bg-[#F5DCC8]/50 border border-[#E8E4DF] hover:border-[#D97B4F] transition-all group space-y-1.5"
                      >
                        <div className="flex items-center gap-2 text-[#D97B4F] font-bold text-sm">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>Rajpur Road Main Clinic</span>
                        </div>
                        <p className="text-xs text-[#76726E] leading-relaxed">
                          Clock Tower, Chukkuwala, Rajpur Road, Dehradun.
                        </p>
                      </Link>

                      <Link
                        href="/locations/bhaniyawala"
                        className="p-3.5 rounded-2xl bg-[#FAF9F7] hover:bg-[#F5DCC8]/50 border border-[#E8E4DF] hover:border-[#D97B4F] transition-all group space-y-1.5"
                      >
                        <div className="flex items-center gap-2 text-[#D97B4F] font-bold text-sm">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>Bhaniyawala Branch</span>
                        </div>
                        <p className="text-xs text-[#76726E] leading-relaxed">
                          Rama Market, Thano Chowk, Bhaniyawala, Dehradun.
                        </p>
                      </Link>
                    </div>

                    <div className="border-t border-[#E8E4DF] mt-4 pt-3 flex items-center justify-between">
                      <Link
                        href="/locations"
                        className="text-xs font-bold text-[#D97B4F] hover:text-[#B85E37] flex items-center gap-1"
                      >
                        <span>Explore All Dehradun Branches &amp; Driving Directions</span>
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

        {/* Mobile Full Screen Menu Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-[#FAF9F7] flex flex-col lg:hidden h-screen h-[100dvh] w-screen overflow-hidden font-sans">
            {/* Drawer Header */}
            <div className="bg-[#2E2A26] text-white px-5 py-4 flex items-center justify-between shadow-md shrink-0">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D97B4F] text-white flex items-center justify-center font-bold text-xl shadow-md">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-base font-extrabold text-white tracking-tight block leading-tight">
                    Physiotherapy
                  </span>
                  <span className="text-[10px] font-bold text-[#F5DCC8] tracking-widest uppercase block">
                    DEHRADUN
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 pb-28">
              {/* Primary Menu Links Stack */}
              <div className="space-y-2">
                {[
                  { name: 'Home', url: '/' },
                  { name: 'About Us', url: '/about' },
                  { name: 'Doctors & Team', url: '/team' },
                  { name: 'Health Blog', url: '/blog' },
                  { name: 'Contact Us', url: '/contact' },
                ].map((item) => {
                  const active = isActive(item.url) && (item.url === '/' ? pathname === '/' : true)
                  return (
                    <Link
                      key={item.url}
                      href={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-5 rounded-2xl font-bold text-sm transition-all ${
                        active
                          ? 'bg-[#D97B4F] text-white shadow-sm'
                          : 'bg-white text-[#2E2A26] border border-[#E8E4DF] shadow-xs hover:border-[#D97B4F]'
                      }`}
                    >
                      <span>{item.name}</span>
                      {active && <span className="w-2 h-2 rounded-full bg-white shadow-xs" />}
                    </Link>
                  )
                })}
              </div>

              {/* Services Section */}
              <div className="space-y-3 pt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-[#D97B4F] text-white font-extrabold text-[11px] px-3 py-1 rounded-lg uppercase tracking-wider">
                    SERVICES
                  </span>
                  <span className="bg-[#2E2A26] text-white font-extrabold text-[11px] px-3 py-1 rounded-lg uppercase tracking-wider">
                    CORE THERAPIES
                  </span>
                </div>

                <div className="space-y-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#E8E4DF] shadow-xs hover:border-[#D97B4F] transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#F5DCC8] flex items-center justify-center shrink-0">
                        {getServiceIcon(s.slug)}
                      </div>
                      <span className="font-bold text-sm text-[#2E2A26]">{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialized Care Section */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2">
                  <span className="bg-[#2E2A26] text-white font-extrabold text-[11px] px-3 py-1 rounded-lg uppercase tracking-wider">
                    SPECIALIZED CARE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {CONDITIONS.slice(0, 6).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/conditions/${c.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="bg-white p-3 rounded-2xl border border-[#E8E4DF] text-xs font-bold text-[#2E2A26] hover:border-[#D97B4F] transition-all block text-center shadow-xs"
                    >
                      {c.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
