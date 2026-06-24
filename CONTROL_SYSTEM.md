# ARITHAYA Control System

## Goal

Keep summary points, time control, Manus communication, GitHub source control, and ACS reporting in one theme and one operating rhythm.

## Theme

The control system uses the same ARITHAYA visual language:

- deep navy
- warm gold
- soft white
- calm gray
- executive, calm, infrastructure-focused tone

## Control Points

1. GitHub is the single source of truth.
2. One browser screen stays visible during active work.
3. Manus reports only in GitHub Issue #1.
4. ACS reads `reports/ACS_STATUS_REPORT.md`.
5. Codex commits every verified change.
6. Fixes are recorded in `FIX_LOG.md`.

## Time Control

Each work cycle follows:

```text
Check -> Build -> Display -> Report -> Fix -> Commit -> Push -> Retest
```

## Website Implementation

The homepage includes a `ControlLayer` section that makes the operating rhythm visible to the team and keeps the project language consistent.

Files:

```text
components/ControlLayer.tsx
lib/content.ts
app/page.tsx
```

## Communication Implementation

Primary files:

```text
MANUS_BRIEF.md
COMMUNICATION_PROTOCOL.md
reports/ACS_STATUS_REPORT.md
SOURCE_OF_TRUTH.md
```
