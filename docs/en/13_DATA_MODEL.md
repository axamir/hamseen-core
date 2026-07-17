# 13 — Data Model

## Core hierarchy

`Tenant/Community → Site → Building/Block → Wing → Floor → Unit → Occupancy → Person`

## Domains

- Identity: user, person, household, role, permission, membership, session
- Property: unit, ownership, occupancy, vehicle, document, asset/equipment
- Finance: account, ledger entry, charge rule, charge, invoice, payment, receipt, expense, vendor, payroll, contract, reserve fund
- Operations: ticket, category, assignment, comment, attachment, SLA, incident
- Access: guest, invitation, access event, contractor permit, gate, package
- Communication: announcement, audience, notification, message, preference
- Amenities: amenity, rule, slot, reservation, attendance
- Commerce: provider, catalog, product, service, inventory, order, fulfillment, settlement, review, dispute
- Community: profile, skill, group, event, survey, vote, campaign
- Property market: listing, inquiry, visit
- Intelligence: AI request, context scope, model run, approval, audit event

## Rules

UUID identifiers, tenant key on tenant-owned records, timestamps in UTC with display timezone, soft deletion only where lawful, versioning for critical records, append-only audit events, explicit consent/provenance for personal data.
