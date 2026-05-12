---
title: Styling overview
sidebar_label: Styling overview
description: Booking Engine Styling admin page theme variables search and booking summary presets accordions extra CSS screenshots.
---

# Styling overview

Open **Booking Engine → Styling** to influence how the search bar and booking summary look **without editing PHP**.

{/* SCREENSHOT: Full Styling admin page */}
![Styling settings page](/img/bec-screenshot-placeholder.svg)
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

## Sanitisation & safety

CSS fields run through sanitisation that blocks obviously dangerous sequences (such as raw HTML openers inside the textarea). Stay within reasonable length limits—split huge stylesheets into your theme if necessary.

---

## Related pages

- **[Theme variables & custom CSS](./04-theme-variables-and-custom-css.md)**
