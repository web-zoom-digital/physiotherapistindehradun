import { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/clinic'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { BLOG_POSTS } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  const staticPages = [
    '',
    '/about',
    '/services',
    '/conditions',
    '/team',
    '/locations',
    '/locations/rajpur-road',
    '/locations/bhaniyawala',
    '/testimonials',
    '/blog',
    '/faq',
    '/contact',
    '/book-appointment',
    '/privacy-policy',
    '/terms',
  ]

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const serviceUrls = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const conditionUrls = CONDITIONS.map((condition) => ({
    url: `${baseUrl}/conditions/${condition.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...serviceUrls, ...conditionUrls, ...blogUrls]
}
