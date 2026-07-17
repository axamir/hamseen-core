# 23 — Design System

## Character

Warm, trustworthy, calm, modern, and familiar. Never futuristic for its own sake. Hamseen should feel like a polished mobile app or mini app, not an administrative ERP.

## Foundations

- Mobile-first 4/8-point spacing system; maximum readable desktop width.
- Persian UI uses a tested Persian sans font; English uses a compatible sans family.
- RTL and LTR are first-class, never mirrored as an afterthought.
- Minimum 44×44 px touch targets; body text at least 16 px on mobile.
- Color never carries meaning alone; pair it with icon and label.
- Light theme first, dark theme supported through semantic tokens.

## Semantic tokens

`surface`, `surface-raised`, `text-primary`, `text-muted`, `brand`, `success`, `warning`, `danger`, `info`, `border`, `focus` with accessible contrast.

## Core components

App tile, urgent action card, bottom navigation, top bar, search, status chip, notification item, form field, date/time picker with Jalali/Gregorian support, money input, upload, data table, timeline, confirmation sheet, empty/error/offline state, toast, skeleton, accessible modal.

## Content rules

Use human verbs: “Approve guest”, “Submit receipt”, “Reserve”. Explain consequences before destructive actions. Avoid unexplained accounting or technical jargon. Dates show calendar type; money shows currency and digit grouping.
