import { SITE } from '@/lib/content';
import type { MetadataRoute } from 'next';

// Match sitemap.ts pattern: full absolute URL including basePath.
// In Next.js 14 static export, this is the only pattern that produces
// correct loc values in the rendered XML.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL(
      '/solo-crate-site/sitemap.xml',
      SITE.url.replace(/\/$/, '')
    ).toString(),
  };
}
