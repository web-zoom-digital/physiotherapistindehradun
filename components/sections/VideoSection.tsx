'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { VideoItem } from '@/lib/videos'
import { VideoCard } from '@/components/ui/VideoCard'
import { VideoModal } from '@/components/ui/VideoModal'
import { ArrowRight } from 'lucide-react'

interface VideoSectionProps {
  videos: VideoItem[]
  totalCount?: number
}

export function VideoSection({ videos, totalCount }: VideoSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  if (!videos || videos.length === 0) return null

  const displayCount = totalCount || videos.length

  return (
    <section className="section-py bg-white border-y border-[#E8E4DF]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="section-label">Visual Demonstrations</span>
          <h2 className="section-title">
            Explore Our Treatment &amp; Therapy Videos
          </h2>
          <p className="text-base text-[#4A4744] leading-relaxed">
            Watch real clinical evaluations, hands-on joint mobilizations, and structured exercise demonstrations conducted by our licensed MPT specialists in Dehradun.
          </p>
        </div>

        {/* Video Cards Grid: 2 col mobile, 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {videos.map((video, idx) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={(v) => setActiveVideo(v)}
              priority={idx < 2}
            />
          ))}
        </div>

        {/* View All Videos Button */}
        <div className="text-center pt-8">
          <Link
            href="/video"
            className="btn-secondary py-2.5 px-6 text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 group"
          >
            <span>View All Videos ({displayCount})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Video Playback Modal */}
      <VideoModal
        video={activeVideo}
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  )
}
