---
title: Adding a provider
sidebar_label: Adding a provider
description: Implement ProviderInterface BulkQuoteProviderInterface ProviderRegistry bec_registered_providers bec_provider_instance CredentialField sync quotes checkout unit info renderers.
---

# Adding a provider

> **Developer reference:** This section is for PHP developers shipping a custom booking integration alongside Booking Engine Connector.

The plugin resolves integrations through **`ProviderInterface`** (`includes/Providers/Contracts/ProviderInterface.php`). The bundled **`KrossProvider`** is the reference implementation.

---

## High-level checklist

1. Implement **`ProviderInterface`** in your own PHP class (Composer autoload or manual `require` inside a small bootstrap plugin).
2. Register the admin label map via **`bec_registered_providers`** so **Booking Engine → Connection** shows your slug.
3. Return your concrete instance from **`bec_provider_instance`** when WordPress asks for your slug—`ProviderRegistry::getProvider()` invokes this filter **before** falling back to built-ins.
4. Store credential fields declaratively via **`getCredentialSchema()`** — Connection saves options as `bec_{slug}_{fieldKey}` automatically.
5. Implement **`fetchRemoteUnits()`**, **`extractCoreUnitFields()`**, **`getQuoteForUnit()`**, **`buildCheckoutUrl()`**, **`getUnitFieldValue()`**, and optionally **`BulkQuoteProviderInterface`** + **`getUnitInfoRenderers()`**.

---

## Admin registration

### Dropdown labels

Filter **`bec_registered_providers`** receives `[ slug => human label ]`. Merge your slug:

```php
add_filter('bec_registered_providers', function (array $map): array {
    $map['myengine'] = __('My Engine', 'my-plugin');
    return $map;
});
```

If the saved active slug is missing from this map after filtering, Connection resets selection to **`kross`** — always merge both keys during rollout migrations.

### Concrete provider instance

Filter **`bec_provider_instance`** receives `(null|ProviderInterface $maybe, string $slug)`:

```php
add_filter('bec_provider_instance', function ($provider, string $slug) {
    if ($slug === 'myengine') {
        return new MyEngineProvider();
    }
    return $provider;
}, 10, 2);
```

Without this hook, unknown slugs currently fall back to **`KrossProvider`** inside `ProviderRegistry::getProvider()`, which would break unrelated integrations—**always** pair new slugs with this filter.

---

## Credential schema

Implement **`getCredentialSchema(): array`** returning a list of **`CredentialField`** objects describing admin inputs (`label`, `help`, `type`, `required`, etc.). Validate connectivity inside **`validateCredentials()`** so Sync surfaces actionable errors early.

---

## Core responsibilities

| Method | Responsibility |
|--------|------------------|
| `getSlug()` | Stable lowercase slug (`myengine`). Must match map/filter keys. |
| `fetchRemoteUnits()` | Return normalised arrays consumed by sync (`external_id`, nested raw payload, …). Apply filters already documented in **[Sync hooks](./02-sync-hooks-and-filters.md)** where relevant. |
| `extractCoreUnitFields()` | Populate **`CoreUnitSemantic`** keys (`bec_core_*`). |
| `getUnitSyncFieldDefinitions()` | Optional extra meta definitions (`UnitSyncFieldDefinition`). Return `[]` if unused. |
| `requiresChildrenAges()` / `getSearchGuestFieldMode()` | Drive `[bec_search]` field wiring (`SearchGuestFieldMode`). |
| `getQuoteForUnit()` | Return arrays/`WP_Error` consistent with quote consumers (`QuoteService`). |
| `buildCheckoutUrl()` | Return `['url' => ..., 'label' => ...]` or POST descriptor (`method`=`post`, `post_fields`). |
| `getUnitInfoRenderers()` | Map shortcode keys → callables for **`[bec_unit_info]`** (may return `[]`). |
| `getUnitFieldValue()` | Resolve dot paths under `raw` for **`[bec_unit_field]`** — return `string|int|float|null`. Filter: **`bec_unit_field_value`**. |

Optional **`BulkQuoteProviderInterface`** batches availability once per **`SearchContext`** (see interface docblocks under `includes/Providers/Contracts/BulkQuoteProviderInterface.php`).

### `getUnitFieldValue()` (scalar shortcode)

`[bec_unit_field field="…"]` decodes `bec_sync_payload`, then calls your provider:

```php
public function getUnitFieldValue(
    array $syncPayload,
    string $field,
    array $atts,
    array $context
): string|int|float|null {
    $raw = $syncPayload['raw'] ?? [];
    if (! is_array($raw)) {
        return null;
    }
    // Resolve $field as dot path, e.g. custom_fields.foo.en
    return $this->dotGet($raw, $field);
}
```

- **`$field`** — path relative to **`raw`** (not the full payload).
- **`$context`** — includes `provider`, `locale` (two-letter), and `type` (`string`|`number`).
- Return **`null`** when missing or not coercible to the requested type.

Kross ships **`KrossUnitFieldResolver`** as the reference; filter **`bec_kross_unit_field_value`** for Kross-only tweaks.

---

## Units remember their provider slug

Each **`bec_unit`** stores **`bec_provider_slug`**. Quotes/checkout resolve via that slug even if the global active provider changes—keep slug constants backward compatible when renaming integrations.

---

## Testing hooks

Use **`bec_test_connection`** from Connection page verify button for non-Kross adapters (return friendly strings/`WP_Error`). Kross wires token exchange automatically.

---

## Related docs

- **[Architecture](./01-architecture.md)**
- **[Unit info renderers](./07-unit-info-renderers.md)**
- **[bec_unit_field](../06-shortcodes/12-bec-unit-field.md)** — user-facing shortcode guide
- **[Kross API](./05-kross-api.md)** — behavioural reference even when cloning patterns for another vendor.
