# ARITHAYA — Codex Build & QA Playbook

A handoff guide that teaches Codex the exact, repeatable process used to build the ARITHAYA Human Intelligence Platform website, plus the QA/deploy loop. Follow it top to bottom for any new "premium platform / infrastructure" site.

---

## 0. What you are building

A premium, executive, calm, futuristic, human-centered, **trustworthy** corporate site for a "platform / infrastructure" brand. It must read like a deep-tech / sovereign-institution brand — **never** like a clinic, hospital, or generic wellness app.

Core message pattern (adapt per brand):
> Transform Knowledge into Wisdom. Transform Data into Intelligence. Transform People into Their Best Version.

Standard 7-page spine: **Home, Ecosystem, Products, Knowledge, Enterprise, Roadmap, Contact.**

---

## 1. Stack & ground rules

| Decision | Value | Why |
| --- | --- | --- |
| Framework | React 19 SPA + Vite (Manus webdev), or Next.js App Router | Component-driven, deployable |
| Styling | Tailwind 4 (`@theme inline`, **OKLCH** colors) | Token-driven theming |
| Backend | Express + tRPC 11 (superjson) | Type-safe end to end |
| DB/ORM | MySQL/TiDB + Drizzle | Schema-first migrations |
| Theme | Dark base (`ThemeProvider defaultTheme="dark"`) | Premium look |

Hard rules: create **one checkpoint at the very end** (not mid-build), keep **lead tables separate**, **never fabricate testimonials/ratings**, deploy via Manus **Publish** button (built-in hosting + custom domains — do not push to external hosts).

---

## 2. Build order (do not reorder)

1. **Plan + `todo.md`** at project root — list every page, component, table, and quality gate as code-verifiable `[ ]` items. Mark `[x]` as you finish; never delete history.
2. **Design system** — apply palette + typography to `client/src/index.css`; load fonts in `client/index.html`; set dark theme in `App.tsx`. (See §3.)
3. **Database + backend** — add tables to `drizzle/schema.ts` → `pnpm drizzle-kit generate` → read generated `.sql` → apply via `webdev_execute_sql` → add db helpers → add tRPC routers with public lead mutations + owner notification. (See §4.)
4. **Shared components** — Navbar, Footer, SiteLayout (scroll-to-top), HeroSection, SectionHeader, Card family, RoadmapTimeline, variant-driven LeadForm, Seo. (See §5.)
5. **Pages** — build all 7, wrap every route in `SiteLayout`, give each a unique `<Seo>`.
6. **QA + tests** — Vitest for lead routers; `pnpm check && pnpm test && pnpm build`; desktop + mobile screenshots for every page; live form test. (See §6.)
7. **Deliver** — one checkpoint, hand over `manus-webdev://<version_id>`, instruct user to click Publish.

---

## 3. Design system (the "premium, not clinic" look)

**Palette (dark base):** deep navy background (`oklch(0.18 0.03 265)` ≈ `#0b1020`), slightly lifted navy surfaces, **warm gold** accent (`#d4a64a`), soft white text (`#f4f6fb`), calm gray muted (`#9aa3b2`), hairline white-opacity borders. Gold is the jewel — use it only for one CTA, the highlighted hero clause, eyebrows, and icon strokes.

**Typography:** Playfair Display (serif) for headlines = gravitas; Inter (sans) for body/labels = clean. Load both via Google Fonts in `index.html`.

**Signature patterns:** uppercase letter-spaced gold eyebrows; one gold-gradient hero clause; radial glow + faint grid behind hero; numbered ecosystem cards (01–06) with thin lucide icons; oversized serif metric figures.

**Anti-patterns (forbidden):** teal/mint medical palette, stock doctors/people photos, bubbly rounded "app" cards, more than one accent color, emoji, walls of text, fake social proof.

Hero core message: put each clause on its own line with `<span className="block">` (not `<br className="hidden sm:block">`, which collides on mobile).

---

## 4. Backend recipe

**Schema (`drizzle/schema.ts`):** keep `enterprise_leads` and `contact_leads` as **separate** tables (different fields, cleaner CRM export), plus a brand-authored `knowledge_assets` table (seed via SQL — this is brand content, not user-generated).

- `enterprise_leads`: name, organization, email, phone?, inquiryType, message, createdAt
- `contact_leads`: name, email, phone?, subject, message, createdAt
- `knowledge_assets`: category, title, excerpt, readMinutes, publishedAt

**Migration flow:** edit schema → `pnpm drizzle-kit generate` → read the generated `drizzle/*.sql` → apply with `webdev_execute_sql` → verify with a `SELECT`.

**Router (`server/routers/leads.ts`):** validate input with zod; insert; then notify the owner **fire-and-forget** so a notification failure never blocks the user's response:

```ts
const id = await createEnterpriseLead({ ...input, phone: input.phone || null });
void notifyOwner({
  title: `New Enterprise Lead — ${input.organization}`,
  content: [`Name: ${input.name}`, `Email: ${input.email}`, "", input.message].join("\n"),
}).catch((e) => console.warn("[Leads] notify failed", e));
return { success: true, id } as const;
```

---

## 5. SEO on a client-rendered SPA

There is no SSR, so SEO is runtime. Build a `Seo` component that sets `document.title` + `description` + OG + Twitter + canonical inside `useEffect`. Put base/default meta and `<title>` in `client/index.html`. **Every page renders its own `<Seo title description path />`.** If the brand needs hard crawler guarantees, recommend migrating to a server-rendered framework.

---

## 6. QA & deploy loop (Build → Deploy → Test → Report → Fix → Retest)

Run the loop until every gate passes; only then call it production-ready.

**Automated gates:** `pnpm check`, `pnpm test`, `pnpm build` all green.

**Visual QA:** screenshot **desktop (1280)** and **mobile (375×812)** for all 7 pages. Confirm: navbar collapses to hamburger on mobile, cards stack to a single column, no overflow/overlap, hero message readable.

**Live form test** — tRPC is **superjson-wrapped**, so the curl body MUST be `{"json": {...fields}}` (a raw object returns `"expected object, received undefined"`):

```bash
curl -s -X POST "$BASE/api/trpc/leads.createEnterprise" \
  -H "Content-Type: application/json" \
  -d '{"json":{"name":"QA","organization":"QA Co","email":"qa@example.com","phone":"","inquiryType":"Strategic partnership","message":"Automated QA submission."}}'
```

Expect `{"result":{"data":{"json":{"success":true,"id":<n>}}}}`. Verify the row in DB, confirm the owner notification fired, then **delete the QA rows**.

---

## 7. Known traps (learn these — they cost real time)

| Symptom | Real cause | Fix |
| --- | --- | --- |
| `expected object, received undefined` on a tRPC mutation curl | Missing superjson wrapper | Wrap body as `{"json": {...}}` |
| Intermittent `Cannot read properties of null (reading 'useState')` in dev | Stale Vite dep optimizer / duplicate React (HMR), **not** your code | `webdev_restart_server`, then re-screenshot — do NOT edit code |
| Deployment timeout | Local images stored in the project | Upload via `manus-upload-file --webdev`, reference returned URL; prefer an icon+type layout with zero raster images |
| Notification blocks form response | Awaiting `notifyOwner` | Make it fire-and-forget (`void ...catch`) |
| Hero clauses collide on mobile | `<br className="hidden sm:block">` | Use `<span className="block">` per clause |

---

## 8. Report-back template (Manus → Codex)

When QA is done, report: deployment URL, pages tested, forms tested + insert results, mobile issues, SEO status, performance notes, build errors (if any), screenshots/notes for UI problems, and the remaining items Codex must fix. Do **not** mark production-ready until all pages work, all forms persist + notify, mobile is clean, SEO is present, the site is published, and final QA passes.

---

*This playbook is also packaged as the reusable Manus skill `premium-platform-website` (SKILL.md + design-system.md + architecture.md + Seo.tsx + LeadForm.tsx + test_lead_forms.sh).*
