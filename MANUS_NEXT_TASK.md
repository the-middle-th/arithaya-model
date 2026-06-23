# Manus Next Task - ARITHAYA Model

## Source Of Truth

Use this repository only:

```text
https://github.com/the-middle-th/arithaya-model
```

Do not use the old CreativEX/Kamakaben repo for ARITHAYA.

## Current Live Preview

Manus preview:

```text
https://arithayamod-euhqmijc.manus.space
```

GitHub source local verification:

```text
npm install
npm run build
```

Build status from Codex:

```text
Passing after commit 257c28b Fix GitHub source build
```

## Manus Job

Manus should now work from the GitHub source and produce a QA/deployment report.

### 1. Pull GitHub Source

```bash
git clone https://github.com/the-middle-th/arithaya-model.git
cd arithaya-model
```

### 2. Install And Build

```bash
npm install
npm run build
```

### 3. Run Locally

```bash
npm run dev
```

### 4. Compare With Existing Manus Preview

Compare GitHub source against:

```text
https://arithayamod-euhqmijc.manus.space
```

Report differences:

- visual design
- copywriting
- routes/pages
- forms
- SEO metadata
- mobile behavior
- performance

### 5. QA Required Pages

- `/`
- `/ecosystem`
- `/products`
- `/knowledge`
- `/enterprise`
- `/roadmap`
- `/contact`

### 6. QA Required Forms

- Enterprise lead form on `/enterprise`
- Contact form on `/contact`

Check:

- required validation
- successful submit
- Supabase insert when env vars exist
- error handling when Supabase env vars are missing

### 7. Supabase

Apply:

```text
supabase/migrations/202606240001_create_arithaya_leads_and_knowledge.sql
```

Set:

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_SITE_URL
```

### 8. Report Back To Codex

Use this format:

```text
Deployment URL:
GitHub commit tested:
Pages tested:
Forms tested:
Supabase status:
Mobile status:
SEO status:
Performance status:
Issues found:
Screenshots/notes:
Recommended fixes for Codex:
Production readiness: yes/no
```

## Codex Response Rule

For every issue Manus reports, Codex will:

1. identify root cause
2. fix code
3. commit
4. push to GitHub
5. update `FIX_LOG.md`
6. send back to Manus for retest
