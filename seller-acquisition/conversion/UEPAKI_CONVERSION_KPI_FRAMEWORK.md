# Uepaki — Conversion KPI Framework

**For:** Sahil Mittal and the acquisition/onboarding team · **Date:** 2026-10-09 · **Status:** internal operating standard.

> **All thresholds in this document are diagnostic TEST THRESHOLDS** — tripwires chosen to detect a problem early with small numbers. **They are not Uepaki benchmarks, targets or forecasts.** Uepaki has no conversion history yet. Replace every threshold with Uepaki's own observed rates after Waves 0–1 (about the first 100 contacts and their onboarding).

Extends `UEPAKI_ACQUISITION_FUNNEL_AND_KPI_FRAMEWORK.md` (stage definitions) from the point of interest onward.

---

## 1. Conversion steps

Each conversion is measured on a **cohort**: the professionals who entered the earlier stage in a given week, followed for the time window. This avoids mixing old and new professionals.

| # | Conversion | Formula | Window | Diagnostic test threshold: investigate if below | Healthy-signal test threshold | Read when |
|---|---|---|---|---|---|---|
| C1 | **Interested → Registration completed** | Registration completed ÷ Interested | 14 days | 30% | ≥ 50% | Cohort ≥ 10 interested |
| C2 | **Registration completed → Approval** (KYC + store approved) | Approved ÷ Registration completed | 7 days | 70%, or a median approval time > 3 business days | ≥ 85% within 3 business days | Cohort ≥ 10 |
| C3 | **Approval → Profile completion** | Profile completed ÷ Approved | 7 days | 60% | ≥ 80% | Cohort ≥ 10 |
| C4 | **Profile completion → First listing** | First listing live ÷ Profile completed | 7 days | 70% | ≥ 90% | Cohort ≥ 10 |
| C5 | **First listing → Activation** (+ payout details, standing) | Activated ÷ First listing | 7 days | 80% | ≥ 95% | Cohort ≥ 10 |
| C6 | **Activation → Transaction** (first genuine enquiry/order/booking) | Transacting ÷ Activated | 30 days **after launch** (pre-launch activations count from launch day) | Measure only for the first two post-launch cohorts; then set a threshold from data | — | After launch |
| C7 | **Transaction → Repeat activity** (second transaction, or a new listing plus a transaction) | Repeat ÷ Transacting | 60 days | Measure only at first | — | After launch |
| Overall | **Interested → Activated** | Activated ÷ Interested | 30 days | 25% | ≥ 40% | Cohort ≥ 20 |

**Why these numbers.** They are set so that each tripwire is breached only if something is clearly wrong. The chained healthy signals (50% × 85% × 80% × 90% × 95% ≈ 29% interested-to-activated) are deliberately modest. The upstream Operating System tripwire, "approved → activated below 50% within 14 days", is consistent with C3 × C4 × C5 at their diagnostic floors (60% × 70% × 80% ≈ 34%, which would breach it).

## 2. Diagnosis when a threshold is breached

| Conversion | Most likely causes (from evidence) | Diagnostic check | Typical fix |
|---|---|---|---|
| C1 Interested → Registration | Missing information (the seller terms aren't approved yet); the ₹1 + GST payment step; the Refer & Earn redirect; the app/web difference; slow follow-up | Where in the form do people stop (admin: started vs completed)? Payment failures? Hours from interest to the set-up call? | Assisted registration on the call; fix defects F1–F3; send the information note the same day |
| C2 Registration → Approval | KYC documents; GSTIN status; store-approval turnaround; rejected documents | Approval time distribution; rejection reasons | Readiness check before registration; admin SLA; clear rejection messages |
| C3 Approval → Profile | Effort; no portfolio images to hand; unclear what "complete" means | Which profile items are missing most often? | Draft the profile for them from existing material, with their approval |
| C4 Profile → Listing | Category restriction (no products in Beauty/Lens/Content); the `create_listing` gate; services/bookings configuration; GST at listing | Error messages; listing type attempted | Category-specific first-listing guidance; engineering fixes F5, F7, F11 |
| C5 Listing → Activation | Payout details; the withdraw gate (U-1); account standing | Payout-detail completion | Founder decision U-1; help with bank verification |
| C6 Activation → Transaction | Launch timing; demand; listing quality; price; category fit | Views/enquiries per listing (only if analytics exists and is permitted — analytics is premium for sellers, but internal measurement is separate) | Listing quality reviews; category demand review. **Never promise demand** |
| C7 Repeat | Fulfilment experience; disputes; payouts | Order issues; cancellations; complaints | Fulfilment support; policy clarity |

## 3. Time-in-stage alerts (operational)

| Stuck in | Alert after (test threshold) | Action |
|---|---|---|
| Interested, no registration started | 3 days | One helpful nudge; offer a call |
| Registration started, not completed | 48 hours | Help with the payment/form step |
| Awaiting approval | 3 business days | Escalate to admin/engineering |
| Approved, profile incomplete | 3 days | Offer a set-up call |
| Profile complete, no listing | 3 days | Draft the first listing together |
| Listing live, payout details missing | 3 days | Help with payout details |

## 4. Segment and channel cuts

Read every conversion by:

- category and segment;
- city;
- tier;
- wave;
- outreach channel;
- message variant/experiment cell;
- founder-led vs team-led.

Do not act on a cut with fewer than 10 professionals in the cohort; combine weeks instead.

## 5. Guardrail metrics

| Guardrail | Test threshold | Action |
|---|---|---|
| Professionals who say they were told it was free | Any | Retrain; fix the script immediately |
| Complaints or opt-outs during onboarding | > 2% of interested | Pause and review |
| Founding seats held by non-activated sellers (once FP-QUAL is set) | > 10% | Report to the founder |
| Category concentration of activated professionals | Any category > 30% | Rebalance outreach |
| Escalations open > 5 business days | Any | Founder review |

## 6. Weekly conversion review (30 minutes)

1. Cohort table: C1–C5 for the last four weekly cohorts; overall interested → activated.
2. Time-in-stage list: every stuck professional has a named next action.
3. Breached thresholds: run the diagnosis (§2); decide a fix and an owner.
4. Defects affecting conversion: status of F1–F12 (Onboarding Playbook §2).
5. After launch: C6/C7 cohorts.

## 7. Data source

`UEPAKI_SELLER_ACTIVATION_CHECKLIST.xlsx`:

- `TRACKER` — one row per professional; dates per stage;
- `KPI` — cohort conversions and threshold status, calculated automatically;
- `THRESHOLDS` — editable test thresholds.

Stage dates come from the admin system where possible, and from the onboarding lead's record otherwise.
