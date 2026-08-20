import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { ShieldCheck, HardHat, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.businessName} specializes in renovation, addition, and repair work for production and tract-built homes, backed by Contractors Choice Agency.`,
};

const values = [
  {
    icon: HardHat,
    title: "We Know Production Construction",
    text: "Repeated floor plans, standardized framing, builder-grade finishes &mdash; we've worked inside tract-built subdivisions long enough to know exactly what's behind the drywall before we open it.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured, Every Job",
    text: "Every project runs under full licensing and insurance coverage, verified before crews step on site &mdash; no exceptions.",
  },
  {
    icon: Handshake,
    title: "Written Quotes, No Surprise Change Orders",
    text: "You get an itemized estimate before demo starts and a single project lead through completion, not a shifting number and a rotating cast of subs.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Built for Homes the Builder Left Behind
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Production builders like DR Horton, Lennar, KB Home, and Pulte build fast, efficient,
              repeated floor plans across entire subdivisions &mdash; and back them with a structural
              warranty that typically runs out somewhere between year one and year ten. After that,
              homeowners are on their own for additions, remodels, and repair work the builder won't
              touch anymore.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {site.businessName} exists to fill that gap. We're backed by Contractors Choice
              Agency, bringing over 20 years of former-contractor experience to every estimate we
              write, and we specialize specifically in the construction patterns, framing systems,
              and finish packages used in production-built homes &mdash; not general remodeling with
              a tract-home job mixed in.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about-crew.jpg" alt={`${site.businessName} crew on a residential job site`} fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How We Work</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Stats />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Serving Homeowners Nationwide</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're licensed to take on projects across the country. Crew availability and start
              dates vary by region &mdash; the fastest way to confirm timing for your address is a
              free quote request.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
