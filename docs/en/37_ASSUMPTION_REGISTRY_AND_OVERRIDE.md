# 37 — Assumption Registry and Replaceable Community Data

## Decision

Missing board data must not block product definition, UI, local development, or synthetic demonstrations. `config/lavizan.defaults.json` is the machine-readable source for provisional Lavizan settings. Every value is explicitly `assumed`, replaceable, and prohibited from being presented as a confirmed fact.

## Replacement flow

1. Board completes `templates/board/BOARD_DATA_WORKSHEET.en.md`.
2. Data steward records approved changes in a private copy of `config/lavizan.override.example.json`.
3. Run `HAMSEEN_CONFIG_PATH=/secure/path/override.json pnpm config:check`.
4. Rehearse imports in staging using the templates under `templates/import`.
5. Produce variance and reconciliation reports; approver signs the Decision record.
6. Promote configuration through deployment secret/config management—never by committing private data.

Deep merge preserves unmodified defaults. Invalid unit totals, missing identifiers, unsupported status, and empty module sets fail validation. A live pilot cannot begin while the profile remains `assumed`.

## Data boundaries

Public repository: structure assumptions, non-personal policy defaults, synthetic examples. Private approved configuration: official address, named owners, operational contacts, rules. Secure import only: people, occupancy, vehicles, balances, receipts, identity evidence, contracts, keys and credentials.

## Truth labels

- `assumed`: usable for build/demo only.
- `board-confirmed`: approved for a dated pilot configuration; not a legal-compliance claim.
- `synthetic`: fabricated test record, never a real person or transaction.
- `verified-import`: accepted through staging, reconciliation, and steward sign-off.
