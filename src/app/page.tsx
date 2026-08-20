import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "What exactly is a “tract home” and why does it need a specialist contractor?",
    answer:
      "A tract home is a production-built house — one of a repeated floor plan built by a builder like DR Horton, Lennar, KB Home, or Pulte across an entire subdivision. Once the builder's structural warranty (typically 1-10 years) expires, homeowners are on their own for additions, remodels, and repairs. We work inside these floor plans every week, so we know where the load-bearing walls, plumbing stacks, and truss systems actually are before we open a wall.",
  },
  {
    question: "Do you work outside my state?",
    answer:
      "Yes — we're licensed to serve homeowners nationwide. Coverage and crew availability vary by region, so the fastest way to confirm timing for your address is to request a free quote.",
  },
  {
    question: "Is a home addition cheaper than buying a bigger house?",
    answer:
      "In most markets, yes. An addition shares your existing foundation, roofline, and utility connections, which is why it typically costs far less per square foot than new construction or moving. A 20x20 single-story addition usually runs $70,000-$160,000 fully finished, depending on foundation type and finish level.",
  },
  {
    question: "Does homeowners insurance cover foundation or settling repair?",
    answer:
      "Rarely. Standard homeowners insurance excludes normal soil settling and typically only covers foundation damage tied to a covered peril like a burst pipe or storm. That gap is exactly why an independent contractor — not an insurance claim or the builder's expired warranty — is the usual path for settling repair.",
  },
  {
    question: "How does the free estimate process work?",
    answer:
      "We walk the property in person, review your builder's original plans if you have them, and scope the work with you on-site — at no cost and no obligation. You'll get a written, itemized quote and a realistic timeline before you sign anything.",
  },
  {
    question: "Do I need a permit for a garage conversion or home addition?",
    answer:
      "Nearly always, yes. Garage-to-living-space conversions and additions almost always require a building permit, especially when plumbing, electrical, or egress windows are involved. We handle the permitting process as part of every project.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="Renovation, Addition & Repair Specialists for Tract-Built Homes"
        subtitle="Once your builder's warranty runs out, you need a contractor who already knows your floor plan. We handle additions, remodels, garage conversions, and structural repair for homes across production-built subdivisions nationwide."
        image="/images/hero-home-addition.jpg"
        imageAlt="Room addition under construction on a tract-style home"
      />

      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="Tract-Home Renovation, Answered"
        subtitle="Real questions homeowners ask before starting a project."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
