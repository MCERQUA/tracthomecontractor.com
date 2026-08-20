# Stitch prompts — exact text sent (preserved for regeneration)

Project: `projects/17629173161326803576` · Design system: `assets/14776273131002843916`

## Design system designMd (create_design_system)

```
TRACT HOME CONTRACTOR — design brief.
Site type: local home-service general-contractor lead-gen (renovation/repair of tract/production-built homes: additions, remodels, ADU/garage conversions, foundation & settling repair, post-builder-warranty repair). Audience: homeowners in master-planned subdivisions. Goal: phone calls + quote-form leads, not e-commerce.
Palette (STRICT — warm earth tones + natural green only, NO purple/pink/blue):
  primary/brand: Terracotta #C1622D
  secondary/dark accent: Rust #8F3A20
  tertiary accent: Amber/Gold #D9A441
  support accent: Copper #B87333
  natural accent: Sage Green #6B7A4F
  backgrounds: warm off-white #FAF6F1, warm sand #F1E9DF, charcoal-brown text #2B241E
Mode: LIGHT, bright, corporate, professional. White/light-sand backgrounds dominate; use the rust/terracotta as an inverted DARK band for at least one section per page (trust bar, testimonials, or final CTA) for contrast punctuation — not a dark-dominant site.
Section rhythm: NO two adjacent sections share the same background treatment — alternate base/white, tinted sand, inverted dark-rust band, and a full-bleed photo band with a scrim.
Hero: real job-site photography feel (crew in branded gear, tract-home exteriors mid-addition, trucks/equipment) — never generic stock "happy family" photography. If hero text sits over a photo, the darkening scrim must stay at or above 50% opacity behind the copy so headline text stays fully legible.
Trust signals required in the hero/trust bar: phone number large + tappable, "Licensed & Insured", years in business, star rating + review count, service-area coverage.
Primary CTA language: "Call Now" / "Get a Free Quote" with the phone number visible on or beside the button.
Typography: confident, grounded, readable — a strong geometric-sans headline paired with a clean humanist-sans body. Rounded-but-not-toylike corners (moderate radius, not pill-shaped everywhere).
Brand name shown in mockups: "Tract Home Contractor" (a Contractors Choice Agency company).
```

(theme: colorMode LIGHT, headlineFont SPACE_GROTESK, bodyFont WORK_SANS, roundness ROUND_TWELVE, customColor #C1622D)

## Home page prompt

```
Home page for "Tract Home Contractor", a general contracting company specializing in renovating, repairing, and expanding production/tract-built homes inside master-planned subdivisions (additions, remodels, garage-to-ADU conversions, foundation & settling repair, post-builder-warranty repair). Desktop layout, in order top to bottom:
1. Sticky top nav: logo wordmark left, links (Services, About, Service Areas, Blog, Contact), phone number "844-967-5247" prominent top-right next to a terracotta "Get a Free Quote" button.
2. HERO: full-bleed photo of a construction crew in branded gear working on a tract-home addition, dark rust scrim at ≥50% opacity under the headline text. Headline: value prop about trusted tract-home renovation/repair. Subhead. Two CTAs: "Call 844-967-5247" and "Get a Free Quote". Trust bar directly under hero: "Licensed & Insured" · "20+ Years Experience" · "4.9★ 300+ Reviews" · service-area chip.
3. Services grid: 6 cards (Home Additions, Full Remodels, Garage/ADU Conversion, Foundation & Settling Repair, Post-Warranty Repair, Exterior & Siding), icon + short description + "Learn More" link each, on a warm sand tinted background band.
4. Why Choose Us: 4 columns with icons on white band (former-builder expertise, licensed all-trade crews, transparent quotes, warranty on workmanship).
5. Process/How It Works: 4-step horizontal timeline (Free Consultation → Quote & Permits → Build → Final Walkthrough) on white band.
6. INVERTED dark rust band: stats row (homes renovated, years in business, avg rating, service areas) in large light-colored numerals.
7. Testimonials: 3 review cards with star ratings on sand-tinted band.
8. FAQ accordion (5 questions) on white band.
9. Final CTA band: full-bleed rust/terracotta gradient, "Ready to start your renovation?" headline + phone number + quote button.
10. Footer: dark charcoal-brown, logo, nav links, service areas, contact (phone/email/address), social icons, license number line.
Strict palette: terracotta #C1622D, rust #8F3A20, amber/gold #D9A441, copper #B87333, sage green #6B7A4F, warm off-white #FAF6F1, warm sand #F1E9DF, charcoal-brown text #2B241E. No purple, pink, or blue anywhere. No emoji — use clean line icons.
```

## Service page prompt (Home Additions)

```
Service detail page for "Tract Home Contractor" — this one for "Home Additions". Desktop layout, SAME nav/footer style as the home page (sticky nav with phone CTA, dark charcoal-brown footer), in order:
1. Sticky nav (same as home page).
2. Page hero: shorter than homepage hero, full-bleed photo of a tract-home room addition under construction, rust scrim ≥50% opacity, breadcrumb (Home / Services / Home Additions), H1 "Home Additions", subhead, phone + quote CTA.
3. "What's Included" section: 2-column layout — left = descriptive copy about the addition process (room additions, second-story additions, sunrooms, in-law suites), right = bulleted checklist card on sand-tinted background.
4. "Who This Is For" band on white background — 3 short cards (growing families, aging-in-place, home-value increase).
5. INVERTED dark rust "Why Choose Us For This" band — 4 icon+stat items.
6. Before/After style image gallery band (3 image placeholders) on sand-tinted background.
7. FAQ accordion specific to home additions (4 questions) on white band.
8. Inline quote CTA band: full-bleed terracotta gradient with a compact 4-field quote form (Name, Phone, Service dropdown, Address) — "Get a Free Quote" button.
9. Footer (same as home page).
Same strict earth-tone palette as before: terracotta #C1622D, rust #8F3A20, amber/gold #D9A441, copper #B87333, sage green #6B7A4F, warm off-white #FAF6F1, warm sand #F1E9DF, charcoal-brown #2B241E. No purple/pink/blue. No emoji.
```

## About page prompt

```
About page for "Tract Home Contractor". Desktop layout, SAME nav/footer as home page, in order:
1. Sticky nav (same as home page).
2. Page hero: shorter, photo of the founder/crew at a job site, rust scrim, H1 "About Tract Home Contractor", subhead about being former production-home builders turned independent contractors.
3. Our Story: 2-column on white band — narrative copy left, stat callout card right (years in business, homes completed, licensed states/counties).
4. Our Values: 3-4 icon cards on sand-tinted band (craftsmanship, transparency, respect for your home, warranty-backed work).
5. Meet the Team band on white — 3-4 team member cards (photo placeholder, name, role, years of experience) — realistic contractor roles (Project Manager, Lead Carpenter, Estimator).
6. INVERTED dark rust band: licensing & credentials strip (License #, Insured, Bonded, BBB, years).
7. Community/Service Area band on sand background — brief text + area map placeholder.
8. Final CTA band: terracotta gradient, phone + quote CTA.
9. Footer (same as home page).
Same strict earth-tone palette: terracotta #C1622D, rust #8F3A20, amber/gold #D9A441, copper #B87333, sage green #6B7A4F, warm off-white #FAF6F1, warm sand #F1E9DF, charcoal-brown #2B241E. No purple/pink/blue. No emoji.
```

## Contact / Quote page prompt

```
Contact / Get a Quote page for "Tract Home Contractor". Desktop layout, SAME nav/footer as home page, in order:
1. Sticky nav (same as home page).
2. Page hero: shorter, no photo needed OR light sand background — H1 "Get Your Free Quote", subhead about fast response, phone number large "844-967-5247" as tel link.
3. 2-column main section on white band: LEFT = multi-field quote form card (Name, Phone, Email, Address, Service Needed dropdown with the 6 services, Project Details textarea, Submit button "Get My Free Quote") with a honeypot-style subtle note; RIGHT = contact info card (phone, email josh@contractorschoiceagency.com, HQ address 12220 E Riggs Rd, Chandler, AZ 85249, business hours, service-area list) plus trust badges (Licensed & Insured, BBB, 4.9 stars).
4. Sand-tinted band below: "What Happens Next" 3-step mini timeline (We Call You → Free On-Site Estimate → Detailed Written Quote).
5. INVERTED dark rust band: map/service-area visual placeholder + list of covered subdivisions/cities.
6. FAQ accordion (3 questions about the quote process) on white band.
7. Footer (same as home page).
Same strict earth-tone palette: terracotta #C1622D, rust #8F3A20, amber/gold #D9A441, copper #B87333, sage green #6B7A4F, warm off-white #FAF6F1, warm sand #F1E9DF, charcoal-brown #2B241E. No purple/pink/blue. No emoji.
```

Note: the multi-field quote form here is the Stitch MOCKUP spec for visual reference only — the actual build follows the home-service CRO rule of max 4 fields (Name, Phone, Service, Address) on the real form.
