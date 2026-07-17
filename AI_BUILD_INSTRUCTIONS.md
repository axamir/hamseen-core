# AI Build Instructions

## Mission

Build the constrained Hamseen MVP and presentation landing page exactly from this repository. Prefer a coherent, tested vertical slice over broad placeholders.

## Execution protocol

1. Audit documents and report contradictions before code.
2. Scaffold the monorepo specified in `docs/en/24_TECHNICAL_DECISIONS.md`.
3. Implement localization, design tokens, authentication shell, tenant context, permission checks, and audit foundation.
4. Add Lavizan seed data with synthetic people only.
5. Implement in `docs/en/18_BUILD_ORDER.md` order.
6. For each slice, cite screen IDs, workflow states, API/schema changes, tests, and screenshots.
7. Stop and ask when a decision affects law, accounting policy, privacy retention, payment movement, or MVP scope.

## First demonstrable milestone

Local web experience containing landing page, AUTH-01, HUB-01, GUEST-01, GUARD-01, FIN-01 mock statement, TKT-01/TKT-02, and RSV-01 with deterministic seed data and responsive Persian UI.

## Commands expected at handoff

`pnpm install`, `docker compose up -d`, `pnpm db:migrate`, `pnpm db:seed`, `pnpm dev`, `pnpm test`, `pnpm test:e2e`, `pnpm lint`, `pnpm typecheck`.
