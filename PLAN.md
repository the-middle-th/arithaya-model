# ARITHAYA Model Execution Plan

## Objective

Launch the ARITHAYA Model website as a premium Human Intelligence Platform for Thailand.

The website must be ready for:

- investor conversations
- enterprise partnership conversations
- Vercel production deployment
- Supabase lead capture
- Manus QA and deployment workflow

## Execution Loop

```text
Plan -> Build -> Commit -> Push -> Deploy -> QA -> Report -> Fix -> Retest -> Improve
```

## Imported Manus Playbook

Status: imported

Source file:

```text
ARITHAYA_CODEX_PLAYBOOK.md
```

The playbook is adopted for operating process. Stack-specific differences are reconciled in:

```text
STACK_DECISION.md
```

## Workstreams

### 1. Codex

Codex owns:

- Next.js project structure
- TypeScript implementation
- Tailwind CSS interface
- component architecture
- Supabase-ready database migration
- lead form implementation
- SEO metadata
- bug fixes
- code optimization
- fix logs after Manus QA

### 2. Manus

Manus owns:

- dependency install
- production build
- Vercel deployment
- environment variable setup
- Supabase migration confirmation
- page QA
- form QA
- mobile QA
- SEO checks
- performance checks
- deployment report

### 3. User / Founder

Founder owns:

- GitHub/Vercel/Supabase account-level authorization when required
- business approval
- partner/investor direction
- final production readiness approval

## Immediate Milestones

### Milestone 01 - Local Project

Status: complete

- standalone project created
- Git initialized
- initial website committed
- Manus handoff file committed
- operating files committed
- Manus playbook imported
- root `todo.md` created

### Milestone 02 - GitHub Repository

Status: complete

Target:

```text
the-middle-th/arithaya-model
```

Repository:

```text
https://github.com/the-middle-th/arithaya-model
```

### Milestone 03 - Vercel Deployment

Status: ready for Manus/Vercel

Manus connects Vercel to the GitHub repo and sets environment variables.

### Milestone 04 - QA

Status: pending deployment

Manus tests pages, forms, mobile, SEO, performance, and Supabase lead capture.

### Milestone 05 - Fix Loop

Status: pending QA report

Codex fixes reported issues, commits changes, pushes, and updates `FIX_LOG.md`.

## Definition Of Done

ARITHAYA is production-ready only when:

- GitHub repo exists
- Vercel deployment is live
- all required pages load
- both forms submit successfully
- Supabase receives leads
- mobile layout is clean
- SEO metadata is present
- performance is acceptable
- Manus confirms final QA pass
