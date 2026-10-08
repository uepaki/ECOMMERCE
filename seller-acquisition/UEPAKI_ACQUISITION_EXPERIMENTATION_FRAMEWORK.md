# Uepaki — Acquisition Experimentation Framework

**For:** Sahil Mittal and the acquisition team · **Date:** 2026-10-08 · **Status:** internal operating standard (recommendation).

**Purpose:** learn what converts professionals into *activated* professionals, cheaply, before spending the database. A database of 3,584 records with 1,538 contact-ready today is a finite asset: every badly targeted message uses up a prospect who may not answer a second time. So Uepaki tests on small, controlled cells first and scales only what works.

---

## 1. Principles

1. **One variable at a time.** Each experiment changes one thing (message frame, CTA, channel…). Everything else — segment, sender, timing window, follow-up schedule — stays fixed.
2. **Randomise within strata.** Assign variants alternately within category (and city where possible), ordered by readiness score, so both arms get comparable prospects. The list workbooks already carry an `Experiment cell` column doing this.
3. **Measure downstream.** The primary metric is the furthest funnel stage the sample can reach in the time available: reply rate for message tests, registration completed for CTA tests, activation for onboarding tests. Never stop at "opened" or "clicked".
4. **Small cells, big effects.** With 25–50 prospects per arm, only large differences (roughly 2× or more) are detectable. Treat smaller differences as "no difference yet" and keep the cheaper or more brand-consistent variant.
5. **Pre-register the decision.** Before a test starts, write in `16_EXPERIMENT_LOG`: hypothesis, primary metric, sample, and what result leads to scale / stop / retest.
6. **No test may break a rule.** Experiments never vary truthfulness: no test of invented scarcity, fake social proof, outcome promises or un-cleared terms.
7. **Learning cost is a budget line.** A failed cell of 40 prospects is cheap learning if it prevents a 400-prospect mistake.

---

## 2. Reading results with small samples

Use the Wilson interval (or simply the counts) and these rules of thumb:

| Arm size | Variant must beat control by at least… | Practical reading |
|---|---|---|
| 12–15 (Wave 0) | Not reliably detectable | Directional only. Combine with qualitative replies. |
| 30–40 | ~2.5× on reply rate (e.g., 10% vs 25%) | Act if the difference is large and the replies agree qualitatively. |
| 60–80 | ~2× | Reasonable confidence for operational decisions. |

Supporting arithmetic (binomial): if the true reply rate were 25%, the chance of seeing 3 or fewer replies out of 40 is about 0.5%; out of 25 it is about 10%. That is why the stop tripwire is set at 40 contacts per cell, and why Wave 0 results are read as directional.

When two variants are statistically indistinguishable, prefer: (1) the one that is more consistent with the Brand Doctrine voice; (2) the one that costs less founder time; (3) the one that yields more activated — not merely registered — professionals.

---

## 3. Planned experiments

All experiments are also listed in `UEPAKI_SELLER_ACQUISITION_SEGMENTATION.xlsx` → `16_EXPERIMENT_LOG`.

| ID | Variable | When | Control | Variant | Primary metric | Notes |
|---|---|---|---|---|---|---|
| E01 | Message frame | Wave 0 (First 25) | M-A: craft and identity-led (opens with the professional's specific work; Uepaki as a place to run the practice on their own name) | M-B: business infrastructure-led (opens with how they take orders/bookings today; Uepaki as an additional professional channel) | Reply rate; interest rate | ≈12 per arm, alternating within category. Directional. |
| E02 | Sender | Wave 0–1 | Founder-signed | Team-signed, same text | Reply rate | Only if founder time becomes the bottleneck. |
| E03 | CTA | Wave 1 (ranks 26–100) | CTA-A: "Would a 15-minute call this week be useful?" | CTA-B: "I can send the written terms and the registration steps." | Registration completed ÷ contacted | ≈35–40 per arm. CTA-B needs FP-OUT wording and a working registration link. |
| E04 | Founding framing | Wave 1 | "We are forming a small founding group in [city] across [categories]" (true statement of process) | Product-only description | Interest rate | Requires FP-OUT. Never quote numbers that are not live. |
| E05 | Channel | Wave 2 | Email (records having both email and Instagram) | Instagram DM (same population) | Reply rate; days to reply | ≥40 per arm. Do not send both to the same person on the same day. |
| E06 | Segment (tier) | Wave 2 | Tier A/B independents | Tier C mid-tier | Activation rate | Read by activation, not reply. |
| E07 | City pod presence | Wave 2–3 | City where a pod is already forming (≥3 activated, complementary) | City with no activated professionals yet | Interest rate; share of replies raising "who else?" | Tests the core chicken-and-egg hypothesis. |
| E08 | Timing | Wave 2 | Tue–Thu, 10:00–12:00 IST | Mon/Fri or evening | Reply rate | Low priority. For wedding-service categories, also compare October vs peak-season months. |
| E09 | Follow-up content | Waves 1–2 | Follow-up adds category-specific value (how a profile for their kind of practice is set up) | Plain reminder | Reply rate on follow-up | — |
| E10 | Landing page | Wave 2+ | Category-specific page | Generic page | Registration started ÷ visits | **Blocked** until LP-1 (EV-09). |
| E11 | Onboarding | Waves 1–2 | Assisted 15-minute onboarding call | Self-serve written guide | First listing within 7 days of registration | Activation is the point of the whole system. |
| E12 | Peer introduction | Waves 2–3 | Cold approach | Introduced by an activated founding professional (with their consent; no reward) | Reply and registration rate | No referral rewards: the referral launch is deferred (E4). |

---

## 4. Message variant guidance (for E01, E03, E04)

These are frames, not scripts. Every message is rewritten for the person using the `Why selected` and `Lead angle` columns.

**Always true in every variant**
- Opens with one specific, accurate observation about their work (from `Recent activity`, `Commercial signal`, the portfolio).
- One or two sentences on what Uepaki is, using the FD-06 description as the base.
- Honest stage: Uepaki is preparing to launch in India; the first professionals are being invited personally.
- One low-effort question to reply to.
- Signed by a real person with a real role.
- An easy opt-out: "If this isn't relevant, just say so and I won't write again."

**Never in any variant**
- Reach, ranking, visibility, leads, orders, bookings or income promises.
- "Free to join" / "free registration".
- Founding-programme numbers before FP-OUT is decided.
- Names of other professionals unless they have joined and consented to be named.
- Competitor names or criticism of other platforms (E8).
- Exclamation marks, hype words ("revolutionary", "game-changing"), follower language.

---

## 5. Testing calendar (aligned with waves)

| Period (relative to Wave 0 start) | Running | Decision point |
|---|---|---|
| Weeks 1–2 | E01 (Wave 0) | End of week 2: choose the frame for Wave 1, or rewrite both if the reply tripwire is hit. |
| Weeks 3–6 | E03, E04, E11 (Wave 1) | End of week 6: choose CTA and onboarding mode. |
| Weeks 6–10 | E05, E06, E07, E09 (Wave 2) | End of week 10: set channel mix and segment weights for Wave 3. |
| Weeks 9–12+ | E12; E08 if volume allows; E10 once LP-1 clears | Launch window: freeze what works; run only E10/E12. |

---

## 6. Learning cheaply on a limited budget

- **Use the database's own evidence fields** for personalisation; no paid enrichment tools are needed for Waves 0–2.
- **Founder time is the main cost.** Keep founder involvement for first notes to anchors and tier C, calls with interested professionals, and weekly reviews; let a team member draft notes for tier A/B from the evidence fields, with founder sign-off on the template frame.
- **No paid ads or paid tools until a channel is proven** on ≥ 40 contacts with activation evidence.
- **Instrument before scaling.** Every record has its experiment cell recorded before the message goes out; otherwise the learning is lost.
- **Stop losers fast.** A cell that hits a tripwire pauses that day; it does not "run out the week".
