---
title: Architettura (riferimento sviluppatori)
sidebar_label: Architettura
description: Bootstrap del plugin Booking Engine Connector, strati, moduli, diagrammi Mermaid, namespace PHP BookingEngineConnector.
---

# Architettura

> **Riferimento sviluppatori:** questa sezione è per chi estende Booking Engine Connector con temi o plugin.

I diagrammi di riferimento usano [Mermaid](https://mermaid.js.org/). I namespace PHP sono sotto `BookingEngineConnector\`.

---

## Panoramica

Il plugin:

1. Carica l’autoloader PSR-4 (`includes/`), definisce costanti `BEC_*`, esegue `bootstrap.php` (migrazioni database), poi `Plugin::instance()->init()`.
2. **All’attivazione:** migrazioni incrementali, opzioni predefinite (intervallo sync, default checkout/fallback), pianifica WP-Cron.
3. **Su `plugins_loaded`:** helper template, text domain, registrazione ricerca/front/admin/sync/CPT/registry campi/shortcode/hook query Elementor.

---

## Elementor Pro (Loop Grid)

`BookingEngineConnector\Elementor\AvailabilityQueryFilter` registra l’azione Elementor `elementor/query/{query_id}` (query id predefinita **`bec_available_only`**, sovrascrivibile con **`bec_elementor_availability_query_id`**). Restringe il Loop Grid usando **`QuoteService::getQuote()`** e il **`SearchContext`** corrente.

**Filtri sviluppatore:** `bec_elementor_availability_query_id`, `bec_elementor_available_post_ids`, `bec_elementor_availability_max_units`.

Guida utente: **[Elementor — nascondere unità senza disponibilità](../06-shortcodes/11-elementor-loop-grid-availability-filter.md)**.

---

## Bootstrap e registrazione moduli

```mermaid
flowchart TB
  subgraph entry [File principale plugin]
    BEC["booking-engine-connector.php"]
    BEC --> Autoload["Autoload::register()"]
    BEC --> Boot["includes/bootstrap.php"]
    Boot --> MigReg["MigrationRunner registra migrazioni"]
    BEC --> PI["Plugin::instance()->init()"]
  end

  subgraph plugin_init [Plugin::init()]
    PI --> Hooks["hook attivazione / disattivazione"]
    PI --> PL["add_action('plugins_loaded', onPluginsLoaded)"]
  end

  subgraph loaded [onPluginsLoaded]
    PL --> TplFn["template-functions.php"]
    PL --> I18n["load_plugin_textdomain"]
    PL --> Mod["Registra moduli"]
  end

  subgraph modules [Moduli registrati]
    STH["SearchTemplateHooks"]
    PA["PublicAssets"]
    PCB["PublicContentBlocks"]
    AM["AdminMenu + ConnectionPage + StylingPage + FallbackPage"]
    SC["SyncCron"]
    SA["SyncAdmin"]
    UPT["UnitPostType"]
    CUF["CoreUnitFieldRegistry"]
    USF["UnitSyncFieldRegistry"]
    SH["ShortcodeRegistry"]
    AQF["AvailabilityQueryFilter (Elementor)"]
  end

  Mod --> modules
```

---

## Architettura a strati

```mermaid
flowchart LR
  subgraph wp [WordPress]
    CPT["CPT bec_unit + meta"]
    CRON["WP-Cron bec_run_scheduled_sync"]
    REQ["HTTP front / admin"]
  end

  subgraph core [Core]
    Plugin["Plugin"]
    Act["Activator / Deactivator"]
    Mig["MigrationRunner"]
  end

  subgraph providers [Layer provider]
    PR["ProviderRegistry"]
    PI2["ProviderInterface"]
    Kross["KrossProvider"]
    KAuth["KrossAuthenticator"]
    KApi["KrossApiClient"]
    Http["HttpClient"]
  end

  subgraph sync [Sync]
    SS["SyncService"]
    SL["SyncLock"]
    CUF2["CoreUnitFieldRegistry"]
    USF2["UnitSyncFieldRegistry"]
  end

  subgraph search [Ricerca / Checkout]
    SCtx["SearchContext"]
    QS["QuoteService"]
    CVS["CheckoutUrlService"]
    SF["SearchForm"]
  end

  subgraph front [Front]
    PCH["PublicContentBlocks"]
    BCR["BookingCtaRenderer"]
    FR["FallbackRenderer + FallbackService"]
    AQF["AvailabilityQueryFilter"]
  end

  subgraph admin [Admin]
    Menu["AdminMenu"]
    Conn["ConnectionPage"]
    SyncAd["SyncAdmin"]
    Log["ApiLogPage"]
  end

  REQ --> PCH
  REQ --> SHcode["ShortcodeRegistry"]
  REQ --> AQF
  CRON --> SS
  SyncAd --> SS
  SS --> PR
  SS --> CPT
  Kross --> Http
  KApi --> Http
  QS --> PR
  CVS --> PR
  Http --> Log
```

---

## Sequenza sync

```mermaid
sequenceDiagram
  participant Trigger as Admin / Cron
  participant SS as SyncService
  participant SL as SyncLock
  participant PR as ProviderRegistry
  participant P as ProviderInterface
  participant CPT as WordPress post meta

  Trigger->>SS: syncAll() o upsertFromRemoteRow()
  SS->>SL: acquire()
  alt lock fallita
    SL-->>SS: Un'altra sync in corso
  end
  SS->>PR: getProvider()
  SS->>P: validateCredentials()
  alt credenziali mancanti
    P-->>SS: false → abort
  end
  SS->>P: fetchRemoteUnits()
  loop ogni riga remota
    SS->>SS: filter bec_sync_remote_unit
    SS->>SS: upsertFromRemoteRow
    Note over SS,CPT: Title/content/meta/core fields/import gallery
  end
  SS->>SL: release()
```

---

## Flusso front — query string → preventivo → CTA o fallback

I parametri URL includono `bec_checkin`, `bec_checkout`, chiavi occupazione opzionali (vedi `SearchContext`).

```mermaid
flowchart TD
  GET["Query: bec_*"]
  GET --> SCtx["SearchContext::fromRequest()"]
  SCtx --> Complete{"isComplete()?"}
  Complete -->|no| Content["Solo contenuto unità"]
  Complete -->|si| Q["QuoteService::getQuote()"]
  Q --> Val["SearchValidator"]
  Q --> Prov["Preventivo provider"]
  Q --> Cache["Cache transient"]
  Q --> FB{"FallbackService::shouldDisplay?"}
  FB -->|si| RendFB["FallbackRenderer"]
  FB -->|no| RendCTA["BookingCtaRenderer"]
  RendFB --> Out["filtro the_content"]
  RendCTA --> Out
```

Gli shortcode riusano gli stessi servizi (`SearchForm`, `CheckoutUrlService`, `QuoteService`, ecc.).

---

## Internals provider Kross

```mermaid
flowchart TB
  KP["KrossProvider"]
  KP --> KAuth["KrossAuthenticator"]
  KP --> KApi["KrossApiClient"]
  KApi --> Http["HttpClient"]
  KAuth --> Http
  KP --> KParse["KrossResponseParser"]
  KP --> KFields["KrossCoreUnitFields"]
  KP --> KDefs["Definizioni sync unità"]
  Http --> Log["ApiLogRepository"]
```

---

## Mappa directory

```mermaid
mindmap
  root((booking-engine-connector))
    Core
      Plugin Activator Deactivator
      Migrations MigrationRunner
    PostTypes
      UnitPostType
    Sync
      SyncService SyncCron SyncLock
      CoreUnitFieldRegistry UnitSyncFieldRegistry
    Providers
      ProviderRegistry ProviderInterface
      Kross ApiClient Authenticator
    Search
      SearchContext QuoteService SearchForm SearchValidator
    Checkout
      CheckoutUrlService BookingCtaRenderer
    Fallback
      FallbackService FallbackRenderer FallbackSettings
    Admin
      AdminMenu ConnectionPage SyncAdmin ApiLogPage
    Api HttpClient HttpResponse
    Logging ApiLogRepository Migrations
    Front PublicAssets PublicContentBlocks
    Shortcodes ShortcodeRegistry
```

---

## Mappa concettuale

| Area | Responsabilità |
|------|----------------|
| Inventario remoto | `ProviderInterface::fetchRemoteUnits()` |
| Post/meta persistiti | `SyncService` + campi core canonici + meta mappati opzionali |
| Contesto prenotazione | `SearchContext` costruito dagli argomenti query `bec_*` |
| Estensibilità | Filtri/azioni con prefisso `bec_*` |

---

## Documentazione sviluppatori correlata

- **[Hook e filtri sync](./02-sync-hooks-and-filters.md)**
- **[Riferimento post meta](./03-post-meta-reference.md)**
- **[Campi canonici unità](./04-canonical-unit-fields.md)**
- **[API Kross](./05-kross-api.md)**
