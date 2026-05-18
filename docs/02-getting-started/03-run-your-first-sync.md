---
title: Run your first sync
sidebar_label: Run your first sync
description: Booking Engine Sync page — schedule, Kross booking-engine filters, gallery filename options, batched Run sync now with progress, sync lock, and Units list.
---

# Run your first sync

After **[connecting credentials](./02-connect-your-provider.md)**, pull your inventory into WordPress.

Open **Booking Engine → Sync**.

{/* SCREENSHOT: Sync page full view with interval, filename fields, and action buttons */}
![Sync units page](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/sync-page.png`): sync-page.png */}

---

## Schedule

**Interval (hours)** controls how often WordPress tries to run a **scheduled** full sync (via WP-Cron).

- Allowed range: **1–168** hours.
- **Low-traffic sites:** Cron only runs when someone visits the site, so the next run may wait until traffic triggers it—this is normal WordPress behaviour.

Saving the form **reschedules** the background job.

---

## Kross booking engines (optional filter)

If **Kross** is active, you can narrow **full sync** to room types whose payload includes selected **`be_enabled`** slugs:

1. Click **Refresh booking engines list from Kross** to populate the checklist from the API.
2. **Leave every box unchecked** to sync **all** room types (recommended starting point).
3. Otherwise tick the engine slugs you want included.

Details: **[Syncing units](../04-units/02-syncing-units.md)**.

---

## Gallery image filenames (future syncs)

Optional fields change how downloaded gallery files are named in the Media Library:

- **Filename prefix** — Text before the unit name slug.
- **Filename suffix (before index)** — Text after the slug and before the numeric index (e.g. `-01`).

Together the pattern is roughly: **prefix + unit-slug + suffix + `-NN` + extension**.  
Existing files can be renamed in bulk later (see **[Gallery images](../04-units/04-gallery-images.md)**).

---

## Run sync now

Click **Run sync now** for an immediate **full sync**.

**With JavaScript (default wp-admin):**

- The plugin acquires a **manual sync lock** and processes units in **batches** via AJAX.
- A **Sync progress** panel shows a live log and status until completion.

**Without JavaScript** or if the AJAX flow errors, the button falls back to a standard form POST (longer single request).

**Results**

- On completion you should see **created**, **updated**, and **skipped** counts (and error text if something failed).
- If another **full** sync is already running, you may see **Another sync is already running**—the lock can be held for a long time while work runs; see **[Syncing units](../04-units/02-syncing-units.md)** for lock behaviour and **Clear sync lock**.

{/* SCREENSHOT: Admin notice after successful sync with counts */}
![Sync completion notice](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/sync-success-notice.png`): sync-success-notice.png */}

**Last successful sync** (if shown) comes from the plugin’s stored timestamp for the last completed run.

---

## Sync lock troubleshooting

On **Booking Engine → Sync**, the **Sync lock** section shows whether a lock is set and offers **Clear sync lock**.

- Only clear it when you are sure **no** job is running (e.g. stale lock after a crashed tab).

---

## Find your units

Open the **Units** menu in WordPress admin.

The list includes extra columns such as **External ID**, **Provider**, and **Last sync** so you can match WordPress rows to the booking system.

{/* SCREENSHOT: Units list table with External ID Provider Last sync columns */}
![Units admin list](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/units-list-columns.png`): units-list-columns.png */}

From here you can open a unit, use row actions like **Sync now** or **Rename gallery files**, or use bulk actions—see **[Syncing units](../04-units/02-syncing-units.md)**.

---

## Related pages

- **[Add search and booking to pages](./04-add-search-and-booking-to-pages.md)**
- **[Units overview](../04-units/01-units-overview.md)**
- **[Unit categories](../04-units/06-unit-categories.md)**
