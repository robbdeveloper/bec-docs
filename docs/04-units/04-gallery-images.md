---
title: Gallery images
sidebar_label: Gallery images
description: How remote gallery images import into WordPress Media Library, filename prefix and suffix, rename tools, featured image rules.
---

# Gallery images

During sync the plugin can **download** each unit’s gallery from your provider into the **WordPress Media Library**, then store attachment IDs on the unit.

---

## Filename pattern

Under **Booking Engine → Sync**:

- **Filename prefix** — Optional text **before** the unit name slug.
- **Filename suffix (before index)** — Optional text **between** the slug and the numeric index.

Pattern:

**prefix + unit-slug + suffix + `-NN` + extension**

Example (illustrative): `villa-rosa-main-01.jpg`

{/* SCREENSHOT: Sync page gallery filename fields highlighted */}
![Gallery filename settings](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/sync-gallery-filename-fields.png`): sync-gallery-filename-fields.png */}

---

## Admin: editing gallery order and attachments

On the unit edit screen, the **canonical** meta box includes a **gallery** UI:

- Thumbnail grid with **drag-to-reorder**.
- **Add** opens the WordPress **Media Library** modal (pick or upload attachments).

Changes are saved with the post. The next **sync** may still refresh gallery content from the provider unless developers disable gallery writes—see developer filters in **[Sync hooks & filters](../09-developer-reference/02-sync-hooks-and-filters.md)**.

---

## Featured image

When the provider marks a **main** image, it becomes the WordPress **featured image**. Otherwise the plugin typically uses the **first image** in gallery order.

---

## Rename existing files

Buttons help when you change prefix/suffix **after** images already imported:

- **Booking Engine → Sync → Rename all unit gallery files**
- **Units → Row action → Rename gallery files** (one unit)

Images shared across multiple units may be **copied** so other units keep working—large sites should run this during quiet periods.

On the **Sync** page this tool sits under **Gallery file names** with an explanation that copying may occur when an attachment is reused by more than one unit.

{/* SCREENSHOT: Media Library detail for one BEC gallery attachment showing filename */}
![Media Library attachment filename](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/media-library-gallery-file.png`): media-library-gallery-file.png */}

---

## Stability and duplicates

The connector tracks stable **image keys** per unit so reordering remote photos does not always re-download everything. Dedupe is scoped **per unit**, not globally by URL—two units may legitimately store two files from the same remote URL.

Downloads run in parallel batches for speed (technical default documented for developers).

---

## Related pages

- **[Canonical unit fields — gallery](../09-developer-reference/04-canonical-unit-fields.md)**
