# 03 — Roles and Permissions

All people share the same base hub. Roles add work apps and permissions; they do not create unrelated products.

| Role | Typical capabilities | Explicit restrictions |
|---|---|---|
| Resident | Own unit, notices, guests, tickets, reservations, services, marketplace | No other unit’s private or financial data |
| Owner | Resident capabilities plus owned-unit records | No tenant-private messages |
| Tenant | Occupancy-scoped resident access | No ownership-only documents |
| Guard | Guests, access events, packages, shift report | No charge balances or board finance |
| Internal manager | Operations, assignments, notices, providers | No irreversible finance without authority |
| Accountant | Charges, payments, expenses, reports | No private conversations or access control |
| Board member | Governance, reports, approvals, votes | Access limited by board policy |
| Provider | Own catalog, orders, schedule, settlement | No unrelated resident or community data |
| Super admin | Tenant setup, modules, roles, integrations, audit | Break-glass access is logged and exceptional |

## Rules

- Deny by default; grant the minimum required permission.
- A user may hold multiple roles.
- Every sensitive change creates an immutable audit event.
- AI permissions equal the initiating user’s permissions, never more.
- Financial deletion, permission changes, and privacy exports require elevated confirmation.
