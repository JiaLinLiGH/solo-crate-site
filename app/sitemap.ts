import { canonicalUrl } from '@/lib/content';
import type { MetadataRoute } from 'next';

// next.config.mjs sets `trailingSlash: true`, so the URL actually served for
// `/pricing` is `/pricing/`. Listing the slashless form here made every
// sitemap entry pay a 301 before Google could see it, and contradicted the
// canonical tag. canonicalUrl() emits the served form, trailing slash included.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: canonicalUrl(),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: canonicalUrl('pricing/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: canonicalUrl('faq/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: canonicalUrl('changelog/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: canonicalUrl('privacy/'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: canonicalUrl('terms/'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
