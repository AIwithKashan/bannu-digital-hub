import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { TransitionProvider } from "@/components/layout/TransitionProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE } from "@/data/site";
import { OG_IMAGE, orgJsonLd, websiteJsonLd } from "@/lib/seo";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});
const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Bannu Digital Hub | Freelancers, Developers and Designers in Bannu",
    template: "%s | Bannu Digital Hub",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Bannu Digital Hub",
    "Bannu freelancers",
    "Bannu developers",
    "Khyber Pakhtunkhwa tech community",
    "freelancing Pakistan",
    "Shopify roadmap Roman Urdu",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_PK",
    url: SITE.url,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE.name}: ${SITE.tagline}` }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/brand/mark-256.png?v=2", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/brand/mark-256.png?v=2",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f4f7f3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const motionBoot = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([orgJsonLd, websiteJsonLd]) }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only-focusable fixed left-4 top-4 z-[300] rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <TransitionProvider>
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </TransitionProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
