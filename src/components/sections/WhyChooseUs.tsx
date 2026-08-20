import { Home, Ruler, Wrench, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: Home,
    title: "We Know Production Floor Plans",
    text: "Tract homes share repeated floor plans, standardized framing, and builder-grade finishes. We've worked inside them for years, so we know where the load-bearing walls are before we open a wall.",
  },
  {
    icon: Ruler,
    title: "Additions That Match the Original Build",
    text: "Room additions and bump-outs are tied into the existing roofline, siding, and stucco so the finished work looks original to the house, not bolted on.",
  },
  {
    icon: Wrench,
    title: "Post-Warranty Repair Specialists",
    text: "Once a builder's 1-10 year structural warranty lapses, homeowners are on their own for settling cracks, stucco issues, and drywall stress. That's exactly the work we specialize in.",
  },
  {
    icon: Clock,
    title: "Free Estimates, Clear Timelines",
    text: "Every project starts with a free, no-obligation on-site estimate and a written timeline &mdash; no surprise change orders once work begins.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Homeowners Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Contractors Who Speak Tract-Home</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
