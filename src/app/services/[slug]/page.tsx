import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { TrustBar } from "@/components/shared/TrustBar";
import { FadeIn } from "@/components/animations/FadeIn";
import { site, services } from "@/lib/site";
import { serviceContent } from "@/lib/service-content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: `${service.summary} Licensed, insured, and free on-site estimates from ${site.businessName}.`,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const content = serviceContent[slug];
  if (!service || !content) notFound();

  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={content.heroImage} alt={content.heroImageAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-36 pb-16 md:pt-48 md:pb-20 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Service</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
            {service.name}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{service.summary}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg cursor-pointer">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${site.phoneDigits}`} className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
              Call {site.phone}
            </a>
          </div>
        </div>
        <div className="relative z-10 bg-background/95 backdrop-blur-sm border-t border-border">
          <TrustBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FadeIn>
              {content.intro.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-5">{p}</p>
              ))}
            </FadeIn>

            <FadeIn delay={0.1} className="mt-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">What&apos;s Included</h2>
              <ul className="mt-5 space-y-3">
                {content.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">Who This Is For</h2>
              <ul className="mt-5 space-y-3">
                {content.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-10 p-6 rounded-xl bg-muted/50 border border-border">
              <h2 className="text-xl font-heading font-bold">Why Choose {site.businessName}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{content.whyUs}</p>
            </FadeIn>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <FadeIn direction="left">
                <h2 className="text-xl font-heading font-bold mb-4">Request a Free Quote</h2>
                <QuoteForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title={`${service.shortName} FAQs`}
        subtitle="Real questions homeowners ask before starting this project."
        faqs={content.faqs}
      />

      <CTA
        title={`Ready to Start Your ${service.shortName} Project?`}
        description="Get a free, no-obligation estimate from a contractor who already knows production-built homes."
      />
      <Footer />
    </main>
  );
}
