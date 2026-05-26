---
title: Design overview
sidebar_label: Design overview
description: Booking Engine Design admin page theme variables search and booking summary presets accordions extra CSS unit filters screenshots.
---

# Design overview

Open **Booking Engine → Design** to influence how the search bar, booking summary, and unit filters look **without editing PHP**.

{/* SCREENSHOT: Full Design admin page */}
![Design settings page](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/styling-page-full.png`): styling-page-full.png */}

---

## Shared theme variables

Large textarea labelled **Shared theme variables** accepts Custom Property lines (CSS variables) or small rules. The plugin injects them alongside preset styles so both the search UI and booking summary can read consistent colours, radii, or fonts.

Example (illustrative):

```css
--bec-brand: #1a365d;
--bec-radius: 8px;
```

---

## Search bar section

| Control | Purpose |
|---------|---------|
| **Layout style** | **Enhanced** (date range + guest popover) vs **Classic** (separate controls). |
| **Extra CSS** | Free-form rules targeting search wrapper classes—see **[Search form presets](./02-search-form-presets.md)**. |

---

## Booking summary section

| Control | Purpose |
|---------|---------|
| **Layout style** | **Default** vs **Compact** desktop layout. |
| **Rate details accordions** | Toggle **Inclusions** / **Conditions** panels when quote text provides them. |
| **Extra CSS** | Targets booking summary DOM structure. |

---

## Unit filters — extra CSS

**Option key:** `bec_styling_filters_extra_css`

Free-form CSS for **`[bec_unit_filters]`** markup (`.bec-unit-filters*`, picker panels, amenity sheets). See **[bec_unit_filters](../06-shortcodes/15-bec-unit-filters.md)** and **[Listing Filters admin](../04-units/07-listing-filters-admin.md)**.

---

## Sanitisation & safety

CSS fields run through sanitisation that blocks obviously dangerous sequences (such as raw HTML openers inside the textarea). Stay within reasonable length limits—split huge stylesheets into your theme if necessary.

---

## Related pages

- **[Theme variables & custom CSS](./04-theme-variables-and-custom-css.md)**
