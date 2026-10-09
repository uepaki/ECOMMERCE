# Uepaki — AiSensy (WhatsApp) Message Flow

**For:** whoever configures and operates Uepaki's WhatsApp Business account through AiSensy · **Date:** 2026-10-09 · **Status:** internal design. **Not yet live. Verify current Meta and AiSensy rules before configuration**, and have the flow reviewed by a lawyer under the Digital Personal Data Protection Act, 2023 and its Rules (decision request Q-LEGAL-OUT).

---

## 1. The rule this flow is built on

| | Publicly available professional contact | Permission to send marketing communications |
|---|---|---|
| What it is | A phone/WhatsApp number or email the professional published for business enquiries (own website, wedding-vendor platform) | An explicit, recorded "yes" from that person to receive messages from Uepaki on a named channel |
| What it allows | One relevant, human-written 1:1 first contact via **email or professional Instagram/LinkedIn** | WhatsApp templates and updates via AiSensy, within what they agreed to |
| What it does **not** allow | Bulk or template WhatsApp; adding to a broadcast list; using a wedding-platform number to recruit | Anything beyond the stated purpose and frequency |
| Count in the database today | 1,536 publish a business WhatsApp number | **0** |

**Consequences**
- No number from the prospect database is ever imported into AiSensy.
- No cold WhatsApp message — template or manual — is sent to any prospect.
- WhatsApp Business policy requires opt-in before a business sends proactive messages; AiSensy enforces Meta's policy, and poor-quality or unsolicited sending lowers the account's quality rating and can restrict it.

---

## 2. How a professional enters WhatsApp (opt-in paths)

| Path | Where consent is captured | What is recorded |
|---|---|---|
| **A. Conversation move** | In an email/DM reply the professional writes "message me on WhatsApp" (or similar) | Screenshot or quote of their message; date; number they gave |
| **B. Explicit update opt-in** | First WhatsApp message (W1) asks: "Would you also like occasional Uepaki updates on WhatsApp?" — they reply yes | Their reply text; date; wording shown |
| **C. Registration or website form** | An **unticked** checkbox: "Send me launch updates and onboarding help on WhatsApp" with frequency and STOP wording | Form record; timestamp; wording version |
| **D. In-person / event** | A sign-up sheet or QR form with the same wording as C | Form/sheet; date; event |

Path A permits a **1:1 conversation** (replies within the 24-hour customer-service window). Only B, C or D permit **business-initiated template messages**.

**Opt-in record (minimum fields):** Prospect ID (if any) · name · number · path (A/B/C/D) · exact wording shown · date/time · purpose ("launch updates and onboarding help") · max frequency stated · opt-out date (if any).

---

## 3. Flow

```
Email / IG DM / LinkedIn (1:1, human)                    Website / registration form
        │ professional replies, asks for WhatsApp               │ unticked opt-in box ticked
        ▼                                                       ▼
[A] 1:1 WhatsApp conversation (manual, within 24h window)   [C] Opt-in recorded
        │ W1: "Would you also like occasional updates?"         │
        ├── No → conversation only; no templates ever           │
        └── Yes → [B] opt-in recorded ───────────────┬──────────┘
                                                     ▼
                                     T01 opt-in confirmation (with STOP)
                                                     │
                     ┌───────────────────────────────┼─────────────────────────────┐
                     ▼                               ▼                             ▼
            T02 details on request       T03 registration help (48h)      T05 founding update (≤2/month,
                                         T04 profile/listing help (3d)        real news only)
                                                     │                             │
                                                     ▼                             ▼
                                              T06 launch announcement (once, at public launch)
                                                     │
                       STOP / "unsubscribe" / "no more messages" at any point → T07 confirmation → suppression
```

---

## 4. Template library (for submission via AiSensy)

Categories follow Meta's template categories as generally applied: **Utility** = tied to an action the person took or requested; **Marketing** = updates and announcements. AiSensy/Meta make the final categorisation — check before submission.

| ID | Name | Category | When | Body | Variables | Buttons |
|---|---|---|---|---|---|---|
| T01 | optin_confirmation | Utility (may be re-classed as Marketing) | Immediately after opt-in B/C/D | Hello {{1}}, this is Uepaki. You asked to receive updates from us on WhatsApp — thank you. We'll send launch news and help with setting up your profile, and not more than [N] messages a month. Reply STOP at any time to stop these messages. | {{1}} first name | Keep me updated · Stop |
| T02 | details_on_request | Utility | Professional asked for details | Hello {{1}}, as promised, here is a short note on Uepaki for {{2}}s: {{3}}. Registration on the website carries a charge of ₹1 + GST. Reply here with any questions, or tell us a time for a 15-minute call. | {{1}} name · {{2}} profession · {{3}} approved link/document | Book a call · Questions |
| T03 | registration_started_help | Utility | Account exists, registration incomplete after 48h | Hello {{1}}, we noticed your Uepaki registration isn't finished yet. If anything got in the way — the form, the ₹1 + GST payment step, or documents — reply here and someone from the team will help. | {{1}} | Help me finish · Later |
| T04 | profile_setup_help | Utility | Approved; profile/first listing incomplete after 3 days | Hello {{1}}, your Uepaki account is approved. The next step is your profile and first listing. If you'd like, we can set it up with you in a 15-minute call using the work you already have. Reply with a time that suits you. | {{1}} | Book a call · I'll do it myself |
| T05 | founding_update | Marketing | Real news only; max 2/month | Hello {{1}}, a short update from Uepaki: {{2}}. As always, reply STOP to stop these messages. | {{1}} · {{2}} one factual update (no counts unless live; no names without consent) | Tell me more · Stop |
| T06 | launch_announcement | Marketing | Once, at public launch | Hello {{1}}, Uepaki is now open to customers in India. Your profile is at {{2}}. If you'd like help with your listings, reply here. Reply STOP to stop these messages. | {{1}} · {{2}} profile link | Help with listings · Stop |
| T07 | opt_out_confirmation | Utility | Automatic on STOP and similar | Understood — you won't receive further WhatsApp updates from Uepaki. If you ever want them again, reply START. | — | — |

All templates passed the same automated claims scan as the outreach library (no banned terms; all under 1,024 characters).

**Not permitted as templates:** cold introductions; "join now" or offer announcements; anything quoting founding-programme numbers, early-bird discounts, commission or plan prices (until cleared); counters; names of other professionals.

---

## 5. Operating rules

1. **Source of contacts:** only opted-in records from paths B–D. Never upload the prospect database, scraped lists or purchased lists.
2. **Frequency cap:** the number stated in T01 (recommendation: ≤ 2 marketing messages a month; utility messages only when triggered).
3. **Quiet hours:** 09:00–20:00 IST only.
4. **Opt-out:** keywords STOP, UNSUBSCRIBE, "no more messages", "stop messaging" — automatic T07 and suppression within minutes; also honour opt-outs given in any other channel.
5. **Human handover:** every reply to a template routes to a named team member within the same business day.
6. **Quality monitoring:** watch AiSensy's quality rating and block/report rates weekly; if quality drops, pause marketing templates and review.
7. **Content review:** the founder (or delegate) approves each T05 update text before sending.
8. **Records:** keep opt-in and opt-out records for as long as the lawyer advises.
9. **No re-permissioning by stealth:** a person who opted out is not asked again via WhatsApp.

## 6. Manual WhatsApp (1:1, inside the conversation)

The WhatsApp sections of the message library (W1–W4 per segment, in `UEPAKI_WHATSAPP_MESSAGE_LIBRARY.docx`) are for **1:1 manual use after the professional invited WhatsApp contact**. They are not AiSensy templates and are not sent in bulk.
