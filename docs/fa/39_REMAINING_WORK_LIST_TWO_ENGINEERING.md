# ۳۹ — فهرست فنی دوم: مهندسی و آمادگی پایلوت زنده

| شناسه | خروجی | وضعیت | شاهد / دروازه باقی‌مانده |
|---|---|---|---|
| E1 | اجرای محلی بازتولیدپذیر | انجام‌شده | pnpm ثابت، دستورهای ریشه، seed SQLite |
| E2 | اعتبارسنجی پیکربندی | انجام‌شده | default/override، بررسی و آزمون |
| E3 | پایه وابستگی محلی | starter انجام‌شده | Compose برای PostgreSQL/Redis/MinIO |
| E4 | پایه PostgreSQL tenant/audit | starter بازبینی‌پذیر | migration با RLS/audit؛ schema کامل مانده |
| E5 | دروازه کیفیت CI | انجام‌شده | نصب، config، syntax، تست و تطابق دو زبان |
| E6 | ابزار صحت backup | برای SQLite محلی انجام‌شده | backup، checksum و integrity |
| E7 | قرارداد محیط و رمز | انجام‌شده | `.env.example` امن؛ بدون credential |
| E8 | API production | مانده | NestJS/OpenAPI/PostgreSQL و contract test |
| E9 | احراز هویت و سخت‌سازی امنیت | مانده | OTP/MFA، session، rate limit، CSP، scan، بررسی مستقل |
| E10 | کانال و فایل زنده | مانده | Push + بله/تلگرام منتخب، آپلود/اسکن/ذخیره امن |
| E11 | مشاهده‌پذیری و عملیات | مانده | metric/trace/alert/SLO، صف و مانور incident |
| E12 | backup/restore production | مانده | رمزگذاری، زمان‌بندی و ثبت restore/RPO/RTO |
| E13 | خط استقرار | مانده | staging/production، image تغییرناپذیر، approval و rollback |
| E14 | اعتبارسنجی کارایی/دسترسی/امنیت | مانده | بار پایلوت، دستگاه/RTL، WCAG و تست نفوذ |
| E15 | دروازه حقوقی/حسابداری/هیئت‌مدیره | بیرونی | retention، قواعد مالی، قرارداد و config امضاشده |

ریپو اکنون آماده است عامل ساخت E8 را بدون انتظار برای پاسخ هیئت‌مدیره شروع کند. تا قبل از پیاده‌سازی، انتخاب سرویس‌دهنده، آزمون مستقل و امضا، اعلام E8 تا E15 به‌عنوان انجام‌شده صادقانه نیست.
