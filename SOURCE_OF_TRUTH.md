# ARITHAYA Source Of Truth

Use this GitHub repository as the single source of truth for ARITHAYA Model:

```text
https://github.com/the-middle-th/arithaya-model
```

Live Manus preview:

```text
https://arithayamod-euhqmijc.manus.space
```

Reference source pack:

```text
references/source-pack
```

## Rule

All future Codex fixes, Manus QA reports, Vercel deployment work, and production readiness updates must reference this repository.

Primary Manus task file:

```text
MANUS_BRIEF.md
```

Communication protocol:

```text
COMMUNICATION_PROTOCOL.md
```

Control system:

```text
CONTROL_SYSTEM.md
```

ACS status report:

```text
reports/ACS_STATUS_REPORT.md
```

Detailed Manus task file:

```text
MANUS_NEXT_TASK.md
```

Do not use the old CreativEX/Kamakaben repository for ARITHAYA work.

Do not use `arithachboss-cmyk/arithaya-model` for this project unless the founder explicitly migrates ownership later.

## Next Execution Order

1. Manus tests the live preview.
2. Codex extracts and synthesizes the reference source pack when copy/content strategy changes are needed.
3. Manus reports issues against this GitHub repo.
4. Codex fixes issues locally.
5. Codex commits and pushes to this repo.
6. Manus retests.
7. Repeat until production-ready.
