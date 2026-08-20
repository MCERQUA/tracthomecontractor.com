import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Free On-Site Estimate",
    text: "We walk the property, review your builder's original plans if available, and scope the work in person &mdash; no cost, no obligation.",
  },
  {
    number: "02",
    title: "Written Quote & Timeline",
    text: "You get a detailed, itemized quote and a realistic start-to-finish timeline before any contract is signed.",
  },
  {
    number: "03",
    title: "Permits & Scheduling",
    text: "We pull the required permits for your municipality and schedule crews so work happens on the dates we agreed to.",
  },
  {
    number: "04",
    title: "Build & Walkthrough",
    text: "Your project lead keeps you updated at every phase, and we do a final walkthrough together before we call it done.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From First Call to Final Walkthrough</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
