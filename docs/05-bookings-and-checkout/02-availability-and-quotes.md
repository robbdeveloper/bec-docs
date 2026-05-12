---
title: Availability and quotes
sidebar_label: Availability & quotes
description: What a quote is, transient caching about five minutes, no availability vs validation errors, bulk quotes on archives.
---

# Availability and quotes

A **quote** is the plugin’s structured answer from your booking provider for:

> “This **unit**, these **dates**, this **guest mix** — is it bookable and at what conditions?”

Shortcodes such as **`[bec_quote]`** and **`[bec_booking_summary]`** turn quotes into visitor-facing text and breakdowns.

---

## When quotes run

Quotes run only when **[search context](./01-search-context-and-urls.md)** is **complete** (dates + guest representation).

---

## Caching

Results are cached briefly (**about five minutes** by default) so archive pages do not hammer your API.

- Changing dates or guests changes the cache key—visitors still see fresh searches after edits.
- Developers can tune TTL via documented filters.

---

## Possible outcomes

| Outcome | Visitor-facing behaviour (typical) |
|---------|-------------------------------------|
| **Available** | Price lines, Continue button enabled inside booking summary. |
| **No availability** | Messaging that nothing is bookable for that stay—still shows search UI where configured. |
| **Validation failed** | Dates or occupancy rejected before contacting provider—often surfaced near the search form. |
| **API error** | Depending on **[fallback](./04-fallback-mode.md)** settings, visitors may see contact content instead of technical errors. |

---

## Bulk quotes (technical note)

Some providers (including **Kross**) can fetch **many units at once** for one date range and reuse that batch across archive loops—your visitors still see per-unit rows, but the API traffic stays efficient.

---

## Related pages

- **[Elementor Loop Grid — hide unavailable units](../06-shortcodes/11-elementor-loop-grid-availability-filter.md)**
- **[Checkout flow](./03-checkout-flow.md)**
