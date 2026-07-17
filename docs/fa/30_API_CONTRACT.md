# ۳۰ — قرارداد API و رویدادها

## استاندارد

- Base: `/api/v1`، JSON UTF-8، OpenAPI مرجع تولید کلاینت و آزمون قرارداد.
- Headerهای اجباری: `Authorization`، `X-Tenant-ID`، `X-Request-ID`؛ برای فرمان‌های حساس `Idempotency-Key`.
- پاسخ موفق: `{ data, meta }`؛ خطا: `{ error: { code, message, field_errors, request_id } }`.
- صفحه‌بندی cursor-based؛ فیلتر و sort دارای allowlist.
- خطاها: `VALIDATION_FAILED`, `UNAUTHENTICATED`, `FORBIDDEN`, `NOT_FOUND`, `CONFLICT`, `RATE_LIMITED`, `OFFLINE_RETRY_REQUIRED`, `INTERNAL_ERROR`.

## مسیرهای هسته

| دامنه | مسیرهای اصلی |
|---|---|
| Auth | `POST /auth/challenges`, `/auth/verify`, `/auth/refresh`, `/auth/logout` |
| Me | `GET /me`, `/me/memberships`, `POST /me/active-role` |
| Structure | `GET /sites`, `/blocks`, `/floors`, `/units/:id`; `POST /occupancy-requests` |
| Notices | `GET/POST /notices`, `POST /notices/:id/publish`, `/acknowledge` |
| Guests | `GET/POST /guest-invites`, `POST /:id/approve`, `/reject`, `/enter`, `/exit` |
| Packages | `GET/POST /packages`, `POST /:id/notify`, `/collect`, `/return` |
| Tickets | `GET/POST /tickets`, `PATCH /:id`, `POST /:id/transition`, `/comments` |
| Booking | `GET /amenities/:id/availability`, `POST /bookings`, `POST /:id/confirm`, `/cancel` |
| Finance | `GET /units/:id/statement`, `POST /receipts`, `POST /receipts/:id/review`, `GET/POST /expenses` |
| Admin | `GET/POST /memberships`, `/roles`, `/contracts`, `/reports`; تغییر نقش endpoint جدا |
| AI | `POST /ai/interactions`, `POST /ai/actions/:id/approve|reject`, `GET /ai/sources/:id` |

## فرمان و همزمانی

- endpoint انتقال وضعیت، `expected_version` دریافت می‌کند و در تعارض `409 CONFLICT` می‌دهد.
- یک `Idempotency-Key` با payload متفاوت رد می‌شود؛ نتیجه قبلی با payload یکسان بازگردانده می‌شود.
- رزرو از قفل/constraint دیتابیس استفاده می‌کند؛ کنترل UI کافی نیست.
- فرمان مالی در transaction اتمیک، با journal متوازن و outbox event ثبت می‌شود.

## رویدادهای دامنه

نام نسخه‌دار: `guest.invite.created.v1`، `guest.entry.recorded.v1`، `package.received.v1`، `ticket.state_changed.v1`، `booking.confirmed.v1`، `receipt.posted.v1`، `notice.published.v1`، `membership.role_changed.v1`.

Envelope:

```json
{"event_id":"uuid","type":"ticket.state_changed.v1","tenant_id":"uuid","occurred_at":"ISO-8601","actor_id":"uuid","aggregate_id":"uuid","version":3,"data":{}}
```

مصرف‌کننده باید idempotent باشد؛ Outbox انتشار و Dead Letter Queue خطا را کنترل می‌کند.

## اعلان و کانال

دامنه فقط `NotificationIntent` تولید می‌کند. Adapter بله/تلگرام/Push/SMS قالب، محدودیت، retry و delivery receipt را مدیریت می‌کند. پیام کانال شامل حداقل داده و deep link امن است.

## فایل

آپلود با URL امضاشده، محدودیت mime/size، checksum، اسکن بدافزار و قرنطینه تا تأیید. URL دانلود کوتاه‌عمر و مجوز در هر درخواست بررسی می‌شود.

## AI Gateway

درخواست شامل purpose، منابع مجاز و ابزارهای فعال است. Gateway مجوز، حذف/ماسک داده، بودجه، provider routing و Audit را اعمال می‌کند. پاسخ AI هیچ‌گاه نتیجه اقدام نیست؛ اقدام پیشنهادی شناسه جدا و تأیید می‌خواهد.

## Versioning و توقف

تغییر شکستن قرارداد فقط در نسخه جدید؛ حذف فیلد با دوره deprecation و telemetry مصرف. هر API دارای timeout، rate limit، circuit breaker اتصال خارجی و رفتار قابل فهم در قطعی است.
