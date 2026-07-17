# 36 — Definition, Demo, and Constrained MVP Completion Audit

Audit date: 17 July 2026

| Requirement | Authoritative evidence | Result |
|---|---|---|
| Bilingual build-ready documentation | matching 00–36 names under `docs/fa` and `docs/en` | achieved; filename parity tested |
| Fixed MVP/no silent expansion | documents 16, 17, 27 and `AGENTS.md` | achieved |
| Real building questionnaire | document 26, decision and sign-off tables | prepared; external answers open |
| Roles and authorization | document 28 and role/cross-tenant tests | achieved for local slice |
| Data and API | documents 29–30; `apps/mvp/core.mjs`, `server.mjs` | achieved for local slice |
| Security/privacy/AI safety | document 31 and local permission/audit controls | document complete; production gate open |
| Pilot pack | document 32: migration, KPI, training, rollback, acceptance | prepared; live execution is external |
| Commercial/presentation | documents 33–34 | achieved; final price needs market evidence |
| Bilingual landing | `apps/demo` | built and structurally tested |
| Interactive role tour | resident/guard/manager/accountant in `apps/demo/app.js` | built |
| Persistent local MVP | SQLite under `apps/mvp` | built |
| Guest | create/approve/enter/exit + version conflict | built and tested |
| Package | receive/intent/collect | built and tested |
| Ticket | create/assign/transition | built and tested |
| Booking | create + conflict prevention | built and tested |
| Basic finance | balance/receipt/deduplicate/review | built/tested; not comprehensive production ledger |
| Notice | draft/publish/version/intent | built and tested |
| Basic AI | role-bounded sourced proposed response | built and tested |
| Simple execution | `pnpm demo`, `pnpm mvp`, `pnpm check` | defined and dependency-free tested |
| GitHub publication | `axamir/hamseen-core` main | published |

## Test evidence

`pnpm check` performs syntax checks on four executable files, two bilingual demo tests, and nine domain tests. Coverage includes role authorization, tenant isolation, version conflict, audit, booking conflict, receipt duplicate, package, notice, and AI behavior.

## Audit environment limitation

The Codex sandbox rejected local port listening and the in-app browser blocked `file://`; runtime visual observation was therefore unavailable here. Files, syntax, and domain behavior were tested. The user can open both surfaces with `pnpm demo` and `pnpm mvp` on ports 4173 and 4180.

## Outside the completion claim

This audit covers the professional documentation pack, interactive presentation, constrained local MVP, and documented pilot readiness—not production deployment or a live pilot. The following require further/external authority:

- board answers and signatures in document 26
- legal/privacy/tax review and contracts
- migration to NestJS/PostgreSQL production infrastructure
- OTP/MFA, live messaging/payment, CI/CD, monitoring, restore, penetration testing
- secure real data, training, and the 20–40-unit live run

Document 35 tracks these production gaps. They must never be presented as Built.
