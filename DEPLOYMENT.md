# ARITHAYA Model Deployment

## Target

Production host:

```text
Vercel
```

GitHub repository:

```text
https://github.com/arithachboss-cmyk/arithaya-model
```

## Current Blocker

The target GitHub repository has not been created yet.

Create an empty repository:

```text
owner: arithachboss-cmyk
name: arithaya-model
visibility: public or private, depending on founder preference
README: no
.gitignore: no
license: no
```

Then push:

```bash
cd /Users/arithachbossabc/Documents/arithaya-model
git push -u origin main
```

or:

```bash
/Users/arithachbossabc/Documents/arithaya-model/scripts/push-after-github-repo.sh
```

## Vercel Setup

1. Import GitHub repository:

```text
arithachboss-cmyk/arithaya-model
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
