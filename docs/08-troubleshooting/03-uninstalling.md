---
title: Uninstalling
sidebar_label: Uninstalling
description: Booking Engine Connector deactivate vs delete uninstall BEC_UNINSTALL_DELETE_DATA options api log table wp-config.
---

# Uninstalling

Deactivating **Booking Engine Connector** keeps configuration and synced Units intact—you can toggle off temporarily without losing posts.

{/* SCREENSHOT: Plugins screen showing Deactivate Delete actions */}
![Plugins deactivate vs delete](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/08-troubleshooting/plugins-uninstall.png`): plugins-uninstall.png */}

---

## Default delete behaviour

Deleting the plugin via **Plugins → Delete** runs `uninstall.php`.

By **default**, uninstall intentionally **does not** wipe:

- Stored options (`bec_*` settings)
- Custom logging table (`wp_bec_api_log` with your table prefix)

This mirrors expectations on production sites where operators reinstall frequently.

---

## Full removal (developer step)

When you explicitly want plugin settings **and** internal tables gone, define **before plugins load**:

```php
define('BEC_UNINSTALL_DELETE_DATA', true);
```

in `wp-config.php`.

With this constant **true**, uninstall deletes known option keys and drops the API log table—always confirm backups because Units/posts remain unless removed manually.

Authoritative cleanup list lives in `uninstall.php` inside the plugin package.

---

## Manual housekeeping

Even without constants:

- Delete **Units** posts if you no longer need synced inventory.
- Remove detached Media Library images imported solely for BEC galleries.

---

## Related documentation

For the authoritative list of options and tables removed when `BEC_UNINSTALL_DELETE_DATA` is enabled, see `uninstall.php` in the plugin package.
