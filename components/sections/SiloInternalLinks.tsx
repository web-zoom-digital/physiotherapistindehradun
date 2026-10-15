'use client'

import React from 'react'
import Link from 'next/link'
import { Activity, Bone, MapPin, ChevronRight } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { BRANCHES } from '@/data/clinic'

interface SiloInternalLinksProps {
  currentCategory?: 'service' | 'condition' | 'location' | 'blog' | 'general'
  currentSlug?: string
}

export function SiloInternalLinks({ currentCategory = 'general', currentSlug }: SiloInternalLinksProps) {
  const featuredServices = SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 6)
  const featuredConditions = CONDITIONS.filter((c) => c.slug !== currentSlug).slice(0, 6)

  return (
    <section className="bg-[#FAF9F7] border-t border-[#E8E4DF] py-12 font-sans">
      <div className="container-custom space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#D97B4F] uppercase tracking-wider block">
            PHYSIOTHERAPY DEHRADUN SILO DIRECTORY
          </span>
          <h3 className="text-xl font-bold text-[#2E2A26]">
            Explore Related Physiotherapy Treatments & Patient Guides
          </h3>
          <p className="text-xs text-[#76726E]">
            Navigate related clinical specialties, condition guides and Dehradun clinic locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Silo Column 1: Core Services */}
          <div className="bg-white p-5 rounded-2xl border border-[#E8E4DF] shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8E4DF]">
              <Activity className="w-4 h-4 text-[#D97B4F]" />
              <h4 className="text-sm font-bold text-[#2E2A26]">Physiotherapy Services</h4>
            </div>
            <ul className="space-y-2 text-xs">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between text-[#4A4744] hover:text-[#D97B4F] font-medium transition-colors"
                  >
                    <span>{s.title}</span>
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs font-bold text-[#D97B4F] hover:underline inline-flex items-center gap-1"
                >
                  <span>View All 8 Services</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Silo Column 2: Patient Condition Guides */}
          <div className="bg-white p-5 rounded-2xl border border-[#E8E4DF] shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8E4DF]">
              <Bone className="w-4 h-4 text-[#D97B4F]" />
              <h4 className="text-sm font-bold text-[#2E2A26]">Conditions Assessed</h4>
            </div>
            <ul className="space-y-2 text-xs">
              {featuredConditions.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/conditions/${c.slug}`}
                    className="flex items-center justify-between text-[#4A4744] hover:text-[#D97B4F] font-medium transition-colors"
                  >
                    <span>{c.title}</span>
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/conditions"
                  className="text-xs font-bold text-[#D97B4F] hover:underline inline-flex items-center gap-1"
                >
                  <span>View All 12 Patient Guides</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Silo Column 3: Dehradun Clinic Locations & Resources */}
          <div className="bg-white p-5 rounded-2xl border border-[#E8E4DF] shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8E4DF]">
              <MapPin className="w-4 h-4 text-[#D97B4F]" />
              <h4 className="text-sm font-bold text-[#2E2A26]">Clinic Locations & Resources</h4>
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href={`/locations/${BRANCHES.bhaniyawala.slug}`}
                  className="flex items-center justify-between text-[#4A4744] hover:text-[#D97B4F] font-medium transition-colors"
                >
                  <span>Bhaniyawala Clinic Center</span>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="flex items-center justify-between text-[#4A4744] hover:text-[#D97B4F] font-medium transition-colors"
                >
                  <span>Clinic Location &amp; Directions</span>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/home-physiotherapy"
                  className="flex items-center justify-between text-[#4A4744] hover:text-[#D97B4F] font-medium transition-colors"
                >
                  <span>Home Visit Physiotherapy Dehradun</span>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="flex items-center justify-between text-[#4A4744] hover:text-[#D97B4F] font-medium transition-colors"
                >
                  <span>Meet Our MPT Specialist Doctors</span>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center justify-between text-[#4A4744] hover:text-[#D97B4F] font-medium transition-colors"
                >
                  <span>Physiotherapy Articles & Health Blog</span>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/book-appointment"
                  className="text-xs font-bold text-[#D97B4F] hover:underline inline-flex items-center gap-1"
                >
                  <span>Book Consultation Online</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
