# ARITHAYA Model - Manus Handoff

## Current Status

Codex has created a clean standalone ARITHAYA Model project.

Local path:

```text
/Users/arithachbossabc/Documents/arithaya-model
```

Target GitHub repository:

```text
git@github.com:arithachboss-cmyk/arithaya-model.git
```

Current blocker:

```text
The GitHub repository arithachboss-cmyk/arithaya-model has not been created yet.
```

Imported Manus playbook:

```text
ARITHAYA_CODEX_PLAYBOOK.md
```

Stack decision:

```text
STACK_DECISION.md
```

Working checklist:

```text
todo.md
```

After the empty GitHub repository exists, run:

```bash
cd /Users/arithachbossabc/Documents/arithaya-model
git push -u origin main
```

## Project Identity

Project name:

```text
ARITHAYA Model
```

Positioning:

```text
Thailand's Human Intelligence Platform
```

Core message:

```text
Transform Knowledge into Wisdom.
Transform Data into Intelligence.
Transform People into Their Best Version.
```

Founder:

```text
Arithach Chartariyapong
```

Technology partner:

```text
Asian Coding Systems (ACS)
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-ready lead API
- Supabase SQL migration

## Pages To Test

- `/`
- `/ecosystem`
- `/products`
- `/knowledge`
- `/enterprise`
- `/roadmap`
- `/contact`

## Forms To Test

- Enterprise form on `/enterprise`
- Contact form on `/contact`

Both forms post to:

```text
/api/leads
```

When Supabase environment variables are set, `/api/leads` writes to:

- `enterprise_leads`
- `contact_leads`

## Required Supabase Migration

Run:

```text
supabase/migrations/202606240001_create_arithaya_leads_and_knowledge.sql
```

Tables:

- `enterprise_leads`
- `contact_leads`
- `knowledge_assets`

## Vercel Environment Variables

Set these in Vercel:

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_SITE_URL
```

## Manus QA Checklist

1. Install dependencies:

```bash
npm install
```

2. Run build:

```bash
npm run build
```

3. Run local dev:

```bash
npm run dev
```

4. Deploy to Vercel.

5. Test all pages.

6. Test all forms.

7. Test mobile responsive layout.

8. Check SEO metadata.

9. Check loading speed.

10. Report issues back to Codex with:

- deployment URL
- build errors
- page errors
- form errors
- Supabase insert errors
- mobile screenshots
- SEO issues
- performance notes

## Production Readiness Rule

Do not mark production-ready until:

- GitHub repo exists
- project is pushed to GitHub
- Vercel deployment is live
- all pages work
- both lead forms work
- Supabase captures leads
- mobile view is clean
- SEO metadata is present
- Manus confirms final QA pass
