---
title: Permalinks and archive
sidebar_label: Permalinks & archive
description: Booking Engine Units permalinks — public URL slug segment and optional unit archive listing.
---

# Permalinks and archive

Your units appear on the front end at URLs controlled by WordPress **rewrite rules**.

Configure them under **Booking Engine → Units — permalinks**.

{/* SCREENSHOT: Units permalinks admin screen */}
![Units permalinks settings](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/units-permalinks-page.png`): units-permalinks-page.png */}

---

## URL slug

**URL slug** sets the path segment before the unit’s slug.

| Setting | Example public URL |
|---------|---------------------|
| Empty / default | `https://example.com/bec_unit/my-villa/` |
| Custom `properties` | `https://example.com/properties/my-villa/` |

Changing this affects **every unit URL**. Search engines may need time to adjust—coordinate with SEO workflows.

Saving **flushes rewrite rules** so WordPress recognises the new pattern immediately.

---

## Unit archive

Some sites want a browsable **listing of all units** at the root slug:

- Enable **Unit archive** when you want something like `https://example.com/properties/` to show an archive template (theme-dependent).

Disable it when units should **only** appear via menus, loops, or manual links—not as a public index.

---

## If links show 404

After structural changes:

1. Visit **Settings → Permalinks** and click **Save Changes** once (no edits needed)—WordPress refreshes rules.
2. Clear server / CDN caches if applicable.

---

## Related pages

- **[Units overview](./01-units-overview.md)**
