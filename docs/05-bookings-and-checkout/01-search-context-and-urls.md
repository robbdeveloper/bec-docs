---
title: Search context and URLs
sidebar_label: Search context & URLs
description: bec_checkin bec_checkout guests child ages rate ID, GET form action, redirect_url, unit archive, search context for Booking Engine Connector shortcodes.
---

# Search context and URLs

Most booking shortcodes read the **same information from the page URL**. That shared snapshot is called **search context**.

When someone submits **`[bec_search]`**, the browser navigates with a **GET** request to the form’s **`action`** URL. **`bec_checkin`**, **`bec_checkout`**, guest fields, and any other **`bec_*`** inputs are sent as **query parameters** on that URL.

The destination is **not always the same page** as the shortcode:

- **Default** **`[bec_search]`** (no **`redirect_url`**) — WordPress sends visitors to the **units archive** (or **home** if no archive URL exists) with the search parameters attached—handy for homepage → inventory flows.
- **`redirect_url="…"`** — Sends the same parameters to whatever page or URL you choose.

Other templates (auto-inserted search, `bec_render_search_form()`, etc.) compute **`action`** from the current request; see **[bec_search shortcode](../06-shortcodes/02-bec-search.md)** and the **`bec_search_form_action`** filter in **[Sync hooks & filters](../09-developer-reference/02-sync-hooks-and-filters.md)**.

{/* SCREENSHOT: Browser address bar zoomed showing bec_checkin bec_checkout parameters */}
![URL with BEC query parameters](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/05-bookings-and-checkout/url-query-params.png`): url-query-params.png */}

---

## Common parameters

| Parameter | Meaning |
|-----------|---------|
| `bec_checkin` | Stay start date (format your site expects—normally `YYYY-MM-DD`). |
| `bec_checkout` | Stay end date. |
| `bec_adults` | Number of adults when using adults + children mode. |
| `bec_children` | Number of children when using adults + children mode. |
| `bec_total_guests` | Single guest count when the provider uses **total guests** mode (internal wiring maps this into quote/checkout context). |
| `bec_child_age[]` | Repeated field—one age per child when child ages are enabled. |
| `bec_rate_id` | Selected rate plan when multiple rates exist—booking summary links rewrite this value. |

Exact parameter names always begin with **`bec_`** so they do not collide with other plugins.

---

## “Complete” context

Shortcodes that need live pricing (**quotes**, **checkout**, **booking summary**) require a **complete** context:

- Check-in **and** check-out filled in
- At least **one paying guest** represented in the internal adults count (total-guest mode satisfies this automatically)

If dates are missing, those shortcodes usually show **search-only** or **empty** states rather than calling the API.

---

## Example URLs

**Homepage search lands on the units archive (default `[bec_search]`):**

```
https://example.com/properties/?bec_checkin=2026-06-01&bec_checkout=2026-06-08&bec_adults=2&bec_children=1
```

**Custom results page via `redirect_url`:**

```
https://example.com/availability-results/?bec_checkin=2026-06-01&bec_checkout=2026-06-08&bec_total_guests=3
```

**Same dates preserved on a unit page:**

```
https://example.com/properties/ocean-room/?bec_checkin=2026-06-01&bec_checkout=2026-06-08&bec_adults=2&bec_children=0
```

Use **`[bec_unit_url]`** when building links so you do not hand-copy parameters—see **[bec_unit_url](../06-shortcodes/07-bec-unit-url.md)**.

---

## Related pages

- **[Availability and quotes](./02-availability-and-quotes.md)**
- **[Shortcodes overview](../06-shortcodes/01-shortcodes-overview.md)**
