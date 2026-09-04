import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ConditionDetailContent } from '@/components/sections/ConditionDetailContent'
import { getConditionBySlug } from '@/data/conditions'
import { SERVICES } from '@/data/services'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'
import { CONDITION_IMAGES } from '@/data/conditionImages'

const condition = getConditionBySlug('back-pain')!

export const metadata: Metadata = {
  title: condition.metaTitle,
  description: condition.metaDescription,
}

export default function BackPainConditionPage() {
  const relatedServicesData = SERVICES.filter((s) =>
    condition.relatedServices.includes(s.slug)
  )

  const relatedBlogs = BLOG_POSTS.filter((b) =>
    b.relatedConditions.includes('back-pain')
  )

  const images = CONDITION_IMAGES['back-pain'] || [
    '/images/services/orthopedic-1.jpg',
    '/images/services/orthopedic-2.jpg',
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
        faqTitle="Back Pain FAQs"
        blogTitle="Related Back Pain Articles"
        images={images}
      />
    </>
  )
}
