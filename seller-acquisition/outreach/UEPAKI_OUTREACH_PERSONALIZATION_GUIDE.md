# Uepaki — Outreach Personalization Guide

**For:** the outreach team · **Date:** 2026-10-09 · **Status:** internal operating standard.
**Principle:** personalization is **evidence that a person looked at the work**, not a mail-merge trick. A message is personalised only when every inserted fact is true, specific and verified on the day of sending.

---

## 1. Variables

| Variable | What it holds | Source | Filled by | Rule |
|---|---|---|---|---|
| `[NAME]` | The person's name as they use it professionally (first name for individuals; the founder/lead's name for studios) | Own website About/Team page; professional Instagram bio; DB `Professional Name` | Manual check | If no individual name is published (502 records are studio-only), address the studio by name ("Hello [STUDIO/LABEL NAME] team") — never guess a first name. |
| `[STUDIO/LABEL NAME]` | Business name exactly as written by them | DB `Professional / Studio Name`, own site | Automatic, then checked | Keep their casing and spelling. |
| `[PROFESSION]` | Their own description of their profession ("bridal makeup artist", "interior designer", "calligrapher") | Their bio/site; DB `Subcategory` as fallback | Manual | Use their words, not the database's segment code. |
| `[CITY]` | The city they work from | DB `City` (verified records only) | Automatic | Do not use if the DB city is Unknown/UNVERIFIED or flagged. Never use a city to imply local peers who don't exist. |
| `[PORTFOLIO]` | The URL of their public portfolio (site, Behance-like page, Instagram) | DB `Portfolio URL`/`Website`/`Instagram` | Automatic | For internal reference — never paste their own link back to them. |
| `[RELEVANT WORK]` | One named piece of work: a collection, project, wedding, series, product, commission | Opened and viewed on the day of sending; DB `Recent Activity` often names it | **Manual only** | Must be something you actually looked at. Name it as they name it. |
| `[ONE SPECIFIC, ACCURATE OBSERVATION]` / `[ONE SPECIFIC DETAIL]` | One sentence on what is distinctive about that work (material, technique, light, structure, colour) | Your own viewing | **Manual only** | Descriptive, not evaluative. No superlatives. |
| `[RELEVANT CATEGORY]` | The Uepaki category their work fits (e.g., Space & Design) | DB `Category` | Automatic | Only if it matches how they describe themselves. |
| `[FOUNDER/TEAM NAME]` · `[ROLE]` | The real sender | Sender | Automatic | A real person who will read the reply. Founder name only when the founder sent or approved it. |
| `[FP-OUT SENTENCE]` / `[FP-OUT SHORT]` | Founding-programme sentence | Founder decision FP-OUT | Fixed text | Use only the approved wording, unchanged. Until approved, use the default text in the template, which states no terms. |
| `[LIVE COUNT]` · `[CATEGORIES]` · `[NAMES]` | Registered professionals today; their categories; names of those who consented to be named | Admin system on the day; consent log | Manual, same day | Never estimate or round. Names only with recorded consent. |
| `[APPROVED LINK]` | The link approved for pre-launch use | Founder / LP-1 decision | Fixed | No staging links; no legacy pages. |
| `[SEGMENT VALUE POINTS]` | The segment's three value lines | Master library `SEGMENTS` sheet | Automatic | Do not add benefits. |

## 2. Where the database helps (and where it doesn't)

| DB field | Use it for | Caution |
|---|---|---|
| `Recent Activity` | Finding `[RELEVANT WORK]` (e.g., "newest product published …", "TAD feature …", "latest client review …") | Re-open the source; activity may be months old. Don't reference reviews ("I saw your 150 reviews") — it reads as surveillance. |
| `Client Acquisition Signal` | Understanding how they sell, to choose the right question | Never quote it back ("I see you're stocked by X"). Don't name platforms. |
| `Evidence Source 1–3` | Where to look at the work | Some are platform pages; look at their own site first. |
| `Likely Objection` | Preparing the right follow-up | Never pre-empt an objection in the first message. |
| `Why Uepaki?` / `Recommended Pitch` | Background only | Some legacy pitch lines mention planned collaboration — follow RD-1 rules. |
| `Researcher Notes` | Identity and city context | Internal only. |
| Contact fields | Choosing the route (see contact class) | A published number is not consent. Never use WhatsApp or platform phone numbers for first contact. |

## 3. Rules

1. **Look before you write.** Open the portfolio on the day. If you cannot find something specific and current, do not send — move the record to research.
2. **One observation, not three.** Specific beats effusive.
3. **Describe, don't judge.** "The indigo ground in your Pichwai panels" — not "your stunning, breathtaking work".
4. **No fake familiarity.** Never imply you have met, followed for years, or "been a fan" unless true.
5. **No surveillance details.** Don't reference personal life, family, location details, review counts, prices, follower counts, or anything from personal accounts.
6. **No AI-written compliments about work you haven't seen.** Drafting help is fine; every observation must be verified by the person sending.
7. **Their words for their work.** If they call it "couture", don't call it "clothing".
8. **City only when true and useful.** Don't use `[CITY]` to suggest a local community that doesn't yet exist; say "starting with a small group" — which is true from day one.
9. **Fallbacks are a stop sign.** If `[NAME]`, `[RELEVANT WORK]` or the observation is missing, the message is not sent. There is no generic fallback text.
10. **Record what you referenced.** Log `[RELEVANT WORK]` in the tracker so follow-ups stay consistent and nobody else repeats it.

## 4. Examples

| Quality | Opening line |
|---|---|
| ✗ Generic | "Hi, we came across your profile and loved your work." |
| ✗ Flattery | "Your designs are absolutely stunning and you're clearly one of the best in Delhi." |
| ✗ Surveillance | "I saw you have 210 reviews and charge ₹4,000 per function." |
| ✗ Fake familiarity | "Been following your journey for years." |
| ✓ Specific, descriptive | "I was looking at the September drop — the chanderi sarees with hand-painted borders." *(illustrative)* |
| ✓ Specific, descriptive | "I've been looking at the Alibaug house, especially how the courtyard section sets up the light." *(illustrative)* |

(Examples marked illustrative are not about real people.)

## 5. Pre-send checklist (30 seconds)

- [ ] Name and studio spelled as they write them
- [ ] `[RELEVANT WORK]` opened today and named correctly
- [ ] Observation is descriptive and accurate
- [ ] Channel matches the contact class (no WhatsApp, no platform numbers)
- [ ] FP-OUT sentence unchanged
- [ ] No term from the DO NOT SAY list
- [ ] Opt-out line present
- [ ] Experiment cell and variant logged in the tracker
