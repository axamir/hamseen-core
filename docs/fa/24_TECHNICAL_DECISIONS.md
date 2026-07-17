# ۲۴ — تصمیم‌های فنی

## استک پایه

- monorepo تایپ‌اسکریپت با pnpm و Turborepo
- Next.js PWA برای ساکن، نگهبان، مدیریت و ارائه
- API ماژولار NestJS
- PostgreSQL با سیاست tenant-aware و مهاجرت Prisma
- Redis برای صف/کش/محدودیت و ذخیره‌ساز سازگار S3
- Web Push و رابط adapter برای بله، تلگرام، پیامک، ایمیل و پرداخت
- قرارداد OpenAPI، کار پس‌زمینه، لاگ ساخت‌یافته، متریک، trace و گزارش خطا
- Playwright برای E2E حیاتی و آزمون واحد/یکپارچه در CI
- Docker Compose برای وابستگی محلی

## قواعد معماری

شروع با modular monolith، نه microservice. هر دامنه مالک دسترسی داده خود است. کلاینت مجوز API را دور نمی‌زند. اتصال خارجی adapter دارد. AI فقط از AI Gateway عبور می‌کند. زمینه tenant اجباری و رخداد حسابرسی فقط‌افزودنی است.

## ساختار هدف

```text
apps/web        apps/api
packages/ui     packages/config
packages/contracts packages/i18n
packages/testing docs scripts infra
```

اپ بومی تا زمانی که پایلوت PWA محدودیت واقعی پلتفرم را نشان نداده به تعویق می‌افتد.
