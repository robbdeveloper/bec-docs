---
title: '[bec_fallback] shortcode'
sidebar_label: bec_fallback
description: Fallback contact UI shortcode inline rich text or link mode CSS bec-fallback Booking Engine Checkout fallback settings.
---

# `[bec_fallback]`

Renders the administrator-defined **fallback experience**: either rich inline HTML or a single outbound link—controlled globally under **Booking Engine → Checkout & fallback**.

---

## Where to put it

Sidebars, footers, modal triggers, secondary columns alongside **`[bec_booking_summary]`** when you always want manual contact options visible.

---

## Attributes

_None._ Presentation toggles live entirely in settings.

---

## Examples

```
[bec_fallback]
```

{/* SCREENSHOT: bec_fallback inline rich content */}
![bec_fallback inline mode](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-fallback-inline.png`): bec-fallback-inline.png */}

{/* SCREENSHOT: bec_fallback link only */}
![bec_fallback link mode](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-fallback-link.png`): bec-fallback-link.png */}

---

## CSS hooks

- Wrapper: `bec-fallback`
- Link variant: `bec-fallback__link`
- Inline wrapper: `bec-fallback__inner`
- Hint when unset: `bec-fallback__hint`

---

## Tips

Automatic fallback injection on singular units follows **[Fallback rules](../05-bookings-and-checkout/04-fallback-mode.md)**—this shortcode simply surfaces the same renderer wherever **you** place it.

Developers may wrap HTML via **`bec_fallback_html`** filter.
