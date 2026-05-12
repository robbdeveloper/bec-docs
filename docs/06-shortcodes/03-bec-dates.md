---
title: '[bec_dates] shortcode'
sidebar_label: bec_dates
description: Readable stay dates from URL search context shortcode bec_dates CSS bec-shortcode-dates.
---

# `[bec_dates]`

Outputs a simple **readable date range** built from **`bec_checkin`** and **`bec_checkout`** in the URL.

---

## Where to put it

Page headers, sticky summaries, confirmation banners—anywhere you already carry search parameters forward.

---

## Attributes

_None._ Behaviour can be customised by developers via filters (`bec_shortcode_dates_format`).

---

## Examples

```
[bec_dates]
```

---

## Visitor output

When **[search context](../05-bookings-and-checkout/01-search-context-and-urls.md)** is incomplete the shortcode prints **nothing**.

Otherwise visitors typically see a paragraph like:

> Mon Jun 1 → Mon Jun 8

(Locale formatting follows WordPress settings.)

{/* SCREENSHOT: bec_dates paragraph under page title */}
![bec_dates front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-dates.png`): bec-dates.png */}

---

## CSS hooks

- `bec-shortcode-dates`

---

## Tips

Use **`[bec_booking_summary]`** instead when you need dates **plus** guests and pricing—the summary includes richer readouts.
