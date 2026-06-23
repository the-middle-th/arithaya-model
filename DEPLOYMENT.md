# ARITHAYA Model Deployment

## Target

Production host:

```text
Manus preview is live. Vercel remains the original production target unless founder chooses Manus hosting.
```

Live Manus preview:

```text
https://arithayamod-euhqmijc.manus.space
```

GitHub repository:

```text
https://github.com/the-middle-th/arithaya-model
```

## Current Status

GitHub repository is live and `main` has been pushed. Manus has also produced a live preview deployment.

## Vercel Setup

Use this only if the founder confirms Vercel should be the production host instead of Manus hosting.

1. Import GitHub repository:

```text
the-middle-th/arithaya-model
```

2. Framework preset:

```text
Next.js
```

3. Build command:

```bash
npm run build
```

4. Install command:

```bash
npm install
```

5. Output directory:

```text
leave default
```

## Environment Variables

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_SITE_URL
```

## Supabase

Run migration:

```text
supabase/migrations/202606240001_create_arithaya_leads_and_knowledge.sql
```

Expected tables:

- `enterprise_leads`
- `contact_leads`
- `knowledge_assets`

## Deployment Verification

After deployment, verify:

- home page loads
- all routes load
- forms submit
- Supabase receives form records
- mobile layout is clean
- SEO metadata appears
- Vercel build logs are clean
