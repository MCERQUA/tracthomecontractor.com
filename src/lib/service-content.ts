import type { FAQItem } from "@/components/sections/FAQ";

export interface ServiceContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  whatsIncluded: string[];
  whoItsFor: string[];
  whyUs: string;
  faqs: FAQItem[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "home-additions": {
    slug: "home-additions",
    heroImage: "/images/service-additions.jpg",
    heroImageAlt: "Room addition framed onto a tract-style home",
    intro: [
      "Most production-built subdivisions were laid out with one or two floor plans repeated across every lot. That efficiency is great for a builder's bottom line, but it means the house you bought may not have the room you need ten years later. A home addition solves that without the cost, disruption, or capital gains complications of moving.",
      "Because a tract home already has a foundation, roofline, and utility connections in place, an addition is almost always cheaper per square foot than new construction. We tie new framing into your existing roof trusses, match siding and stucco texture, and route plumbing and electrical to blend with the original build — so the finished space looks like it was always part of the house, not bolted on.",
    ],
    whatsIncluded: [
      "Single-story bump-outs and room additions (bedrooms, offices, primary suites)",
      "Second-story additions where the existing foundation and framing allow it",
      "Sunrooms and enclosed patio conversions",
      "Foundation, framing, roofing, and exterior finish matched to your existing home",
      "Full permitting and inspection coordination with your local municipality",
      "HVAC, electrical, and plumbing extension into the new space",
    ],
    whoItsFor: [
      "Growing families who've outgrown a 3-bedroom production floor plan",
      "Homeowners who want a dedicated home office or primary suite without moving",
      "Anyone who's priced out a move and found an addition more cost-effective per square foot",
    ],
    whyUs:
      "A 20x20 (400 sq ft) single-story addition typically runs $70,000–$160,000 fully finished, and most of that variance comes down to foundation type and finish level — exactly the kind of estimate that goes wrong when a contractor hasn't worked in production-built subdivisions before. We have, which means fewer change orders once demo starts.",
    faqs: [
      {
        question: "How much does a 1,000 sq ft house addition cost?",
        answer: "Typically $150,000–$350,000+, depending on foundation type, finish level, and whether it's a second-story addition tying into existing framing.",
      },
      {
        question: "Is it cheaper to build a house or add an addition?",
        answer: "An addition is almost always cheaper per square foot than new construction, since it shares an existing foundation, roofline, and utility connections.",
      },
      {
        question: "What is the most expensive part of an addition to a house?",
        answer: "Foundation work and HVAC/electrical tie-ins, followed by roofing work to match the existing structure — this is where production-home experience saves money.",
      },
      {
        question: "Is $100,000 enough to renovate a house?",
        answer: "Enough for a substantial whole-home renovation (kitchen, baths, flooring) on a mid-size tract home. A full addition-plus-renovation combo can exceed it, which is why we scope every project with a written estimate before you commit.",
      },
    ],
  },
  "kitchen-remodeling": {
    slug: "kitchen-remodeling",
    heroImage: "/images/service-kitchen-bath.jpg",
    heroImageAlt: "Mid-renovation kitchen remodel in a production-built home",
    intro: [
      "Production builders use builder-grade cabinets, laminate counters, and a layout optimized for construction speed, not the way you actually cook. A kitchen remodel is the single highest-ROI project most tract-home owners take on — and the one where getting the sequence and permitting wrong costs the most.",
      "We work from your existing plumbing and electrical rough-in when it makes sense to control cost, or relocate them when an open-concept layout is worth the investment. Either way, you get a fixed, itemized quote before demo starts — not a number that grows once the drywall comes down.",
    ],
    whatsIncluded: [
      "Full cabinet replacement or refacing",
      "Countertop replacement (quartz, granite, butcher block)",
      "Layout changes, including removing non-load-bearing walls for an open-concept feel",
      "Plumbing and electrical relocation for islands and updated appliance placement",
      "Flooring, backsplash, and lighting upgrades",
      "Appliance package coordination if you're upgrading at the same time",
    ],
    whoItsFor: [
      "Owners of a 10+ year old tract home still running original builder-grade cabinets and counters",
      "Anyone planning to sell in the next few years who wants the highest-ROI renovation first",
      "Households who've outgrown a closed-off, builder-standard kitchen layout",
    ],
    whyUs:
      "Mid-range full kitchen remodels typically run $25,000–$60,000 depending on layout changes, cabinetry, and countertop material — cosmetic refreshes (paint, hardware, counters only) can land under $15,000. We'll tell you honestly which tier fits your budget and your home's resale ceiling before you sign anything.",
    faqs: [
      {
        question: "What is a realistic budget for a kitchen remodel?",
        answer: "Mid-range full kitchen remodels typically run $25,000–$60,000 depending on layout changes, cabinetry, and countertop material; cosmetic refreshes can land under $15,000.",
      },
      {
        question: "Is $30,000 enough for a kitchen remodel?",
        answer: "Yes, for a mid-grade remodel with new cabinets, countertops, and appliances if the layout stays the same. Moving plumbing or walls pushes the number up.",
      },
      {
        question: "In what order should a kitchen remodel be done?",
        answer: "Demo, rough plumbing/electrical, drywall, flooring, cabinets, countertops, backsplash, appliances, then final punch list — we sequence every project this way to avoid rework.",
      },
    ],
  },
  "bathroom-remodeling": {
    slug: "bathroom-remodeling",
    heroImage: "/images/service-kitchen-bath.jpg",
    heroImageAlt: "Bathroom remodel in progress with new tile and fixtures",
    intro: [
      "Builder-grade bathrooms in production homes tend to share the same fiberglass tub-shower combo, laminate vanity, and minimal tile package across an entire subdivision. A bathroom remodel is where that standardization is most visible — and most worth fixing, whether it's the primary suite or a secondary bath that's never been touched since move-in.",
      "We handle everything from a cosmetic refresh (new vanity, fixtures, and tile) to a full gut-and-replace with a reworked layout, walk-in shower conversion, or double-vanity upgrade.",
    ],
    whatsIncluded: [
      "Vanity, countertop, and fixture replacement",
      "Tub-to-shower conversions and curbless/walk-in shower builds",
      "Tile work — floor, shower surround, and accent tile",
      "Layout changes, including double-vanity additions where space allows",
      "Plumbing relocation for reconfigured layouts",
      "Ventilation, lighting, and waterproofing brought up to current code",
    ],
    whoItsFor: [
      "Owners of a primary bath still on the original builder fiberglass tub-shower unit",
      "Anyone planning to age in place who wants a curbless, walk-in shower",
      "Households remodeling a secondary or kids' bathroom that's never been updated",
    ],
    whyUs:
      "A cosmetic refresh (vanity, fixtures, tile, paint) is often enough for $10,000, while a full gut-and-replace in a similar footprint typically runs $18,000–$35,000 depending on tile, fixtures, and whether plumbing moves. We scope the job on-site so you know which tier you're actually budgeting for.",
    faqs: [
      {
        question: "Is $10,000 enough for a bathroom remodel?",
        answer: "Enough for a cosmetic refresh — vanity, fixtures, tile, paint. A full gut remodel with layout changes typically runs $15,000–$30,000+.",
      },
      {
        question: "How much does it cost to rip out and replace a bathroom?",
        answer: "A full gut-and-replace in a similar footprint typically runs $18,000–$35,000, depending on tile, fixtures, and whether plumbing moves.",
      },
      {
        question: "Is it legal to have a bathroom in the garage?",
        answer: "Yes, when permitted and inspected — it requires proper venting, water supply, and sewer or septic tie-in per local code. We handle this permitting on garage-conversion projects that add a bathroom.",
      },
    ],
  },
  "garage-conversions-adu": {
    slug: "garage-conversions-adu",
    heroImage: "/images/service-garage-adu.jpg",
    heroImageAlt: "Garage conversion into finished living space",
    intro: [
      "An attached garage on a production-built home is one of the fastest, most cost-effective ways to add real living space, because the structure, foundation, and roof already exist. We convert garages into home offices, in-law suites, rec rooms, and full accessory dwelling units (ADUs) — and handle the permitting that nearly every jurisdiction requires for the conversion.",
      "If your lot has room for a detached structure instead, we also build standalone ADUs — a growing option for tract-home owners who want rental income or a private space for family without giving up their garage.",
    ],
    whatsIncluded: [
      "Garage-to-living-space conversions (insulation, drywall, flooring, HVAC extension)",
      "Bathroom and kitchenette additions where code and layout allow",
      "Egress window installation to meet bedroom code requirements",
      "Detached ADU design and construction on lots with adequate setback",
      "Full permitting, including any required garage-door infill and exterior finish matching",
      "Electrical panel upgrades where added load requires it",
    ],
    whoItsFor: [
      "Homeowners who don't park in the garage and want the square footage back",
      "Families needing an in-law suite or adult child's space with some privacy",
      "Owners exploring rental income or a home office separate from the main house",
    ],
    whyUs:
      "Garage conversions are typically 30–50% cheaper than a comparable addition since the structure, foundation, and roof already exist — the average project runs $15,000–$40,000 depending on whether you're adding plumbing, insulation, and HVAC. We'll tell you upfront whether your garage or your lot is the better path to the space you need.",
    faqs: [
      {
        question: "Is it cheaper to convert a garage or build an addition?",
        answer: "Garage conversions are typically 30–50% cheaper since the structure, foundation, and roof already exist.",
      },
      {
        question: "What is the average cost of a garage conversion?",
        answer: "$15,000–$40,000 depending on whether you're adding plumbing/a bathroom, insulation, and HVAC.",
      },
      {
        question: "Do I need permission to convert a garage to a bedroom?",
        answer: "Yes — nearly every jurisdiction requires a building permit, especially if you're adding plumbing or changing egress. We handle this as part of every conversion.",
      },
    ],
  },
  "foundation-repair": {
    slug: "foundation-repair",
    heroImage: "/images/service-foundation-repair.jpg",
    heroImageAlt: "Crew performing slab foundation repair work",
    intro: [
      "Production-built subdivisions are often built on compacted or engineered fill, which settles unevenly over the first decade or two. Slab cracks, sticking doors, and sloping floors are common in tract homes once that settling catches up with the structure — and it's rarely covered by homeowners insurance or the builder's expired structural warranty.",
      "We diagnose the actual cause before quoting a fix: soil movement, plumbing leaks under-slab, or drainage issues are each treated differently. Most residential foundation repairs are completed in 1-3 days and don't require you to leave the house.",
    ],
    whatsIncluded: [
      "Slab crack repair and structural pier installation",
      "Pier-and-beam foundation leveling",
      "Drainage correction to stop the underlying cause of settling",
      "Interior repair coordination (drywall cracks, door/window realignment) after the foundation is stabilized",
      "Pre-purchase and pre-listing foundation inspections",
    ],
    whoItsFor: [
      "Homeowners noticing new cracks, sticking doors, or sloping floors",
      "Anyone whose builder's structural warranty has expired",
      "Sellers who need a foundation issue resolved before listing",
    ],
    whyUs:
      "Repair or stabilization of an existing slab typically runs $3,000–$15,000 depending on severity and number of piers — far less than the $20,000–$50,000+ cost of new foundation construction. Left unaddressed, settling gets more expensive over time and can affect resale value, which is why we always start with a written, itemized diagnosis, not a sales pitch.",
    faqs: [
      {
        question: "Does homeowners insurance cover foundation repair?",
        answer: "Rarely, unless the damage stems from a covered peril like a burst pipe or storm. Normal soil settling is typically excluded — this is exactly why an independent contractor, not a warranty claim, is usually the path once the builder's window has closed.",
      },
      {
        question: "Can you live in a house while the foundation is being repaired?",
        answer: "In most cases, yes — especially with pier-and-beam or slab pier methods. Timeline is usually 1-3 days for typical residential jobs.",
      },
      {
        question: "How much is a foundation for a 2,000 sq ft house?",
        answer: "New foundation construction runs $20,000–$50,000+. Repair or stabilization of an existing slab is typically far less, $3,000–$15,000 depending on severity and number of piers.",
      },
    ],
  },
  "structural-repair": {
    slug: "structural-repair",
    heroImage: "/images/service-exterior-upgrade.jpg",
    heroImageAlt: "Stucco and exterior structural repair on a production-built home",
    intro: [
      "Once a production builder's structural warranty lapses — often 1 to 10 years after closing — homeowners are on their own for the stress cracks, stucco damage, and drywall separation that show up as a tract home settles into its lot. This is the exact category of work builders point homeowners away from once the paperwork expires.",
      "We handle structural repair, stucco patching and re-coating, and drywall crack repair as a coordinated job — not three separate contractors — so the cosmetic fix actually holds once the underlying movement is addressed.",
    ],
    whatsIncluded: [
      "Stress-crack diagnosis (cosmetic vs. structural) and repair",
      "Stucco patching, re-coating, and color matching to the existing exterior",
      "Drywall crack repair tied to foundation or framing movement",
      "Structural framing repair where inspection finds it necessary",
      "Post-repair inspection documentation for resale or refinance purposes",
    ],
    whoItsFor: [
      "Homeowners whose builder's structural warranty has expired",
      "Anyone seeing recurring stucco or drywall cracks in the same location",
      "Sellers who need documented structural repair before closing",
    ],
    whyUs:
      "This category of repair carries some of the highest cost-per-job variance in residential construction, because the visible crack is rarely the whole story. We diagnose before we quote — every estimate separates the structural cause from the cosmetic fix, so you're not paying to patch the same crack twice.",
    faqs: [
      {
        question: "Is foundation or structural repair worth the cost?",
        answer: "Yes — unaddressed structural movement gets more expensive to fix over time and can affect resale value and safety. Catching it early is almost always cheaper.",
      },
      {
        question: "Will my builder fix structural cracks after the warranty expires?",
        answer: "Typically no. Most production builders limit structural coverage to a defined warranty window (often 1-10 years) and decline post-warranty claims, which is exactly the work we specialize in.",
      },
      {
        question: "Can stucco repair be color-matched to my existing exterior?",
        answer: "Yes — we match texture and color to the existing stucco so the repair isn't visible from the street, which matters for resale.",
      },
    ],
  },
  "whole-home-renovation": {
    slug: "whole-home-renovation",
    heroImage: "/images/hero-team-jobsite.jpg",
    heroImageAlt: "Crew working on a whole-home renovation project",
    intro: [
      "Sometimes the right move isn't one room — it's the whole house. Production floor plans are built for construction efficiency, which usually means choppy, closed-off layouts. A whole-home renovation lets us remove non-structural walls, reroute traffic flow, and update every finish at once, which is often more cost-effective than renovating room by room over several years.",
      "We scope these projects in phases so you always know what's next and what it costs, whether that's a full kitchen-through-baths renovation or a structural open-concept conversion that touches the whole footprint.",
    ],
    whatsIncluded: [
      "Open-concept conversions (removing non-load-bearing walls between kitchen, dining, living)",
      "Whole-house flooring, paint, and trim updates",
      "Coordinated kitchen and bathroom renovations as one phased project",
      "Structural floor-plan modifications where load-bearing walls are involved",
      "Whole-house electrical and HVAC updates where the scope requires it",
    ],
    whoItsFor: [
      "Owners of an older tract home who want to update everything at once rather than room by room",
      "Households converting a closed-off production floor plan to open-concept",
      "Buyers of a dated tract home planning a renovation before moving in",
    ],
    whyUs:
      "A common budgeting rule of thumb: don't spend more than roughly 30% of the home's value on a whole-home renovation, and $100,000 is enough for a substantial whole-home renovation — kitchen, baths, and flooring — on a mid-size tract home, though a full addition-plus-renovation combo can exceed it. We help you sequence the project to protect that resale ROI, not just spend the budget.",
    faqs: [
      {
        question: "What is the 30% rule for renovations?",
        answer: "A common budgeting rule of thumb: don't spend more than roughly 10-15% of the home's value on any single room, or more than about 30% total on a whole-home renovation relative to home value, to protect resale ROI.",
      },
      {
        question: "Is $100,000 enough to renovate a house?",
        answer: "Enough for a substantial whole-home renovation (kitchen + baths + flooring) on a mid-size tract home. A full addition-plus-renovation combo can exceed it.",
      },
      {
        question: "What is the best time of year to remodel?",
        answer: "Fall and winter for interior work, since contractor schedules open up after summer; spring and summer for exterior and addition work that involves foundation excavation.",
      },
    ],
  },
};
