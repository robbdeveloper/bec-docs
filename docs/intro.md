---
title: Booking Engine Connector documentation
slug: /
sidebar_label: Home
sidebar_position: 1
description: Connect WordPress to your booking engine—sync units, search, quotes, checkout, and styling from one plugin.
---

# Booking Engine Connector

**Booking Engine Connector** links your WordPress site to an external reservation system (today: **Kross Booking**). Your rooms or properties appear as **Units** in WordPress. Visitors pick dates and guests; the plugin checks live **availability** and sends them to your provider’s site to **complete the booking**.

## What this plugin does

- **Keeps inventory in sync** — Pulls unit metadata (and gallery images) from your booking provider into WordPress.
- **Search on your site** — Shortcodes render a search bar that passes stay details through the URL so every page “knows” the guest’s dates.
- **Live quotes** — Shows prices and availability when the booking API responds (with sensible caching).
- **Checkout hand-off** — “Book” / “Continue” sends guests to your configured booking engine URL with the right parameters.

{/* SCREENSHOT: Docs landing hero — optional branded graphic or screenshot of front-end search + booking summary */}
![Documentation overview](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/intro/docs-hero-placeholder.png`): docs-hero-placeholder.png */}

---

## Choose your path

### [Install & connect](./02-getting-started/01-installation.md)

Upload and activate the plugin, enter provider credentials on **Booking Engine → Connection**, and verify the link works.

### [Manage units](./04-units/01-units-overview.md)

Understand **Units**, run sync, edit canonical fields, gallery images, and public URLs.

### [Add booking to pages (shortcodes)](./06-shortcodes/01-shortcodes-overview.md)

Place search, quotes, checkout, booking summary, and more using WordPress shortcodes.

### [Elementor Loop Grid — availability filter](./06-shortcodes/11-elementor-loop-grid-availability-filter.md)

**Elementor Pro:** hide unit cards with no availability in a Loop Grid using the `bec_available_only` Query ID.

### [Style & customize](./07-styling/01-styling-overview.md)

Pick layout presets for the search bar and booking summary, add theme variables, and target CSS classes safely.

---

## Next steps

Start with **[Introduction → What is Booking Engine Connector?](./01-introduction/01-what-is-bec.md)** if you want the big picture first, or jump straight to **[Getting started → Installation](./02-getting-started/01-installation.md)**.

Developers extending the plugin should open **[Developer reference](./09-developer-reference/01-architecture.md)** after the user guides.
