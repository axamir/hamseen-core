# 31 — Security, Privacy, and AI Safety

## Threat model

| Threat | Prevention | Detection and response |
|---|---|---|
| Cross-community data access | mandatory tenant scope in API/query | cross-tenant tests and audit alert |
| Account takeover | limited OTP, privileged MFA, short/revocable sessions | unusual-login alert and session revocation |
| Privilege escalation | server RBAC and second approval | role-change reporting and periodic review |
| Finance tampering | double-entry, idempotency, separation of duties | reconciliation, before/after, variance alert |
| Document exposure | short URL, scan, encryption | download log and revocation |
| API abuse | rate limit, schema validation, WAF | metrics, circuit breaker, incident response |
| Lost device | no stored secret, session lock, masked data | revoke device sessions |
| AI injection/leakage | source allowlist, constrained tools, redaction | interaction log, provider stop, human review |
| Forged notice/message | approved template and organizational sender | delivery log and spoof report |
| Audit alteration | append-only and hash chaining | integrity check and independent backup |

## Authentication and sessions

- Passwords/tokens never enter logs or unsafe local storage.
- Manager, accountant, board, and super-admin roles require MFA.
- Sensitive sessions use idle/absolute timeout; refresh tokens rotate and revoke.
- Contact change, recovery, and privileged grants require strong verification and notification.

## Privacy and retention

The final retention schedule requires board and legal approval. Until then, demonstrations use synthetic data only. Each data class records purpose, access, location, proposed duration, and deletion/anonymization method. Push/SMS exposes no sensitive content.

Users can view own data, request correction and explanation, opt out of optional messaging, and request deletion subject to legal/financial duties. Requests receive a ticket and recorded decision.

## Secrets and infrastructure

- Secrets live only in environment secret management; `.env.example` contains no real value.
- TLS in transit, encryption at rest for database/files/backups, field encryption for highly sensitive data.
- Local, staging, and production are separate; real data never enters local or Git.
- Dependency/container scanning, routine patching, least-privilege services.

## Backup and continuity

- Encrypted daily backup, independent weekly copy, approved retention.
- Periodic restore test records real RPO/RTO; an untested backup is not accepted.
- Runbooks cover internet loss, messaging outage, database failure, and guard emergency fallback.

## Incident response

Report → triage → contain → preserve evidence → eradicate → recover → authorized notice → postmortem. Define `SEV-1` to `SEV-4`, incident commander, secure channel, and response targets before pilot.

## AI safety

- AI only through Gateway with user permission, declared purpose, minimum context.
- Sources are identified; insufficient evidence produces an explicit limitation.
- Finance, access, public notice, deletion, vote, and secure-entry actions are never autonomous.
- Sensitive prompt/output has separate retention; provider training is disabled absent explicit contract.
- Tenant/capability/provider kill switch, cost and request ceilings.

## Pre-pilot gate

Record RBAC/cross-tenant tests, vulnerability scan, restore rehearsal, log review, offline gate test, incident tabletop, and privacy-policy approval.
