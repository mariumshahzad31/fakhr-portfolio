import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: "Fakhr's Portfolio",
  description: 'A cinematic premium photography portfolio with elegant event storytelling and luxury visual design.',
  metadataBase: new URL('https://fakhr-portfolio.vercel.app'),
  openGraph: {
    title: "Fakhr's Portfolio",
    description: 'A cinematic premium photography portfolio with elegant event storytelling and luxury visual design.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-[#080606] text-[#f5efe3] antialiased`}>
        {children}
      </body>
    </html>
  );
}
