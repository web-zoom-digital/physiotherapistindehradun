import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent'
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/schema/JsonLd'
import { getServiceBySlug } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'
import { SERVICE_IMAGES } from '@/data/serviceImages'

const service = getServiceBySlug('post-surgery-rehabilitation')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function PostSurgeryRehabilitationPage() {
  const relatedConditionsData = CONDITIONS.filter((c) =>
    service.relatedConditions.includes(c.slug)
  )

  const relatedBlogs = BLOG_POSTS.filter((b) =>
    b.relatedServices.includes('post-surgery-rehabilitation')
  )

  const images = SERVICE_IMAGES['post-surgery-rehabilitation']
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: service.shortTitle, url: `/services/${service.slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name={service.title}
        description={service.description}
        url={`/services/${service.slug}`}
        imageUrl={images[0]}
      />
      <FAQSchema faqs={FAQS.backPain} />

      <PageHero
        title={service.title}
        subtitle={service.description}
        tag={service.shortTitle}
        breadcrumbItems={breadcrumbItems}
        heroImage={images[0]}
        heroImageAlt={`Post-surgical physical therapy and joint replacement rehabilitation in Dehradun`}
      />

      <ServiceDetailContent
        service={service}
        relatedConditionsData={relatedConditionsData}
        relatedBlogs={relatedBlogs}
        faqs={FAQS.backPain}
        faqTitle="Post-Surgery Rehabilitation FAQs"
        blogTitle="Post-Surgical Recovery Articles"
        images={images}
      />
    </>
  )
}
