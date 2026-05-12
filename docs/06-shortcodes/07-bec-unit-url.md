---
title: '[bec_unit_url] shortcode'
sidebar_label: bec_unit_url
description: Outputs unit permalink with search params preserved shortcode unit_id href usage filter bec_shortcode_unit_url.
---

# `[bec_unit_url]`

Prints **only the URL text** for a unit permalink, merging current **`bec_*`** query arguments—perfect inside `href=""`.

---

## Where to put it

Listing grids, navigation menus built from HTML blocks, buttons in page builders that accept shortcodes inside attributes.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`unit_id`** | `0` | Units post ID; `0` uses loop context. |

---

## Examples

```html
<a href="[bec_unit_url]">View property</a>
```

```
[bec_unit_url unit_id="321"]
```

(Some builders require enabling shortcode execution inside HTML widgets.)

{/* SCREENSHOT: Listing card link inspector showing merged URL */}
![bec_unit_url listing usage](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-url.png`): bec-unit-url.png */}

---

## CSS hooks

_None_ — raw URL output.

---

## Tips

Developers can adjust via **`bec_shortcode_unit_url`** filter.

Ensure destination templates actually render **`[bec_booking_summary]`** or related blocks so visitors land with usable checkout UI.
