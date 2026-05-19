---
title: '[bec_quote] shortcode'
sidebar_label: bec_quote
description: Compact quote shortcode unit_id show_rates currency formatting decimals number_style CSS hooks bec-shortcode-quote archive cards.
---

# `[bec_quote]`

Shows a **compact availability / price line** using the cached quote service—ideal beside thumbnails on archives or lightweight layouts.

---

## Where to put it

Unit archive loops, Related Units grids, hero strips—anywhere `[bec_booking_summary]` would feel too heavy.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`unit_id`** | `0` | Target Units post ID; `0` uses current loop post. |
| **`show_rates`** | `auto` | Optional multi-rate list below the headline price. Truthy: `1`, `always`, `yes`, `true`. Falsy: `0`, `never`, `no`, `false`. **`auto`** lists rates only when more than one exists. |
| **`currency_display`** | `code` | `code` (e.g. `EUR`) or `symbol` (e.g. `€`). |
| **`currency_position`** | `after` | `before` or `after` the amount. |
| **`decimals`** | `2` | Decimal places (`0`–`4`). |
| **`decimal_sep`** | *(locale)* | Decimal separator. Only applies when **both** **`decimal_sep`** and **`thousands_sep`** are set. |
| **`thousands_sep`** | *(locale)* | Thousands separator. Pair with **`decimal_sep`** for explicit grouping. |
| **`number_style`** | `locale` | `locale`, `eu` (e.g. `1.234,56`), or `us` (e.g. `1,234.56`). |

Site-wide money defaults: filter **`bec_money_format_defaults`** (context `bec_quote`).

---

## Examples

```
[bec_quote]
```

```
[bec_quote show_rates="always"]
```

```
[bec_quote unit_id="456" show_rates="0"]
```

European-style symbol before amount:

```
[bec_quote currency_display="symbol" currency_position="before" number_style="eu"]
```

---

## Visitor output

Requires **complete** URL context—otherwise empty.

When multiple rates exist and none is selected in the URL, the headline may show a translated **“From %s”** line (Italian sites: **“Da %s”**).

{/* SCREENSHOT: Archive card with quote line */}
![bec_quote on archive card](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-quote-archive.png`): bec-quote-archive.png */}

---

## CSS hooks

- Root: `bec-shortcode-quote`
- Rate list: `bec-shortcode-quote__rates`, `bec-shortcode-quote__rate`, `bec-shortcode-quote__rate--selected`
- Labels: `bec-shortcode-quote__rate-name`, `bec-shortcode-quote__rate-price`

---

## Tips

Developers can adjust wording/HTML via **`bec_shortcode_quote_text`** / **`bec_shortcode_quote_html`** filters, or format amounts with **`bec_format_money`** and **`bec_currency_symbols`**.
