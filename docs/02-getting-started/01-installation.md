---
title: Installation
sidebar_label: Installation
description: Upload, activate Booking Engine Connector, and find the Booking Engine menu in WordPress admin.
---

# Installation

## Upload the plugin

You can install **Booking Engine Connector** in either way WordPress normally accepts plugins:

1. **ZIP upload** — In **Plugins → Add New → Upload Plugin**, choose your `booking-engine-connector.zip` file and click **Install Now**, then **Activate**.
2. **FTP / file manager** — Upload the plugin folder to `wp-content/plugins/booking-engine-connector/` so the main plugin file sits at  
   `wp-content/plugins/booking-engine-connector/booking-engine-connector.php`, then activate under **Plugins**.

---

## After activation

A new top-level menu appears in the admin sidebar: **Booking Engine**.

Submenus typically include:

- **Dashboard** — Status cards and quick links to common tasks.
- **Connection** — Provider and API credentials.
- **Frontend** — Search form guest fields and single-unit content injection.
- **Sync & Import** — Interval, Kross booking engines, gallery filename options; **Tools** tab for run sync, clear lock, bulk gallery rename.
- **Units** — Public URL slug, URL structures, unit archive, and optional unit categories.
- **Listing Filters** — Amenity curation for `[bec_unit_filters]`.
- **Design** — Presets, tokens, and extra CSS (including unit filters).
- **Checkout & Fallback** — External booking URL and fallback when the engine is unavailable.
- **Tools & Logs** — Recent HTTP calls to the provider.

You will also see **Units** as its own menu for synced properties (separate from **Booking Engine**).

See **[Admin screens overview](./05-admin-screens.md)** for a full map of each screen.

{/* SCREENSHOT: WordPress admin left sidebar with Booking Engine expanded and Units menu visible */}
![Admin sidebar Booking Engine menu](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/admin-sidebar-booking-engine.png`): admin-sidebar-booking-engine.png */}

---

## Updates from GitHub (optional)

Releases may ship as **GitHub release ZIP assets** (pattern like `booking-engine-connector-*.zip`). The plugin bundles **Plugin Update Checker** so WordPress can surface updates when the metadata is reachable.

- **Public repository** — Usually install/update from **Dashboard → Updates** without extra constants.
- **Private repository** — Define **`BEC_GITHUB_UPDATER_TOKEN`** in `wp-config.php` (early enough that it exists before plugins load) with permission to read release assets.

**Version header must match the release.** The updater reads the `Version:` line in `booking-engine-connector.php` from the release asset. If the GitHub tag says `0.1.30` but the zip header still says an older number, WordPress may not offer the update. Always ship releases where the tag, zip filename, and plugin header agree.

---

## Next step

Continue to **[Connect your provider](./02-connect-your-provider.md)** to enter credentials and test the API.
