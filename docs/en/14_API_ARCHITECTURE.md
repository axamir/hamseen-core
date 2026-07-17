# 14 — API Architecture

## Boundary

Clients and bots call a versioned Hamseen API; they never connect directly to databases or model providers.

## Suggested services

Identity, Community, Unit, Finance, Access, Ticket, Notification, Reservation, Commerce, Property, Integration, AI Gateway, Audit.

## Standards

- REST/JSON first with `/v1`; event contracts for async workflows
- Idempotency keys for payments, orders, and bot actions
- Cursor pagination, stable error codes, request correlation IDs
- Signed webhooks with replay protection
- OpenAPI specification and generated clients
- Rate limits by tenant, actor, channel, and endpoint

## Channels

PWA/native clients, management web, guard tablet, Telegram bot, Bale bot, SMS/push provider, payment gateway, object storage, and model providers.

## Events

Examples: `guest.waiting`, `guest.approved`, `package.received`, `ticket.created`, `payment.receipt_submitted`, `reservation.confirmed`, `order.status_changed`, `announcement.published`.
