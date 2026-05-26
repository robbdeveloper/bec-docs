---
title: '[bec_search] shortcode'
sidebar_label: bec_search
description: bec_search shortcode redirect_url form action unit archive GET bec_* query parameters context form_id CSS hooks Enhanced Classic.
---

# `[bec_search]`

Renders the **availability search bar** visitors use to choose check-in, check-out, and guests. The form uses **GET**, so submitting sends **`bec_*`** query parameters to the form’s **`action`** URL. Any page that receives those parameters shares the same **search context** with quotes, checkout, and listing filters.

---

## Where to put it

- Homepage hero, sticky header template, dedicated landing page.
- Inside **`[bec_booking_summary]`** uses the same styling presets automatically.

{/* SCREENSHOT: Enhanced search bar front-end */}
![bec_search Enhanced preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-search-enhanced.png`): bec-search-enhanced.png */}

{/* SCREENSHOT: Classic search bar front-end */}
![bec_search Classic preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-search-classic.png`): bec-search-classic.png */}

---

## Where the form submits (action URL)

| Case | Form `action` (GET target) |
|------|---------------------------|
| **`[bec_search]`** without **`redirect_url`** | The **units archive** (`get_post_type_archive_link` for the unit post type). If WordPress cannot build that link (for example **Unit archive** is disabled under **Booking Engine → Units**), it falls back to the **site home** URL. Typical pattern: search on the homepage lands on `/your-units-base/?bec_checkin=…`. |
| **`[bec_search]`** with **`redirect_url="/path/"`** | Submits to the URL you pass (full URL or root-relative path). **`bec_*`** parameters are appended as the query string. Example: `[bec_search redirect_url="/availability-results/"]`. |

**Auto-inserted search** (single-unit pages, `bec_render_search_form()`, theme hooks) uses `SearchForm`’s own rules: on a **unit archive** or **singular** URL the action is usually **that** page; otherwise often **home**. Empty **`redirect_url`** on the shortcode does **not** apply there—use the **`bec_search_form_action`** filter if you need a custom target from PHP.

Guest field mode is configured under **Booking Engine → Frontend**, not on this shortcode.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`context`** | `shortcode` | Identifier passed to styling/filter hooks—change when you render multiple searches differently. |
| **`form_id`** | `bec-search-form-sc` | Base for the HTML `id` on the `<form>`—the plugin appends a **`wp_unique_id()`** suffix so multiple instances stay unique. |
| **`redirect_url`** | *(empty)* | Optional. Where to send the GET request (see **Where the form submits**). Passed through `esc_url()`; root-relative paths are allowed. |
| **`popover_placement`** | `auto` | Calendar popover position: `auto`, `top`, or `bottom`. `auto` flips based on viewport space. |
| **`daterange_format`** | *(empty)* | PHP `date_i18n()` format for the calendar footer readout. When set, overrides **`daterange_preset`**. |
| **`daterange_preset`** | `medium` | Built-in footer format when **`daterange_format`** is empty: `iso`, `short`, `medium`, `long`, or `full`. |

Filters: **`bec_search_form_daterange_format`**, **`bec_search_form_popover_placement`**.

Frontend **guest field** mode (follow provider / total guests / adults+children) is configured under **Booking Engine → Frontend**, not on this shortcode.

---

## Examples

```
[bec_search]
```

```
[bec_search form_id="homepage-search" context="homepage"]
```

Submit to a custom results page (same `bec_*` query string):

```
[bec_search redirect_url="/availability-results/" form_id="results-search"]
```

Force popover above the bar on tight layouts:

```
[bec_search popover_placement="top" daterange_preset="long"]
```

---

## CSS hooks (major)

Outer wrappers vary by preset:

- `bec-search-form-wrap`, `bec-search-form-wrap--enhanced`
- `bec-search-form`, `bec-search-form--enhanced`
- Inner pieces such as `bec-search-form__bar`, `bec-search-form__control`, `bec-search-form__button`, `bec-search-form__error`, `bec-search-form__child-ages`

Preset-specific bundles live under plugin assets (`search-form-enhanced.css`, etc.)—see **[Search form presets](../07-styling/02-search-form-presets.md)**.

---

## Tips

- **`[bec_search]`** without **`redirect_url`** expects a working **units archive** link—if you disabled **Unit archive**, submissions fall back to the **home** URL; enable the archive or set **`redirect_url`** explicitly.
- Pair with **`[bec_unit_url]`** on listing cards so drill-down keeps dates.
- Validation messages appear near the form when dates contradict provider rules after submission.

---

## See also

- **[Frontend settings](../02-getting-started/06-frontend-settings.md)**
- **[Search context](../05-bookings-and-checkout/01-search-context-and-urls.md)**
