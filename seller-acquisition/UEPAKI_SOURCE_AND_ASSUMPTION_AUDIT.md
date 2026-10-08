# Uepaki — Source and Assumption Audit

**For:** Sahil Mittal (founder) · **Date:** 2026-10-08 · **Status:** internal working document. Not public copy, not legal advice, not a launch-readiness statement.
**Companion to:** `UEPAKI_SELLER_ACQUISITION_OPERATING_SYSTEM` (PDF/DOCX).

This file records what each deliverable relies on, how much weight each source carries, which product facts are verified and which are not, and every assumption the acquisition system makes. If a later founder decision or production evidence contradicts this file, the later record wins.

---

## 1. Source hierarchy applied

| Rank | Source | Files used | How it was used |
|---|---|---|---|
| 1 | Current founder decisions | `FOUNDER_DECISION_BRIEF_REV07_2026-10-06.md`; `FOUNDER_DECISIONS_2026-10-06_SUBMISSION_07_FOUNDING_PROGRAMME_CORE_TERMS_RECORD.md`; `FOUNDER_DECISIONS_2026-10-06_RECONCILIATION_RECORD.md`; `FOUNDER_DECISIONS_2026-10-06_SUBMISSION_02_RECONCILIATION_RECORD.md`; sessions 22/23 as cited by those records | The commercial and policy boundary for every proposition, CTA and script. Never overridden. |
| 2 | Implementation evidence | `10_CERTIFICATION` records (EV-01, EV-02, EV-03 handoff, EV-09 handoff, 18 issue register, 24 paid-promotion audit, CODE_REMEDIATION_HANDOFF) as summarised in the founder records | Used to mark what is **implemented, unverified or blocked**. No production system was inspected for this work. |
| 3 | Launch documentation | `08-Launch/LAUNCH-INDEX.md` (placeholders only); launch-library control registers | Confirms the launch plan, checklists and readiness folders are still empty placeholders. |
| 4 | Brand Doctrine | `Brand Doctrine/01–05 *.md` (canonical, 2026-10-06); `BRAND_DOCTRINE_INTERNAL_v1.2_DRAFT_2026-10-06.md` | Voice, vocabulary, hard rules (no outcome promises, no "free to join", no named competitors, real people only, no exclamation marks). |
| 5 | Existing acquisition/marketing strategy | Archived `UEPAKI_Creator_Acquisition_System_v1.docx` (Generation B, ARCHIVE status); `UEPAKI_ORGANIC_PR_STRATEGY.pdf` v2 (6 Oct 2026) | Principles kept: founder-led, specific recognition, short first message, relationship over conversion, value-adding follow-ups. Elements rejected: listed in §5. The PR strategy's dependency on *"named founding creators who have agreed to speak"* is treated as an output this system must produce. |
| 6 | Prospect database | `UEPAKI_PRELAUNCH_PROFESSIONAL_DATABASE_V2.xlsx`, sheet `01_MASTER_V2` (V2.1 canonical master, research date 2026-10-08) | The prospect universe. Read only; not modified. All lists are filtered views keyed by Prospect ID. |
| 7 | Older material | Luma Campaign Engine, Generation A/B archives | Not used for any claim. Used only to identify claims that must not be repeated (§5). |

---

## 2. What the database actually contains (verified by direct read)

| Item | Value | Note |
|---|---|---|
| Records in `01_MASTER_V2` | **3,584** | The brief says "3,700+". The canonical master holds 3,584 after research-stage merges and rejections. All figures in the deliverables use 3,584. |
| Merged duplicates (research stage) | 66 | Sheet `12_DUPLICATES_MERGED` |
| Rejected during research | 4,098 | Sheet `13_REJECTED` (e.g., moved abroad, dead domains) |
| Records with marketing / WhatsApp opt-in | **0** | `Opt-in Status` = "Not obtained" for every record |
| Categories | 6 | Fashion & Lifestyle 883 · Space & Design 590 · Digital & Visual Arts 129 · Beauty & Makeup 1,169 · Lens & Motion 565 · Content & Media 248 |
| Category labels | DB uses "Digital & Visual Arts" and "Lens & Motion"; the brief uses "Digital & Visual Artist" and "Lens & Motions" | **UNVERIFIED** which spelling the live category tree uses (EV-09 asks for the category tree). Deliverables use the DB labels. |
| Source priority distribution | P0 2,046 (57%) · P1 1,314 · P2 102 · P3 68 · P4 54 | Too inflated to sequence outreach; replaced by the operating priority (OS P0–P4). |
| Tier distribution | A 998 · B 2,006 · C 511 · D 67 · E 2 | Database is overwhelmingly independents and mid-tier, which suits founding outreach. |

---

## 3. Product and commercial facts: status used in all deliverables

The brief asks for LIVE / PLANNED / UNDER DEVELOPMENT / UNVERIFIED. **No product capability is confirmed as LIVE in production by the supplied evidence.** Records in the library describe code-level findings and local tests, not production behaviour. "Decided" below means a recorded founder decision; it is not an implementation claim.

| Item | Decision status | Implementation status | Classification | Rule for outreach |
|---|---|---|---|---|
| One-line description: *"Uepaki is a marketplace where customers can discover and buy products and connect with creative professionals for services, bookings and projects."* (FD-06) | Decided | Claim C060 DRAFT — evidence required; launch switches await EV-09 | UNVERIFIED (modules) | May describe what Uepaki is being built to be. Never claim a specific module is live at launch until EV-09. |
| Open to all sellers (E10) | Decided | C072 founder-intended, implementation unverified | UNVERIFIED | Never pair with "free". Never say "curated/exclusive/only professional-grade" (that wording was omitted because it conflicts with E10). |
| Registration charge ₹1 + GST (web) (SUB-01) | Decided | App path charges nothing today (SUB-06) | UNDER DEVELOPMENT (app) | Disclose whenever registration is discussed. Never "free registration". |
| No paid placement (B1); a paid subscription does not buy higher organic ranking (FD-03) | Decided policy | FD-03-A/C reported implemented, not release-verified; public wording **BLOCKED** (B4 / EV-08) | UNVERIFIED | No visibility, ranking or reach statements in outreach. |
| Fair Reach | Brand philosophy | Mode in production unverified (DEC-005, FD-04) | UNVERIFIED | Do not describe mechanics; do not use as a selling point until Gate 6b clears. |
| Founding programme: first 500 sellers; lifetime 2-point commission reduction; promotion across four social channels via Creator Advantage; no organic-visibility advantage (S07) | Founder intent recorded | Not public-cleared; not lawyer/CA reviewed; qualifying rule, channel names and proof-of-promotion record missing; calculator implementation not assessed | PLANNED (programme) | Wording in 1:1 outreach needs a founder decision (FP-OUT, §6). Never present as final terms. |
| Early-bird offer: 70% off MSP, first billing period only, max 500 sellers, closes when "Pre Launch Period is Over" | Decided (answer #6) | CL-1 to CL-3 open; EV-03 pending; Luma "70% off forever" prohibited | UNDER DEVELOPMENT | Do not quote until EV-03 and CL-1/CL-3 are resolved. |
| 2% social-promotion offer | Intended (D1) | D2–D9 open; C069 blocked | PLANNED | Do not mention. |
| Referral programme | Launch deferred (E4, S03) | Sign-up redirect to Refer & Earn noted as a defect | PLANNED (deferred) | No referral rewards or points. Peer introductions are unpaid and consent-based only. |
| Creator Advantage (Promoter/Elite levels) | Exists per code trace (EV-02) | On-screen text uncaptured; definitions unresolved for public use | UNVERIFIED | Do not describe to prospects. |
| Fame Circle / Brand Ambassador | Founder: "Fame Circle is Brand Ambassador Program" | "Coming soon" stub, no mechanics | PLANNED | Do not mention. |
| Collaboration between professionals | Brand intent | C023 blocked — engineering verification | PLANNED | Only as *"Planned: [feature]. Not available yet."* and only if the founder lists it under RD-1a. Until then, do not mention. |
| Premium (paid-tier) features: custom requests, milestones/bookings, customer chat, analytics; Team/Invites, Bundles, Design Projects premium; Design Orders non-premium | Decided (23 C3, U-8, U-9) | Gate mapping has open discrepancies (U-1 to U-9, U-9b) | UNDER DEVELOPMENT | Service professionals will ask whether bookings need a plan. Answer only from approved seller terms; plan prices await EV-03. |
| Self-ship disabled for launch (E12) | Decided (closed) | Live courier partner unverified (EV-09) | UNVERIFIED (logistics) | Product sellers should be told shipping runs through Uepaki's logistics arrangement once confirmed — do not name a partner. |
| Gateway fee (`$coll_fee`) charged to sellers on goods, services and design transactions with online payment (D-GATEWAY, S06) | Decided | Code differs for product orders (GW-R1) | UNDER DEVELOPMENT | Do not quote fee numbers; refer to seller terms. |
| Commission rates | Slab configuration exists in code | Documented 6–15% range not verified (COMM-01); ceiling blocked (D-SLAB-CEILING) | UNVERIFIED | Do not quote commission numbers. |
| Off-platform communication with customers (SP-4a) | Open | — | UNVERIFIED | Expect this objection from service professionals; say the policy is being finalised. |
| KYC / approval checks (Q-KYC) | Open (lawyer/CA) | Admin approval flag not conclusively traced | UNVERIFIED | Funnel stage "KYC/approval" is defined operationally; confirm against the live flow before Wave 0. |
| Launch date | Tentative 1 Jan 2027 (EB-1), internal only | — | — | Never state a date externally. |
| Market | India only (E9) | — | Decided | Indian examples only. |
| Tagline *The World Behind What You Love* | Internal selection (E11) | Public use not approved | — | Do not use in outreach until signed off. |
| Real, consented stories only (E3) | Decided | — | Decided | No testimonials, spotlights or "who has joined" names without real membership and recorded consent. |
| Landing-page primary action (LP-1) | Blocked by EV-09 | — | UNVERIFIED | CTA destination in outreach is "reply / short call" until LP-1 is decided. |

---

## 4. Assumptions made by the acquisition system

Each assumption is labelled with how it should be tested. None is presented as a fact in the deliverables.

| # | Assumption | Why it is reasonable | How to test / replace |
|---|---|---|---|
| A1 | Commercially active, contactable independents convert better than famous names in a pre-launch marketplace. | Independents have more to gain from an additional channel and fewer gatekeepers; the brief and Brand Doctrine both direct away from vanity metrics. | Experiment E06 (tier A/B vs C) and activation by tier in the KPI tracker. |
| A2 | Complementary professionals in the same city (ecosystem "pods") reduce the "who else has joined?" objection. | The objection is about peer presence and relevance; complementary peers are relevant without being competitors. | Experiment E07; track frequency of the "who else" objection by city. |
| A3 | Wedding-service professionals are busiest roughly November–February. | Widely observed Indian wedding-season pattern; not evidenced in the supplied files. | Track reply latency by month for Beauty, Lens, Content; adjust timing. |
| A4 | A personalised 1:1 first contact takes 10–15 minutes including research. | Typical for genuinely personalised notes using the DB's evidence fields. | Time the first 25 contacts in Wave 0; replace the economics input. |
| A5 | Square-root-of-universe allocation is a fair way to balance categories in early lists. | It prevents the largest category from dominating while still reflecting relative size. | Revisit after Wave 1 using actual activation by category. |
| A6 | Supply density in the DB is a usable proxy for where to start, absent demand data. | Delhi NCR and Mumbai hold 39% of records and over half of contact-ready prospects; every category is present there. | No buyer-demand data was supplied. Add demand signals (search/enquiry data) when available; re-weight cities. |
| A7 | "Activated" requires at least one live listing. | A registration without inventory or a service listing gives customers nothing to find. | Founder to confirm as part of the founding qualifying rule (FP-QUAL). |
| A8 | Email to a business address published on the professional's own website, and a DM to a professional Instagram account, are acceptable 1:1 first contacts. | These are routes the professional published for business enquiries; a single relevant, human-written, opt-out-respecting message is standard B2B practice. | **Lawyer review** under the Digital Personal Data Protection Act, 2023 and its Rules, and the TRAI telemarketing framework for any calls (`Q-LEGAL-OUT`, §6). |
| A9 | Thresholds in the operating rules (e.g., reply rate below 10% after 40 contacts) are useful starting tripwires. | Chosen to detect clear failure at small sample sizes, not to estimate rates precisely. | Replace with Wave 0–1 actuals; they are labelled "initial test thresholds" everywhere. |

---

## 5. Legacy content explicitly not carried forward

| Legacy element | Source | Why rejected |
|---|---|---|
| "487 of 500" counter, any invented counter | Luma engine; registry C005 | Invented figure. Any counter must be live data. |
| "70% off forever"; "priority discovery" for founders | Luma engine | Contradicts A5/A6 (first period only) and B1/FD-03 (no visibility advantage). |
| "Social Proof Drop" follow-up touchpoint | Creator Acquisition System v1 §06 | Allowed only with real, consented names (E3). Replaced by an honest status update. |
| Waitlist-based warm sequences | Creator Acquisition System v1 | No waitlist exists in the supplied evidence. |
| Composite or dramatised creator stories (e.g., "47 views", "Jaipur designer") | Luma; legacy founder film | E3: real, consented stories only; legacy anecdotes are not facts. |
| "Visibility cannot be bought", "equal ground", "fair algorithm" | Brand Doctrine v1 / BD-A2 | Blocked (B4 / EV-08); C001/C011 retired. |
| "Free to join" / "free registration" | FD-01 concept 1 | Superseded by SUB-01 (₹1 + GST). |
| "Uepaki accepts professional-grade work only" | BD-B §21 | Conflicts with E10 (open to all sellers). |
| Celebrity-led first wave | — | Brief and PR strategy both rule out celebrities as first-wave targets. |

---

## 6. Founder decisions this system needs (requests — nothing here alters an existing decision)

| ID (proposed) | Question | Why it blocks | Recommended option |
|---|---|---|---|
| FP-OUT | What founding-programme wording may be used in 1:1 outreach before legal review? | Every Wave 0–2 message touches it. | Wave 0: *"We are forming a founding group of professionals. The programme's written terms are being finalised and will be shared with you before you decide."* No numbers until lawyer review of "lifetime". |
| FP-QUAL | The founding cohort's qualifying rule (already listed as missing in S07 §3). | If any signup counts, untargeted registrations can consume the 500 seats. | "Registration completed + approved + first live listing" (the S07 record's own example). |
| CL-1 | When does the pre-launch period end, and who declares it? | Early-bird closing and wave timing depend on it. | Founder to set. |
| RD-1a | Which planned features may be mentioned as planned? | Photographers and studios will ask about collaboration. | Name them or answer "none". |
| LP-1 | Landing-page primary action. | CTA design for Waves 2+. | After EV-09. |
| SP-4a | Off-platform communication exceptions. | Top expected objection from service professionals. | After SP-ENG-6/9. |
| Q-LEGAL-OUT | Lawyer review of the outreach method (1:1 email/DM to published business routes; WhatsApp only after opt-in; calls to platform-listed numbers). | Compliance boundary for Waves 0–4. | Obtain before Wave 1 at the latest; Wave 0 uses only C1/C3 routes. |
| NAME-CONSENT | Approve a "consent to be named" step at activation. | Needed to answer "who else has joined?" truthfully. | Add a yes/no field with date in the onboarding record. |

---

## 7. Method notes for the computed fields

- **Operating segment:** 1,078 free-text subcategories normalised to 22 segments by keyword rules (code in the delivery notes; reproducible).
- **Contact class:** C1 own-site route verified · C2 own-site route pending re-check · C3 professional Instagram/LinkedIn only · C4 phone listed on a wedding/vendor platform only · C5 not found/unverified.
- **Recency:** parsed from the year-month at the start of `Recent Activity`; months counted to October 2026.
- **ARS, FCS, Anchor Score, Conversion Likelihood Score:** formulas in `UEPAKI_SELLER_ACQUISITION_SEGMENTATION.xlsx` README and `04_PRIORITY_MODEL`.
- **No external research was performed** for this work. The enrichment queue (`13_ENRICHMENT_QUEUE`) names the one research gap worth closing — finding professional Instagram/email routes for high-readiness Beauty and Content professionals whose only route is a platform phone number.

---

## 8. Quality-gate results (final check before delivery)

| Check | Result |
|---|---|
| Unsupported Uepaki claims | None. Every product statement in scripts is from FD-06 or a recorded decision, with status labels. |
| Fabricated social proof | None. Scripts use live counts and consented names only; placeholders are bracketed. |
| Guaranteed leads / sales / bookings | None. Explicitly prohibited in every script section. |
| Preferential organic ranking promised | None. The founding programme is described as carrying no visibility advantage. |
| Invented seller benefits | None. Founder time/feedback sessions are labelled as an operational choice for the founder to confirm. |
| Invented traction | None. Economics and capacity sheets have blank inputs; illustrative arithmetic is labelled as such. |
| Private contact information | None copied. Lists carry Prospect ID and public business pages only (website, contact page, professional Instagram). |
| Marketing-consent assumptions | None. Opt-in count is 0; bulk WhatsApp/AiSensy only after recorded opt-in. |
| Celebrity bias | Tier D/E cannot be P0; fame, followers and discovery value are not in the readiness score. |
| Category bias | Lists use square-root category allocation; within-category percentiles rather than raw cross-category scores. |
| City bias | City order follows contact-ready supply in the DB; the absence of demand data is stated. |
| Mass-spam recommendation | None. Daily caps, pod batching, stop rules and a suppression list are specified. |
| Founder decisions altered | None. New questions are raised as requests (§6). |
