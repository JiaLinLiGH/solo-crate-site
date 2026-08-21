# TODO — Open Graph image for Solo Crate site

**Status**: pending
**Owner**: 雨林霖
**Created**: 2026-08-21
**Reason**: SEO audit on 2026-08-21 found the site has no `og:image` /
`twitter:image`. Sharing to Reddit / X / LinkedIn / Slack / 飞书 etc.
shows no thumbnail, which measurably reduces click-through.

**When to do this**:
- Before any Product Hunt launch (PH and OG images are tightly coupled)
- Or whenever there's a free afternoon

## Spec

- **Dimensions**: 1200 × 630 px (Twitter / OG / LinkedIn standard)
- **Aspect ratio**: 1.91:1
- **Format**: PNG or JPG, < 5 MB (most platforms cap at 5 MB; some at 8 MB)
- **File name**: `opengraph-image.png`
- **Where to put it**: `app/opengraph-image.png`
  (Next.js App Router auto-detects and serves it; no code change needed)

## Required content

1. **Product name** "Solo Crate" — large, top-left or center
2. **One-line value prop** — recommended:
   > "The Mac-native receipt manager for self-employed."
3. **Price anchor** — small, bottom-right:
   > "$49.99 once · 14-day free trial"
4. **Brand mark** — small Solo Crate logo, consistent with site
5. **Visual** — a clean receipt or window mockup on the right side
   (optional but +30% CTR vs text-only)

## Design constraints

- **Color palette**: stick to site palette
  (`ink-900` background OK, `moss-700/300` accent, off-white text)
- **Light/dark variant**: ship one variant first; ship the other
  if Twitter complains about contrast on a dark background
- **No text under 24 px** at 1200×630 — gets lost on mobile previews
- **No price discount language** — Apple Review Guidelines 2.3.1
- **No "best #1" / "leading" / "perfect"** — App Store 5.2.1

## Where the OG image shows up

- Twitter / X link cards
- LinkedIn link previews
- Reddit link previews (r/freelance, r/macapps, r/IndieHackers)
- Slack / Discord / 飞书 / Telegram link unfurls
- Product Hunt submission card
- Indie Hackers post previews
- iMessage link previews
- Google search "Share" preview
- Hacker News (uses `og:image` if present)

## Acceptance checklist

- [ ] Image is 1200×630 px
- [ ] "Solo Crate" is readable at thumbnail size (~300×157)
- [ ] Price and trial text present
- [ ] File saved at `app/opengraph-image.png`
- [ ] After deploy, check https://jialinligh.github.io/solo-crate-site/opengraph-image.png returns 200
- [ ] Uncomment `images:` lines in `app/layout.tsx` (og + twitter)
- [ ] Validate via https://www.opengraph.xyz/ or Twitter Card Validator
- [ ] Post one link to a test Slack/Discord channel, confirm thumbnail shows

## Tools

- **Figma** — best for custom design
- **Canva** — fastest, has 1200×630 template
- **Apple Keynote / Figma export** — for free PNG export
- **Playwright `page.screenshot()`** — programmatic generation (we tried
  this earlier in the day; result was usable but plain)
- **Vercel OG Image Generation** (`@vercel/og`) — generates from JSX
  on demand, fully programmatic, requires switching off static export
  (not currently compatible with the GitHub Pages setup)

## Estimated effort

~20 minutes in Figma/Canva. ~5 minutes to deploy.
