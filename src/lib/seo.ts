import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const OG_IMAGE = "/og.png";

type Meta = { title: string; description: string; path: string; image?: string; noindex?: boolean };

export function pageMeta({ title, description, path, image = OG_IMAGE, noindex }: Meta): Metadata {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_PK",
      url,
      title: `${title} | ${SITE.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE.name}: ${SITE.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
  };
}

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: ["BDH", "Bannu Digital Community", "Bannu Tech Hub"],
  url: SITE.url,
  logo: `${SITE.url}/brand/logo-full.png`,
  image: `${SITE.url}${OG_IMAGE}`,
  description: SITE.description,
  founder: { "@type": "Person", name: SITE.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postal,
    addressCountry: SITE.address.countryCode,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.address.lat, longitude: SITE.address.lng },
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    telephone: SITE.phone,
    contactType: "community support",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu", "Pashto"],
  },
  sameAs: [SITE.links.whatsapp, SITE.links.facebook, SITE.links.instagram, SITE.links.tiktok, SITE.links.x],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
};

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.path}`,
  })),
});
