---
title: '[bec_dates] shortcode'
sidebar_label: bec_dates
description: Readable stay dates from URL search context shortcode bec_dates date_format preset label_style label CSS bec-shortcode-dates.
---

# `[bec_dates]`

Outputs a simple **readable date range** built from **`bec_checkin`** and **`bec_checkout`** in the URL.

---

## Where to put it

Page headers, sticky summaries, confirmation banners—anywhere you already carry search parameters forward.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`date_format`** | *(empty)* | PHP `date_i18n()` format string. When set, overrides **`preset`**. |
| **`preset`** | `iso` | Built-in format: `iso`, `short`, `medium`, `long`, or `full` (locale-aware month/day names). |
| **`label_style`** | `arrow` | Range template: `arrow` (`%1$s → %2$s`), `from_to`, or `from_to_lower`. Ignored when **`label`** is set. |
| **`label`** | *(empty)* | Custom `sprintf` pattern with **`%1$s`** = check-in, **`%2$s`** = check-out (overrides **`label_style`**). |

Site-wide defaults can be set with the **`bec_date_format_defaults`** filter (context `bec_dates`).

Developers can still replace the entire output with **`bec_shortcode_dates_format`** (non-empty return skips attribute formatting).

Other filters: **`bec_shortcode_dates_text`**, **`bec_shortcode_dates_html`**, **`bec_format_date`**, **`bec_format_date_range`**.

---

## Examples

Default (ISO dates with arrow):

```
[bec_dates]
```

Long format with “from … to …” wording:

```
[bec_dates preset="long" label_style="from_to"]
```

Custom PHP date format:

```
[bec_dates date_format="j M Y" label="%1$s – %2$s"]
```

---

## Visitor output

When **[search context](../05-bookings-and-checkout/01-search-context-and-urls.md)** is incomplete the shortcode prints **nothing**.

Otherwise visitors typically see a paragraph like:

> Mon Jun 1 → Mon Jun 8

(with **`preset="iso"`**)

or, with **`preset="long"`**:

> Monday, 1 June 2026 → Monday, 8 June 2026

(Locale formatting follows WordPress settings and the chosen **`preset`** / **`date_format`**.)

{/* SCREENSHOT: bec_dates paragraph under page title */}
![bec_dates front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-dates.png`): bec-dates.png */}

---

## CSS hooks

- `bec-shortcode-dates`

---

## Tips

Use **`[bec_booking_summary]`** instead when you need dates **plus** guests and pricing—the summary includes richer readouts.
