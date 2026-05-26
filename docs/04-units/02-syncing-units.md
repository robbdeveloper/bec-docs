---
title: Syncing units
sidebar_label: Syncing units
description: Scheduled sync, batched Run sync now with progress, Kross booking-engine filters, per-unit sync, locks, Clear sync lock, gallery rename, and sync enabled behaviour.
---

# Syncing units

**Sync** means: call the booking provider, fetch the latest inventory, then create or update **Unit** posts in WordPress.

Open **Booking Engine → Sync & Import** for the schedule, Kross-only engine filters, gallery filename settings, **Run sync now**, progress UI, lock management, and bulk gallery rename.

---

## Ways to trigger a sync

| Trigger | Where | What it does |
|---------|-------|---------------|
| **Scheduled (WP-Cron)** | Runs in the background | Full sync on the interval set on the **Sync** page (default every **6** hours, configurable **1–168**). Hook name in code: `bec_run_scheduled_sync`. |
| **Run sync now** | **Booking Engine → Sync & Import → Tools** | Immediate **full** sync. With JavaScript enabled, the plugin runs work in **server batches** and streams **Sync progress** (log + status). Without JS, WordPress submits a classic **admin-post** request instead. |
| **Sync now** (row action) | **Units** list | Refresh **one** unit from the provider. |
| **Bulk: Sync with provider** | **Units** list | Same as row action for many selected rows. |

On very quiet websites, scheduled jobs may wait until the next site visit—that is normal WordPress cron behaviour. The Sync page reminds you of this.

---

## Kross booking engines (filter full sync)

When **Kross Booking** is the active provider, the Sync page includes **Kross booking engines**:

- **Refresh booking engines list from Kross** merges every `be_enabled` slug discovered from Kross **`/v5/rooms/get-room-types`** into the checklist.
- **Leave all unchecked** — the plugin syncs **every** room type returned for the property (default behaviour).
- **Check one or more slugs** — full sync **includes** remote rows whose normalised payload lists **`be_enabled`** matching **any** selected slug (OR logic).

Use this when you intentionally keep some Kross engines out of WordPress.

---

## Concurrency and the sync lock

A transient **`bec_sync_running_lock`** prevents overlapping **full** syncs:

| Holder | Meaning |
|--------|---------|
| **`c`** | Held by **scheduled (cron)** full sync. |
| **`m:{userId}:{runId}`** | Held by a **batched manual** full sync in wp-admin (the `runId` is generated when you click **Run sync now** with JS on). |

The lock uses a **two-hour TTL** that is **refreshed** while a run continues, so “short lock” wording is misleading—it can persist for long runs.

**Manual vs cron**

- Cron full sync **cannot** start if a manual run holds the lock (unless a developer allows preemption—see developer docs).
- If you start a **new** manual run as the **same** user while an old manual run’s browser tab died, the plugin may **release a stale lock** after roughly **30 minutes** without batch progress (filterable).

**Clear sync lock**

- Use **Clear sync lock** on the Sync page only when you are sure **no** sync is running; an in-flight job can be left inconsistent.
- Hosts can disable this button for some roles via the **`bec_sync_allow_admin_clear_lock`** filter.

If you see **Another sync is already running**, wait for the current job, fix the stale-lock case above, or clear the lock after confirming the server is idle.

---

## Sync progress (manual full sync)

When JavaScript runs, clicking **Run sync now** shows a **Sync progress** panel:

- **Status line** and a scrolling **log** (batched steps and outcomes).
- On success you still get a summary with **created**, **updated**, and **skipped** counts; errors may appear in the log or notices.

If the AJAX flow fails (network, unexpected response), try again or temporarily disable JS to fall back to the non-AJAX admin-post sync.

---

## Understanding the result notice

After a full sync the admin notice may report **created**, **updated**, and **skipped**:

- **Created** — New WordPress unit matching a new remote ID.
- **Updated** — Existing unit refreshed.
- **Skipped** — Remote row ignored for this pass (for example unit disabled for full sync, or **Kross booking engine** filter excludes the row—see above).

Errors, if any, appear in the same notice text or the progress log.

{/* SCREENSHOT: Sync success admin notice with counts */}
![Sync result notice](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/sync-result-notice.png`): sync-result-notice.png */}

---

## Sync enabled (per unit)

Units can carry a **`bec_sync_enabled`** flag. When it is **off**, that unit is **skipped during automated full sync** so you can temporarily keep a WordPress copy without overwriting it from the remote list.

**Manual** row or bulk sync may still update the unit when you explicitly request it—use that when you need a one-off refresh.

The flag is visible in the read-only **sync inspector** meta box on the unit edit screen (see **[Editing a unit](./03-editing-a-unit.md)**).

---

## Related tools on the Sync and Units screens

- **Rename all unit gallery files** (Sync page) — Re-applies the current **prefix/suffix** to images in every unit’s gallery (shared attachments may be **copied** so other units are not broken).
- **Rename gallery files** (Units row action) — Same for **one** unit.
- **[Gallery images](./04-gallery-images.md)** — filename pattern and dedupe behaviour.

---

## Related pages

- **[Run your first sync](../02-getting-started/03-run-your-first-sync.md)**
- **[Unit categories](./06-unit-categories.md)**
- **[Kross Booking](../03-providers/02-kross-booking.md)**
- **[Developer: sync hooks](../09-developer-reference/02-sync-hooks-and-filters.md)**
