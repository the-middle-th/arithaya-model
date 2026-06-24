# ARITHAYA Communication Protocol

## Purpose

Keep Codex, Manus, GitHub, and Asian Coding Systems aligned without scattered instructions.

## Source Of Truth

Use only this repository:

```text
https://github.com/the-middle-th/arithaya-model
```

## Display Rule

Codex keeps one browser screen showing the current working website when actively working.

Current local display URL:

```text
http://127.0.0.1:3000
```

Current Manus preview:

```text
https://arithayamod-euhqmijc.manus.space
```

## Communication Channels

| Channel | Purpose | Owner |
| --- | --- | --- |
| GitHub repo | Source code, docs, reference pack, fixes | Codex |
| GitHub Issue #1 | Manus QA reports and Codex fix loop | Codex + Manus |
| `MANUS_BRIEF.md` | Simplified Manus instruction | Codex |
| `FIX_LOG.md` | Fix record after Manus reports issues | Codex |
| `reports/ACS_STATUS_REPORT.md` | Executive status for Asian Coding Systems | Codex |

## GitHub Issue

Main issue:

```text
https://github.com/the-middle-th/arithaya-model/issues/1
```

Use Issue #1 for:

- Manus QA report
- build status
- deployment URL
- mobile screenshots or notes
- SEO status
- performance notes
- Supabase readiness
- issues that require Codex fixes

Do not split QA across chat threads unless a new issue is created and linked from Issue #1.

## Manus Instruction

Manus should read this first:

```text
MANUS_BRIEF.md
```

Manus should not rebuild from scratch unless requested.

Manus should not use the old CreativEX/Kamakaben repo.

Manus should report in Issue #1 using:

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

For every Manus issue:

1. Identify root cause.
2. Fix code locally.
3. Run build/checks where available.
4. Commit.
5. Push to GitHub.
6. Update `FIX_LOG.md`.
7. Comment back in Issue #1 for Manus retest.

## Asian Coding Systems Reporting

ACS should receive concise status reports covering:

- GitHub source status
- live preview status
- build status
- open blockers
- next actions for Codex
- next actions for Manus
- production readiness status

Current ACS report:

```text
reports/ACS_STATUS_REPORT.md
```
