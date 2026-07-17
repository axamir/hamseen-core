# 27 — MVP Execution Specification

## Shared capability contract

Every action records `tenant_id`, user, active role, timestamp, channel, request ID, and result. Every screen includes loading, empty, error, offline, forbidden, success, and sensitive-confirmation states. Retried commands must not create duplicate records or notifications.

## AUTH — Sign-in and membership

**Goal:** secure entry and connection of a person to approved roles and units.

- Input: phone/email, OTP/password, invitation or membership request.
- Main path: sign in → verify → select community → select active role → hub.
- New member: invite → minimum identity → unit/relationship request → manager review → active/rejected.
- Exceptions: expired invite, duplicate number, owner/tenant dispute, suspension, excessive attempts.
- Output: short-lived revocable session; role switching without bypassing authorization.
- Acceptance: no unauthorized community/unit is visible and membership changes are audited.

## HUB — Shared role-aware hub

- Home contains permitted mini-app tiles, urgent actions, search, notifications, and recent activity.
- Role-specific defaults; optional tiles may be reordered or hidden.
- Tiles show real open-work counts and deep-link to current state.
- Staff retain community services alongside operational tools.
- Acceptance: frequent actions start within three taps and sensitive data is absent from the home surface.

## UNIT — Unit and occupancy record

- Block, floor, number, representative, verified members, permitted vehicles/assets, occupancy periods.
- Member removal/addition, ownership transfer, and lease end create review requests rather than direct mutation.
- Private documents use limited access and expiry metadata.
- Acceptance: relationship history is preserved and other units cannot be enumerated.

## NOTICE — Announcements

- Audience: community, block, floor, role, or unit.
- Title, content, urgency, attachments, publish/expiry time, optional acknowledgement.
- Published corrections create versions; previous content is retained.
- Emergency publishing requires explicit authority and confirmation.
- Acceptance: audience, delivery/view status, schedule, and version are provable in audit.

## GUEST — Visitors and access

- Resident supplies name, type, permitted window, companions, optional note.
- Guard sees expected, awaiting-response, and currently-inside queues.
- Walk-in: find unit → request decision → resident response → entry → exit.
- Separate types: personal guest, courier, taxi, contractor, recurring guest.
- Exceptions: no response, expiry, offline gate, suspended unit, emergency.
- Acceptance: routine flow completes under one minute and guards never see finance.

## PACKAGE — Package custody

- Guard records unit, carrier, non-sensitive identifier/description, optional image, visible condition.
- Resident is notified; collection records recipient, time, and confirmation.
- Exceptions: wrong unit, damage, overdue, return, offline capture.
- Acceptance: packages cannot disappear without handoff and overdue records are reportable.

## TICKET — Request, complaint, suggestion

- Resident submits category, location, description, media, suggested urgency.
- Manager confirms classification/priority, assignee, and SLA.
- States: submitted → triaged → assigned → in progress → waiting → resolved → accepted/closed/reopened.
- Plain-language state, last action, and next action remain visible.
- Critical items use distinct escalation; AI only recommends classification.
- Acceptance: assignee/priority/state changes require reason and uploads are constrained.

## RESERVATION — Amenity booking

- Manager configures capacity, calendar, hours, slot duration, cleaning buffer, fee/deposit, cancellation rules.
- Resident views availability, accepts rules, and reserves.
- Temporary holds expire; payment/manager approval confirms when required.
- Exceptions: concurrency, maintenance, capacity, unit restriction, cancellation, no-show.
- Acceptance: conflicting bookings never both confirm and calendar changes are traceable.

## FINANCE — Basic accounting

- Accountant generates charge periods and debit/credit lines from approved rules.
- Resident sees only own balance, ledger, and receipts.
- Receipt: draft → submitted → reviewed → approved/rejected → posted; correction uses reversal, not raw edit.
- Expense captures date, category, amount, vendor, evidence, payment method, approver.
- Posted finance uses unique IDs, integer minor currency units, and before/after audit.
- Acceptance: ledgers reconcile, duplicates are detected, and AI never invents figures.

## MANAGEMENT — Operations

- Block → wing → floor → unit explorer with occupancy, ticket, and finance filters.
- Operations board, notices, users, amenities, expiring contracts, daily brief.
- Sensitive exports require permission, watermark, and download record.
- Acceptance: work is traceable end-to-end and managers cannot bypass role limits.

## GUARD — Gate workspace

- Large, fast queues for guests, packages, contractors, incidents, and shift handover.
- Voice input only prepares a draft; the guard confirms before saving.
- Connection and last-sync state always visible.
- Acceptance: usable on phone/tablet with gloves, low light, and weak connectivity.

## BASIC AI — Constrained MVP intelligence

- Approved-source FAQ, notice summary, ticket classification suggestion, response draft.
- Output shows source, limitation, and proposed status.
- No direct database, payment, access change, or automatic send authority.
- Acceptance: AI permission equals initiator permission and prompt/model/data/output/approval are logged.

## Outside MVP

Full marketplace, transactional property, IoT, native apps, predictive maintenance, comprehensive payroll, and autonomous AI do not block MVP acceptance.
