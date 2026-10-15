# Deploying to GitHub Pages

This site is a standard [Next.js 14](https://nextjs.org/) App Router project
configured for **static export** so it can ship to GitHub Pages with no
server. A GitHub Actions workflow at `.github/workflows/deploy.yml`
auto-deploys every push to `main`.

## One-time setup

1. Create a GitHub repository named `solo-crate-site` under your account
   (`JiaLinLiGH/solo-crate-site`).
2. In the repo **Settings → Pages**, set Source to **GitHub Actions**.
3. Push this directory to the repo:
   ```bash
   git init
   git add .
   git commit -m "feat: initial site for Solo Crate v1.7.5"
   git branch -M main
   git remote add origin git@github.com:JiaLinLiGH/solo-crate-site.git
   git push -u origin main
   ```
4. The workflow runs `npm ci → typecheck → next build (output: export) →
   touch out/.nojekyll → upload artifact → deploy`.
5. After ~45 seconds the site is live at
   **https://jialinligh.github.io/solo-crate-site/**

## How static export works here

`next.config.mjs` has three settings that matter for GitHub Pages:

| Setting | Value | Why |
|---|---|---|
| `output` | `'export'` | Produces a fully static site in `./out` — no Node server needed |
| `basePath` | `'/solo-crate-site'` | GitHub Pages serves project sites at `/<repo>/`; this prefix rewrites all internal `<Link>` hrefs |
| `trailingSlash` | `true` | GitHub Pages' static host resolves `/privacy/` (not `/privacy`) — this avoids 404s on direct hits to nested pages |
| `images.unoptimized` | `true` | Next.js' image optimizer needs a server; static export requires this off |

`trailingSlash: true` has a second consequence that matters for SEO: the URL
actually served for `/pricing` is `/pricing/`. Canonical tags and
`sitemap.xml` therefore both emit the trailing-slash form, via `canonicalUrl()`
in `lib/content.ts`. Changing either one without the other reintroduces a 301
hop that contradicts the canonical.

## Icons and the social card

| File | Purpose |
|---|---|
| `assets/app-icon-1024.png` | App Store artwork for `com.solocrate.app` — the source of truth. Outside `public/`, so it is never deployed |
| `public/icon.svg` | Vector version of the same design, for high-DPI / in-page use |
| `public/favicon.ico` | 16/32/48, assembled by `scripts/build-favicon.mjs` |
| `public/icon-192.png`, `public/icon-512.png` | PWA / manifest icons, squircle-masked with transparent corners |
| `public/apple-touch-icon.png` | 180×180, **full-bleed and opaque** — iOS applies its own mask and renders transparency as black |
| `public/opengraph-image.png` | 1200×620 social card, referenced through `OG_IMAGE` in `lib/content.ts` |
| `public/site.webmanifest` | PWA manifest |

If the app icon changes on the App Store, replace `assets/app-icon-1024.png`
and re-derive everything downstream — the PNG/ICO set and `icon.svg` must stay
visually in sync, because browsers pick between them.

## Previewing locally

```bash
npm run dev       # http://localhost:3000/solo-crate-site/ (basePath is active)
```

To test the production export without deploying:
```bash
npm run build     # writes to ./out
npx serve out     # serves at http://localhost:3000 (no basePath locally)
```

## Environment variables

None. All copy lives in `lib/content.ts`, and OG/Twitter metadata is hardcoded
in `app/layout.tsx`. If you later add a CMS-backed blog, set secrets under
**Settings → Secrets and variables → Actions** in the GitHub repo.

## Custom domain (later)

When you buy a real domain:
1. In the GitHub repo **Settings → Pages → Custom domain**, enter the apex.
2. Add a `CNAME` file at the repo root containing the bare domain.
3. At your registrar, point an `A` record at the GitHub Pages IPs
   (`185.199.108.153` … `185.199.110.153`).
4. After DNS resolves, set **Enforce HTTPS** in repo Settings.

Update `lib/content.ts` (`SITE.url`) and `next.config.mjs` (`basePath`)
back to `''` once you're serving at the apex.

## Troubleshooting

| Issue | Fix |
|---|---|
| 404 on `/pricing` | You forgot `trailingSlash: true` in `next.config.mjs` |
| 404 on every page | GitHub Pages project site needs `basePath: '/solo-crate-site'` |
| Styles missing (404 on `/_next/static/css/...`) | Confirm `basePath` matches your repo name |
| Build fails on `next/image` | `images.unoptimized: true` is required for `output: 'export'` |
| Workflow permission denied | Repo Settings → Actions → General → Workflow permissions: "Read and write" |
| Preview deploy 500s on image | n/a — we're not using `next/image` for remote URLs |
| Domain not resolving | DNS propagation up to 48h; check with `dig jialinligh.github.io +short` |
