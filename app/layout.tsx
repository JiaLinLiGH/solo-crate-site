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
    'Solo Crate is a Mac-native receipt manager. Drag in a receipt, Apple Vision reads it locally, tags auto-apply, export a clean bundle. $49.99 once, 14-day free trial — no subscription.',
  keywords: [
    'Mac receipt app',
    'freelancer receipt tracker',
    'macOS expense tracker',
    'one-time purchase invoicing',
    'local-first',
    'offline',
    'bookkeeping',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Crate — Receipts, organized on your Mac',
    description:
      'The Mac-native receipt manager. Local OCR, tags, rule automation, $49.99 once, 14-day free trial.',
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
