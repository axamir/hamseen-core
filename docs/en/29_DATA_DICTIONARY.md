# 29 — Data Dictionary and Logical Model

## Foundation rules

- Domain records carry UUID `id`, `tenant_id`, `created_at`, and `updated_at` when mutable.
- Money uses integer official minor units plus `currency`.
- Time is stored in UTC and displayed in community timezone; display calendars may be Jalali/Gregorian.
- Finance, vote, access, and audit records are never physically deleted.
- Personal data carries classification, purpose, processing basis, and deletion/review date.

## Identity and tenancy

| Entity | Key fields | Constraint |
|---|---|---|
| Tenant | name, legal_name, timezone, locale, status | hard data boundary |
| Person | display_name, contacts, verification_status | encrypted/masked contact |
| UserAccount | person_id, auth_subject, status, last_login | unique auth_subject |
| Membership | tenant_id, person_id, role_id, status, valid_from/to | time-bound role |
| Role | code, name, scope, system/custom | stable system code |
| PermissionGrant | role_id, action, resource, condition | deny precedes allow |
| SupportAccess | operator, tenant, reason, approval, expires_at | time-bound, fully audited |

## Community structure

| Entity | Key fields | Relationship |
|---|---|---|
| Site | tenant_id, name, address | owns blocks/amenities |
| Block | site_id, code, name | owns floors/entrances |
| Wing | block_id, code | optional, owns units |
| Floor | block_id, number, label | number unique per block |
| Unit | block/wing/floor, code, type, area, status | code unique in tenant |
| Occupancy | unit/person, relation, start/end, approval | controlled period overlap |
| AssetAssignment | unit, type, code, valid_from/to | parking/storage/meter |
| Vehicle | person, plate_token, type, status | encrypted plate |
| Amenity | site, name, capacity, rules_version, status | schedules/bookings |

## Operations

| Entity | Key fields | States |
|---|---|---|
| Notice | audience, title, body, urgency, publish/expire, version | draft/reviewed/published/archived |
| GuestInvite | unit, host, guest label/type, valid_from/to | draft/approved/rejected/expired/entered/exited |
| AccessEvent | invite, gate, direction, time, actor | append-only |
| Package | unit, carrier, reference, condition, receive/collect | received/notified/collected/returned |
| Ticket | unit/location, category, priority, assignee, sla_due | submitted/triaged/assigned/in_progress/waiting/resolved/closed/reopened |
| TicketEvent | ticket, from/to, reason, actor, time | append-only |
| Attachment | owner type/id, object key, mime, size, checksum | scanned, restricted |
| Shift | guard, post, start/end, handover | scheduled/active/closed |
| Incident | severity, location, summary, response, closed_at | open/contained/closed |

## Reservation and services

| Entity | Key fields | Constraint |
|---|---|---|
| AmenityPolicy | amenity, version, hours, slot, capacity, fee, cancellation | versioned |
| Booking | amenity, unit, start/end, status, amount | exclusion constraint |
| Provider | identity, contract, status | verified before publish |
| CatalogItem | provider, type, title, price, stock, status | price version |
| Order | buyer, provider, totals, status, delivery_window | price snapshot |
| OrderLine | order, item snapshot, quantity, amounts | catalog changes isolated |

## Finance

| Entity | Key fields | Constraint |
|---|---|---|
| Account | code, name, type, parent | unique tenant code |
| ChargePeriod | start/end, formula_version, status | open/approved/posted/closed |
| JournalEntry | date, reference, description, status | debit equals credit |
| JournalLine | entry, account, unit, debit/credit | exactly one side |
| Receipt | unit, amount, currency, paid_at, evidence, fingerprint | duplicate detection |
| Expense | vendor, category, amount, evidence, approver | linked journal |
| ReserveFundMovement | purpose, resolution, amount, entry | withdrawal approval |
| Reconciliation | source, period, expected/actual/difference, status | repeatable and approved |

## Governance, AI, and audit

| Entity | Key fields | Rule |
|---|---|---|
| Vote | question, eligibility snapshot, open/close, quorum | locked rules |
| Ballot | vote, voter token, selection, submitted_at | confidentiality by vote type |
| Decision | code, source, text, effective/review dates, approver | product/site source |
| AIInteraction | user, role, purpose, model, prompt hash, sources, output, approval | minimize sensitive data |
| ProposedAction | interaction, tool, payload hash, risk, status | permission/approval before execute |
| AuditEvent | actor, role, action, resource, before/after hash, request, device | append-only, tamper-evident |
| Notification | recipient, template, channel, payload, delivery/read | no sensitive Push content |
| Consent | person, purpose, policy version, accepted/withdrawn | versioned |

## Data classification

- **Public:** approved community and service presentation.
- **Internal:** non-personal notices and operations.
- **Personal:** contact, occupancy, visitor, and order.
- **Sensitive:** identity evidence, plate, finance, security access.
- **Highly sensitive:** keys, credentials, banking and emergency data; prohibited in repo and ordinary logs.

## Migration and quality

Every import records source, checksum, mapping version, operator, accepted/rejected counts, and error report. Ambiguous rows remain in human reconciliation rather than production truth.
