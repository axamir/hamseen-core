# 39 — Technical List Two: Engineering and Live-Pilot Readiness

| ID | Deliverable | Status | Evidence / remaining gate |
|---|---|---|---|
| E1 | Reproducible local execution | Done | pinned pnpm, root commands, SQLite seed |
| E2 | Configuration validation | Done | default/override loader, checks and tests |
| E3 | Local dependency baseline | Done as starter | Compose for PostgreSQL, Redis, MinIO |
| E4 | Tenant/audit PostgreSQL foundation | Done as reviewed starter | migration with RLS/audit; full schema remains |
| E5 | CI quality gate | Done | install, config, syntax, tests, bilingual parity |
| E6 | Backup integrity tooling | Done for local SQLite | backup, checksum, integrity verification |
| E7 | Secrets/environment contract | Done | safe `.env.example`; no credentials |
| E8 | Production API implementation | Remains | NestJS/OpenAPI/PostgreSQL modules and contract tests |
| E9 | Authentication/security hardening | Remains | OTP/MFA, sessions, rate limit, CSP, scans, independent review |
| E10 | Live channels/files | Remains | Push plus selected Bale/Telegram, secure upload/scan/storage |
| E11 | Observability and operations | Remains | metrics/traces/alerts/SLO, queue dashboards, incident drill |
| E12 | Production backup/restore | Remains | encrypted scheduled backup and recorded restore/RPO/RTO |
| E13 | Deployment pipeline | Remains | staging/production target, immutable image, approvals, rollback |
| E14 | Performance/accessibility/security validation | Remains | pilot-load, device/RTL, WCAG review, penetration test |
| E15 | Legal/accounting/board gate | External | approved retention, finance rules, contracts, signed configuration |

The repository is now ready for a build agent to begin E8 without waiting for board answers. It is not honest to mark E8–E15 complete before implementation, selected vendors, independent tests, and signatures exist.
