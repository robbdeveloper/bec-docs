---
title: Listing Filters admin
sidebar_label: Listing Filters admin
description: Schermata Booking Engine Listing Filters — indice servizi, abilitazione/ordine/etichette personalizzate per lo shortcode bec_unit_filters.
---

# Listing Filters admin

Apri **Booking Engine → Listing Filters** (`bec-unit-filters`).

Questa schermata cura quali **servizi indicizzati** compaiono nello shortcode **`[bec_unit_filters]`**. Lo stile dei filtri è in **Booking Engine → Design → Unit filters — extra CSS**.

{/* SCREENSHOT: Listing Filters admin table */}
![Listing Filters admin](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/listing-filters-admin.png`): listing-filters-admin.png */}

---

## Dipendenza dall’indice servizi

I servizi sono indicizzati dai dati unità sincronizzati in una tassonomia dedicata. Prima che la tabella si popoli:

1. **Collega** il provider ed **esegui una sync** — vedi **[Esegui la prima sincronizzazione](../02-getting-started/03-run-your-first-sync.md)**.
2. Attendi il completamento dell’indicizzazione in background. Mentre l’indice è in costruzione, un avviso admin segnala che le opzioni possono essere incomplete.

Se la tabella resta vuota dopo la sync, verifica che le unità abbiano servizi nel payload sincronizzato.

---

## Tabella servizi

Ogni riga rappresenta un servizio indicizzato:

| Colonna | Scopo |
|---------|--------|
| **Checkbox** | Abilita o disabilita il servizio in `[bec_unit_filters]` |
| **Amenity** | Chiave stabile (`code`) ed etichetta predefinita dalla sync |
| **Category** | Categoria servizio del provider quando disponibile |
| **Units** | Conteggio unità con questo servizio |
| **Display label (optional)** | Override etichetta front-end senza cambiare la chiave |

Usa **Search amenities** per filtrare la tabella per chiave o etichetta.

Il salvataggio memorizza:

| Archiviazione | Scopo |
|---------------|--------|
| Enabled keys | Quali servizi compaiono con `amenities="selected"` |
| Order | Ordine di visualizzazione (ordine righe tabella al salvataggio) |
| Custom labels | Override etichette per chiave |

---

## Abbinare i filtri front-end

Posiziona **`[bec_unit_filters]`** sopra il loop unità o sull’archivio unità. Il modulo invia parametri GET (`bec_filter_order`, `bec_filter_rooms_min`, `bec_filter_bathrooms_min`, `bec_filter_amenities[]`) preservando il contesto di ricerca (`bec_checkin`, ecc.).

Per elenchi Elementor Loop Grid, imposta Query ID su **`bec_available_only`** o **`bec_filtered_units`**.

Vedi **[bec_unit_filters](../06-shortcodes/15-bec-unit-filters.md)** e **[Filtro Elementor Loop Grid](../06-shortcodes/11-elementor-loop-grid-availability-filter.md)**.

---

## Pagine correlate

- **[Panoramica schermate admin](../02-getting-started/05-admin-screens.md)**
- **[Panoramica Design](../07-styling/01-styling-overview.md)** — Unit filters extra CSS
- **[bec_available_units_count](../06-shortcodes/16-bec-available-units-count.md)** — conteggio risultati sulle pagine elenco
