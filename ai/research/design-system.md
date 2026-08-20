# Design System — tracthomecontractor.com

Generated via real Google Stitch AI mockups (`stitch-mcp.sh`, raw-HTTP path). Zero quota issues — all 4 screens generated on the first attempt, no hand-authored fallback needed.

- Stitch project: `projects/17629173161326803576` ("Tract Home Contractor — site design")
- Design system asset: `assets/14776273131002843916`
- Model: `GEMINI_3_1_PRO`, `deviceType: DESKTOP`

## Palette (strict warm earth tones + natural green — verified hex hues, no purple/pink/blue)

| Role | Name | Hex |
|---|---|---|
| Primary / brand | Terracotta | `#C1622D` |
| Secondary / dark inverted-band | Rust | `#8F3A20` |
| Tertiary accent | Amber / Gold | `#D9A441` |
| Support accent | Copper | `#B87333` |
| Natural accent | Sage Green | `#6B7A4F` |
| Background (base) | Warm off-white | `#FAF6F1` |
| Background (tinted band) | Warm sand | `#F1E9DF` |
| Text | Charcoal-brown | `#2B241E` |

## Typography

- Headline: **Space Grotesk** (geometric-sans, confident)
- Body: **Work Sans** (clean humanist-sans, readable)
- Roundness: `ROUND_TWELVE` (moderate corner radius, not pill-shaped)

## Motif / image style

Real job-site photography feel — crews in branded gear, tract-home exteriors mid-addition/renovation, trucks/equipment. Explicitly NOT generic stock "smiling family" photography. Hero text-over-image scrim held to ≥50% opacity per hard rule.

## Section rhythm

No two adjacent sections share a background: white/off-white base ↔ sand-tinted band ↔ inverted dark-rust band (trust bar / stats / testimonials / final CTA) ↔ full-bleed photo band with scrim.

## Screens generated (`.stitch-pages/`)

| File | Stitch title | Notes |
|---|---|---|
| `home.html` | Tract Home Contractor Home Page | Hero, trust bar, 6-service grid, why-choose-us, process timeline, inverted stats band, testimonials, FAQ, final CTA, footer |
| `service-home-additions.html` | Home Additions Service Detail | Representative service-page template — what's-included, who-it's-for, inverted why-choose-us, gallery, FAQ, inline 4-field quote form |
| `about.html` | About Tract Home Contractor | Story, values, team, inverted credentials strip, service-area band |
| `contact-quote.html` | Get a Quote - Tract Home Contractor | Full quote form + contact info + trust badges, next-steps timeline, inverted service-area band, FAQ |

## Exact prompts used

Preserved for regeneration/reference in `ai/research/stitch-prompts.md` (design-director briefs sent verbatim to `create_design_system` and each `generate_screen_from_text` call).

## Downstream build note

Screens are art-direction references (structural scaffold per Stitch skill guidance) — the actual Next.js build applies these as the locked style contract (palette, type pairing, section rhythm, motif) via Tailwind, not by transplanting the raw HTML.
