---
title: Sync hooks & filters
sidebar_label: Sync hooks & filters
description: Sync behaviour hooks bec_before_unit_sync bec_after_unit_sync filters remote unit title content core fields mapped fields Kross provider_remote_units.
---

# Sync hooks & filters

> **Developer reference:** This section is for theme and plugin developers.

---

## Behaviour

- **Full sync** loads remote units from the active provider (`fetchRemoteUnits`), then creates or updates **Unit** posts keyed by `bec_external_id` + `bec_provider_slug`.
- **Scheduled sync** uses WP-Cron (`bec_run_scheduled_sync`). Interval is configured under **Booking Engine → Sync** (`bec_sync_interval_hours`, default 6). On low-traffic sites, cron may run only after the next request (standard WP behaviour).
- **Lock**: concurrent full sync is blocked with transient `bec_sync_running_lock` (~5 minutes).
- After each successful upsert, the plugin stores the normalised remote row as JSON in post meta **`bec_sync_payload`** (for inspection in the unit edit screen).
- **Core fields**: the active provider’s `extractCoreUnitFields()` maps each remote row into canonical `bec_core_*` meta (see **[Canonical unit fields](./04-canonical-unit-fields.md)**). Overwritten each sync unless `bec_sync_apply_core_unit_fields` returns false.
- **Optional mapped fields**: `getUnitSyncFieldDefinitions()` drives **additional** meta (client-specific). Overwritten each sync unless disabled via `bec_sync_apply_mapped_unit_fields`.

---

## Actions

| Hook | When | Arguments |
|------|------|-----------|
| `bec_before_unit_sync` | Before `wp_insert_post` / `wp_update_post` | `$post_id` (0 if not yet created), `$provider_slug`, `$remote_row` |
| `bec_after_unit_sync` | After meta updated | `$post_id`, `$provider_slug`, `$remote_row` |

---

## Filters

| Filter | Purpose |
|--------|---------|
| `bec_sync_remote_unit` | Normalise each remote row before mapping (`$row`, `$provider_slug`) |
| `bec_sync_unit_title` | Post title (`$title`, `$row`, `$provider_slug`). Default is the canonical unit name from `extractCoreUnitFields` after `bec_core_unit_fields` (same as `bec_core_name`). Empty → `Unit {external_id}`. Duplicate titles are fine: WordPress keeps slugs unique. |
| `bec_sync_unit_content` | Post content (`$content`, `$row`, `$provider_slug`). Default is the canonical description (same as `bec_core_description`). Stored with `wp_kses_post`. |
| `bec_sync_unit_post_data` | `post_data` array for `wp_insert_post` / `wp_update_post` (`$post_data`, `$row`, `$provider_slug`, `$post_id_or_null`) |
| `bec_provider_remote_units` | Final list from full sync (`$rows`, `'kross'`, `$decoded_response`) — Kross-specific |
| `bec_sync_apply_core_unit_fields` | Skip writing canonical `bec_core_*` meta (`true` / `false`, `$post_id`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_fields` | Adjust core field array before save (`$data`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_locale` | Two-letter locale for name/description (`$two`, `$wp_locale`, `$remote_row`) |
| `bec_provider_amenities_from_row` | Build amenities list (`$items`, `$remote_row`, `$provider_slug`) |
| `bec_kross_amenities_from_raw` | Kross-only: amenities from API `raw` (`$items`, `$raw`, `$normalised_row`) |

Posts with `bec_sync_enabled = false` are skipped in **full** sync but can still be updated via row action / bulk sync (manual refresh).

---

## Related

- **[Architecture](./01-architecture.md)**
- **[Post meta reference](./03-post-meta-reference.md)**
