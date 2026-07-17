# Real Community Data Worksheet

This worksheet does not block design or development. Until answers arrive, the system uses `config/lavizan.defaults.json`, visibly marked assumed/unconfirmed. Approved answers are stored in a private override and validated before a live pilot.

For every row, mark Confirm, Correct, or Unknown. Never place resident identity, contact details, financial evidence, or secrets in this file or GitHub.

| Topic | Plain-language board question | Current assumed default | Answer/correction | Approver |
|---|---|---|---|---|
| Official name | What registered or operating name should be shown? | Lavizan Residential Community |  |  |
| Address | What is the official correspondence address? | Unconfirmed |  |  |
| Structure | Are there blocks A/B/C, 14 floors each, 8 units per floor? | Yes; 336 units total |  |  |
| Wings | Does each floor have two wings with four units each? | Yes |  |  |
| Entrances | How many gates and guard posts operate? | One pilot gate |  |  |
| Roles | Which functions belong to manager, accountant, guard, and board sponsor? | Standard roles; no real names |  |  |
| Charges | What period, formula, due date, and approval apply? | Monthly; formula unconfirmed |  |  |
| Receipts | Who reviews receipts and within how many days? | Accountant; 2 business days |  |  |
| Guests | What hours, guest types, and no-response rule apply? | 2-hour permit; hold until response |  |  |
| Packages | When is a package overdue? | 72 hours |  |  |
| Tickets | What are critical/urgent/normal SLAs? | 1/4/24 hours |  |  |
| Amenities | Which amenities are bookable and at what capacity? | Hall, football, basketball, kids area |  |  |
| Booking | Slot, buffer, price, deposit, and cancellation rules? | 60 min, 15 min buffer; price unconfirmed |  |  |
| Notices | Who may publish normal and emergency notices? | Manager; emergency authority by policy |  |  |
| Retention | How long are guest/package/ticket/finance/audit records kept? | Proposed values in config |  |  |
| Pilot | How many units, which block, and what date? | 30 households, block A, date open |  |  |
| Support | Who owns daily support and what hours apply? | Business days 08:00–20:00 |  |  |
| Stop authority | Who can pause the pilot? | Board sponsor + product owner |  |  |
| Acceptance | Who signs pilot completion? | Board, manager, accountant, security/privacy owner |  |  |

Secure separate deliveries cover unit inventory, people/occupancy, opening balances, staff/shifts, amenities, contracts, approved rules, branding, and signed validation. Flow: receive → malware/checksum → staging → error report → steward approval → idempotent import → reconciliation → sign-off.
