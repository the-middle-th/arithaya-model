# ARITHAYA Model Stack Decision

## Decision

Use the original ARITHAYA prompt stack for this project:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-ready SQL migration
- Vercel deployment

## Manus Playbook Imported

The shared Manus file `ARITHAYA_CODEX_PLAYBOOK.md` has been imported into this repository.

That playbook contains strong process guidance:

- create a root `todo.md`
- use a strict build order
- keep lead tables separate
- avoid fake testimonials and generic wellness/clinic design
- run build/test/visual QA
- report issues back from Manus to Codex
- keep the Build -> Deploy -> Test -> Report -> Fix -> Retest loop alive

## Reconciled Differences

The Manus playbook mentions a Manus webdev stack:

- React + Vite
- Tailwind 4
- Express + tRPC
- MySQL/TiDB + Drizzle
- Manus Publish

This repository intentionally does not switch to that stack because the founder prompt explicitly requested:

- Next.js
- TypeScript
- Tailwind CSS
- Supabase-ready schema
- Vercel deployment

## Operating Rule

Use Manus playbook for process.

Use this repository's stack for implementation.

If Manus deploys using Manus Publish as a preview, treat it as QA preview only. Production deployment target remains Vercel unless the founder changes direction.
