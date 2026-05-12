---
title: How it works
sidebar_label: How it works
description: Visual overview of sync, units, search URL context, quotes, checkout, and fallback in Booking Engine Connector.
---

# How it works

This page is the **mental model** for the whole plugin: where data lives, how it moves, and what visitors experience.

{/* SCREENSHOT: Simple annotated diagram exported from design tool — optional alternative to Mermaid below */}
![Flow overview diagram](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/01-introduction/flow-overview.png`): flow-overview.png */}

---

## End-to-end flow

```mermaid
flowchart LR
  subgraph provider [Booking provider]
    API[Reservation API]
    Engine[Guest booking website]
  end

  subgraph wordpress [Your WordPress site]
    Sync[Sync job]
    Units[Unit posts]
    Shortcodes[Shortcodes on pages]
  end

  subgraph visitor [Visitor]
    Browse[Browses units]
    Search[Chooses dates and guests]
    Book[Clicks Continue or Book]
  end

  API --> Sync
  Sync --> Units
  Units --> Browse
  Browse --> Shortcodes
  Search --> Shortcodes
  Shortcodes --> API
  Shortcodes --> Book
  Book --> Engine
```

1. **Sync** pulls inventory from the **provider API** and creates or updates **Units** in WordPress.
2. **Shortcodes** render search UI, dates, prices, and booking widgets on your pages.
3. When dates are complete in the URL, the plugin requests a **quote** from the API (with short-term caching).
4. **Checkout** sends the visitor to the provider’s **booking website** (`Engine`) with the right stay parameters—not WordPress checkout.

---

## Single unit page (typical)

```mermaid
flowchart TD
  URL["URL contains bec_checkin bec_checkout guests"]
  URL --> Form{Dates complete and valid?}
  Form -->|No| Partial[Show search form only or incomplete summary]
  Form -->|Yes| Quote[Ask provider for quote]
  Quote --> FB{Fallback rules apply?}
  FB -->|Yes| FallbackUI[Show fallback contact or message]
  FB -->|No| CTA[Show price breakdown and Continue button]
  CTA --> Ext[Open external booking engine]
```

Auto-appended booking UI on singular units follows similar logic; you can also place shortcodes manually.

---

## Related pages

- **[Search context and URLs](../05-bookings-and-checkout/01-search-context-and-urls.md)** — Exact URL parameters.
- **[Architecture (developers)](../09-developer-reference/01-architecture.md)** — Module-level diagrams.
