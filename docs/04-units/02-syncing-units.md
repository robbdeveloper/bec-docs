---
title: Syncing units
sidebar_label: Syncing units
description: Scheduled sync, Run sync now, per-unit sync actions, locks, skipped counts, and sync enabled behaviour.
---

# Syncing units

**Sync** means: call the booking provider, fetch the latest inventory, then create or update **Unit** posts in WordPress.

---

## Ways to trigger a sync

| Trigger | Where | What it does |
|---------|-------|---------------|
| **Scheduled (WP-Cron)** | Runs in the background | Full sync on the interval set under **Booking Engine → Sync** (default every few hours). |
| **Run sync now** | **Booking Engine → Sync** | Immediate full sync for all eligible units. |
| **Sync now** (row action) | **Units** list | Refresh **one** unit from the provider. |
| **Bulk: Sync with provider** | **Units** list | Same as row action for many selected rows. |

On very quiet websites, scheduled jobs may wait until the next site visit—that is normal WordPress cron behaviour.

---

## Concurrency lock

If a **full sync** is already running, starting another full sync may show a message that sync is already in progress. Wait a minute and try again.

---

## Understanding the result notice

After a full sync the admin notice may report **created**, **updated**, and **skipped**:

- **Created** — New WordPress unit matching a new remote ID.
- **Updated** — Existing unit refreshed.
- **Skipped** — Remote row ignored for this pass (for example unit disabled for full sync—see below).

Errors, if any, appear in the same notice text.

{/* SCREENSHOT: Sync success admin notice with counts */}
![Sync result notice](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/sync-result-notice.png`): sync-result-notice.png */}

---

## Sync enabled (per unit)

Units can carry a **`bec_sync_enabled`** flag. When it is **off**, that unit is **skipped during automated full sync** so you can temporarily keep a WordPress copy without overwriting it from the remote list.

**Manual** row or bulk sync may still update the unit when you explicitly request it—use that when you need a one-off refresh.

The flag is visible in the read-only **sync inspector** meta box on the unit edit screen (see **[Editing a unit](./03-editing-a-unit.md)**).

---

## Related tools on the Units list

- **Rename gallery files** — Re-applies filename prefix/suffix for that unit’s imported images. Can be slow on large libraries.
- Same tool exists globally on the **Sync** screen for **all** units.

---

## Related pages

- **[Gallery images](./04-gallery-images.md)**
- **[Developer: sync hooks](../09-developer-reference/02-sync-hooks-and-filters.md)**
