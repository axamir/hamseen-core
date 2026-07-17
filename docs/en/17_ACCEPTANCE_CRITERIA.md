# 17 — MVP Acceptance Criteria

## Cross-cutting

- A user sees only modules and records permitted by role and community.
- Persian RTL and responsive mobile layouts pass usability review.
- Sensitive actions create audit events with actor and timestamp.
- Offline/failed requests never appear successful without confirmation.
- Notifications deep-link to the relevant record.

## Resident

- Can view own unit, balance, statement, notices, guests, packages, tickets, and reservations.
- Can submit a receipt, guest decision, ticket with photo, suggestion, and reservation.
- Cannot enumerate residents or financial data of other units.

## Guard

- Can register and close visitor/package flows in under one minute.
- Can operate during temporary connectivity loss and see sync state.
- Cannot access resident financial balances.

## Management/accounting

- Can navigate 3 blocks, 14 floors, and 336 units accurately.
- Can publish targeted notices and manage ticket assignment.
- Can generate charges, review receipts, record expenses, and export a unit statement.
- Financial changes preserve before/after history.

## Quality gate

Automated critical-flow tests, backup restore rehearsal, access-control tests, performance test at pilot load, security review, and signed pilot acceptance checklist.
