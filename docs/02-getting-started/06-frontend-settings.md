---
title: Frontend settings
sidebar_label: Frontend settings
description: Booking Engine Frontend screen — guest input mode, child ages, auto-insert search, append booking blocks on single unit pages.
---

# Frontend settings

Open **Booking Engine → Frontend**.

These settings control how the **availability search bar** collects guests and whether booking UI is injected automatically on **singular `bec_unit`** pages—without placing shortcodes in the editor.

{/* SCREENSHOT: Full Frontend page */}
![Frontend settings page](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-page-overview.png`): frontend-page-overview.png */}

---

## Search form

Applies to **`[bec_search]`** and the embedded search inside **`[bec_booking_summary]`**.

### How guests are collected

**Option key:** `bec_search_guest_input_mode`

| Option | When to use it |
|--------|----------------|
| **Follow the active provider** | Default. Matches what your provider expects (e.g. one total guest count vs adults + children). |
| **Single “Guests” count only** | One number for all people—simplest for small properties. |
| **Adults and children (separate fields)** | When you need a split headcount for pricing or policies. |

### Child ages in search

**Option key:** `bec_search_child_ages_mode`

| Option | Meaning |
|--------|---------|
| **Follow the active provider** | Uses the engine’s rules. |
| **Ask for each child’s age** | Shows one age field per child when the form is in adults + children mode. |
| **Do not ask for child ages** | Omits age fields (not used when you only collect a single guest total). |

{/* SCREENSHOT: Search form behaviour section on Frontend page */}
![Search form settings on Frontend](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-search-form-settings.png`): frontend-search-form-settings.png */}

---

## Single unit pages (automatic blocks)

**Option keys:** `bec_auto_append_search_form_single_unit`, `bec_append_booking_blocks_to_content`

Let the plugin inject booking UI on **singular `bec_unit`** views—without placing shortcodes in the editor:

| Checkbox | Effect |
|----------|--------|
| **Insert the availability search form above the main post content** | Prepends the same UI as **`[bec_search]`** above the unit body. Turn off if you add `[bec_search]` (or a booking summary) manually in templates or the block editor. |
| **Append the booking quote and Continue button after the main post content when the URL has dates** | After content, when search context from the URL is **complete** (check-in, check-out, guests), appends quote + checkout CTA (same idea as **`[bec_booking_summary]`** / quote blocks). Turn off if you place `[bec_booking_summary]`, `[bec_quote]`, or `[bec_checkout]` yourself. |

These options interact with **[Search context](../05-bookings-and-checkout/01-search-context-and-urls.md)** and **[Checkout flow](../05-bookings-and-checkout/03-checkout-flow.md)**.

---

## Related pages

- **[Admin screens overview](./05-admin-screens.md)**
- **[bec_search](../06-shortcodes/02-bec-search.md)**
- **[bec_booking_summary](../06-shortcodes/06-bec-booking-summary.md)**
