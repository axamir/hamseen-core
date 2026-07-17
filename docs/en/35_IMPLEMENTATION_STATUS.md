# 35 — Implementation Status and Dependencies

Review date: 17 July 2026

## Built and tested

- bilingual documents 00–35 and executable MVP contracts
- bilingual interactive landing/tour with four roles and synthetic data
- local SQLite MVP and role-aware API
- resident, guard, manager, and accountant hubs
- visitor invite/approval/entry/exit
- ticket submission and assignment
- booking with conflict prevention
- synthetic balance, receipt submission/deduplication/accountant review
- sensitive-action audit and cross-tenant tests
- package receipt/notification/collection and Notification Intent
- versioned management notice creation and publication
- constrained role-aware assistant with sources and no autonomous execution
- validated, explicitly assumed Lavizan defaults with private override flow
- board-friendly bilingual data worksheet and safe import starters
- CI quality workflow, local dependency Compose baseline, environment contract
- security headers, request IDs, size/rate controls, health/readiness and graceful shutdown
- local SQLite backup/checksum/integrity tooling and PostgreSQL RLS/audit starter

## Not production-ready yet

- real authentication, OTP/MFA, session management
- full PostgreSQL/NestJS API implementation, queues, observability and live object storage
- real Push/Bale/Telegram/SMS delivery (internal Intent exists)
- files/media, advanced package detail, comprehensive finance reporting
- production encrypted backup/restore, deployment, load/accessibility/penetration testing
- final legal text and contracts

## External dependency — board

Questionnaire 26, unit/resident data, finance/guest/amenity/retention rules, pilot owners, budget, and acceptance signatures. Missing answers do not block synthetic development, but do block live deployment.

Document 37 and the board worksheet provide safe defaults and an override path, so missing answers no longer block build work. They still block a live pilot until confirmed.

## External dependency — specialists

- legal/privacy: processing basis, retention, data agreement, terms
- accounting/tax: formulas and books, rial/toman, invoicing, gateway
- security: threat review, penetration test, incident plan
- brand/market: final name/domain/identity and sourced market figures

## Pilot conversion gate

Production architecture migration, completion of document 16 flows, document 31 security gate, data rehearsal, and document 32 sign-off. Presentation may label only the first section as Built.
