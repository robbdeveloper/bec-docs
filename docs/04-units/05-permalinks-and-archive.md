---
title: Permalinks and archive
sidebar_label: Permalinks & archive
description: Booking Engine Units screen — public URL slug segment, URL structures, and optional unit archive listing.
---

# Permalinks and archive

Your units appear on the front end at URLs controlled by WordPress **rewrite rules**.

Configure them under **Booking Engine → Units**.

{/* SCREENSHOT: Units permalinks admin screen */}
![Units permalinks settings](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/units-permalinks-page.png`): units-permalinks-page.png */}

---

## URL slug

**URL slug** sets the path segment before the unit’s slug (when the unit URL structure includes it).

| Setting | Example public URL |
|---------|---------------------|
| Empty / default | `https://example.com/bec_unit/my-villa/` |
| Custom `properties` | `https://example.com/properties/my-villa/` |

Changing this affects **every unit URL**. Search engines may need time to adjust—coordinate with SEO workflows.

Saving **flushes rewrite rules** so WordPress recognises the new pattern immediately.

**Option key:** `bec_unit_permalink_slug`

---

## Unit URL structure

**Option key:** `bec_unit_url_structure`

Choose how single unit permalinks are built:

| Value | Pattern | Example |
|-------|---------|---------|
| **`base`** (default) | `/{unit slug}/{unit name}` | `/properties/my-villa/` |
| **`base_category`** | `/{unit slug}/{category}/{unit name}` | `/properties/villas/my-villa/` |
| **`category_only`** | `/{category}/{unit name}` | `/villas/my-villa/` |

Structures that include **`{category}`** require **unit categories** to be enabled and units to have assigned category terms.

Developers can override the stored value with filter **`bec_unit_url_structure`**.

---

## Unit archive

Some sites want a browsable **listing of all units** at the root slug:

- Enable **Unit archive** when you want something like `https://example.com/properties/` to show an archive template (theme-dependent).

Disable it when units should **only** appear via menus, loops, or manual links—not as a public index.

**Option key:** `bec_unit_archive_enabled`

The native archive supports **`[bec_unit_filters]`** and **`bec_filter_*`** query parameters on the main query.

---

## Unit categories (same screen)

The **Units** page also controls the optional **Unit category** taxonomy:

- **Enable** categories so the plugin can **sync category terms** (when the provider supplies them) and optionally expose **public category URLs**.
- Set the **category URL slug** (default base `unit-category` when left empty).
- Choose **category URL structure** — see **[Unit categories](./06-unit-categories.md)**.

---

## Validation rules

The admin form validates incompatible combinations before saving:

| Rule | Meaning |
|------|---------|
| **`base` + `unit_base` category URLs** | Not allowed — both use two URL segments and WordPress cannot distinguish them. |
| **Category-required unit structures** | `base_category` and `category_only` need categories enabled. |
| **Bare category URLs** | `bare` structure (`/{term name}/`) checks for slug conflicts with pages, posts, units, and rewrite endpoints. |

After structural changes, visit **Settings → Permalinks** and click **Save Changes** once if links show 404.

---

## Multilingual sites

When **WPML** or **Polylang** is active, language prefixes appear before these paths as usual for your configuration. URL structure options apply to the path **after** the language prefix.

---

## If links show 404

After structural changes:

1. Visit **Settings → Permalinks** and click **Save Changes** once (no edits needed)—WordPress refreshes rules.
2. Clear server / CDN caches if applicable.

---

## Related pages

- **[Unit categories](./06-unit-categories.md)**
- **[Units overview](./01-units-overview.md)**
- **[Admin screens overview](../02-getting-started/05-admin-screens.md)**
