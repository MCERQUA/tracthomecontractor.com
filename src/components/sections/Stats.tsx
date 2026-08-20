import { FadeIn } from "@/components/animations/FadeIn";

const stats = [
  { value: "20+", label: "Years of Combined Contractor Experience" },
  { value: "50", label: "States Licensed to Serve Homeowners" },
  { value: "7", label: "Core Renovation & Repair Services" },
  { value: "100%", label: "Free, No-Obligation Estimates" },
];

/** Inverted contrast band — dark punctuation on this light-dominant site. */
export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-heading font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-ink-foreground/80">{stat.label}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
