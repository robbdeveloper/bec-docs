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

- **Dashboard** — Overview and pointers to settings.
- **Connection** — Provider and API credentials (plus search form behaviour).
- **Styling** — Presets and custom CSS.
- **Sync** — Interval, **Kross booking engines** (full-sync filter), gallery filename options, **Run sync now** (batched progress when JS is on), **Clear sync lock**, bulk gallery file rename.
- **Units — permalinks** — Public URL slug, **unit archive**, and optional **unit categories** (taxonomy + category URL slug).
- **API Log** — Recent HTTP calls to the provider.
- **Checkout & fallback** — External booking URL and fallback when the engine is unavailable.

You will also see **Units** as its own menu for synced properties (separate from **Booking Engine**).

{/* SCREENSHOT: WordPress admin left sidebar with Booking Engine expanded and Units menu visible */}
![Admin sidebar Booking Engine menu](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/admin-sidebar-booking-engine.png`): admin-sidebar-booking-engine.png */}

---

## Updates from GitHub (optional)

Releases may ship as **GitHub release ZIP assets** (pattern like `booking-engine-connector-*.zip`). The plugin bundles **Plugin Update Checker** so WordPress can surface updates when the metadata is reachable.

- **Public repository** — Usually install/update from **Dashboard → Updates** without extra constants.
- **Private repository** — Define **`BEC_GITHUB_UPDATER_TOKEN`** in `wp-config.php` (early enough that it exists before plugins load) with permission to read release assets.

---

## Next step

Continue to **[Connect your provider](./02-connect-your-provider.md)** to enter credentials and test the API.
