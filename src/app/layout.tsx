import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'KodX Studio | Web Development, Branding & AI Automation',
  description:
    'KodX Studio crafts high-converting Next.js web applications, iconic brand identities, and autonomous AI lead pipelines.',
  keywords: [
    'KodX Studio',
    'Digital Agency',
    'Next.js Web Development',
    'AI Automation',
    'Branding Studio',
  ],
  authors: [{ name: 'KodX Studio' }],
  openGraph: {
    title: 'KodX Studio',
    description: 'High-performance web development, branding & AI automation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--text-primary)] antialiased min-h-screen selection:bg-[var(--accent)] selection:text-white overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScrollProvider>
            <CustomCursor />
            {children}
            <WhatsAppButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
