---
title: Add search and booking to pages
sidebar_label: Add search & booking to pages
description: Quick tutorial — place bec_search on a landing page and bec_booking_summary on unit pages using the block editor or classic editor.
---

# Add search and booking to pages

This is a **minimal** layout many sites use: search everywhere you need it, rich booking widget on each unit page.

---

## 1. Put a search bar on your homepage (or dedicated search page)

1. Edit the page in the **block editor**.
2. Add a **Shortcode** block (or a **Custom HTML** block if your theme allows shortcodes there).
3. Paste:

```
[bec_search]
```

4. **Update** the page.

When a visitor submits the form, the browser reloads with dates and guest counts in the **URL**. Other shortcodes on the destination page read the same values.

{/* SCREENSHOT: Front-end Enhanced or Classic search bar in a page header */}
![Front-end search bar shortcode](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-search-bar.png`): frontend-search-bar.png */}

---

## 2. Add a booking summary on each unit page

On your **single unit** template or the unit’s post content:

```
[bec_booking_summary]
```

This block includes:

- Embedded search when dates are missing
- Price and breakdown when the API returns a quote
- **Continue** button to your external booking engine (when configured)
- Optional **Enquiry** link

If the shortcode runs on the unit’s own page, you do **not** need to pass a unit ID.

{/* SCREENSHOT: Desktop booking summary with price and Continue button */}
![Front-end booking summary desktop](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-booking-summary.png`): frontend-booking-summary.png */}

---

## 3. Optional: price line on archives

In a **query loop**, custom grid, or archive template you can show a compact price for a specific unit:

```
[bec_quote unit_id="123"]
```

Replace `123` with the WordPress post ID of the unit. The shortcode only outputs text when the URL already has complete dates—see **[bec_quote](../06-shortcodes/04-bec-quote.md)**.

---

## 4. Optional: Elementor Pro Loop Grid without “no availability” cards

If you build the listing with **Elementor Pro** Loop Grid instead of shortcodes alone, set the grid’s **Query ID** to **`bec_available_only`** so units without availability for the current URL search are **hidden** (not shown as empty cards). See **[Elementor — hide units with no availability](../06-shortcodes/11-elementor-loop-grid-availability-filter.md)**.

---

## 5. Optional: links that preserve search

When building your own HTML links from a listing to a unit, use **`[bec_unit_url]`** inside the `href` so check-in, check-out, and guests stay attached:

```html
<a href="[bec_unit_url]">View details</a>
```

Or pass a specific post ID: `[bec_unit_url unit_id="123"]`.

---

## Styling

Change the look under **Booking Engine → Styling** or add CSS—see **[Styling overview](../07-styling/01-styling-overview.md)**.

---

## Full shortcode reference

**[Shortcodes overview →](../06-shortcodes/01-shortcodes-overview.md)**
