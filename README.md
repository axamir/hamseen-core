# Hamseen | همسین

**The Community Operating System for Smart Residential Communities**
**سیستم‌عامل جامعه برای مجتمع‌های مسکونی هوشمند**

> Good neighbors are a blessing. | همسایه خوب، نعمته.

Hamseen unifies building operations, resident services, local commerce, community interaction, and role-aware AI in one modular platform. It is designed first for the 336-unit Lavizan residential complex in Mashhad and structured to become a multi-tenant product for other communities.

همسین مدیریت ساختمان، خدمات ساکنان، اقتصاد محلی، تعاملات اجتماعی و هوش مصنوعی مبتنی بر نقش را در یک پلتفرم ماژولار یکپارچه می‌کند. نخستین پایلوت برای مجتمع ۳۳۶ واحدی لویزان در مشهد تعریف شده و معماری آن برای تبدیل‌شدن به محصول چندمستاجری و قابل عرضه به مجتمع‌های دیگر طراحی می‌شود.

## Documentation

- [English documentation](docs/en/README.md)
- [مستندات فارسی](docs/fa/README.md)
- [Architecture](architecture/README.md)
- [Product](product/README.md)
- [Project metadata](meta/README.md)

## Product status

Product definition and architecture. The repository is the single source of truth for product scope, UX, technical design, MVP delivery, pilot validation, and commercialization.

مرحله فعلی، تعریف محصول و معماری است. این مخزن مرجع واحد دامنه محصول، تجربه کاربری، طراحی فنی، MVP، پایلوت و تجاری‌سازی خواهد بود.

## Core product areas

- Shared role-based hub for residents, staff, managers, and providers
- Resident mini-apps and community marketplace
- Unit identity, occupancy, accounting, announcements, guests, packages, tickets, and reservations
- Guard, board, internal management, accounting, and service-provider workspaces
- Telegram and Bale bot channels connected through the same API
- Permission-aware AI Gateway and role-specific assistants

## Repository map

```text
.
├── README.md
├── docs/
│   ├── en/                 # English product documentation
│   └── fa/                 # Persian product documentation
├── architecture/           # Cross-language technical index and decisions
├── product/                # Product index, scope, and delivery map
└── meta/                   # Governance, terminology, and contribution rules
```

## Documentation rule

Every numbered document must exist in both `docs/en` and `docs/fa` under the same filename. The two versions must express the same product decisions; neither language is secondary.

تمام سندهای شماره‌دار باید با نام یکسان در `docs/en` و `docs/fa` وجود داشته باشند. هر دو نسخه باید تصمیم‌های محصولی یکسانی را منتقل کنند و هیچ‌کدام ترجمه فرعی دیگری نیست.
