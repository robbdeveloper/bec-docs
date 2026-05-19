---
title: '[bec_unit_field] shortcode'
sidebar_label: bec_unit_field
description: Read scalar values from synced unit payload via dot paths — field, type, unit_id, default — CIN and custom Kross fields.
---

# `[bec_unit_field]`

Outputs a **single scalar value** from the unit’s synced provider payload (`bec_sync_payload` → `raw`). Use it for simple text or numbers that are not covered by **`[bec_unit_info]`** renderers or canonical **`bec_core_*`** meta.

For the Italian **CIN** (Codice Identificativo Nazionale), prefer the canonical field synced into **`bec_core_cin`** (editable under **Unit — core fields**). You can still read it with this shortcode when needed.

---

## Where to put it

Unit templates, footers, compliance lines, or archive cards where you need one fact (registration code, custom API field, size, etc.).

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`field`** | *(empty)* | **Required.** Dot path under the provider **`raw`** object (e.g. `cin`, `size_sqm`, `custom_fields.custom_1.it`). |
| **`type`** | `string` | `string` (default) or `number` — coerces output; non-scalar values fall back to **`default`**. |
| **`unit_id`** | `0` | Units post ID; `0` uses the current loop post. |
| **`default`** | *(empty)* | Plain text shown when the field is missing or invalid (HTML-escaped). |

Locale-specific maps in the payload require an **explicit locale segment** in the path (e.g. `custom_fields.custom_1.it`) — there is no automatic locale fallback inside the path.

---

## Examples

CIN from raw payload (also available as canonical meta after sync):

```
[bec_unit_field field="cin"]
```

Custom Kross field with locale segment:

```
[bec_unit_field field="custom_fields.custom_1.it"]
```

Numeric size:

```
[bec_unit_field field="size_sqm" type="number"]
```

Explicit unit on an archive card:

```
[bec_unit_field field="cin" unit_id="456" default="—"]
```

---

## Visitor output

- Prints **escaped plain text** only (no HTML wrapper).
- Empty **`field`** → **`default`** or nothing.
- Wrong post type / missing payload → **`default`** or nothing.

---

## Developer hooks

| Filter | Purpose |
|--------|---------|
| `bec_unit_field_value` | Adjust resolved value before coercion (`$value`, `$field`, `$postId`, `$decoded`, `$context`, `$passThrough`). |
| `bec_kross_unit_field_value` | Kross-specific adjustment (same arguments). |

Providers implement **`ProviderInterface::getUnitFieldValue()`** — see **[Adding a provider](../09-developer-reference/06-adding-a-provider.md)**.

---

## Related

- **[Canonical unit fields — CIN](../09-developer-reference/04-canonical-unit-fields.md)**
- **[bec_unit_info](./08-bec-unit-info.md)** — structured HTML blocks instead of scalars
- **[Editing a unit](../04-units/03-editing-a-unit.md)** — canonical meta box including CIN
