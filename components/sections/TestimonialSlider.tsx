'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Excellent physiotherapy care! My back pain of 3 years was resolved in just 8 sessions with targeted manual therapy and core strengthening. Professional and caring staff.',
    category: 'Back Pain Recovery',
  },
  {
    id: 2,
    quote:
      'My mother had a stroke and the home visit physiotherapy team was outstanding. Their patience, neuro-rehab exercises and gait training helped her walk independently again.',
    category: 'Neuro Rehab',
  },
  {
    id: 3,
    quote:
      'Highly effective treatment for severe cervical spondylosis and neck stiffness. Dr. Om Prakash explained every exercise clearly and relieved my pain within two weeks.',
    category: 'Cervical Spondylosis',
  },
  {
    id: 4,
    quote:
      'Outstanding post-knee replacement rehabilitation at Rajpur Road clinic. Progressive exercise loading and gait training helped me walk without support.',
    category: 'Post-Surgery Rehab',
  },
  {
    id: 5,
    quote:
      'Relieved my frozen shoulder stiffness completely. Professional Maitland joint mobilization technique and guided stretching exercises restored full range of motion.',
    category: 'Frozen Shoulder',
  },
  {
    id: 6,
    quote:
      'Prompt and dedicated home visit physiotherapy for my father after hip surgery in Dehradun. Electrotherapy equipment and exercises brought directly to home.',
    category: 'Home Visit Care',
  },
  {
    id: 7,
    quote:
      'Best sports physiotherapy in Dehradun for ACL tear recovery. Biomechanical analysis, neuromuscular training, and agility drills helped me return to football safely.',
    category: 'Sports Physiotherapy',
  },
  {
    id: 8,
    quote:
      'Instant relief from acute sciatica leg shooting pain. Traction therapy, nerve gliding exercises, and posture correction made a huge difference in my daily life.',
    category: 'Sciatica Treatment',
  },
  {
    id: 9,
    quote:
      'Extremely polite doctors, clean clinic atmosphere at Bhaniyawala branch, and modern modalities. Very happy with the systematic pain management approach.',
    category: 'Clinic Experience',
  },
]

export function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 12
      : 300
    const newIndex = Math.round(el.scrollLeft / cardWidth)
    if (newIndex >= 0 && newIndex < TESTIMONIALS.length) {
      setActiveIndex(newIndex)
    }
  }

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 12
      : 300
    el.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  const scrollPrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1))
  }

  const scrollNext = () => {
    scrollToIndex(Math.min(TESTIMONIALS.length - 1, activeIndex + 1))
  }

  return (
    <div>
      {/* Desktop View: Full 3x3 Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="card p-6 space-y-3 cursor-pointer text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold text-[#D97B4F]">{t.category}</span>
              <span className="text-[11px] bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200/60">
                Verified Review
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View: Horizontal Touch Slider with CSS Scroll Snap */}
      <div className="block md:hidden relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none px-4 py-2 -mx-4 scroll-smooth"
          tabIndex={0}
          role="region"
          aria-label="Verified patient care testimonials slider"
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="w-[84vw] max-w-[340px] shrink-0 snap-center card p-5 flex flex-col justify-between text-center sm:text-left min-h-[210px] select-none"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 text-sm">
                  {'★'.repeat(5)}
                </div>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E4DF] mt-3 flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-[#D97B4F] text-[11px]">{t.category}</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200/60">
                  Verified Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls & Position Indicator */}
        <div className="flex items-center justify-between pt-4 px-2">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
            className={`w-8 h-8 rounded-full border border-[#E8E4DF] bg-white flex items-center justify-center transition-all ${
              activeIndex === 0
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'text-[#2E2A26] active:scale-95 shadow-xs hover:border-[#D97B4F]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Jump to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-5 bg-[#D97B4F]' : 'w-1.5 bg-[#E8E4DF]'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            disabled={activeIndex === TESTIMONIALS.length - 1}
            aria-label="Next testimonial"
            className={`w-8 h-8 rounded-full border border-[#E8E4DF] bg-white flex items-center justify-center transition-all ${
              activeIndex === TESTIMONIALS.length - 1
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'text-[#2E2A26] active:scale-95 shadow-xs hover:border-[#D97B4F]'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
