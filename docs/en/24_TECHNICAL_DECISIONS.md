# 24 — Technical Decisions

## Baseline stack

- TypeScript monorepo with pnpm and Turborepo
- Next.js PWA for resident, guard, management, and presentation surfaces
- NestJS modular API
- PostgreSQL with tenant-aware row policies and Prisma migrations
- Redis for queues/cache/rate limiting; S3-compatible object storage
- Web Push plus adapter interfaces for Bale, Telegram, SMS, email, and payment providers
- OpenAPI contracts; background jobs; structured logs, metrics, traces, and error reporting
- Playwright for critical E2E; unit/integration tests in CI
- Docker Compose for local dependencies

## Architecture rules

Start as a modular monolith, not microservices. Domain modules own their data access. Clients never bypass API authorization. External integrations use adapters. AI calls pass through AI Gateway. Tenant context is mandatory. Audit events are append-only.

## Repository target

```text
apps/web        apps/api
packages/ui     packages/config
packages/contracts packages/i18n
packages/testing docs scripts infra
```

Native mobile is deferred until PWA pilot evidence identifies genuine platform limitations.
