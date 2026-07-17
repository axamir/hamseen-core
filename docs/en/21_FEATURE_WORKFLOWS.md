# 21 — Critical Feature Workflows

Every workflow uses explicit states, permission checks, notifications, and audit events.

| Flow | States | Required exceptions |
|---|---|---|
| Membership | invited → identity verified → unit requested → approved/rejected → active/suspended | duplicate person, expired invite, owner/tenant dispute |
| Guest | draft → invited/waiting → approved/rejected/expired → entered → exited/closed | no response, offline gate, contractor, courier, recurring guest |
| Package | received → resident notified → acknowledged → collected/returned | wrong unit, damaged, overdue, offline registration |
| Ticket | draft → submitted → triaged → assigned → in progress → waiting → resolved → confirmed/closed/reopened | emergency escalation, duplicate, SLA breach, resident rejects resolution |
| Receipt | draft → submitted → under review → approved/rejected → posted | duplicate, wrong amount/period, unreadable proof, reversal |
| Reservation | available → held → confirmed → checked in → completed/cancelled/no-show | capacity conflict, maintenance closure, refund, approval-required event |
| Order | cart → submitted → accepted/rejected → preparing → ready/out for delivery → delivered → closed/disputed | substitution, price change, cancellation, partial fulfillment |
| Notice | draft → reviewed → scheduled/published → acknowledged → archived | emergency override, targeted audience, correction/version |
| Vote | draft → eligibility locked → open → closed → counted → certified/published | quorum failure, abstention, recount, legal invalidation |

## Universal requirements

- Each transition records actor, time, previous state, new state, channel, and reason.
- Retrying a command must not duplicate a payment, order, invitation, or notification.
- Users see plain-language status and the next available action.
- Destructive or formal transitions require confirmation and appropriate authority.
