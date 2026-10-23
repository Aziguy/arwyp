# Arwyp Medical Centre: website & platform template

Static, fully navigable template of the new Arwyp Medical Centre website and digital platform, built from the **AMC Website Skeleton** brief and the two proposals **AMC/2026/001-A** and **AMC/2026/001-B**.

**Live preview:** https://aziguy.github.io/arwyp/

> Demo template. All people, contacts, figures and records are fictitious. Pages are marked `noindex`.

## Switch between Quote A and Quote B

A floating switcher (bottom left, on every page) toggles the whole template between the two proposals. The choice is remembered in the browser and can be forced with a query string:

- `?quote=a` : **The Website, As Specified** (13 landing pages, content management, bookings by phone)
- `?quote=b` : **The Complete Digital Platform** (everything in A plus booking, payments, portals, dashboard and advanced modules)

The [comparison page](https://aziguy.github.io/arwyp/compare/) shows both scopes side by side.

| Area | Quote A | Quote B |
| --- | --- | --- |
| 13 landing pages, header & footer | Yes | Yes |
| Find a Specialist (100+ profiles, 31 disciplines) | Directory with rooms' phone number | + online booking, PayFast / Peach Payments, reviews, FAQ, own SEO page |
| Careers & Training Institute | Listings with Apply buttons | + online applications (CV upload), e-learning and CPD tracking |
| Media | News feed, 3D maternity tour | + 360° hospital tour |
| Back-office | Content management | Bespoke admin dashboard and modules |
| Specialist workspace, patient portal (PWA), GP referral portal, investor hub | No | Yes |
| Emergency alert banner, WhatsApp integration | No | Yes |

## What's inside

### Public website

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about/`, `/about/management/`, `/about/investors/` | About Us, Management Team, Investor Information |
| `/services/`, `/departments/`, `/departments/[slug]/` | Our Services (filterable), Specialised Departments |
| `/patients/` + `visiting-hours`, `pre-admission`, `rights-charter`, `amenities`, `maternity`, `experience` | Patient Information |
| `/specialists/`, `/specialists/[slug]/` | Find a Specialist, specialist profiles |
| `/medical-tourism/` | Medical Tourism & Travel Clinic |
| `/news/`, `/news/[slug]/`, `/news/3d-tour/` | Media & News, live 3D maternity tour, hospital film (Quote B) |
| `/careers/`, `/careers/[ref]/` | Careers, one page per vacancy |
| `/training/`, `/contact/` | Training Institute, Contact Us |
| `/gp-referral/` | GP Referral Portal (Quote B) |
| `/legal/[slug]/` | Privacy, Terms, POPIA, PAIA, Cookies |
| `/compare/` | Quote A vs Quote B |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Generated at build time |

### Back-office and portals

| Route | Quote A | Quote B |
| --- | --- | --- |
| `/admin/login/` | Staff sign-in | + two-factor step |
| `/admin/` | Content dashboard with Google Analytics summary | Platform overview: bookings, revenue, conversion, no-shows, SEO |
| `/admin/pages/`, `specialists/`, `news/`, `vacancies/`, `programmes/`, `patient-info/`, `submissions/`, `media/`, `users/`, `settings/` | Content management | Content management |
| `/admin/bookings/`, `patients/`, `payments/`, `medical-aid/`, `referrals/`, `applicants/`, `elearning/`, `investors/`, `seo/`, `notifications/`, `audit/`, `roles/` | Locked (Quote B panel) | Working modules |
| `/doctor/`, `/doctor/calendar/`, `/doctor/patients/`, `/doctor/payments/` | Locked | Specialist workspace |
| `/portal/login/`, `/portal/` + `appointments`, `records`, `billing`, `prescriptions`, `messages`, `vault` | Locked | Patient portal, installable as a PWA |
| `/offline/` | | Service worker fallback |

Sign-in screens accept any input: they are demonstrations, not authentication.

## Listings: filters, sorting and pagination

The specialists directory, news, careers and services share one listing engine (`src/scripts/listing/`):

- Facets as chips, selects or toggles, combined with free-text search (accent-insensitive)
- Sorting (for example surname, discipline, closing date; rating and soonest availability in Quote B)
- Numbered pagination with a compact mobile pager and a live "Showing x-y of z" summary
- Removable active-filter chips and a single "Clear all"
- State kept in the URL (`?discipline=cardiology&letter=M&sort=name:asc&page=2`), so every result set is shareable and survives reloads

All items are rendered in the HTML, so the content stays crawlable without JavaScript. Back-office tables add column sorting, a rows-per-page selector (10, 25, 50) and the same numbered pager.

Markup contract: a `[data-listing]` root with an optional `data-page-size`, items marked `[data-item]` carrying `data-<facet>` values (pipe separated) and `data-sort-<key>` values, and controls marked `data-facet`, `data-facet-select`, `data-facet-check`, `data-search` and `data-sort`.

## SEO

- Unique title and meta description per page (descriptions capped at 160 characters), canonical URL, `hreflang` en-ZA
- Open Graph and Twitter cards with a 1200 x 630 share image (`public/og/default.png`)
- JSON-LD: `Hospital` / `MedicalOrganization` (address, geo, opening hours, emergency contact), `WebSite` with `SearchAction`, `BreadcrumbList` on every page with a breadcrumb, `Physician` per specialist, `MedicalClinic` per department, `NewsArticle`, `JobPosting` per vacancy, `Course` list, `MedicalWebPage` and `ItemList` for directories
- Quote B-only structured data (specialist FAQ) is emitted only while Quote B content is shown
- `sitemap.xml` with priorities and last-modified dates, `robots.txt` and an `llms.txt` summary for AI assistants, all generated from `src/lib/routes.ts`
- Back-office, portals, offline and 404 pages are always `noindex`

**Indexing is disabled for this demo.** Every page carries `noindex` and `robots.txt` disallows crawling. For the production site, build with:

```bash
PUBLIC_SEO_INDEX=true npm run build
```

This switches public pages to `index, follow` and opens `robots.txt`, keeping `/admin/`, `/doctor/`, `/portal/` and `/offline/` disallowed. On GitHub Pages the project lives under `/arwyp/`, so search engines read `robots.txt` only once the site is served from a domain root.

## Tech stack

- [Astro 6](https://astro.build) static output, zero client framework
- TypeScript, scoped component styles and a small global design system (CSS custom properties)
- Vanilla client scripts (navigation, listing engine, booking flow, charts, data tables)
- [Lucide](https://lucide.dev) icons inlined at build time, self-hosted Plus Jakarta Sans and Cormorant Garamond
- PWA: web manifest and service worker, enabled in Quote B mode only
- GitHub Actions deployment to GitHub Pages

## Project structure

```
src/
  config/       site settings, navigation, SEO flags, quote definitions and feature matrix
  data/         fictitious content (specialists, departments, news, vacancies...)
  data/app/     fictitious back-office records
  lib/          helpers (base-aware URLs, formatting, seeded random, JSON-LD, route registry)
  styles/       tokens, reset, base, utilities, shared components
  layouts/      Base, Site, Patient and App layouts
  components/   ui/, site/, seo/, listing/, sections/, specialists/, app/
  scripts/      client modules (quote switch, PWA, navigation, listing/, tables, forms)
  pages/        file-based routes
public/         favicon, PWA icons, share image, manifest, service worker
```

Quote-specific UI relies on two utility classes driven by `html[data-quote]`: `.only-a` and `.only-b`. Whole Quote B modules are wrapped in `QuoteGate`, which shows an explanatory panel in Quote A mode.

## Getting started

Requirements: Node.js 22.12 or later.

```bash
npm ci
npm run dev       # http://localhost:4321/arwyp/
npm run build     # static output in dist/
npm run preview
npm run check     # type checking
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`. The site is served under the `/arwyp/` base path, configured in `astro.config.mjs`.

## Content to be supplied by Arwyp

Photography, headshots and logos, final specialist details, the Patients' Rights Charter, legal texts, and vacancy and programme content. Placeholders are clearly labelled in the template.
