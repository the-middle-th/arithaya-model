# MANUS BRIEF - ARITHAYA Model

Read this first. This is the simplified working brief.

## Source Of Truth

Use only this GitHub repository:

```text
https://github.com/the-middle-th/arithaya-model
```

## Live Preview

Current Manus preview:

```text
https://arithayamod-euhqmijc.manus.space
```

## Report Here

Use only this GitHub issue for QA reports:

```text
https://github.com/the-middle-th/arithaya-model/issues/1
```

## Ignore For Now

Ignore older mixed instructions that mention:

- the old CreativEX/Kamakaben repo
- `arithachboss-cmyk/arithaya-model`
- rebuilding from scratch
- switching the stack away from the current GitHub repo

## Current Task

Do **not** rebuild from scratch.

Use the GitHub repo as the source, then QA it against the Manus preview.

Check:

- build status
- all pages
- enterprise form
- contact form
- mobile layout
- SEO metadata
- performance
- Supabase readiness
- production readiness

## Required Report Format

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

## Codex Fix Loop

After Manus reports issues, Codex will:

1. identify root cause
2. fix code
3. commit
4. push to GitHub
5. update `FIX_LOG.md`
6. send back for Manus retest
