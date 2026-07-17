# 30 — API and Event Contract

## Standard

- Base `/api/v1`, UTF-8 JSON, OpenAPI as client/test contract source.
- Required headers: `Authorization`, `X-Tenant-ID`, `X-Request-ID`; sensitive commands use `Idempotency-Key`.
- Success `{ data, meta }`; error `{ error: { code, message, field_errors, request_id } }`.
- Cursor pagination; allowlisted filter and sort.
- Codes: `VALIDATION_FAILED`, `UNAUTHENTICATED`, `FORBIDDEN`, `NOT_FOUND`, `CONFLICT`, `RATE_LIMITED`, `OFFLINE_RETRY_REQUIRED`, `INTERNAL_ERROR`.

## Core routes

| Domain | Main routes |
|---|---|
| Auth | `POST /auth/challenges`, `/auth/verify`, `/auth/refresh`, `/auth/logout` |
| Me | `GET /me`, `/me/memberships`, `POST /me/active-role` |
| Structure | `GET /sites`, `/blocks`, `/floors`, `/units/:id`; `POST /occupancy-requests` |
| Notices | `GET/POST /notices`, `POST /notices/:id/publish`, `/acknowledge` |
| Guests | `GET/POST /guest-invites`, `POST /:id/approve`, `/reject`, `/enter`, `/exit` |
| Packages | `GET/POST /packages`, `POST /:id/notify`, `/collect`, `/return` |
| Tickets | `GET/POST /tickets`, `PATCH /:id`, `POST /:id/transition`, `/comments` |
| Booking | `GET /amenities/:id/availability`, `POST /bookings`, `POST /:id/confirm`, `/cancel` |
| Finance | `GET /units/:id/statement`, `POST /receipts`, `POST /receipts/:id/review`, `GET/POST /expenses` |
| Admin | `GET/POST /memberships`, `/roles`, `/contracts`, `/reports`; dedicated role-change endpoint |
| AI | `POST /ai/interactions`, `POST /ai/actions/:id/approve|reject`, `GET /ai/sources/:id` |

## Commands and concurrency

- State transition receives `expected_version`; mismatch returns `409 CONFLICT`.
- Reuse of an idempotency key with different payload is rejected; identical payload returns prior result.
- Booking uses database constraints/locking, not UI-only checks.
- Finance commands use an atomic transaction, balanced journal, and outbox event.

## Domain events

Versioned names include `guest.invite.created.v1`, `guest.entry.recorded.v1`, `package.received.v1`, `ticket.state_changed.v1`, `booking.confirmed.v1`, `receipt.posted.v1`, `notice.published.v1`, `membership.role_changed.v1`.

Envelope:

```json
{"event_id":"uuid","type":"ticket.state_changed.v1","tenant_id":"uuid","occurred_at":"ISO-8601","actor_id":"uuid","aggregate_id":"uuid","version":3,"data":{}}
```

Consumers are idempotent; Outbox controls publish and a dead-letter queue captures failure.

## Notifications and channels

Domains emit `NotificationIntent`. Bale/Telegram/Push/SMS adapters own templates, limits, retry, and delivery receipts. Channel content is minimal and uses secure deep links.

## Files

Signed upload URL, MIME/size limit, checksum, malware scan, and quarantine until approved. Download URLs are short-lived and each request rechecks permission.

## AI Gateway

Request declares purpose, allowed sources, and enabled tools. Gateway applies authorization, redaction, budget, provider routing, and audit. AI response is never an executed action; a proposed action has a separate ID and approval.

## Versioning and resilience

Breaking changes require a new version; field retirement has deprecation and usage telemetry. Every API has timeout, rate limit, external circuit breaker, and understandable outage behavior.
