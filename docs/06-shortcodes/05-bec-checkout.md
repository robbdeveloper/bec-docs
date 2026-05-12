---
title: '[bec_checkout] shortcode'
sidebar_label: bec_checkout
description: Checkout CTA shortcode link or POST form unit_id CSS bec-shortcode-checkout bec-checkout-cta.
---

# `[bec_checkout]`

Outputs the primary **Book now / Continue** control that sends visitors to your external booking engine.

---

## Where to put it

Minimal templates where you handle pricing elsewhere—or alongside **`[bec_quote]`** when you do **not** use **`[bec_booking_summary]`**.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`unit_id`** | `0` | Target Units post; `0` uses singular unit context. |

Checkout URL availability still depends on **[configured base URL](../03-providers/02-kross-booking.md)** and valid **[search context](../05-bookings-and-checkout/01-search-context-and-urls.md)**.

---

## Examples

```
[bec_checkout]
```

```
[bec_checkout unit_id="789"]
```

---

## Visitor output

- **GET checkout:** Anchor styled as CTA (`bec-checkout-cta`).
- **POST checkout:** `<form>` (`bec-checkout-form`) submitting hidden fields.

{/* SCREENSHOT: bec_checkout button on unit page */}
![bec_checkout button](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-checkout.png`): bec-checkout.png */}

---

## CSS hooks

- Wrapper: `bec-shortcode-checkout`
- Inner CTA/form classes as above

---

## Tips

Prefer **`[bec_booking_summary]`** when you want embedded search + mobile drawer + breakdown—the summary reuses the same checkout renderer internally.
