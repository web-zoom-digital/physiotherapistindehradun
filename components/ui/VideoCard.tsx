'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Play, Film, ArrowRight } from 'lucide-react'
import { VideoItem } from '@/lib/videos'

interface VideoCardProps {
  video: VideoItem
  onPlay: (video: VideoItem) => void
  priority?: boolean
}

export function VideoCard({ video, onPlay, priority = false }: VideoCardProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onPlay(video)
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onPlay(video)}
      onKeyDown={handleKeyDown}
      aria-label={`Watch video: ${video.title}`}
      className="card rounded-2xl overflow-hidden border border-[#E8E4DF] bg-white hover:border-[#D97B4F] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer text-left focus-visible:outline-3 focus-visible:outline-[#D97B4F]"
    >
      {/* Top: Video Thumbnail Frame */}
      <div className="relative aspect-[16/10] sm:aspect-video w-full bg-[#2E2A26] overflow-hidden">
        {/* Poster Image if available */}
        {video.posterUrl && !hasError ? (
          <Image
            src={video.posterUrl}
            alt={video.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            priority={priority}
            onError={() => setHasError(true)}
          />
        ) : (
          /* HTML5 Video preview frame with preload="metadata" */
          <video
            src={`${video.url}#t=0.5`}
            preload="metadata"
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
          />
        )}

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        {/* Centered Glowing Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-[#D97B4F] text-white flex items-center justify-center shadow-lg shadow-[#D97B4F]/40 group-hover:scale-110 group-hover:bg-[#B85E37] transition-all duration-300 ring-2 sm:ring-4 ring-white/30">
            <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom Banner inside frame */}
        <div className="absolute bottom-1.5 sm:bottom-2.5 left-2 sm:left-3 right-2 sm:right-3 z-10 flex items-center justify-between text-[10px] sm:text-[11px] text-white/90">
          <span className="inline-flex items-center gap-1 font-medium drop-shadow-xs truncate">
            <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D97B4F] shrink-0" />
            <span className="truncate">Clinical Demo</span>
          </span>
          <span className="text-white/80 group-hover:text-white font-semibold hidden xs:inline sm:inline transition-colors shrink-0">
            Play
          </span>
        </div>
      </div>

      {/* Bottom: Video Content Info */}
      <div className="p-3 sm:p-5 flex flex-col justify-between flex-1 space-y-2 sm:space-y-3">
        <div className="space-y-1 sm:space-y-1.5">
          <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors line-clamp-2 leading-snug">
            {video.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#4A4744] line-clamp-2 leading-relaxed hidden xs:block sm:block">
            {video.description}
          </p>
        </div>

        {/* Watch CTA Row */}
        <div className="pt-1.5 sm:pt-2 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#D97B4F]">
          <span className="flex items-center gap-1 group-hover:text-[#B85E37] transition-colors">
            <span>Watch Demo</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
          </span>
          <span className="text-[10px] sm:text-[11px] text-gray-500 font-normal hidden sm:inline">
            RonEx Clinic
          </span>
        </div>
      </div>
    </div>
  )
}
