export const site = {
  businessName: "Tract Home Contractor",
  tagline: "Renovation, Additions & Repair for Production-Built Homes",
  domain: "tracthomecontractor.com",
  url: "https://www.tracthomecontractor.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

// Final list confirmed by niche research (ai/research/05-topical-map/topical-map.md)
export const services: Service[] = [
  {
    slug: "home-additions",
    name: "Home Additions & Room Additions",
    shortName: "Home Additions",
    summary: "Bump-outs, second stories, and new rooms built onto your existing tract-home footprint.",
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortName: "Kitchen Remodeling",
    summary: "Full gut remodels and layout upgrades for builder-grade production-home kitchens.",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom Remodeling",
    summary: "Primary and secondary bath remodels that upgrade builder-grade fixtures and finishes.",
  },
  {
    slug: "garage-conversions-adu",
    name: "Garage Conversions & ADUs",
    shortName: "Garage & ADU",
    summary: "Turn an unused garage into living space or add a detached ADU on your lot.",
  },
  {
    slug: "foundation-repair",
    name: "Foundation & Slab Repair",
    shortName: "Foundation Repair",
    summary: "Slab cracks and settling repair common in production-built homes once the warranty lapses.",
  },
  {
    slug: "structural-repair",
    name: "Structural, Stucco & Drywall Repair",
    shortName: "Structural Repair",
    summary: "Stress cracks, stucco damage, and structural repair work builders won't touch post-warranty.",
  },
  {
    slug: "whole-home-renovation",
    name: "Whole-Home Renovations & Floor Plan Remodeling",
    shortName: "Whole-Home Renovation",
    summary: "Floor plan modifications and open-concept conversions for repeated-floor-plan homes.",
  },
];
