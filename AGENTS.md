# Agent Instructions

Read in order: `README.md`, `docs/en/00_MANIFESTO.md`, `docs/en/16_MVP_SCOPE.md`, `docs/en/18_BUILD_ORDER.md`, `docs/en/17_ACCEPTANCE_CRITERIA.md`, `docs/en/21_FEATURE_WORKFLOWS.md`, `docs/en/22_UX_SCREEN_INVENTORY.md`, `docs/en/23_DESIGN_SYSTEM.md`, `docs/en/24_TECHNICAL_DECISIONS.md`, `docs/en/27_MVP_EXECUTION_SPEC.md`, `docs/en/28_RBAC_MATRIX.md`, `docs/en/29_DATA_DICTIONARY.md`, and `docs/en/30_API_CONTRACT.md`.

Before handling real or pilot data, also read `docs/en/31_SECURITY_PRIVACY_AI_SAFETY.md` and `docs/en/32_PILOT_OPERATIONS_PACK.md`.

Before presentation, pricing, or sales work, read `docs/en/33_COMMERCIAL_AND_PRICING_MODEL.md` and `docs/en/34_PRESENTATION_AND_DEMO_PACK.md`; never fabricate traction, market figures, testimonials, or returns.

- Documentation is the source of truth. Do not silently expand MVP scope.
- Preserve Persian/English parity and RTL/LTR behavior.
- Use modular-monolith boundaries, tenant isolation, least privilege, and append-only audit events.
- Never invent resident data, legal compliance, financial results, testimonials, or production credentials.
- Before coding, state the screen/workflow IDs being implemented and acceptance criteria.
- Every change requires tests proportional to risk and updated documentation when behavior changes.
- Sensitive actions require explicit confirmation; AI must never exceed the initiating user’s permissions.
