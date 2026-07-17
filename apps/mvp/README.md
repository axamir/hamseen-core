# Hamseen constrained MVP

Functional local vertical slice with SQLite persistence, role-aware API, audit events, guest lifecycle, packages, notices, tickets, booking conflict control, synthetic unit finance, receipt review, and a constrained sourced assistant.

```bash
pnpm --dir apps/mvp seed
pnpm --dir apps/mvp dev
```

Open `http://127.0.0.1:4180`. Switch between the four synthetic roles from the header. No real resident data or credentials are included.

Run domain tests with `pnpm --dir apps/mvp test`.

The default community configuration is explicitly assumed and replaceable. Validate it with `pnpm config:check`; provide an approved private override through `HAMSEEN_CONFIG_PATH` without committing real community or personal data. Health endpoints are `/api/v1/health` and `/api/v1/ready`. Security headers, request IDs, JSON size limits, a local rate limit, and graceful shutdown are enabled. Demo-header authentication is intentionally refused when `NODE_ENV=production` unless explicitly overridden; it must be replaced by the documented OTP/MFA session implementation before any live pilot.

This vertical slice preserves the documented API/domain boundaries. Production hardening migrates the implementation to the approved NestJS/PostgreSQL stack without changing behavior contracts.
