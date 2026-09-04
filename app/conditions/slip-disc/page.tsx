import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ConditionDetailContent } from '@/components/sections/ConditionDetailContent'
import { getConditionBySlug } from '@/data/conditions'
import { SERVICES } from '@/data/services'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'
import { CONDITION_IMAGES } from '@/data/conditionImages'

const condition = getConditionBySlug('slip-disc')!

export const metadata: Metadata = {
  title: condition.metaTitle,
  description: condition.metaDescription,
}

export default function SlipDiscConditionPage() {
  const relatedServicesData = SERVICES.filter((s) =>
    condition.relatedServices.includes(s.slug)
  )

  const relatedBlogs = BLOG_POSTS.filter((b) =>
    b.relatedConditions.includes('slip-disc')
  )

  const images = CONDITION_IMAGES['slip-disc'] || [
    '/images/conditions/back-pain-1.jpg',
    '/images/conditions/back-pain-2.jpg',
  ]

  return (
    <>
      <PageHero
        title={condition.title}
        subtitle={condition.description}
        tag={condition.shortTitle}
        breadcrumbItems={[
          { name: 'Conditions', url: '/conditions' },
          { name: condition.shortTitle, url: `/conditions/${condition.slug}` },
        ]}
      />

      <ConditionDetailContent
        condition={condition}
        relatedServicesData={relatedServicesData}
        relatedBlogs={relatedBlogs}
        faqs={FAQS.backPain}
        faqTitle="Slip Disc FAQs"
        blogTitle="Related Slip Disc Articles"
        images={images}
      />
    </>
  )
}
