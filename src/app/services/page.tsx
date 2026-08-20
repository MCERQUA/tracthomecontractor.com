import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Home additions, kitchen and bathroom remodeling, garage conversions, foundation repair, structural repair, and whole-home renovation for production and tract-built homes.",
};

const serviceImages: Record<string, string> = {
  "home-additions": "/images/service-additions.jpg",
  "kitchen-remodeling": "/images/service-kitchen-bath.jpg",
  "bathroom-remodeling": "/images/service-kitchen-bath.jpg",
  "garage-conversions-adu": "/images/service-garage-adu.jpg",
  "foundation-repair": "/images/service-foundation-repair.jpg",
  "structural-repair": "/images/service-exterior-upgrade.jpg",
  "whole-home-renovation": "/images/hero-team-jobsite.jpg",
};

export default function ServicesIndexPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Built for Production & Tract-Built Homes</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Seven core services covering the renovation, addition, and repair work homeowners need
              once a builder's warranty runs out.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={serviceImages[service.slug]} alt={service.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">{service.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground flex-grow">{service.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        View service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
