import { SITE } from '@/lib/content';
import type { MetadataRoute } from 'next';

// In Next.js 14 static export with basePath, the simplest working pattern is
// to pass the full absolute URL (including basePath) for each entry. Next.js
// passes these through verbatim into the XML without further mutation.
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) =>
    new URL(path, SITE.url.replace(/\/$/, '')).toString();
  return [
    {
      url: abs('/solo-crate-site'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: abs('/solo-crate-site/pricing'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: abs('/solo-crate-site/faq'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: abs('/solo-crate-site/changelog'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: abs('/solo-crate-site/privacy'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: abs('/solo-crate-site/terms'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
