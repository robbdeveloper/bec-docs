---
title: Admin screens overview
sidebar_label: Admin screens
description: Map of Booking Engine admin menu — Dashboard, Connection, Frontend, Sync & Import, Units, Listing Filters, Design, Checkout & Fallback, Tools & Logs.
---

# Admin screens overview

After activation, **Booking Engine** appears as a top-level WordPress menu. Each screen has a dedicated purpose; this page is the canonical map. Follow the links for deeper guides.

{/* SCREENSHOT: Booking Engine admin menu expanded */}
![Booking Engine admin menu](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/admin-sidebar-booking-engine.png`): admin-sidebar-booking-engine.png */}

---

## Dashboard

**Menu:** Booking Engine → **Dashboard** (`bec-dashboard`)

Status cards summarise:

| Card | Shows |
|------|--------|
| **Active provider** | Current integration slug (e.g. Kross) |
| **Credentials** | Complete / incomplete — link to verify |
| **Last sync** | Timestamp or “Never completed” |
| **Next scheduled sync** | WP-Cron next run + interval (hours) |
| **Sync lock** | Idle or lock set (in progress or stale) |
| **Synced units** | Published `bec_unit` count |
| **Checkout URL** | Configured / not set |
| **Fallback** | Enabled mode (inline / link) or disabled |

**Quick actions** jump to Connection, sync tools, Frontend, unit URLs, listing filters, Design, checkout, and the API log.

---

## Connection

**Menu:** Booking Engine → **Connection** (`bec-connection`)

Provider selection and API credentials only. **Verify connection** runs a real token exchange.

| Option keys | Purpose |
|-------------|---------|
| `bec_active_provider` | Active provider slug |
| `bec_{provider}_{field}` | Per-provider credential storage |

See **[Connect your provider](./02-connect-your-provider.md)** and **[Kross Booking](../03-providers/02-kross-booking.md)**.

---

## Frontend

**Menu:** Booking Engine → **Frontend** (`bec-frontend`)

Search bar guest fields and automatic booking blocks on single unit pages.

| Option key | Purpose |
|------------|---------|
| `bec_search_guest_input_mode` | Follow provider / total guests / adults + children |
| `bec_search_child_ages_mode` | Follow provider / ask ages / omit ages |
| `bec_auto_append_search_form_single_unit` | Prepend search above unit content |
| `bec_append_booking_blocks_to_content` | Append quote + checkout when URL has dates |

See **[Frontend settings](./06-frontend-settings.md)**.

---

## Sync & Import

**Menu:** Booking Engine → **Sync & Import** (`bec-sync`)

Two tabs:

### Settings tab

| Field | Option key | Purpose |
|-------|------------|---------|
| Sync interval (hours) | `bec_sync_interval_hours` | WP-Cron schedule (default 6) |
| Kross booking engines | `bec_kross_sync_booking_engines` | Limit full sync to selected engines |
| Gallery filename prefix | `bec_sync_gallery_image_prefix` | Prepended to imported gallery files |
| Gallery filename suffix | `bec_sync_gallery_image_suffix` | Inserted after unit name slug |

### Tools tab

- **Run sync now** — batched full sync with progress UI (JS) or classic admin-post fallback
- **Clear sync lock** — release stale locks
- **Rename all unit gallery files** — re-apply current prefix/suffix

See **[Run your first sync](./03-run-your-first-sync.md)** and **[Syncing units](../04-units/02-syncing-units.md)**.

---

## Units

**Menu:** Booking Engine → **Units** (`bec-units`)

Permalinks and archive settings for synced properties:

| Setting | Option key |
|---------|------------|
| URL slug | `bec_unit_permalink_slug` |
| Unit archive | `bec_unit_archive_enabled` |
| Unit URL structure | `bec_unit_url_structure` |
| Enable unit categories | taxonomy toggle |
| Category URL slug | `bec_unit_category_permalink_slug` |
| Category URL structure | `bec_unit_category_url_structure` |

The **Units** post type menu (separate from Booking Engine) lists individual synced properties for editing.

See **[Permalinks & archive](../04-units/05-permalinks-and-archive.md)** and **[Unit categories](../04-units/06-unit-categories.md)**.

---

## Listing Filters

**Menu:** Booking Engine → **Listing Filters** (`bec-unit-filters`)

Curate which indexed amenities appear in **`[bec_unit_filters]`**: enable, order, optional display labels.

Requires a completed amenity index (run sync first).

See **[Listing Filters admin](../04-units/07-listing-filters-admin.md)** and **[bec_unit_filters](../06-shortcodes/15-bec-unit-filters.md)**.

---

## Design

**Menu:** Booking Engine → **Design** (`bec-styling`)

Visual tokens, layout presets, and extra CSS areas:

- Search bar preset and tokens
- Booking summary preset, accordions, tokens
- Extra CSS for search, booking summary, and global overrides
- **Unit filters — extra CSS** (`bec_styling_filters_extra_css`)

See **[Design overview](../07-styling/01-styling-overview.md)**.

---

## Checkout & Fallback

**Menu:** Booking Engine → **Checkout & Fallback** (`bec-fallback`)

External checkout URL and fallback behaviour when the engine is unavailable.

See **[Checkout flow](../05-bookings-and-checkout/03-checkout-flow.md)** and **[Fallback mode](../05-bookings-and-checkout/04-fallback-mode.md)**.

---

## Tools & Logs

**Menu:** Booking Engine → **Tools & Logs** (`bec-api-log`)

Recent HTTP calls to booking providers: filter by provider, endpoint, status; inspect correlation IDs and duration.

See **[Using Tools & Logs](../08-troubleshooting/02-using-the-api-log.md)**.

---

## Related pages

- **[Installation](./01-installation.md)**
- **[Connect your provider](./02-connect-your-provider.md)**
- **[Frontend settings](./06-frontend-settings.md)**
