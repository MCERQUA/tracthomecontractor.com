import { ShieldCheck, FileCheck, PhoneCall, DollarSign } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const signals = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    text: "Every project is backed by full licensing and insurance coverage &mdash; verified before crews step on site.",
  },
  {
    icon: FileCheck,
    title: "Written Estimates, No Surprises",
    text: "You get an itemized quote before work begins, not a verbal number that changes once demo starts.",
  },
  {
    icon: PhoneCall,
    title: "A Real Project Lead",
    text: "One point of contact from first walkthrough to final punch list &mdash; not a call center.",
  },
  {
    icon: DollarSign,
    title: "Backed by Contractors Choice Agency",
    text: "20+ years of former-contractor experience behind every estimate we write.",
  },
];

/** Real, verifiable trust markers — deliberately no fabricated star ratings or named testimonials. */
export function TrustSignals() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What to Expect</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Working With Us, Start to Finish</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal) => (
            <StaggerItem key={signal.title}>
              <div className="p-6 rounded-xl bg-card border border-border h-full text-center">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{signal.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: signal.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
