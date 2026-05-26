---
title: '[bec_available_units_count] shortcode'
sidebar_label: bec_available_units_count
description: Count of units matching filters and availability for current URL search context; format, zero_text, singular/plural labels.
---

# `[bec_available_units_count]`

Prints the **number of published units** that match current **`bec_filter_*`** parameters and, when search context is complete, units that are **available** for those dates and guests.

Uses the same counting rules as Elementor Loop Grid Query ID **`bec_available_only`** / **`bec_filtered_units`**.

---

## Where to put it

- Above an Elementor Loop Grid on search results pages.
- In archive template headings next to **`[bec_unit_filters]`**.
- Anywhere the main query or loop already lists filtered units.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`format`** | `number` | `number` prints the count only; `text` uses **`singular`** / **`plural`** patterns. |
| **`zero_text`** | *(empty)* | Custom text when count is `0`. Empty + `format="number"` prints `0`; empty + `format="text"` prints nothing. |
| **`singular`** | *(empty)* | `sprintf` pattern for count `1` (e.g. `%d available unit`). Defaults to translated string when both singular and plural are empty. |
| **`plural`** | *(empty)* | `sprintf` pattern for count `> 1`. |
| **`hide_without_search`** | `0` | When truthy, outputs nothing until search context is complete (check-in, check-out, guests). |
| **`class`** | *(empty)* | Extra CSS classes appended to the root span (space-separated). |

Filters: **`bec_available_units_count`**, **`bec_shortcode_available_units_count_html`**.

---

## Examples

Plain number:

```
[bec_available_units_count]
```

Human-readable label:

```
[bec_available_units_count format="text" singular="%d property available" plural="%d properties available"]
```

Hide until visitor has searched:

```
[bec_available_units_count hide_without_search="1" format="text"]
```

Custom zero state:

```
[bec_available_units_count format="text" zero_text="No units match your filters"]
```

With extra class for theme styling:

```
[bec_available_units_count class="results-count"]
```

---

## CSS hooks

- Root: `bec-available-units-count`
- Optional classes from **`class`** attribute

---

## See also

- **[bec_unit_filters](./15-bec-unit-filters.md)**
- **[Elementor Loop Grid filter](./11-elementor-loop-grid-availability-filter.md)**
- **[Availability & quotes](../05-bookings-and-checkout/02-availability-and-quotes.md)**
