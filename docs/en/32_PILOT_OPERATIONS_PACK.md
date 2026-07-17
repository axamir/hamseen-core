# 32 — Pilot Operations, Migration, and Measurement Pack

## Operational ownership

| Role | Responsibility |
|---|---|
| Board sponsor | authority, budget, unblock, final acceptance |
| Community product owner | daily decisions, coordination, feedback priority |
| Hamseen pilot manager | plan, release, risk, reporting |
| Data steward | receive, reconcile, approve migration data |
| Security/privacy owner | access, incident, gate approval |
| Support | training, tickets, user communication |

## Stages and gates

1. **Discovery:** questionnaire 26, current process map, users and amenity selection.
2. **Demo:** synthetic prototype; flow approval by manager, guard, accountant, resident.
3. **Data rehearsal:** test import, error report, sample reconciliation, environment cleanup.
4. **Controlled launch:** 20–40 units, one shift, one manager, one closed finance period, one amenity.
5. **One block:** after two stable cycles without critical variance.
6. **Full site:** waves with rollback and support capacity.

No gate passes verbally; each has checklist, owner, and approval.

## Migration templates

Separate files: `units`, `people`, `occupancies`, `vehicles`, `opening_balances`, `charges`, `receipts`, `amenities`, `staff`, `contracts`. Every file carries external ID, source, verification status, and snapshot date. PII uses secure transfer, never public email or Git.

Flow: receive → antivirus/checksum → staging → schema validation → duplicate match → variance report → data-steward approval → idempotent import → reconciliation → sign-off.

## Training and support

- Resident: five-minute guide and guest/receipt/ticket/booking card.
- Guard: scenario practice for entry, package, offline, shift handover.
- Manager/accountant: staging, safe correction, reporting, escalation.
- Support: response hours, single channel, versioned FAQ, incident escalation.

## KPIs and formulas

| Metric | Definition |
|---|---|
| Activation | households with sign-in and one action / invited households |
| Weekly active household | unit with one meaningful event in seven days |
| Guest decision time | median request-to-decision |
| Package custody time | median receive-to-collection |
| Ticket resolution | median submission-to-resolution by urgency |
| Receipt review | median receipt submission-to-decision |
| Reconciliation accuracy | 1 - absolute variance / expected amount |
| Support burden | support tickets per 100 active households |
| Task success | unassisted completion in usability test |
| Critical incident | SEV-1/2 count; pilot target zero |

Numeric targets require week-zero baseline approval.

## Daily and weekly operations

- Daily: service health, failed queues, backup, incident, variance, overdue work.
- Weekly: KPI, role feedback, recurring failures, risk, decisions, release plan.
- Scope/rule changes receive Decision IDs; incident hotfixes are documented afterward.

## Rollback and stop

Pause on serious security event, unresolved finance variance, data loss, missing operational owner, or gate safety impairment. The old process remains parallel until two critical cycles pass. Rollback freezes commands, preserves evidence, exports changes, and restores control safely.

## Acceptance

Attach data reconciliation, security/restore tests, KPIs, open issues, training evidence, support owner, and board/manager/accountant sign-off.
