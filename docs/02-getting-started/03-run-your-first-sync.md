---
title: Run your first sync
sidebar_label: Run your first sync
description: Booking Engine Sync page — interval, gallery filename options, Run sync now, and where to find Units in WordPress.
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

## Gallery image filenames (future syncs)

Optional fields change how downloaded gallery files are named in the Media Library:

- **Filename prefix** — Text before the unit name slug.
- **Filename suffix (before index)** — Text after the slug and before the numeric index (e.g. `-01`).

Together the pattern is roughly: **prefix + unit-slug + suffix + `-NN` + extension**.  
Existing files can be renamed in bulk later (see **[Gallery images](../04-units/04-gallery-images.md)**).

---

## Run sync now

Click **Run sync now** to start an immediate **full sync** of all units from the active provider.

When it finishes you should see an admin notice with counts such as **created**, **updated**, and **skipped**, plus any error text if something failed.

If another sync is already running, you may see a message that a sync is in progress (a short lock prevents overlapping full syncs).

{/* SCREENSHOT: Admin notice after successful sync with counts */}
![Sync completion notice](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/sync-success-notice.png`): sync-success-notice.png */}

**Last successful sync** (if shown) comes from the plugin’s stored timestamp for the last completed run.

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
