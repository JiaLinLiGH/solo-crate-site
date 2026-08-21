import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://JiaLinLiGH.github.io/solo-crate-site/'),
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://JiaLinLiGH.github.io/solo-crate-site/',
    siteName: 'Solo Crate',
    title: 'Solo Crate — Receipts, organized on your Mac',
    description:
      'The Mac-native receipt manager. Drag in a receipt, Apple Vision reads it locally, tags auto-apply, export a clean bundle. $49.99 once, 14-day free trial.',
    // images: add once opengraph-image.png exists
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Crate — Receipts, organized on your Mac',
    description:
      'The Mac-native receipt manager. Local OCR, tags, rule automation, $49.99 once, 14-day free trial.',
    // images: add once opengraph-image.png exists
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
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
  url: 'https://JiaLinLiGH.github.io/solo-crate-site/',
  downloadUrl:
    'https://apps.apple.com/us/app/solo-crate/id6796637773',
  softwareVersion: '1.0',
  datePublished: '2026-08-21',
  inLanguage: 'en',
  offers: {
    '@type': 'Offer',
    price: '49.99',
    priceCurrency: 'USD',
    category: 'one-time',
    availability: 'https://schema.org/InStock',
    url:
      'https://apps.apple.com/us/app/solo-crate/id6796637773',
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
