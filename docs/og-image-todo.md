# Open Graph image — DONE

**Status**: shipped 2026-10-15
**File**: `public/opengraph-image.png` (1200×630, ~115 KB)
**Referenced by**: `OG_IMAGE` in `lib/content.ts`, consumed by `og:image` and
`twitter:image` in `app/layout.tsx`

## What shipped

A dark `ink-900` card with a moss radial glow, the wordmark, the headline
"Receipts, organized on your Mac.", the "Apple Vision reads every receipt
locally. No upload, ever." supporting line, a "$49.99 once · 14-day free trial"
pill, and a light receipt mockup on the right showing three line items and a
tax-year total.

The brand mark is the real App Store icon, not a hand-drawn stand-in.

## Spec compliance

| Requirement | Status |
|---|---|
| 1200×630 (1.91:1) | ✅ |
| Product name large and legible at ~300×157 thumbnail | ✅ |
| Value prop present | ✅ |
| Price + trial anchor | ✅ |
| Brand mark matching the app | ✅ |
| Visual element (receipt mockup) | ✅ |
| Site palette (`ink-900` / `moss-300` / off-white) | ✅ |
| No text under 24px | ✅ (smallest is 15px, and only inside the mockup) |
| No discount language (Apple 2.3.1) | ✅ |
| No "best / leading / perfect" (Apple 5.2.1) | ✅ |

## Regenerating

`assets/app-icon-1024.png` is the App Store artwork for `com.solocrate.app`,
kept outside `public/` so it is not deployed. Icon sizes are derived from it;
see `scripts/build-favicon.mjs` and the notes in `DEPLOYMENT.md`.

If the app icon changes on the App Store, replace
`assets/app-icon-1024.png` and re-derive `public/icon-{192,512}.png`,
`public/apple-touch-icon.png`, `public/favicon.ico` and this file.

## Still outstanding

- [ ] Confirm the card renders in a real Slack/Discord/X unfurl (deploy first)
- [ ] Validate through <https://www.opengraph.xyz/>
- [ ] Consider a light-background variant if X flags dark-card contrast
