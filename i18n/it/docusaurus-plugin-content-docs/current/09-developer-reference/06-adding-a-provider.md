---
title: Aggiungere un provider
sidebar_label: Aggiungere un provider
description: Implementare ProviderInterface BulkQuoteProviderInterface ProviderRegistry bec_registered_providers bec_provider_instance CredentialField sync quote checkout renderer unit info.
---

# Aggiungere un provider

> **Riferimento sviluppatori:** per sviluppatori PHP che distribuiscono un’integrazione di prenotazione personalizzata insieme a Booking Engine Connector.

Il plugin risolve le integrazioni tramite **`ProviderInterface`** (`includes/Providers/Contracts/ProviderInterface.php`). Il **`KrossProvider`** incluso è l’implementazione di riferimento.

---

## Checklist di alto livello

1. Implementa **`ProviderInterface`** in una tua classe PHP (autoload Composer o `require` manuale in un piccolo plugin bootstrap).
2. Registra la mappa etichette admin con **`bec_registered_providers`** così **Booking Engine → Connection** mostra il tuo slug.
3. Restituisci la tua istanza concreta da **`bec_provider_instance`** quando WordPress chiede il tuo slug — `ProviderRegistry::getProvider()` invoca questo filtro **prima** del fallback ai built-in.
4. Memorizza i campi credenziali in modo dichiarativo con **`getCredentialSchema()`** — Connection salva opzioni come `bec_{slug}_{fieldKey}` automaticamente.
5. Implementa **`fetchRemoteUnits()`**, **`extractCoreUnitFields()`**, **`getQuoteForUnit()`**, **`buildCheckoutUrl()`**, **`getUnitFieldValue()`**, e opzionalmente **`BulkQuoteProviderInterface`** + **`getUnitInfoRenderers()`**.

---

## Registrazione admin

### Etichette menu a tendina

Il filtro **`bec_registered_providers`** riceve `[ slug => etichetta umana ]`. Unisci il tuo slug:

```php
add_filter('bec_registered_providers', function (array $map): array {
    $map['myengine'] = __('My Engine', 'my-plugin');
    return $map;
});
```

Se lo slug attivo salvato manca da questa mappa dopo il filtro, Connection ripristina la selezione a **`kross`** — unisci sempre entrambe le chiavi durante rollout/migrazioni.

### Istanza concreta del provider

Il filtro **`bec_provider_instance`** riceve `(null|ProviderInterface $maybe, string $slug)`:

```php
add_filter('bec_provider_instance', function ($provider, string $slug) {
    if ($slug === 'myengine') {
        return new MyEngineProvider();
    }
    return $provider;
}, 10, 2);
```

Senza questo hook, gli slug sconosciuti oggi tornano a **`KrossProvider`** in `ProviderRegistry::getProvider()`, rompendo integrazioni non correlate — **abbina sempre** nuovi slug a questo filtro.

---

## Schema credenziali

Implementa **`getCredentialSchema(): array`** restituendo una lista di oggetti **`CredentialField`** che descrivono input admin (`label`, `help`, `type`, `required`, ecc.). Valida la connettività dentro **`validateCredentials()`** così la Sync mostra errori azionabili presto.

---

## Responsabilità principali

| Metodo | Responsabilità |
|--------|------------------|
| `getSlug()` | Slug minuscolo stabile (`myengine`). Deve coincidere con chiavi mappa/filtro. |
| `fetchRemoteUnits()` | Restituisce array normalizzati consumati dalla sync (`external_id`, payload raw annidato, …). Applica filtri già documentati in **[Hook sync](./02-sync-hooks-and-filters.md)** dove rilevante. |
| `extractCoreUnitFields()` | Popola chiavi **`CoreUnitSemantic`** (`bec_core_*`). |
| `getUnitSyncFieldDefinitions()` | Definizioni meta extra opzionali (`UnitSyncFieldDefinition`). Restituisci `[]` se non usate. |
| `requiresChildrenAges()` / `getSearchGuestFieldMode()` | Guidano cablaggio campi `[bec_search]` (`SearchGuestFieldMode`). |
| `getQuoteForUnit()` | Restituisce array/`WP_Error` coerenti con i consumer preventivi (`QuoteService`). |
| `buildCheckoutUrl()` | Restituisce `['url' => ..., 'label' => ...]` o descrittore POST (`method`=`post`, `post_fields`). |
| `getUnitInfoRenderers()` | Mappa chiave shortcode → callable per **`[bec_unit_info]`** (può restituire `[]`). |
| `getUnitFieldValue()` | Risolve percorsi puntati sotto `raw` per **`[bec_unit_field]`** — restituisce `string|int|float|null`. Filtro: **`bec_unit_field_value`**. |

Opzionale **`BulkQuoteProviderInterface`** raggruppa disponibilità una volta per **`SearchContext`** (vedi docblock interfaccia in `includes/Providers/Contracts/BulkQuoteProviderInterface.php`).

### `getUnitFieldValue()` (shortcode scalare)

`[bec_unit_field field="…"]` decodifica `bec_sync_payload`, poi chiama il provider:

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
    // Risolvi $field come percorso puntato, es. custom_fields.foo.en
    return $this->dotGet($raw, $field);
}
```

- **`$field`** — percorso relativo a **`raw`** (non l’intero payload).
- **`$context`** — include `provider`, `locale` (due lettere) e `type` (`string`|`number`).
- Restituisci **`null`** se mancante o non coercibile al tipo richiesto.

Kross include **`KrossUnitFieldResolver`** come riferimento; filtro **`bec_kross_unit_field_value`** per personalizzazioni solo Kross.

---

## Le unità ricordano lo slug provider

Ogni **`bec_unit`** memorizza **`bec_provider_slug`**. Preventivi/checkout si risolvono tramite quello slug anche se il provider attivo globale cambia — mantieni costanti slug compatibili con versioni precedenti quando rinomini integrazioni.

---

## Hook di test

Usa **`bec_test_connection`** dal pulsante verifica Connection per adapter non-Kross (restituisci stringhe amichevoli/`WP_Error`). Kross collega lo scambio token automaticamente.

---

## Documentazione correlata

- **[Architettura](./01-architecture.md)**
- **[Renderer unit info](./07-unit-info-renderers.md)**
- **[bec_unit_field](../06-shortcodes/12-bec-unit-field.md)** — guida utente allo shortcode
- **[API Kross](./05-kross-api.md)** — riferimento comportamentale anche quando cloni pattern per un altro vendor.
