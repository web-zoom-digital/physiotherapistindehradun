import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, User, Calendar, ArrowRight } from 'lucide-react'
import { BlogPost, getBlogImage } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
  priority?: boolean
}

export function BlogCard({ post, priority = false }: BlogCardProps) {
  const imageUrl = post.imageUrl || getBlogImage(post.slug)

  return (
    <article className="card flex flex-col justify-between overflow-hidden bg-white border border-[#E8E4DF] hover:border-[#D97B4F]/40 hover:shadow-xl transition-all duration-300 group rounded-2xl">
      <div>
        {/* Blog Thumbnail Container with 16:10 / 16:9 Aspect Ratio */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-[#E8E4DF]">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority={priority}
            loading={priority ? undefined : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Category Pill Floating Top-Left */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#D97B4F] text-white text-[9px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs truncate max-w-[70%]">
            {post.category}
          </div>

          {/* Read Time Floating Top-Right */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 backdrop-blur-xs text-[#2E2A26] text-[9px] sm:text-xs font-semibold px-2 py-0.5 rounded-full shadow-xs border border-[#E8E4DF] flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#D97B4F]" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Post Text & Metadata */}
        <div className="p-3 sm:p-5 space-y-1.5 sm:space-y-2.5">
          <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-2 sm:line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author & Date Metadata */}
          <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs text-gray-500 border-t border-gray-100">
            <div className="flex items-center gap-1 font-medium text-[#2E2A26]">
              <User className="w-3 h-3 text-[#D97B4F] shrink-0" />
              <span className="truncate max-w-[110px] sm:max-w-none">{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gray-400 shrink-0" />
              <span>{post.publishedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Standardized Card Actions Footer */}
      <div className="p-3 sm:p-5 pt-0 mt-2">
        <Link
          href={`/blog/${post.slug}`}
          className="btn-secondary min-h-[38px] sm:min-h-[44px] py-1.5 sm:py-2 px-3 text-[11px] sm:text-xs font-bold w-full justify-center text-center gap-1.5 group-hover:border-[#D97B4F]"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  )
}
