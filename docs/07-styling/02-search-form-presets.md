---
title: Search form presets
sidebar_label: Search form presets
description: Enhanced vs Classic search bar presets preview screenshots bec-search-form-wrap Enhanced Classic CSS hooks.
---

# Search form presets

Preset selection lives under **Booking Engine → Design → Search bar → Layout style**.

---

## Enhanced

- Modern **range-style date control** plus consolidated guest picker (popover pattern).
- Adds modifier classes such as `bec-search-form-wrap--enhanced` and `bec-search-form--enhanced`.

{/* SCREENSHOT: Enhanced preset wide desktop */}
![Search Enhanced preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/search-enhanced-desktop.png`): search-enhanced-desktop.png */}

**Choose Enhanced when** you want a compact horizontal bar suited to hero sections.

---

## Classic

- Separate inputs resembling traditional booking widgets.

{/* SCREENSHOT: Classic preset desktop */}
![Search Classic preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/search-classic-desktop.png`): search-classic-desktop.png */}

**Choose Classic when** your theme already styles discrete inputs or you prefer maximum familiarity.

---

## Popover placement (Enhanced)

On desktop and tablet, date and guest popovers honour **`popover_placement`** on **`[bec_search]`** (or **`SearchForm::render()`**):

| Value | Behaviour |
|-------|-----------|
| **`auto`** (default) | Opens below the trigger; flips **above** when there is not enough viewport space below. Repositions on scroll/resize while open. |
| **`top`** | Always opens above. |
| **`bottom`** | Always opens below. |

Filter override: **`bec_search_form_popover_placement`**. On mobile, popovers still use the bottom-sheet layout regardless of this setting.

---

## Date range footer (Enhanced)

The calendar footer (`.drp-selected`, next to Cancel/Apply) shows the selected range using **`daterange_format`** or **`daterange_preset`** from **`[bec_search]`** / **`[bec_booking_summary]`**. From **0.1.36**, the footer uses a responsive grid so the date readout and action buttons stay aligned on narrow viewports.

Enhanced forms expose **`data-bec-daterange-format`** for the Moment.js picker. Filters: **`bec_search_form_daterange_format`**, **`bec_daterange_moment_format_presets`**, **`bec_php_date_format_to_moment`**.

---

## Backdrop and overlay sync

Enhanced search shares backdrop/overlay behaviour between the date range picker and guest popover so only one panel feels “open” at a time. If you customise z-index or overlay colour in **Extra CSS**, target both `.bec-search-form-wrap--enhanced` backdrop hooks and guest popover wrappers so they stay visually consistent.

---

## Extra CSS hook ideas

Pair presets with selectors documented under **[Theme variables & custom CSS](./04-theme-variables-and-custom-css.md)**—start from `.bec-search-form` and descend into `bec-search-form__*` elements.

---

## Related pages

- **[bec_search shortcode](../06-shortcodes/02-bec-search.md)**
