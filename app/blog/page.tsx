import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'
import { ArrowRight, Clock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Physiotherapy Blog & Patient Health Guides | Dehradun',
  description:
    'Evidence-based articles on back pain, knee pain, stroke rehabilitation, sports injuries and home physiotherapy written by Dehradun physiotherapists.',
}

export default function BlogHubPage() {
  return (
    <>
      <PageHero
        title="Physiotherapy & Patient Health Guides"
        subtitle="Read evidence-based guides written and reviewed by our clinical physiotherapy specialists to help you understand pain, recovery and physical well-being."
        tag="Patient Education & Guidance"
        breadcrumbItems={[{ name: 'Blog', url: '/blog' }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {BLOG_POSTS.map((post) => (
              <div key={post.slug} className="card p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="tag text-xs font-medium">{post.category}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#2E2A26] leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#D97B4F] transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#4A4744] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DF] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <User className="w-3.5 h-3.5 text-[#D97B4F]" />
                    <span className="font-semibold">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-[#D97B4F] hover:text-[#B85E37] flex items-center gap-1 text-sm font-medium"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Blog FAQs */}
          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Patient Clarifications</span>
              <h2 className="section-title">Health Articles & Guidance FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.blog} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
