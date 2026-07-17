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
- [AI build instructions](AI_BUILD_INSTRUCTIONS.md)
- [Definition of done](DEFINITION_OF_DONE.md)
- [Run the interactive local demo](apps/demo/README.md)
- [Open the investor and board presentation](https://axamir.github.io/hamseen-core/)
- [Run the constrained functional MVP](apps/mvp/README.md)
- [Product completion list](docs/en/38_REMAINING_WORK_LIST_ONE_PRODUCT.md) / [فهرست تکمیل محصول](docs/fa/38_REMAINING_WORK_LIST_ONE_PRODUCT.md)
- [Engineering readiness list](docs/en/39_REMAINING_WORK_LIST_TWO_ENGINEERING.md) / [فهرست آمادگی مهندسی](docs/fa/39_REMAINING_WORK_LIST_TWO_ENGINEERING.md)
- [Board data worksheet](templates/board/BOARD_DATA_WORKSHEET.en.md) / [کاربرگ اطلاعات هیئت‌مدیره](templates/board/BOARD_DATA_WORKSHEET.fa.md)

## Product status

Product definition, interactive presentation, and constrained local MVP. The repository is the single source of truth for product scope, UX, technical design, delivery, pilot validation, and commercialization. See [current implementation status](docs/en/35_IMPLEMENTATION_STATUS.md).

مرحله فعلی شامل تعریف محصول، ارائه تعاملی و MVP محدود محلی است. این مخزن مرجع واحد دامنه، تجربه، طراحی فنی، تحویل، پایلوت و تجاری‌سازی است. [وضعیت واقعی پیاده‌سازی](docs/fa/35_IMPLEMENTATION_STATUS.md) را ببینید.

## Run locally

```bash
pnpm seed       # synthetic SQLite data
pnpm demo       # presentation at http://127.0.0.1:4173
pnpm mvp        # functional slice at http://127.0.0.1:4180
pnpm check      # syntax and domain tests
pnpm config:check # validate replaceable assumed/approved community config
```

Both surfaces contain synthetic data only. The demo presents the product; the MVP persists role-aware guest, ticket, booking, and receipt workflows locally.

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

Every numbered document must exist in both `docs/en` and `docs/fa` under the same filename. The two versions must express the same product decisions; neither language is secondary. Build agents must follow `AGENTS.md` and may not silently expand MVP scope.

تمام سندهای شماره‌دار باید با نام یکسان در `docs/en` و `docs/fa` وجود داشته باشند. هر دو نسخه باید تصمیم‌های محصولی یکسانی را منتقل کنند و هیچ‌کدام ترجمه فرعی دیگری نیست.
