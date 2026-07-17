# ۲۹ — فرهنگ داده و مدل منطقی

## قواعد پایه

- همه رکوردهای دامنه دارای `id` از نوع UUID، `tenant_id`، `created_at` و در صورت تغییرپذیری `updated_at` هستند.
- مبلغ به‌صورت عدد صحیح در کوچک‌ترین واحد رسمی پول و همراه `currency` ذخیره می‌شود.
- زمان در UTC ذخیره و با منطقه زمانی مجتمع نمایش داده می‌شود؛ تاریخ نمایش می‌تواند جلالی/میلادی باشد.
- رکوردهای مالی، رأی، ورود و حسابرسی حذف فیزیکی نمی‌شوند.
- داده شخصی دارای `classification`، هدف، مبنای پردازش و تاریخ حذف/بازبینی است.

## هویت و چندمستاجری

| موجودیت | فیلدهای کلیدی | محدودیت |
|---|---|---|
| Tenant | name, legal_name, timezone, locale, status | مرز قطعی داده |
| Person | display_name, contacts, verification_status | تماس رمزگذاری/ماسک شود |
| UserAccount | person_id, auth_subject, status, last_login | auth_subject یکتا |
| Membership | tenant_id, person_id, role_id, status, valid_from/to | نقش زمان‌دار |
| Role | code, name, scope, system/custom | کد سیستمی پایدار |
| PermissionGrant | role_id, action, resource, condition | deny بر allow مقدم |
| SupportAccess | operator, tenant, reason, approval, expires_at | زمان‌دار و Audit کامل |

## ساختار مجتمع

| موجودیت | فیلدهای کلیدی | رابطه |
|---|---|---|
| Site | tenant_id, name, address | دارای Block/Amenity |
| Block | site_id, code, name | دارای Floor/Entrance |
| Wing | block_id, code | اختیاری، دارای Unit |
| Floor | block_id, number, label | number + block یکتا |
| Unit | block_id, wing_id, floor_id, code, type, area, status | code در tenant یکتا |
| Occupancy | unit_id, person_id, relation, start/end, approval_status | دوره‌ها همپوشانی کنترل‌شده |
| AssetAssignment | unit_id, asset_type, asset_code, valid_from/to | پارکینگ/انباری/کنتور |
| Vehicle | person_id, plate_token, type, status | پلاک رمزگذاری شود |
| Amenity | site_id, name, capacity, rules_version, status | دارای Schedule/Booking |

## عملیات

| موجودیت | فیلدهای کلیدی | وضعیت‌ها |
|---|---|---|
| Notice | audience_query, title, body, urgency, publish/expire, version | draft/reviewed/published/archived |
| GuestInvite | unit_id, host_id, guest_label, type, valid_from/to | draft/approved/rejected/expired/entered/exited |
| AccessEvent | invite_id, gate_id, direction, occurred_at, actor | append-only |
| Package | unit_id, carrier, reference, condition, received/collected | received/notified/collected/returned |
| Ticket | unit/location, category, priority, assignee, sla_due | submitted/triaged/assigned/in_progress/waiting/resolved/closed/reopened |
| TicketEvent | ticket_id, from/to, reason, actor, time | append-only |
| Attachment | owner_type/id, object_key, mime, size, checksum | اسکن و دسترسی محدود |
| Shift | guard_id, post_id, start/end, handover | scheduled/active/closed |
| Incident | severity, location, summary, response, closed_at | open/contained/closed |

## رزرو و خدمات

| موجودیت | فیلدهای کلیدی | محدودیت |
|---|---|---|
| AmenityPolicy | amenity_id, version, hours, slot, capacity, fee, cancellation | نسخه‌دار |
| Booking | amenity_id, unit_id, start/end, status, amount | exclusion constraint برای تعارض |
| Provider | person/legal identity, contract_id, status | تأیید پیش از انتشار |
| CatalogItem | provider_id, type, title, price, stock, status | نسخه قیمت |
| Order | buyer, provider, totals, status, delivery_window | snapshot قیمت |
| OrderLine | order_id, item_snapshot, quantity, amounts | تغییر کاتالوگ اثر نگذارد |

## مالی

| موجودیت | فیلدهای کلیدی | محدودیت |
|---|---|---|
| Account | code, name, type, parent_id | کد یکتا در tenant |
| ChargePeriod | start/end, formula_version, status | open/approved/posted/closed |
| JournalEntry | date, reference, description, status | مجموع بدهکار=بستانکار |
| JournalLine | entry_id, account_id, unit_id, debit/credit | فقط یکی از debit/credit |
| Receipt | unit_id, amount, currency, paid_at, evidence, fingerprint | duplicate detection |
| Expense | vendor, category, amount, evidence, approver | به Journal متصل |
| ReserveFundMovement | purpose, resolution_id, amount, entry_id | برداشت نیازمند مصوبه |
| Reconciliation | source, period, expected/actual/difference, status | قابل تکرار و تأیید |

## حاکمیت، AI و حسابرسی

| موجودیت | فیلدهای کلیدی | قاعده |
|---|---|---|
| Vote | question, eligibility_snapshot, open/close, quorum_rule | قواعد قفل‌شده |
| Ballot | vote_id, voter_token, selection, submitted_at | محرمانگی مطابق نوع رأی |
| Decision | code, source, text, effective/review dates, approver | مرجع تصمیم محصول/برج |
| AIInteraction | user, role, purpose, model, prompt_hash, sources, output, approval | داده حساس حداقل |
| ProposedAction | interaction_id, tool, payload_hash, risk, status | اجرا فقط با مجوز/تأیید |
| AuditEvent | actor, role, action, resource, before/after hash, request_id, ip/device | append-only و tamper-evident |
| Notification | recipient, template, channel, payload, delivery/read | بدون محتوای حساس در Push |
| Consent | person, purpose, policy_version, accepted/withdrawn | نسخه‌دار |

## طبقه‌بندی داده

- **عمومی:** اطلاعات معرفی تأییدشده مجتمع و خدمات.
- **داخلی:** اعلان و عملیات غیرشخصی.
- **شخصی:** تماس، سکونت، مهمان و سفارش.
- **حساس:** سند هویتی، پلاک، داده مالی، دسترسی امنیتی.
- **بسیار حساس:** کلید، credential، اطلاعات بانکی و داده اضطراری؛ در مخزن یا لاگ عادی ممنوع.

## مهاجرت و کیفیت

هر import دارای فایل منبع، checksum، mapping version، اجراکننده، شمارش موفق/رد و گزارش خطا است. رکورد مبهم وارد داده اصلی نمی‌شود و در صف تطبیق انسانی می‌ماند.
