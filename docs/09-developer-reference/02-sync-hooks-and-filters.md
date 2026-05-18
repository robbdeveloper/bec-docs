---
title: Sync hooks & filters
sidebar_label: Sync hooks & filters
description: Sync behaviour hooks filters bec_before_unit_sync bec_after_unit_sync lock cron manual AJAX gallery categories UnitCategorySync Resolve post statuses developer reference.
---

# Sync hooks & filters

> **Developer reference:** This section is for theme and plugin developers.

---

## Behaviour

- **Full sync** loads remote units from the active provider (`fetchRemoteUnits`), then creates or updates **Unit** posts keyed by `bec_external_id` + `bec_provider_slug`.
- **Scheduled sync** uses WP-Cron (`bec_run_scheduled_sync`). Interval is configured under **Booking Engine → Sync** (`bec_sync_interval_hours`, default 6). On low-traffic sites, cron may run only after the next request (standard WP behaviour).
- **Manual full sync (wp-admin)** uses **AJAX batches** (`wp_ajax_bec_sync_start_all`, `wp_ajax_bec_sync_step_all`) with progress stored per user + run id (**`SyncProgressReporter`** / **`SyncManualBatchState`**).
- **Lock** — concurrent **full** sync is coordinated with transient **`bec_sync_running_lock`**:
  - TTL **7200 seconds (2 hours)** per `set_transient`, **refreshed** on re-entry while work continues (`SyncLock::refresh()`).
  - Holder **`c`** — WP-Cron acquired the lock (`SyncLock::acquireCron`).
  - Holder **`m:{userId}:{runId}`** — batched manual sync (`SyncLock::acquireManual`), where `runId` is sanitised client UUID.
  - Cron **cannot** steal an active manual lock. Manual may **preempt** cron only when filter **`bec_sync_manual_may_preempt_cron_lock`** returns true (default false).
  - Same user starting a **new** manual run may clear a **stale** lock when the previous run’s batch state is gone, or after **`bec_sync_manual_lock_abandon_seconds`** (default **1800** = 30 minutes) without batch state updates.
  - **`SyncLock::forceReleaseAll()`** is used by **Clear sync lock** in admin; gated in UI by **`bec_sync_allow_admin_clear_lock`** (default true).
- After each successful upsert, the plugin stores the normalised remote row as JSON in post meta **`bec_sync_payload`** (for inspection in the unit edit screen; **hidden from REST** by default).
- **Core fields**: the active provider’s `extractCoreUnitFields()` maps each remote row into canonical `bec_core_*` meta (see **[Canonical unit fields](./04-canonical-unit-fields.md)**). Overwritten each sync unless `bec_sync_apply_core_unit_fields` returns false.
- **Optional mapped fields**: `getUnitSyncFieldDefinitions()` drives **additional** meta (client-specific). Overwritten each sync unless disabled via `bec_sync_apply_mapped_unit_fields`.
- **Unit categories**: when the taxonomy is enabled, **`bec_after_unit_sync`** runs **`UnitCategorySync`** which upserts a term and assigns it using `bec_sync_unit_category` filtered descriptor data.

---

## Actions

| Hook | When | Arguments |
|------|------|-----------|
| `bec_before_unit_sync` | Before `wp_insert_post` / `wp_update_post` | `$post_id` (0 if not yet created), `$provider_slug`, `$remote_row` |
| `bec_after_unit_sync` | After meta updated | `$post_id`, `$provider_slug`, `$remote_row` |

---

## Filters — core sync mapping

| Filter | Purpose |
|--------|---------|
| `bec_sync_remote_unit` | Normalise each remote row before mapping (`$row`, `$provider_slug`) |
| `bec_sync_unit_title` | Post title (`$title`, `$row`, `$provider_slug`). Default is the canonical unit name from `extractCoreUnitFields` after `bec_core_unit_fields` (same as `bec_core_name`). Empty → `Unit {external_id}`. Duplicate titles are fine: WordPress keeps slugs unique. |
| `bec_sync_unit_content` | Post content (`$content`, `$row`, `$provider_slug`). Default is the canonical description (same as `bec_core_description`). Stored with `wp_kses_post`. |
| `bec_sync_unit_post_data` | `post_data` array for `wp_insert_post` / `wp_update_post` (`$post_data`, `$row`, `$provider_slug`, `$post_id_or_null`) |
| `bec_provider_remote_units` | Final list from Kross full sync (`$rows`, `'kross'`, `$decoded_response`) |
| `bec_sync_apply_core_unit_fields` | Skip writing canonical `bec_core_*` meta (`true` / `false`, `$post_id`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_fields` | Adjust core field array before save (`$data`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_locale` | Two-letter locale for name/description (`$two`, `$wp_locale`, `$remote_row`) |
| `bec_provider_amenities_from_row` | Build amenities list (`$items`, `$remote_row`, `$provider_slug`) |
| `bec_kross_amenities_from_raw` | Kross-only: amenities from API `raw` (`$items`, `$raw`, `$normalised_row`) |
| `bec_sync_unit_resolve_post_statuses` | Post statuses consulted when resolving an existing unit by external id (`$statuses`, `$external_id`, `$provider_slug`) — default `publish`, `draft`, `pending`, `future`, `private` |

Posts with `bec_sync_enabled = false` are skipped in **full** sync but can still be updated via row action / bulk sync (manual refresh).

---

## Filters — lock & manual sync (admin)

| Filter | Purpose |
|--------|---------|
| `bec_sync_manual_lock_abandon_seconds` | Idle seconds before same user's orphaned manual run can release the lock (`$default`, `$user_id`, `$old_run_id`) |
| `bec_sync_manual_may_preempt_cron_lock` | Allow manual sync to delete a **`c`** lock and replace it (`false`, `$user_id`, `$sanitized_run_id`) |
| `bec_sync_allow_admin_clear_lock` | Show/allow **Clear sync lock** (`true`) |
| `bec_sync_manual_gallery_batch_size` | Gallery steps per manual sync batch (`4`, `$user_id`, `$run_raw`) |

---

## Filters — gallery import / core gallery field

| Filter | Purpose |
|--------|---------|
| `bec_sync_import_gallery_images` | Skip downloading gallery for this upsert (`true`, `$parent_post_id`, `$urls`) |
| `bec_sync_gallery_ignore_hash` | Ignore stored order/hash dedupe for this pass (`false`, `$parent_post_id`, `$urls`, `$order_hash`) |
| `bec_gallery_download_concurrency` | Parallel download limit (`8`, `$parent_post_id`, `$urls`) |
| `bec_core_unit_gallery_before_save` | Attachment ID list before save (`$ids`, `$post_id`) |
| `bec_core_unit_gallery_remote_urls` | Remote URL flat list before importer runs (`$urls`, `$post_id`, `$value`) |

---

## Filters — unit categories

| Filter | Purpose |
|--------|---------|
| `bec_sync_unit_category` | Replace/suppress category descriptor after row normalisation (`$descriptor`, `$row`, `$provider_slug`, `$post_id`) |
| `bec_unit_category_enabled` | Effective on/off for taxonomy registration without changing the saved option |
| `bec_unit_category_rewrite_slug` | Adjust derived rewrite base slug |
| `bec_unit_category_taxonomy_args` | Final `register_taxonomy` args (`$args`, `'bec_unit_category'`) |

Kross mapping hooks (payload fragment → descriptor) include:

- `bec_kross_room_type_categories_payload`
- `bec_kross_room_type_categories`
- `bec_kross_room_type_category_from_row`

---

## Search form (front end)

| Filter | Purpose |
|--------|---------|
| `bec_search_form_action` | Override the `<form action>` URL when `SearchForm::render()` did not receive an explicit **`action`** argument (`$url`, `$context`). Return empty string to keep built-in rules (archive / singular / home). The **`[bec_search]`** shortcode supplies **`action`** from **`redirect_url`** or the archive fallback—this filter applies mainly to PHP-rendered forms. |

Other search UI filters (`bec_search_form_fields`, `bec_search_form_preset`, `bec_search_guest_field_mode`, etc.) remain documented alongside provider integration; see `SearchForm` and **[bec_search shortcode](../06-shortcodes/02-bec-search.md)**.

---

## Custom REST, blocks, webhooks

The connector **does not** register its own **`register_rest_route`** surface for booking APIs. **`bec_unit`** uses WordPress CPT REST where `show_in_rest` is true; sensitive meta such as **`bec_sync_payload`** stays out of REST. There are **no** `register_block_type` Gutenberg blocks in the plugin PHP and **no** inbound webhooks—integrations are pull-based sync + front-end shortcodes/hooks.

Admin-only endpoints used for operations:

- `wp_ajax_bec_sync_progress_poll`, `bec_sync_run_all`, `bec_sync_start_all`, `bec_sync_step_all`
- `admin_post_*` actions for saving sync settings, clearing locks, per-unit sync, gallery rename, Kross engine refresh, etc.

---

## Related

- **[Architecture](./01-architecture.md)**
- **[Post meta reference](./03-post-meta-reference.md)**
