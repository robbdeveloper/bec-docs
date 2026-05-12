---
title: Fallback mode
sidebar_label: Fallback mode
description: Enable fallback always fallback inline vs link triggers empty availability provider errors PublicContentBlocks vs bec_fallback shortcode.
---

# Fallback mode

**Fallback** is optional replacement UI when live availability checkout should **not** take over— outages, quota limits, or a deliberate **contact-first** workflow.

Configure it under **Booking Engine → Checkout & fallback**.

{/* SCREENSHOT: Checkout fallback admin page Fallback section expanded */}
![Checkout and fallback settings](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/05-bookings-and-checkout/checkout-fallback-settings.png`): checkout-fallback-settings.png */}

---

## Master switches

| Setting | Meaning |
|---------|---------|
| **Enable fallback** | Turns fallback features on globally (individual triggers still apply). |
| **Always use fallback** | Forces fallback **even when quotes succeed**—useful for brochure sites that never push visitors into instant booking. |

---

## Presentation modes

| Mode | Visitor sees |
|------|----------------|
| **Inline content** | Rich text/HTML configured in WordPress—shortcodes allowed inside it. |
| **Link only** | A single prominent button linking to your contact page or booking policy PDF. |

---

## When fallback triggers automatically

Separate checkboxes decide whether fallback replaces booking UI when:

- **Quote empty / no inventory** (`bec_fallback_empty_quote`).
- **Provider errors** belong to categories such as rate limiting, authentication failures, quota issues, validation problems, server errors, etc.

If categories do not match your scenario, visitors might see neither fallback nor checkout until you adjust triggers—see **[Common issues](../08-troubleshooting/01-common-issues.md)**.

---

## `[bec_fallback]` vs automatic injection

| Mechanism | Placement |
|-----------|-----------|
| **`[bec_fallback]` shortcode** | You decide exactly where fallback markup appears—sidebar, footer, page builder zone. |
| **Automatic append on singular units** | Plugin filters page content after fetching quotes—shows fallback instead of booking CTA when rules match. |

---

## Related pages

- **[bec_fallback shortcode](../06-shortcodes/09-bec-fallback.md)**
