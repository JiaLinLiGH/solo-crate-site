import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SITE, OG_IMAGE, canonicalUrl, assetPath } from '@/lib/content';
import './globals.css';

// themeColor moved out of `metadata` in Next.js 14 — it belongs to the
// viewport export, otherwise the build warns on every route and the tag is
// dropped from the rendered head.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Solo Crate — Receipts, organized on your Mac',
    template: '%s · Solo Crate',
  },
  description:
    'Solo Crate is a Mac-native receipt manager for Schedule C filers. Drag in a receipt, Apple Vision reads it locally, tags auto-apply, export a clean bundle. $49.99 once, 14-day free trial — no subscription.',
  keywords: [
    'Mac receipt app',
    'freelancer receipt tracker',
    'macOS expense tracker',
    'one-time purchase invoicing',
    'local-first',
    'offline',
    'bookkeeping',
    'Schedule C',
    'self-employed',
    'Mac App Store',
    'Apple Vision OCR',
    'receipt scanner',
    'tax receipts',
    '1099 expense tracker',
  ],
  authors: [{ name: 'Solo Crate' }],
  creator: 'Solo Crate',
  applicationName: 'Solo Crate',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: canonicalUrl(),
    siteName: 'Solo Crate',
    title: 'Solo Crate — Receipts, organized on your Mac',
    description:
      'The Mac-native receipt manager. Drag in a receipt, Apple Vision reads it locally, tags auto-apply, export a clean bundle. $49.99 once, 14-day free trial.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Crate — Receipts, organized on your Mac',
    description:
      'The Mac-native receipt manager. Local OCR, tags, rule automation, $49.99 once, 14-day free trial.',
    images: [OG_IMAGE.url],
  },
  // NOTE: icon and manifest paths must carry basePath. Next.js does NOT
  // prepend it to `metadata.icons` / `metadata.manifest`, so a bare
  // "/favicon.ico" resolves at the domain root and 404s on GitHub Pages,
  // where the site is served from a subpath. assetPath() adds the prefix
  // while keeping the URL root-relative, so local dev and production both
  // resolve against the current origin.
  icons: {
    icon: [
      { url: assetPath('icon.svg'), type: 'image/svg+xml' },
      { url: assetPath('favicon.ico'), sizes: 'any' },
      { url: assetPath('icon-192.png'), sizes: '192x192', type: 'image/png' },
      { url: assetPath('icon-512.png'), sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [assetPath('icon.svg')],
    apple: [assetPath('apple-touch-icon.png')],
  },
  manifest: assetPath('site.webmanifest'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Absolute URL rather than a path. Next.js would otherwise resolve this
  // against metadataBase and every sub-page inherited this one value, telling
  // Google that pricing/faq/changelog/privacy/terms were all duplicates of the
  // homepage. Each sub-page now overrides it via canonicalUrl().
  alternates: {
    canonical: canonicalUrl(),
  },
  // Google Search Console ownership proof. The repo is served from a
  // `github.io` public suffix, so a DNS TXT record is not an option — we do
  // not control that zone. URL-prefix + HTML tag is the only route that
  // works here; the same token also verifies the matching HTML file.
  verification: {
    google: 'yGW9YBVeIyg9rpZGfDdmjAeHH301pqMsxWIFgqIi3MU',
  },
};

// JSON-LD structured data — enables Google rich result "Software App" card
// with price, OS, install link. Real aggregateRating should be added once
// App Store ratings accumulate.
const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Solo Crate',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Expense Tracking, Receipt Management',
  operatingSystem: 'macOS 14.0 Sonoma or later',
  description:
    'Mac-native receipt manager for self-employed Americans. Local Apple Vision OCR, automatic Schedule C tagging, CPA-ready export. 100% offline, no account, no subscription.',
  url: canonicalUrl(),
  downloadUrl: SITE.appStoreUrl,
  image: OG_IMAGE.url,
  softwareVersion: '1.0',
  datePublished: '2026-08-21',
  inLanguage: 'en',
  offers: {
    '@type': 'Offer',
    price: '49.99',
    priceCurrency: 'USD',
    category: 'one-time',
    availability: 'https://schema.org/InStock',
    url: SITE.appStoreUrl,
  },
  author: {
    '@type': 'Organization',
    name: 'Solo Crate',
  },
};

// Inline script that runs before React hydrates — prevents theme FOUC.
const themeBootstrapScript = `
(function() {
  try {
    var t = localStorage.getItem('solo-crate-theme');
    if (!t) t = 'system';
    var sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var resolved = t === 'system' ? sys : t;
    if (resolved === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
