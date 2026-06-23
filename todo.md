# ARITHAYA Model Todo

This file is the working checklist for Codex + Manus. Keep history. Mark items done with `[x]`; do not delete completed items.

## Planning And Handoff

- [x] Create standalone ARITHAYA project folder
- [x] Initialize Git repository
- [x] Add Manus handoff file
- [x] Add project operating files
- [x] Import Manus Codex Build & QA Playbook
- [x] Reconcile Manus playbook with current Next.js + Supabase + Vercel direction
- [x] Create GitHub repository `the-middle-th/arithaya-model`
- [x] Push `main` branch to GitHub
- [x] Send GitHub URL and handoff files to Manus
- [x] Record Manus preview URL
- [ ] Compare Manus preview implementation against GitHub repo implementation

## Stack

- [x] Next.js App Router
- [x] TypeScript
- [x] Tailwind CSS
- [x] Supabase-ready SQL migration
- [x] Lead API route
- [ ] Dependency install verified
- [ ] Production build verified
- [ ] Local dev server verified

## Pages

- [x] Home
- [x] Ecosystem
- [x] Products
- [x] Knowledge
- [x] Enterprise
- [x] Roadmap
- [x] Contact

## Components

- [x] Navbar
- [x] Footer
- [x] HeroSection
- [x] SectionHeader
- [x] EcosystemLayerCard
- [x] ProductCard
- [x] RoadmapTimeline
- [x] MetricCard
- [x] LeadForm
- [x] KnowledgeCard
- [x] CTASection

## Supabase

- [x] `enterprise_leads` migration
- [x] `contact_leads` migration
- [x] `knowledge_assets` migration
- [ ] Apply migration in Supabase
- [ ] Set `SUPABASE_URL`
- [ ] Set `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Verify enterprise form insert
- [ ] Verify contact form insert

## Deployment

- [ ] Connect GitHub repo to Vercel
- [ ] Set Vercel environment variables
- [x] Record Manus preview deployment URL in `STATUS.md`
- [ ] Decide production host: Manus preview or Vercel
- [ ] Deploy production build if Vercel is required

## QA

- [ ] Test all desktop pages
- [ ] Test all mobile pages at 375px
- [ ] Test all mobile pages at 430px
- [ ] Test mobile menu
- [ ] Test enterprise form
- [ ] Test contact form
- [ ] Check SEO metadata
- [ ] Check console errors
- [ ] Check loading speed
- [ ] Manus final QA report delivered

## Fix Loop

- [ ] Log every Manus issue in `FIX_LOG.md`
- [ ] Fix reported issues
- [ ] Commit fixes
- [ ] Push fixes
- [ ] Send back to Manus for retest
