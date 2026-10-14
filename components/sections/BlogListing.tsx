'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  Clock,
  User,
  Calendar,
  ArrowRight,
  Sparkles,
  Bookmark,
  ChevronRight,
} from 'lucide-react'
import { BlogPost, getBlogImage } from '@/data/blog'
import { BlogCard } from '@/components/sections/BlogCard'

interface BlogListingProps {
  posts: BlogPost[]
}

const CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'Back Pain', label: 'Back & Spine' },
  { id: 'Orthopedic Physiotherapy', label: 'Joints & Bones' },
  { id: 'Neuro Rehabilitation', label: 'Neuro & Stroke' },
  { id: 'Sports Physiotherapy', label: 'Sports & Injury' },
  { id: 'Home Physiotherapy', label: 'Home Care' },
]

export function BlogListing({ posts }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      post.category.toLowerCase().includes(selectedCategory.toLowerCase())

    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  // Select featured post (first post when no search/filter, or first filtered)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : []

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Search Bar & Category Filter Bar */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides by condition, symptoms, or topic..."
              className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-full border border-[#E8E4DF] bg-white text-sm text-[#2E2A26] placeholder-gray-400 focus:outline-none focus:border-[#D97B4F] focus:ring-2 focus:ring-[#D97B4F]/20 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-[#2E2A26]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (Mobile horizontal scroll) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D97B4F] text-white shadow-md shadow-[#D97B4F]/20'
                    : 'bg-white hover:bg-[#FAF9F7] text-[#2E2A26] border border-[#E8E4DF] hover:border-[#D97B4F]/40'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Featured Article Card (Responsive spotlight on tablet/desktop, compact card on mobile) */}
      {featuredPost && searchQuery === '' && selectedCategory === 'all' && (
        <div className="bg-[#FAF9F7] rounded-3xl p-4 sm:p-7 md:p-8 border border-[#E8E4DF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Featured Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                <Image
                  src={featuredPost.imageUrl || getBlogImage(featuredPost.slug)}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-3 left-3 bg-[#D97B4F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Clinical Guide</span>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="tag text-xs font-bold">{featuredPost.category}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredPost.readTime}</span>
                </span>
              </div>

              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#2E2A26] leading-snug">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="hover:text-[#D97B4F] transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-gray-500 pt-1">
                <div className="flex items-center gap-1.5 font-medium text-[#2E2A26]">
                  <User className="w-3.5 h-3.5 text-[#D97B4F]" />
                  <span>{featuredPost.author}</span>
                </div>
                <span>·</span>
                <span>{featuredPost.publishedDate}</span>
              </div>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="btn-primary min-h-[46px] py-2.5 px-6 text-sm font-bold shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Blog Grid: Exactly 2 cards per row on mobile (grid-cols-2), 3 on desktop */}
      {filteredPosts.length > 0 ? (
        <div>
          {searchQuery === '' && selectedCategory === 'all' && (
            <div className="mb-6">
              <span className="section-label">Latest Publications</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2E2A26]">
                All Rehabilitation &amp; Physical Therapy Guides
              </h3>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {(searchQuery === '' && selectedCategory === 'all' ? gridPosts : filteredPosts).map(
              (post) => (
                <BlogCard key={post.slug} post={post} />
              )
            )}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-[#FAF9F7] rounded-2xl p-10 text-center max-w-md mx-auto space-y-3 border border-[#E8E4DF]">
          <Bookmark className="w-10 h-10 text-gray-400 mx-auto" />
          <h3 className="text-lg font-bold text-[#2E2A26]">No Articles Found</h3>
          <p className="text-xs text-[#76726E]">
            No health guides matched your search for &ldquo;{searchQuery}&rdquo;. Try another topic or
            clear your search filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
            }}
            className="btn-secondary py-2 px-4 text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <span>Reset Search &amp; Filters</span>
          </button>
        </div>
      )}
    </div>
  )
}
