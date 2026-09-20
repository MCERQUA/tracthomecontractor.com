import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: {
    default: `${site.businessName} — Renovations, Additions & Repair for Tract-Built Homes`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "Licensed general contractor specializing in production and tract-built homes: additions, kitchen & bath remodels, garage conversions, foundation repair, and post-warranty work. Free quotes nationwide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — Renovations, Additions & Repair for Tract-Built Homes`,
    description:
      "Licensed general contractor specializing in production and tract-built homes: additions, remodels, garage conversions, foundation repair, and post-warranty work.",
    images: [
      {
        url: "/images/hero-home-addition.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — Renovations, Additions & Repair for Tract-Built Homes`,
    description:
      "Licensed general contractor specializing in production and tract-built homes: additions, remodels, garage conversions, foundation repair, and post-warranty work.",
    images: ["/images/hero-home-addition.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.businessName,
  description:
    "General contractor specializing in renovations, additions, and repairs for production and tract-built homes.",
  url: site.url,
  telephone: site.phoneDigits,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
