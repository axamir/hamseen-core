# Hamseen constrained MVP

Functional local vertical slice with SQLite persistence, role-aware API, audit events, guest lifecycle, packages, notices, tickets, booking conflict control, synthetic unit finance, receipt review, and a constrained sourced assistant.

```bash
pnpm --dir apps/mvp seed
pnpm --dir apps/mvp dev
```

Open `http://127.0.0.1:4180`. Switch between the four synthetic roles from the header. No real resident data or credentials are included.

Run domain tests with `pnpm --dir apps/mvp test`.

This vertical slice preserves the documented API/domain boundaries. Production hardening migrates the implementation to the approved NestJS/PostgreSQL stack without changing behavior contracts.
