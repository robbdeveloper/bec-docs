---
title: What is Booking Engine Connector?
sidebar_label: What is BEC?
description: Plain-language overview of units, providers, search, quotes, checkout, and fallback for WordPress sites.
---

# What is Booking Engine Connector?

**Booking Engine Connector** is a WordPress plugin that connects your website to an external **booking engine** (the software that holds real availability and takes reservations).

Think of it in four pieces:

1. **Provider** — The booking system behind the scenes (for example **Kross Booking**). The plugin talks to its API using credentials you enter in WordPress.
2. **Units** — Each rentable room or property becomes a **Unit** post in WordPress (`Units` in the admin menu). Names, descriptions, photos, and many details are filled in when you **sync**.
3. **Search & quotes** — Visitors choose check-in, check-out, and guests. That information travels in the page **URL** (query parameters). The plugin asks the provider whether the unit is available and what it costs—a **quote**.
4. **Checkout** — When everything looks good, a button sends the guest to your provider’s booking site to finish payment and confirmation.

You build pages and templates the usual WordPress way; the plugin adds **shortcodes** (small instructions like `[bec_search]`) that output search bars, prices, booking summaries, and buttons.

{/* SCREENSHOT: Split view — WordPress unit edit screen left, front-end unit page with search dates in URL right */}
![Concept: admin unit vs front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/01-introduction/concept-admin-vs-front.png`): concept-admin-vs-front.png */}

---

## Glossary

| Term | Meaning |
|------|---------|
| **Unit** | One bookable item synced from your provider—a room type, apartment, villa, etc. Stored as a WordPress content item under **Units**. |
| **Provider** | The booking platform integration (e.g. Kross). Credentials and API behaviour depend on which provider is active. |
| **Sync** | A job that downloads the latest list of units and updates WordPress—titles, fields, gallery images, and a stored copy of the raw API row for debugging. |
| **Shortcode** | A WordPress shortcut you paste into a page or block (e.g. `[bec_booking_summary]`) that the plugin replaces with booking UI or text. |
| **Quote** | The plugin’s answer from the provider for “this unit, these dates, this many guests”—availability and price info used by shortcodes and the booking summary. |
| **Search context** | The set of dates and guest counts passed in the URL (`bec_checkin`, `bec_checkout`, etc.). Shortcodes read the same context so every block stays in sync. |
| **Fallback** | Optional contact-only or custom message when live booking isn’t shown—useful during outages or if you prefer enquiries first. |

---

## Related pages

- **[How it works](./02-how-it-works.md)** — Diagram of data flow from provider to visitor.
- **[Requirements](./03-requirements.md)** — WordPress version, PHP, and what to ask Kross for.
- **[Installation](../02-getting-started/01-installation.md)** — First-time setup.
