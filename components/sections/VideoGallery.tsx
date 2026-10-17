'use client'

import React, { useState, useMemo } from 'react'
import { VideoItem } from '@/lib/videos'
import { VideoCard } from '@/components/ui/VideoCard'
import { VideoModal } from '@/components/ui/VideoModal'
import { VIDEO_CATEGORIES } from '@/data/videoMetadata'
import { Film, Search, Filter, VideoOff, RefreshCw, Calendar } from 'lucide-react'
import Link from 'next/link'

interface VideoGalleryProps {
  videos: VideoItem[]
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  // Filtered videos based on category and search query
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory =
        selectedCategory === 'All' || video.category.toLowerCase() === selectedCategory.toLowerCase()
      const matchesSearch =
        searchQuery.trim() === '' ||
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.filename.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [videos, selectedCategory, searchQuery])

  // Count available categories
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = { All: videos.length }
    for (const v of videos) {
      counts[v.category] = (counts[v.category] || 0) + 1
    }
    return counts
  }, [videos])

  return (
    <section id="video-gallery" className="section-py bg-white scroll-mt-20">
      <div className="container-custom space-y-8 md:space-y-10">
        {/* Controls Bar: Categories & Search */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E4DF] pb-5">
            <div>
              <span className="section-label">Visual Library</span>
              <h2 className="section-title mb-1">
                Clinical Sessions &amp; Therapy Demonstrations
              </h2>
              <p className="text-sm text-[#4A4744]">
                Browse our real physical therapy recordings, patient milestone assessments, and guided home exercises in Dehradun.
              </p>
            </div>

          </div>

          

          
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {filteredVideos.map((video, idx) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={(v) => setActiveVideo(v)}
                priority={idx < 4}
              />
            ))}
          </div>
        ) : (
          /* Polished Empty State */
          <div className="card p-10 sm:p-16 text-center max-w-xl mx-auto space-y-4 border border-[#E8E4DF]">
            <div className="w-16 h-16 rounded-full bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center mx-auto shadow-sm">
              <VideoOff className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#2E2A26]">
                No Videos Match Your Selection
              </h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                {videos.length === 0
                  ? 'No video files are currently available in the clinic library. Please check back soon or consult directly with our doctors.'
                  : `We couldn't find any recordings matching "${searchQuery || selectedCategory}". Try selecting another category or resetting filters.`}
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="btn-secondary py-2.5 px-5 text-xs sm:text-sm font-semibold"
              >
                View All Videos
              </button>
              <Link
                href="/book-appointment"
                className="btn-primary py-2.5 px-5 text-xs sm:text-sm font-semibold gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinical Assessment</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      <VideoModal
        video={activeVideo}
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  )
}
