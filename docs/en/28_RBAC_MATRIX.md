# 28 — Role and Permission Matrix

## Legend

`V` view, `C` create, `E` edit while allowed, `A` approve/reject, `X` execute sensitive transition, `—` no access. Every permission is community-scoped; record and field policy may further restrict module permission.

| Domain | Resident | Guard | Internal manager | Accountant | Board | Provider | Platform super admin |
|---|---|---|---|---|---|---|---|
| Personal profile | V/E own | V/E own | V/E own | V/E own | V/E own | V/E own | limited support |
| Unit record | V own, C request | minimum V | V/C/E/A | finance identity V | report V | — | no private content by default |
| Membership/occupancy | V own | — | V/C/E/A | limited V | report V/policy A | — | tenant admin, cannot forge approval |
| Notice | V | V | V/C/E/A/X | limited V/C | V/C/A/X | related V | infrastructure config |
| Guest | V/C/E own/A decision | V/C/E/X entry | V/C/E/A/X | — | report V | — | audited support |
| Package | V own/A handoff | V/C/E/X | V/E/A | — | report V | — | audited support |
| Ticket | V/C/E own | related V/C | V/C/E/A/X | finance V | report V/escalation A | assigned V/E | limited support |
| Reservation | V/C/E own | daily schedule V | V/C/E/A/X | amount V | report V/policy A | related V | module config |
| Unit balance/statement | V own | — | authorized summary V | V/C/E/A/X | report V | — | no default visibility |
| Receipt | V/C own | — | status V | V/C/E/A/X | report V | — | support, no financial decision |
| Expense/ledger/reserve | — | — | limited operational V | V/C/E/A/X | V/A/X by policy | — | no financial posting |
| Contract | — | — | V/C/E | finance V | V/A/X | own contract V | — |
| Vote | eligible V/C vote | eligible V/C vote | V/C draft | eligible V/C vote | V/C/E/A/X | eligible V/C vote | technical config, no vote |
| Service order | V/C/E own | V/C/E own | report V | settlement V | report V | own order V/C/E/A/X | limited support |
| AI | own allowed context | guard operations | management operations | permitted finance | permitted reports | own orders | provider/policy config |
| Roles/access | — | — | change request | — | local policy/role A | — | infrastructure C/E with tenant approval |
| Audit log | own event | own operational event | management scope V | finance scope V | authorized V | own event | technical V with content masking |

## Mandatory field restrictions

- Guard: no balances, full identity document, contract, private message, or unnecessary household data.
- Accountant: no private messages, guest detail, or health record; identity only for reconciliation.
- Provider: order-minimum data; full destination only after acceptance and during fulfillment.
- Super admin: provisioning and technical health; support access is time-bound, reasoned, consented, audited.
- AI: no independent permission; scope is the intersection of user permission, enabled tools, and request purpose.

## Separation of duties

- One person must not create and approve the same sensitive financial correction.
- Privileged role grant requires request, second approval, and governance-owner notification.
- Soft deletion replaces destruction of finance, vote, access, and audit history.
- Emergency `break-glass` access is time-bound, reasoned, and immediately reportable.

## Required tests

Every API has allow, deny, cross-tenant, other-record, sensitive-field, and suspended-role tests.
