# Infrastructure starter

`compose.yaml` provides local PostgreSQL, Redis, and S3-compatible storage. It is a development baseline, not a production recipe. Copy `.env.example` to a non-committed `.env`, replace every placeholder, then run `docker compose -f infra/compose.yaml up -d`.

Production requires managed secrets, TLS, encrypted volumes/backups, private networking, monitoring, tested restore, immutable images, least-privilege service accounts, and an approved regional hosting decision. `postgres/001_foundation.sql` demonstrates tenant-scoped RLS and append-only audit foundations; the constrained SQLite MVP remains the executable demo until the target NestJS/PostgreSQL implementation is built.
