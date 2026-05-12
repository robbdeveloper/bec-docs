---
title: '[bec_booking_summary] shortcode'
sidebar_label: bec_booking_summary
description: Full booking summary shortcode attributes incomplete quote fallback mobile drawer accordions enquiry styling preset compact.
---

# `[bec_booking_summary]`

All-in-one **booking sidebar/card**: embedded search when dates are missing, detailed breakdown when available, optional multi-rate picker, mobile sticky bar + drawer, enquiry link, and checkout hand-off.

---

## Where to put it

Singular unit templates—typically right column / sticky sidebar pattern builders expose via shortcode blocks.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`unit_id`** | `0` | Target Units post ID; `0` uses current unit page. |
| **`form_id`** | `bec-booking-summary` | Base string for HTML ids (desktop + mobile variants append suffixes). |
| **`context`** | `bec_booking_summary` | Passed into search-field filters—change only when themers request separation. |
| **`tax_note`** | *(empty)* | Small disclaimer below totals—falls back to defaults/filter when blank. |
| **`show_enquiry`** | `1` | Set `0`, `false`, or `no` to hide secondary enquiry link. |
| **`enquiry_label`** | translated “Enquiry” | Anchor text for secondary action (fallback settings supply URL/text fallbacks). |

---

## Behaviour modes (states)

| State | Visitor sees |
|-------|----------------|
| **Incomplete dates** | Embedded **`[bec_search]`** style panel + enquiry affordances—no checkout yet. |
| **Quote OK & bookable** | Headline price, optional rate selector, breakdown rows, Continue button. |
| **No availability** | Clear empty-state messaging + search refresh. |
| **Quote API error** | Error-oriented messaging—may pair with **[fallback](../05-bookings-and-checkout/04-fallback-mode.md)** depending on configuration. |
| **Fallback triggered** | Inline fallback aside alongside enquiry/search according to rules. |

Mobile layouts duplicate critical controls (`bec-booking-summary__mobile`, drawer/backdrop IDs derived from `form_id`).

{/* SCREENSHOT: Desktop booking summary available state */}
![Booking summary desktop available](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-desktop-available.png`): bec-booking-summary-desktop-available.png */}

{/* SCREENSHOT: Desktop unavailable or empty state */}
![Booking summary desktop unavailable](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-desktop-unavailable.png`): bec-booking-summary-desktop-unavailable.png */}

{/* SCREENSHOT: Mobile bottom bar collapsed */}
![Booking summary mobile bar](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-mobile-bar.png`): bec-booking-summary-mobile-bar.png */}

{/* SCREENSHOT: Mobile drawer open */}
![Booking summary mobile drawer](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-mobile-drawer.png`): bec-booking-summary-mobile-drawer.png */}

{/* SCREENSHOT: Compact preset */}
![Booking summary compact preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-compact.png`): bec-booking-summary-compact.png */}

{/* SCREENSHOT: Fallback embedded inside summary */}
![Booking summary with fallback](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-fallback.png`): bec-booking-summary-fallback.png */}

---

## Examples

```
[bec_booking_summary]
```

```
[bec_booking_summary unit_id="123" form_id="sidebar-booking" show_enquiry="0"]
```

```
[bec_booking_summary tax_note="VAT included." enquiry_label="Ask us"]
```

---

## CSS hooks (selection)

Root:

- `bec-booking-summary`, optional `bec-booking-summary--preset-compact`
- Root often exposes `data-bec-booking-summary`, `data-bec-post-id`

Regions:

- `bec-booking-summary__inner`, modifiers `--incomplete`, `--fallback`
- Search shell: `bec-booking-summary__search`, modifiers `--incomplete`, `--desktop`, `--drawer`, `--trail`
- Desktop column: `bec-booking-summary__desktop`
- Head pricing: `bec-booking-summary__head`, `__title`, `__head-price`, `__head-amount`, `__head-sub`
- Readouts: `bec-booking-summary__readouts`, `__readout-row`, `__readout`
- Rates: `bec-booking-summary__rate-select`, `__rate-list`, `__rate-item`, `is-selected`, `__rate-link`
- Accordions (respect styling toggles): `bec-booking-summary__accordions`, `__accordion`
- Breakdown: `bec-booking-summary__breakdown`, `__row`, `__tax-note`
- Actions: `bec-booking-summary__actions`, `__action--primary`, `__action--secondary`
- Mobile: `bec-booking-summary__mobile`, `__bar`, `__backdrop`, `__drawer`, `__hero`
- Messages: `bec-booking-summary__message`, `--error`, `--empty`

---

## Tips

- Accordions for **inclusions** / **conditions** obey **[Styling](../07-styling/01-styling-overview.md)** admin toggles.
- Rate switching writes **`bec_rate_id`** into the URL for downstream checkout.
