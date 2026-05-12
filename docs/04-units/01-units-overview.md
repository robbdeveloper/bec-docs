---
title: Units overview
sidebar_label: Units overview
description: What a Unit is in WordPress, the Units admin menu, public URLs, featured images, and relation to your booking provider.
---

# Units overview

A **Unit** is one bookable item synced from your booking provider—a room category, apartment, villa, etc.

In WordPress it is a dedicated content type (**custom post type**) labelled **Units** in the admin menu.

---

## Where units live

| Location | What you do |
|----------|-------------|
| **Units → All Units** | Browse, search, bulk-sync, open editors. |
| **Front-end URL** | Each unit has its own page (permalink). Archive listing is optional—see **[Permalinks and archive](./05-permalinks-and-archive.md)**. |

Extra list columns help operations teams:

- **External ID** — Identifier from the booking system.
- **Provider** — Which integration owns the row (e.g. `kross`).
- **Last sync** — When this unit last finished syncing successfully.

{/* SCREENSHOT: Units list with External ID Provider Last sync */}
![Units admin list](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/units-list.png`): units-list.png */}

---

## What visitors see

Themes usually show:

- **Title** and **content** (description synced into the editor unless customised).
- **Featured image** — Often set automatically from the provider’s main gallery image.

Gallery images beyond the featured image live in meta fields and attachment IDs—your theme or blocks decide how to display them.

{/* SCREENSHOT: Single unit front-end above fold */}
![Single unit public page](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/unit-single-front.png`): unit-single-front.png */}

---

## Relation to the provider

Units are **linked** to remote inventory by **`bec_external_id`** (shown as External ID) and provider slug.

Deleting a unit in WordPress does **not** delete inventory in Kross; the next sync may recreate it unless you manage visibility on the provider side.

---

## Related pages

- **[Syncing units](./02-syncing-units.md)**
- **[Editing a unit](./03-editing-a-unit.md)**
