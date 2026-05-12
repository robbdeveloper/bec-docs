---
title: Elementor — hide units with no availability
sidebar_label: Elementor Loop Grid filter
description: Use a custom Query ID on Elementor’s Loop Grid so listing cards only show units available for the current search dates.
---

# Elementor — hide units with no availability

If you list **Units** in an **Elementor Pro** [Loop Grid](https://elementor.com/help/loop-grid/) and each card includes **`[bec_quote]`**, units without availability still appear in the grid and show text like *“No availability for these dates.”*

Booking Engine Connector registers an **Elementor custom Query ID** that filters the loop **before** cards render: only units that are **available** for the current URL search context are included.

---

## Requirements

- **Elementor Pro** (Loop Grid and its query options).
- Units must be synced with a non-empty **`bec_external_id`** (linked to your provider), same as for quotes elsewhere.

---

## Setup

1. Edit the page (or template) that contains your **Loop Grid**.
2. Select the **Loop Grid** widget.
3. Open the **Query** panel.
4. In **Query ID**, enter:

   ```
   bec_available_only
   ```

5. Ensure the query source is your **Units** post type (or whatever query already lists `bec_unit` posts).
6. **Update** / publish.

When a visitor opens the page **with** complete search parameters in the URL (for example after using **`[bec_search]`**), the grid shows **only** units the provider reports as available for those dates. Rows with no availability are omitted entirely—not blank cards.

When the URL has **no** complete search context (no check-in, check-out, and guests yet), the plugin **does not** apply this filter—the grid behaves like a normal listing so landing pages still show all units.

---

## Behaviour notes

| Situation | What happens |
|-----------|----------------|
| Search context **complete** (`bec_checkin`, `bec_checkout`, `bec_adults` or your provider’s guest URL pattern) | Loop is restricted to available units only. |
| Search context **incomplete** | No filtering; all units in the query can appear (same as before). |
| **[Fallback mode](../05-bookings-and-checkout/04-fallback-mode.md)** set to always use fallback contact flow | No filtering; all units stay visible so your fallback messaging can apply per card if you use it. |
| No units match | Elementor shows the grid’s empty / “nothing found” state (no cards). |

The filter respects your Loop Grid constraints (for example taxonomy filters): only posts that match the grid’s query **and** have availability stay in the result set. Very large grids are capped for performance (default **500** units per request); developers can change this with the `bec_elementor_availability_max_units` filter.

Quotes use the same **short-lived cache** as elsewhere—see **[Availability & quotes](../05-bookings-and-checkout/02-availability-and-quotes.md)**.

---

## Related

- **[Search context & URLs](../05-bookings-and-checkout/01-search-context-and-urls.md)** — which query parameters the plugin reads.
- **[bec_quote](./04-bec-quote.md)** — what the quote shortcode shows inside each card.
- **[Add search & booking to pages](../02-getting-started/04-add-search-and-booking-to-pages.md)** — minimal layout with search + listings.

Customizing the Query ID string or post list requires WordPress **`apply_filters`** hooks (`bec_elementor_availability_query_id`, `bec_elementor_available_post_ids`, `bec_elementor_availability_max_units`)—see **[Developer reference](../09-developer-reference/01-architecture.md)**.
