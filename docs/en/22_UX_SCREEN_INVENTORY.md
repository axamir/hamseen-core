# 22 — UX Screen Inventory

Screen IDs are stable references for design, code, tests, and review.

| ID | Screen | Primary role | Key content/action |
|---|---|---|---|
| AUTH-01 | Sign in | All | phone/email, OTP/password, recovery |
| AUTH-02 | Join community | All | invitation, identity, unit request |
| HUB-01 | My Hub | All | mini-app grid, urgent cards, search, activity |
| UNIT-01 | My Unit | Resident | members, vehicles, documents, privacy |
| GUEST-01 | Guest decision | Resident | details, approve until, reject, message |
| GUARD-01 | Gate queue | Guard | waiting/expected guests, quick registration |
| PKG-01 | Package queue | Guard/resident | receive, notify, collect |
| FIN-01 | Unit account | Resident | balance, charges, payments, statement |
| FIN-02 | Receipt review | Accountant | evidence, match, approve/reject |
| TKT-01 | New request | Resident | category, description, media, urgency |
| TKT-02 | Operations board | Manager | triage, assign, SLA, status |
| RSV-01 | Amenity calendar | Resident | availability, rules, reserve/cancel |
| NOT-01 | Notice composer | Manager | audience, schedule, attachments, approval |
| BLD-01 | Building explorer | Manager | block/wing/floor/unit navigation |
| ACC-01 | Accounting dashboard | Accountant | collection, expenses, reserve, reports |
| SRV-01 | Services directory | Resident | providers, availability, order/request |
| PRV-01 | Provider workspace | Provider | catalog, orders, schedule, settlement |
| MKT-01 | Community market | Resident | browse, search, list, order |
| PRO-01 | Professionals | Resident | search skills, profile, contact controls |
| GOV-01 | Surveys and votes | Eligible users | eligibility, ballot, results |
| AI-01 | Assistant | Role-based | scoped chat, sources, proposed actions |
| SA-01 | Super admin | Super admin | tenants, modules, roles, integrations, audit |

Each screen specification must include loading, empty, error, offline, forbidden, success, and destructive-confirmation states before implementation is complete.
