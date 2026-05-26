---
title: Panoramica schermate admin
sidebar_label: Schermate admin
description: Mappa del menu admin Booking Engine — Dashboard, Connection, Frontend, Sync & Import, Units, Listing Filters, Design, Checkout & Fallback, Tools & Logs.
---

# Panoramica schermate admin

Dopo l’attivazione, **Booking Engine** compare come menu WordPress di primo livello. Ogni schermata ha uno scopo dedicato; questa pagina è la mappa di riferimento. Segui i link per guide più approfondite.

{/* SCREENSHOT: Booking Engine admin menu expanded */}
![Menu admin Booking Engine](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/admin-sidebar-booking-engine.png`): admin-sidebar-booking-engine.png */}

---

## Dashboard

**Menu:** Booking Engine → **Dashboard** (`bec-dashboard`)

Le card di stato riassumono:

| Card | Mostra |
|------|--------|
| **Active provider** | Slug integrazione attiva (es. Kross) |
| **Credentials** | Complete / incomplete — link per verificare |
| **Last sync** | Timestamp o “Never completed” |
| **Next scheduled sync** | Prossima esecuzione WP-Cron + intervallo (ore) |
| **Sync lock** | Idle o lock attivo (in corso o obsoleto) |
| **Synced units** | Conteggio `bec_unit` pubblicati |
| **Checkout URL** | Configurato / non impostato |
| **Fallback** | Modalità abilitata (inline / link) o disabilitato |

Le **azioni rapide** portano a Connection, strumenti sync, Frontend, URL unità, listing filters, Design, checkout e Tools & Logs.

---

## Connection

**Menu:** Booking Engine → **Connection** (`bec-connection`)

Solo scelta provider e credenziali API. **Verify connection** esegue uno scambio token reale.

| Option keys | Scopo |
|-------------|---------|
| `bec_active_provider` | Slug provider attivo |
| `bec_{provider}_{field}` | Archiviazione credenziali per provider |

Vedi **[Collega il provider](./02-connect-your-provider.md)** e **[Kross Booking](../03-providers/02-kross-booking.md)**.

---

## Frontend

**Menu:** Booking Engine → **Frontend** (`bec-frontend`)

Campi ospiti della barra di ricerca e blocchi prenotazione automatici sulle pagine singola unità.

| Option key | Scopo |
|------------|---------|
| `bec_search_guest_input_mode` | Follow provider / total guests / adults + children |
| `bec_search_child_ages_mode` | Follow provider / ask ages / omit ages |
| `bec_auto_append_search_form_single_unit` | Antepone la ricerca sopra il contenuto unità |
| `bec_append_booking_blocks_to_content` | Aggiunge quote + checkout quando l’URL ha date |

Vedi **[Impostazioni Frontend](./06-frontend-settings.md)**.

---

## Sync & Import

**Menu:** Booking Engine → **Sync & Import** (`bec-sync`)

Due tab:

### Tab Settings

| Campo | Option key | Scopo |
|-------|------------|---------|
| Sync interval (hours) | `bec_sync_interval_hours` | Pianificazione WP-Cron (default 6) |
| Kross booking engines | `bec_kross_sync_booking_engines` | Limita la sync completa ai motori selezionati |
| Gallery filename prefix | `bec_sync_gallery_image_prefix` | Prefisso file galleria importati |
| Gallery filename suffix | `bec_sync_gallery_image_suffix` | Inserito dopo lo slug nome unità |

### Tab Tools

- **Run sync now** — sync completa a batch con UI avanzamento (JS) o fallback admin-post classico
- **Clear sync lock** — rilascia lock obsoleti
- **Rename all unit gallery files** — riapplica prefisso/suffisso correnti

Vedi **[Esegui la prima sincronizzazione](./03-run-your-first-sync.md)** e **[Sincronizzare le unità](../04-units/02-syncing-units.md)**.

---

## Units

**Menu:** Booking Engine → **Units** (`bec-units`)

Permalink e impostazioni archivio per le strutture sincronizzate:

| Impostazione | Option key |
|--------------|------------|
| URL slug | `bec_unit_permalink_slug` |
| Unit archive | `bec_unit_archive_enabled` |
| Unit URL structure | `bec_unit_url_structure` |
| Enable unit categories | toggle tassonomia |
| Category URL slug | `bec_unit_category_permalink_slug` |
| Category URL structure | `bec_unit_category_url_structure` |

Il menu post type **Units** (separato da Booking Engine) elenca le singole strutture sincronizzate per la modifica.

Vedi **[Permalink e archivio](../04-units/05-permalinks-and-archive.md)** e **[Categorie unità](../04-units/06-unit-categories.md)**.

---

## Listing Filters

**Menu:** Booking Engine → **Listing Filters** (`bec-unit-filters`)

Curare quali servizi indicizzati compaiono in **`[bec_unit_filters]`**: abilitazione, ordine, etichette opzionali.

Richiede un indice servizi completato (esegui prima una sync).

Vedi **[Listing Filters admin](../04-units/07-listing-filters-admin.md)** e **[bec_unit_filters](../06-shortcodes/15-bec-unit-filters.md)**.

---

## Design

**Menu:** Booking Engine → **Design** (`bec-styling`)

Token visivi, preset layout e aree CSS extra:

- Preset e token barra di ricerca
- Preset riepilogo prenotazione, accordion, token
- Extra CSS per ricerca, riepilogo e override globali
- **Unit filters — extra CSS** (`bec_styling_filters_extra_css`)

Vedi **[Panoramica Design](../07-styling/01-styling-overview.md)**.

---

## Checkout & Fallback

**Menu:** Booking Engine → **Checkout & Fallback** (`bec-fallback`)

URL checkout esterno e comportamento fallback quando il motore non è disponibile.

Vedi **[Flusso checkout](../05-bookings-and-checkout/03-checkout-flow.md)** e **[Modalità fallback](../05-bookings-and-checkout/04-fallback-mode.md)**.

---

## Tools & Logs

**Menu:** Booking Engine → **Tools & Logs** (`bec-api-log`)

Chiamate HTTP recenti ai provider di prenotazione: filtra per provider, endpoint, stato; ispeziona correlation ID e durata.

Vedi **[Usare Tools & Logs](../08-troubleshooting/02-using-the-api-log.md)**.

---

## Pagine correlate

- **[Installazione](./01-installation.md)**
- **[Collega il provider](./02-connect-your-provider.md)**
- **[Impostazioni Frontend](./06-frontend-settings.md)**
