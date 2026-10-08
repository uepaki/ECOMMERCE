# Uepaki — City Acquisition Playbook

**For:** Sahil Mittal and the acquisition team · **Date:** 2026-10-08 · **Status:** internal operating playbook (recommendation).
**Scope:** India only (founder decision E9). Every city decision below is based on **prospect supply in the database** — how many contact-ready, commercially active professionals exist, and whether all six categories are present. **No buyer-demand data was supplied**, so this is not a statement about where customers are. Re-weight cities as soon as demand signals exist (search, enquiry or order data).

Database note: 182 records have city "Unknown" and 51 "UNVERIFIED". They are excluded from city waves until their city is verified (`12_DATA_QUALITY`).

---

## 1. City sequencing logic

A city opens when Uepaki can form at least one **complete ecosystem pod** there — a small group of complementary professionals (for example, a bridal label, a makeup artist, a wedding photographer and an emcee) who are relevant to each other and to the same customer. Opening a city with a single category leaves early joiners alone and makes "who else has joined?" unanswerable.

**A city moves to the next stage when:**
1. **Open → Forming:** contact-ready supply exists in ≥ 4 categories (from the matrix below).
2. **Forming → Credible:** ≥ 1 complete pod is activated (see pod minimums, §4) and at least half of those professionals have consented to be named.
3. **Credible → Expanding:** the pod's members have made consented peer introductions, and the "who else?" objection falls below ~30% of replies in that city (initial test threshold).

---

## 2. City matrix (from the database)

"Ready" = contact-ready now (OS P0/P1, verified own-site or professional-social route, no open research flag). "C4" = records reachable only through a platform-listed phone number (enrichment needed; no cold WhatsApp).

| City | Records | Ready | OS P0 | Ready by category | C4 (enrich) | In First 100 | In First 300 | Wave |
|---|---|---|---|---|---|---|---|---|
| **Delhi NCR** | 792 | 495 | 302 | Fashion 294 · Space 105 · Lens 43 · Beauty 22 · Content 16 · Digital 15 | 150 | 43 | 93 | 0 |
| **Mumbai** | 621 | 296 | 165 | Fashion 112 · Space 56 · Lens 54 · Content 30 · Digital 23 · Beauty 21 | 168 | 37 | 77 | 0 |
| **Bengaluru** | 265 | 111 | 71 | Space 43 · Lens 29 · Fashion 21 · Digital 8 · Beauty 6 · Content 4 | 79 | 10 | 28 | 1 |
| **Jaipur** | 246 | 90 | 57 | Fashion 58 · Beauty 10 · Lens 9 · Space 6 · Content 4 · Digital 3 | 94 | 10 | 23 | 1 |
| Pune | 154 | 61 | 36 | Space 22 · Fashion 10 · Digital 10 · Lens 9 · Beauty 6 · Content 4 | 57 | — | 20 | 2 |
| Hyderabad | 132 | 59 | 34 | Fashion 27 · Lens 19 · Space 8 · Beauty 3 · Digital 1 · Content 1 | 54 | — | 14 | 2 |
| Chennai | 124 | 64 | 46 | Lens 35 · Fashion 11 · Space 10 · Beauty 6 · Digital 1 · Content 1 | 51 | — | 9 | 2 |
| Kolkata | 121 | 56 | 44 | Fashion 34 · Lens 11 · Space 4 · Beauty 4 · Content 2 · Digital 1 | 51 | — | 11 | 2 |
| Ahmedabad | 117 | 58 | 30 | Space 29 · Fashion 14 · Lens 11 · Beauty 3 · Content 1 | 28 | — | 8 | 2 |
| Chandigarh | 107 | 32 | 24 | Space 10 · Beauty 10 · Lens 8 · Fashion 4 | 55 | — | 17 | 2 |
| Indore | 79 | 21 | 14 | Fashion 9 · Space 7 · Beauty 3 · Lens 2 | 52 | — | — | 3 |
| Udaipur | 76 | 14 | 10 | Beauty 4 · Lens 4 · Fashion 3 · Content 2 · Space 1 | 58 | — | — | 3 |
| Lucknow | 69 | 9 | 8 | Beauty 3 · Lens 3 · Space 2 · Fashion 1 | 52 | — | — | 3 |
| Kochi | 59 | 20 | 15 | Lens 9 · Space 5 · Fashion 3 · Beauty 3 | 23 | — | — | 3 |
| Goa | 56 | 18 | 8 | Beauty 8 · Space 4 · Lens 4 · Fashion 1 · Digital 1 | 31 | — | — | 3 |
| Vadodara | 52 | 21 | 13 | Space 10 · Fashion 5 · Lens 3 · Beauty 2 · Content 1 | 20 | — | — | 3 |
| Bhubaneswar | 50 | 14 | 11 | Lens 11 · Fashion 3 | 36 | — | — | 3 |
| Surat | 42 | 18 | 12 | Fashion 10 · Space 4 · Lens 3 · Beauty 1 | 12 | — | — | 3 |

City anchors (up to 8 per city, max 2 per category) for the 12 largest cities are in `UEPAKI_SELLER_ACQUISITION_SEGMENTATION.xlsx` → `09_CITY_ANCHORS`.

---

## 3. City playbooks

### Wave 0–1 anchor cities

**Delhi NCR — the deepest city in every dimension.**
- Supply: 495 contact-ready; all six categories; strongest Fashion (294) and Space (105) pools; also the largest Wedding & Occasion pool (243 ready).
- Pods to form first: Wedding & Occasion (bridal label + jewellery + MUA + mehendi + wedding photographer + emcee) and Home & Space (architecture/interior studio + furniture/lighting maker + architecture photographer).
- Watch-outs: Fashion over-supply — cap it so Delhi NCR does not become "a fashion marketplace". Beauty contact-ready supply is thin (22) relative to records (160); run enrichment for Delhi MUAs before Wave 2.
- Wave 0: 13 of the First 25.

**Mumbai — the most balanced anchor.**
- Supply: 296 contact-ready; the only city where Content (30) and Digital (23) have real depth; Lens 54.
- Pods: Wedding & Occasion and Brand & Everyday Style (labels + commercial photographers + design studios + content).
- Watch-outs: 168 records are platform-phone-only — enrichment matters here too.
- Wave 0: 12 of the First 25.

**Bengaluru — the Home & Space and design city.**
- Supply: 111 contact-ready; strongest in Space (43), Lens (29), and design/illustration (8 Digital).
- Pods: Home & Space first; then Brand & Everyday Style (design studios, illustrators, commercial photographers).
- Watch-outs: Beauty and Content are thin (6 and 4 ready) — the Wedding pod will be incomplete without enrichment.

**Jaipur — the craft-and-occasion city.**
- Supply: 90 contact-ready, Fashion-led (58) with jewellery, block-print and occasion labels; Beauty has 105 records but 10 ready.
- Pods: Wedding & Occasion (labels + jewellery + MUA/mehendi + photographer).
- Watch-outs: Space and Digital thin — do not force a Home pod.

### Wave 2 cities (category and city expansion)

| City | Lead with | Pod most achievable | Gap to fix before opening |
|---|---|---|---|
| Pune | Space (22), Digital (10) | Home & Space; Brand | Beauty/Content enrichment |
| Hyderabad | Fashion (27), Lens (19) | Wedding & Occasion | Beauty contact-ready only 3 |
| Chennai | Lens (35) — unusually strong | Wedding & Occasion | Fashion/Beauty thin; lead with photographers |
| Kolkata | Fashion (34), Lens (11) | Wedding & Occasion | Space and Beauty thin |
| Ahmedabad | Space (29), Fashion (14), Lens (11) | Home & Space | Beauty/Content thin |
| Chandigarh | Space (10), Beauty (10), Lens (8) | Wedding & Occasion (beauty-led) | 55 platform-phone-only Beauty records — enrichment unlocks the city |

### Wave 3 cities (after enrichment; around launch)

Indore, Udaipur, Lucknow, Kochi, Goa, Vadodara, Bhubaneswar, Surat, Nagpur, Coimbatore. These are mostly Beauty- and Lens-led and largely **platform-phone-only** (e.g., Udaipur 58 of 76, Lucknow 52 of 69). They open only when enrichment has produced compliant routes and at least one anchor city pod can be referenced truthfully. Udaipur and Goa are destination-wedding markets (assumption — test with real enquiry data); their professionals may value being next to metro labels and photographers.

---

## 4. Minimum viable pod per city (strategic recommendation, not a target from data)

| Pod | Minimum composition before a city is called "credible" |
|---|---|
| Wedding & Occasion | ≥ 3 labels (bridal/occasion, jewellery or menswear) · ≥ 3 beauty (MUA/studio/mehendi) · ≥ 2 wedding photographers/filmmakers · ≥ 1 emcee or wedding content creator |
| Home & Space | ≥ 2 studios (architecture/interior) · ≥ 2 product makers · ≥ 1 architecture/interior photographer |
| Brand & Everyday Style | ≥ 3 contemporary/accessories labels · ≥ 1 design studio · ≥ 1 commercial/fashion photographer |

Rationale: the minimum is the smallest group in which each member has at least two relevant, non-competing peers, and in which a customer journey (a wedding, a home project, a brand launch) touches more than one category.

---

## 5. City-level operating rules

1. **Batch by pod and city.** In any week, contacts in a city are scheduled as a pod (complementary segments), not as a category blast.
2. **Do not open a new city while an open city has stalled pods** (≥ 2 pod members interested but not activated for more than 14 days) — fix onboarding first.
3. **No cross-city "who else" claims.** A Jaipur MUA may be told which categories are forming in Jaipur and, truthfully and with consent, who has joined elsewhere — never implied local presence that does not exist.
4. **City anchors first.** When opening a city, the first approaches go to its `09_CITY_ANCHORS` names, because they make the city legible to peers.
5. **Demand check before Wave 3.** Before scaling to tier-2 cities, confirm with whatever customer-side data exists by then that buyers in those cities can be served (logistics partner and service areas are unverified — EV-09).
