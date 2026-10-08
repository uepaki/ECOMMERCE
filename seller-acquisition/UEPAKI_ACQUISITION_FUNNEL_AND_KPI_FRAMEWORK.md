# Uepaki — Acquisition Funnel and KPI Framework

**For:** Sahil Mittal and the acquisition team · **Date:** 2026-10-08 · **Status:** internal operating standard (recommendation).
**North-star metric:** **Activated professionals** (by category × city). **Ultimate metric:** **Transacting professionals.**
Messages sent is an *input*, never a result.

Product-dependent stages (registration, KYC/approval, listing) must be confirmed against the live seller flow before Wave 0. Where the supplied evidence leaves them unverified, that is noted.

---

## 1. Funnel stages — exact definitions

Each record sits in one stage at a time, recorded in the `Stage` column of the list workbooks. A record moves forward only when the evidence in the "Counts when" column exists. Dates are recorded for every transition.

| # | Stage | Counts when (evidence) | Does not count | Owner | Conversion measured as |
|---|---|---|---|---|---|
| 0 | **Prospect** | Record exists in `01_MASTER_V2`. | — | Research | — |
| 1 | **Contactable** | Contact class C1 or C3 (verified own-site route or professional social account), re-checked as still published on the day of outreach. | C4 (platform phone only) and C5. A published WhatsApp number alone. | Outreach lead | Contactable ÷ Prospects |
| 2 | **Contacted** | A 1:1, human-written first message was sent through that route. | Drafts; bulk sends; messages to unverified routes. | Outreach lead | — (input) |
| 3 | **Delivered** | No bounce/failure within 48h (email); DM shows sent without error; form submission confirmed. | Bounced email; blocked DM; form error. | Outreach lead | Delivered ÷ Contacted |
| 4 | **Engaged** | Any human reply within 21 days of first contact, including "not now" and "no". Auto-replies do not count. | Opens, profile views, likes, read receipts. | Outreach lead | Engaged ÷ Delivered (= **reply rate**) |
| 5 | **Interested** | The reply expresses intent to learn more or consider joining (asks a question about joining, agrees to a call, asks for terms). | Polite acknowledgement; "send me something" with no follow-through. | Outreach lead | Interested ÷ Engaged |
| 6 | **Information requested** | The professional asks for, and is sent, the written terms / registration steps, or a call is held. | Information sent unprompted. | Founder / onboarding lead | Info requested ÷ Interested |
| 7 | **Registration started** | A seller account exists in the admin system with the prospect's identity (match by email/phone the professional supplied). | Link clicks. | Onboarding lead | Started ÷ Info requested |
| 8 | **Registration completed** | Registration flow finished, including the ₹1 + GST web charge where it applies (SUB-01). | Abandoned at payment or form. | Onboarding lead | Completed ÷ Started |
| 9 | **KYC / approval** | The account is approved to sell under Uepaki's current checks. **UNVERIFIED:** which checks are mandatory before listing or payout is open (Q-KYC); confirm the admin approval flag before Wave 0. | Pending documents. | Onboarding lead | Approved ÷ Completed |
| 10 | **Profile completed** | Meets the profile standard below. | Partial profiles. | Onboarding lead | Profile ÷ Approved |
| 11 | **First listing** | At least one product, service or design listing is published and visible to customers. | Saved drafts; listings awaiting moderation. | Onboarding lead | First listing ÷ Profile |
| 12 | **ACTIVATED PROFESSIONAL** | Stages 9 + 10 + 11 are all true, and payout details required for the professional's transaction type are complete. | Anything less. | Founder (weekly sign-off) | Activated ÷ Contacted; Activated ÷ Registration completed |
| 13 | **First enquiry / order / booking** | The first genuine customer enquiry, order or booking through Uepaki. | Test orders; orders placed by staff or acquaintances arranged by Uepaki. | Founder | Transacting ÷ Activated |
| 13+ | **Transacting professional (strong)** | At least one completed, paid order or booking. | Cancelled before payment. | Founder | — |

Terminal outcomes (any stage): `X Declined` (said no — add to suppression list), `X Do-not-contact` (asked not to be contacted, or complained), `X Bounced/undeliverable` (route failed — send back to research).

### Recommended profile standard (stage 10)
- Professional or studio name as used publicly; city; category and segment.
- A short professional description written or approved by the professional.
- At least six portfolio images of their own work (recommended; set the final number with product).
- Pricing indication on at least one listing (a price, or "starting from" for services if the product supports it).
- Policies acknowledged as the seller terms require.
- **Consent-to-be-named** recorded (yes/no, date). Needed to answer "who else has joined?" truthfully.

### Time windows
- Engagement window: 21 days after first contact (covers the 3-touch sequence).
- Activation window: 14 days from registration completed to first listing (initial test target; measure and adjust).
- Transaction window: first enquiry within 30 days of activation after launch (measure only; Uepaki cannot promise enquiries).

---

## 2. KPI hierarchy

```
NORTH STAR       Activated professionals (by category × city)
ULTIMATE         Transacting professionals (first genuine enquiry/order/booking; then first paid)
DRIVERS          Reply rate · Interest rate · Registration completion · Approval rate · Activation rate
EFFICIENCY       Founder/team hours per activated professional · Cost per activated professional
QUALITY          Category balance · City pod completeness · Tier mix · % with consent-to-be-named
GUARDRAILS       Opt-out/complaint rate · Bounce rate · Platform restrictions · Founding-seat usage by non-activated sellers
```

### Core KPI definitions

| KPI | Formula | Read when | Initial test threshold (replace after Wave 0) |
|---|---|---|---|
| Delivery rate | Delivered ÷ Contacted | Per batch | Investigate if < 95% |
| Reply rate | Engaged ÷ Delivered | Per cell, after ≥ 20 delivered | Investigate if < 10% after 40 |
| Interest rate | Interested ÷ Engaged | Per cell, after ≥ 10 replies | Investigate if < 30% |
| Registration completion | Registration completed ÷ Interested | After ≥ 10 interested | Investigate if < 30% |
| Approval rate | Approved ÷ Registration completed | Weekly | Investigate if < 80% (process friction) |
| Activation rate | Activated ÷ Approved | Weekly, 14-day cohorts | Investigate if < 50% |
| End-to-end conversion | Activated ÷ Contacted | Per wave | No threshold — this is the number Wave 0 exists to measure |
| Transacting rate | Transacting ÷ Activated | Post-launch, 30-day cohorts | Measure only |
| Opt-out / complaint rate | (Do-not-contact + complaints) ÷ Contacted | Daily | Stop the channel if > 2% or on any platform warning |
| Category concentration | Largest category share of activated | Weekly | Rebalance if any category > 30% |
| Pod completeness | Anchor-city pods meeting the minimum composition (OS report §11) | Weekly | Target before launch: all four anchor cities |
| Founding-seat integrity | Founding seats held by non-activated sellers | Weekly, once FP-QUAL is set | Flag to founder if > 10% |

**Why these thresholds:** they are tripwires sized for small samples. At 40 contacts, a true 25% reply rate would almost never produce fewer than 4 replies; if it does, the message or segment is the likelier explanation. They are not targets or forecasts.

---

## 3. Attribution and data rules

1. **Single source of truth:** the `LIST` sheet of the active wave workbook, one row per Prospect ID. Do not keep side lists.
2. **Every record carries:** wave, experiment cell, channel used, message variant, dates of each stage.
3. **Inbound registrations** not on any list get a new row with `Wave = Inbound` and source (PR, peer introduction, organic). They count for activation but not for outreach conversion.
4. **Peer introductions** record the introducing professional's Prospect ID (if any) and confirmation that they agreed to be named in the introduction.
5. **Consent log:** WhatsApp/marketing opt-in recorded as `Y, date, method, exact wording seen`. Without it, the record is excluded from any template or bulk message.
6. **Suppression list:** every `X Declined` and `X Do-not-contact` is suppressed across all channels and waves, permanently unless the professional re-initiates.
7. **No vanity reporting:** dashboards never show messages sent without the activation figure beside them.

---

## 4. Weekly KPI review (30 minutes)

1. Activated this week and cumulative — by category × city (north star).
2. Funnel step conversions by wave and experiment cell (`FUNNEL_LIVE` sheet).
3. Stage-age report: records stuck > 7 days in Interested, Registration started or Profile completed — assign a named action.
4. Objection log: top three objections by category; any new objection type.
5. Guardrails: opt-outs, complaints, bounces, platform warnings.
6. Decisions: what to stop, what to scale, what to test next (log in `16_EXPERIMENT_LOG`).

---

## 5. What to measure from the very first campaign (Wave 0)

| Measure | Why |
|---|---|
| Minutes spent per first contact, follow-up, call and onboarding | Replaces assumption A4 in the economics model |
| Reply rate by message frame (E01) and category | First evidence on proposition fit |
| Every objection, verbatim | Builds the category objection library |
| Time from interest to registration completed; where it stalls | Finds product friction (payment step, KYC, profile) |
| Whether each activated professional consents to be named | Determines how quickly "who else has joined?" can be answered honestly |
| Founder time per activated professional | The scarcest resource in the system |
| Any registration/approval/listing defect encountered | Feeds the engineering queue; Wave 0 is also an end-to-end test of the seller journey |
