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
    slug: "kitchen-bath-remodeling",
    name: "Kitchen & Bath Remodeling",
    shortName: "Kitchen & Bath",
    summary: "Full gut remodels and layout upgrades for builder-grade kitchens and bathrooms.",
  },
  {
    slug: "garage-conversions-adu",
    name: "Garage Conversions & ADUs",
    shortName: "Garage & ADU",
    summary: "Turn an unused garage into living space or add a detached ADU on your lot.",
  },
  {
    slug: "foundation-settling-repair",
    name: "Foundation & Settling Repair",
    shortName: "Foundation Repair",
    summary: "Slab cracks, drywall stress cracks, and settling repair common in production-built homes.",
  },
  {
    slug: "whole-home-renovation",
    name: "Whole-Home Renovation",
    shortName: "Whole-Home Renovation",
    summary: "Floor plan modifications and open-concept conversions for repeated-floor-plan homes.",
  },
  {
    slug: "exterior-curb-appeal",
    name: "Exterior & Curb Appeal Upgrades",
    shortName: "Exterior Upgrades",
    summary: "Stucco, siding, paint, and hardscape work that sets your home apart from the subdivision.",
  },
  {
    slug: "post-warranty-repair",
    name: "Post-Warranty Repair",
    shortName: "Post-Warranty Repair",
    summary: "Independent repair work once your builder's structural warranty has expired.",
  },
];
