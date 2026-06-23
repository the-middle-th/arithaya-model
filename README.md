# ARITHAYA Model

Premium Human Intelligence Platform website for the ARITHAYA model.

ARITHAYA is Thailand's Human Intelligence Platform connecting knowledge, wellness, human performance, AI, community, data, and enterprise solutions.

## Core Message

Transform Knowledge into Wisdom. Transform Data into Intelligence. Transform People into Their Best Version.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-ready SQL migration and lead API

## Pages

- Home
- Ecosystem
- Products
- Knowledge
- Enterprise
- Roadmap
- Contact

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Supabase Setup

Run `supabase/migrations/202606240001_create_arithaya_leads_and_knowledge.sql` in Supabase, then set:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

The lead forms post to `/api/leads` and write to `enterprise_leads` or `contact_leads` when the environment variables are available.

## Manus Handoff

Manus should connect Vercel to this repository, set the environment variables, deploy, test every page and form, then report build, mobile, SEO, performance, and Supabase issues back to Codex.
