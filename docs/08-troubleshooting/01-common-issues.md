---
title: Common issues
sidebar_label: Common issues
description: Troubleshooting Booking Engine Connector verify connection sync checkout cron fallback quotes empty booking button missing.
---

# Common issues

Quick symptom → cause → fix matrix for typical WordPress admins.

| Symptom | Likely cause | What to try |
|---------|--------------|-------------|
| **Verify connection fails** | Wrong credential, typo, firewall blocking outbound HTTPS | Re-copy secrets from Kross, test from another network/VPN, ask hosting to allow `api.krossbooking.com`. |
| **No units after sync** | Credentials incomplete or remote inventory empty | Read sync notice errors, confirm Hotel ID maps to active rooms in Kross. |
| **Many units “skipped”** | Units flagged **sync disabled** (`bec_sync_enabled`) | Inspect unit metabox inspector—manually sync row action still refreshes single rows when needed. |
| **Booking button missing** | Incomplete dates / checkout base URL missing / POST checkout lacking rate ID | Confirm URL params present, fill **Booking engine base URL**, pick GET temporarily to validate flow. |
| **Quotes always empty** | Dates invalid vs provider rules or occupancy exceeds limits | Adjust guests, widen stay window, inspect **[Tools & Logs](./02-using-the-api-log.md)** for calendar responses. |
| **Cron feels delayed** | Low-traffic WP-Cron | Trigger visits manually or rely on server cron hitting `wp-cron.php`; run **Run sync now** occasionally. |
| **Gallery duplicates / odd filenames** | Prefix/suffix changed mid-project | Run rename tools documented under **[Gallery images](../04-units/04-gallery-images.md)** carefully during quiet hours. |
| **“Another sync is already running” for a long time** | Legitimate long full sync **or** stale **sync lock** after a crashed admin tab | Wait for completion; read **[Syncing units](../04-units/02-syncing-units.md)**; use **Clear sync lock** on the Sync page only when sure no job is running. |
| **Shows neither fallback nor checkout on errors** | Fallback triggers exclude error category | Adjust categories under **Checkout & fallback** or consult developer filters (`bec_booking_error_notice_html`). |
| **`[bec_unit_info]` empty** | Wrong key or stale payload | Re-sync unit, confirm renderer key spelling—see **[bec_unit_info](../06-shortcodes/08-bec-unit-info.md)**. |
| **Amenity labels show `u0027` or garbled apostrophes** | Legacy double-encoding in stored JSON (fixed in **0.1.30**) | Upgrade plugin; open unit and save, or run **sync** so amenities re-save; labels repair on read via `AmenityItem::repairLabelString()`. |

---

## Still stuck?

Collect:

1. Plugin version (`[bec_version]`).
2. Redacted screenshot of Connection settings (hide secrets).
3. One **[Tools & Logs](./02-using-the-api-log.md)** row showing failing endpoint + HTTP status.

{/* SCREENSHOT: Example API log row highlighting status column */}
![API log sample row](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/08-troubleshooting/api-log-sample-row.png`): api-log-sample-row.png */}
