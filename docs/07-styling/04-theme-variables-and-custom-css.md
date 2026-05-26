---
title: Theme variables & custom CSS
sidebar_label: Theme variables & custom CSS
description: Reference list of CSS class hooks for search booking summary checkout fallback amenities bedrooms targeting Extra CSS fields.
---

# Theme variables & custom CSS

Use **Booking Engine → Design** textareas—or your theme stylesheet—for cosmetic tweaks.

---

## Theme variables textarea

Paste reusable Custom Properties (`--token: value;`). Because both presets consume shared hooks, defining colours once keeps Enhanced search bars and booking summaries aligned.

---

## Search bar hooks

Prefixes:

- `.bec-search-form-wrap`, `.bec-search-form-wrap--enhanced`
- `.bec-search-form`, `.bec-search-form--enhanced`

Representative descendants:

- `.bec-search-form__bar`
- `.bec-search-form__control`
- `.bec-search-form__button`
- `.bec-search-form__error`
- `.bec-search-form__child-ages`

Inspect `assets/styling/search-form-enhanced.css` / `search-form-classic.css` in the plugin for exhaustive selectors.

{/* SCREENSHOT: Browser devtools highlighting bec-search-form element */}
![Inspect search form CSS hooks](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/devtools-search-classes.png`): devtools-search-classes.png */}

---

## Booking summary hooks

Root:

- `.bec-booking-summary`
- `.bec-booking-summary--preset-compact`

Representative regions (non-exhaustive):

- `.bec-booking-summary__search`
- `.bec-booking-summary__desktop`
- `.bec-booking-summary__head-price`
- `.bec-booking-summary__breakdown`
- `.bec-booking-summary__actions`
- `.bec-booking-summary__mobile`
- `.bec-booking-summary__drawer`
- `.bec-booking-summary__drawer-body` — scrollable middle region on mobile drawer (search through quote blocks)

Pair with data attributes such as `data-bec-booking-summary`, `data-bec-bsummary-continue`, `data-bec-rate-id` when writing advanced selectors.

Booking-summary colour tokens (override in **Shared theme variables**):

- `--bec-bsummary-color-text`, `--bec-bsummary-color-primary`, `--bec-bsummary-color-muted`, `--bec-bsummary-color-accent`

{/* SCREENSHOT: Devtools tree for booking summary */}
![Inspect booking summary CSS hooks](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/devtools-summary-classes.png`): devtools-summary-classes.png */}

---

## Checkout & quote hooks

- `.bec-shortcode-checkout`
- `.bec-checkout-cta`, `.bec-checkout-form`
- `.bec-shortcode-quote`, `.bec-shortcode-quote__rates`, `.bec-shortcode-quote__rate`
- `.bec-shortcode-quote.no-results` — added when there is no availability for the selected dates (0.1.41)

---

## Unit filters hooks

- `.bec-unit-filters`, `.bec-unit-filters--inline`, `.bec-unit-filters--stacked`
- `.bec-unit-filters__*` — triggers, popovers, amenity sheet, reset control

Styles ship in **`assets/public.css`**; tune via **Design → Unit filters — extra CSS** (`bec_styling_filters_extra_css`).

---

## Available units count

- `.bec-available-units-count` — wrapper for **`[bec_available_units_count]`** output

---

## Fallback hooks

- `.bec-fallback`, `.bec-fallback__link`, `.bec-fallback__inner`

---

## `[bec_unit_info]` renderer hooks

Amenities grid:

- `.bec-amenities`, `.bec-amenities__item`, …
- `--bec-amenities-cols` — desktop columns from **`columns`** attribute
- `--bec-amenities-cols-mobile` — columns below 640px from **`columns_mobile`** (default `1`)

Bedroom arrangements:

- `.bec-bedrooms`, `.bec-bedrooms__grid`, …

---

## Tips

Scope rules under a parent wrapper your theme controls (e.g. `.site-content .bec-booking-summary`) to avoid unintentionally styling admin previews.
