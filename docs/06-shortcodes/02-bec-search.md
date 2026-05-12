---
title: '[bec_search] shortcode'
sidebar_label: bec_search
description: Availability search form shortcode attributes context form_id CSS hooks Enhanced vs Classic presets.
---

# `[bec_search]`

Renders the **availability search bar** visitors use to choose check-in, check-out, and guests. Submitting reloads the page with **`bec_*`** parameters so every other shortcode sees the same stay details.

---

## Where to put it

- Homepage hero, sticky header template, dedicated landing page.
- Inside **`[bec_booking_summary]`** uses the same styling presets automatically.

{/* SCREENSHOT: Enhanced search bar front-end */}
![bec_search Enhanced preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-search-enhanced.png`): bec-search-enhanced.png */}

{/* SCREENSHOT: Classic search bar front-end */}
![bec_search Classic preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-search-classic.png`): bec-search-classic.png */}

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`context`** | `shortcode` | Identifier passed to styling/filter hooks—change when you render multiple searches differently. |
| **`form_id`** | `bec-search-form-sc` | HTML `id` on the `<form>`—must be unique per page if you output several forms. |

Guest-field behaviour (single guests vs adults/children vs provider default) is configured globally on **Booking Engine → Connection**, not on the shortcode.

---

## Examples

```
[bec_search]
```

```
[bec_search form_id="homepage-search" context="homepage"]
```

---

## CSS hooks (major)

Outer wrappers vary by preset:

- `bec-search-form-wrap`, `bec-search-form-wrap--enhanced`
- `bec-search-form`, `bec-search-form--enhanced`
- Inner pieces such as `bec-search-form__bar`, `bec-search-form__control`, `bec-search-form__button`, `bec-search-form__error`, `bec-search-form__child-ages`

Preset-specific bundles live under plugin assets (`search-form-enhanced.css`, etc.)—see **[Search form presets](../07-styling/02-search-form-presets.md)**.

---

## Tips

- Pair with **`[bec_unit_url]`** on listing cards so drill-down keeps dates.
- Validation messages appear near the form when dates contradict provider rules after submission.

---

## See also

- **[Search context](../05-bookings-and-checkout/01-search-context-and-urls.md)**
