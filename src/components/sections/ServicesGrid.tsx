import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { services } from "@/lib/site";

const serviceImages: Record<string, string> = {
  "home-additions": "/images/service-additions.jpg",
  "kitchen-bath-remodeling": "/images/service-kitchen-bath.jpg",
  "garage-conversions-adu": "/images/service-garage-adu.jpg",
  "foundation-settling-repair": "/images/service-foundation-repair.jpg",
  "whole-home-renovation": "/images/hero-team-jobsite.jpg",
  "exterior-curb-appeal": "/images/service-exterior-upgrade.jpg",
  "post-warranty-repair": "/images/service-foundation-repair.jpg",
};

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Built for Homes the Builder Left Behind
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Once your production builder&apos;s warranty runs out, you need a contractor who knows
            tract-home construction inside and out. That&apos;s us.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">{service.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
