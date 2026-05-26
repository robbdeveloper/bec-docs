---
title: Shortcode '[bec_unit_filters]'
sidebar_label: bec_unit_filters
description: Shortcode filtri elenco unità — ordine, camere, bagni, servizi via parametri GET; Query ID Elementor bec_available_only e bec_filtered_units.
---

# `[bec_unit_filters]`

Renderizza un **modulo filtri GET** per gli elenchi unità: ordine, camere minime, bagni minimi e checkbox servizi. Invia i parametri filtro **preservando il contesto di ricerca** (`bec_checkin`, `bec_checkout`, conteggi ospiti, ecc.).

Abbinalo a un Elementor Loop Grid (Query ID **`bec_available_only`** o **`bec_filtered_units`**) o alla query archivio nativa **`bec_unit`**.

{/* SCREENSHOT: bec_unit_filters inline layout on unit archive */}
![bec_unit_filters front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-filters.png`): bec-unit-filters.png */}

---

## Dove posizionarlo

- Sopra un loop unità sulle pagine risultati ricerca.
- Sull’**archivio unità** quando i visitatori arrivano da **`[bec_search]`**.
- Accanto a **`[bec_available_units_count]`** per un titolo “N unità trovate”.

Curare quali servizi compaiono in **Booking Engine → Listing Filters**. Stilizzare il modulo in **Booking Engine → Design → Unit filters — extra CSS**.

---

## Attributi

| Attribute | Default | Significato |
|-----------|---------|-------------|
| **`filters`** | `order,rooms,bathrooms,amenities` | Id filtri separati da virgola da renderizzare. Id integrati: `order`, `rooms`, `bathrooms`, `amenities`. |
| **`layout`** | `inline` | Layout campi `inline` o `stacked`. |
| **`show_reset`** | `1` | Mostra link **Reset filters** se truthy (`1`, `yes`, `true`, `on`). |
| **`hide_labels`** | `1` | Se truthy, le etichette visibili diventano testo screen-reader; i picker mostrano placeholder. |
| **`amenities`** | `selected` | `selected` usa i servizi abilitati in admin; oppure chiavi servizio separate da virgola. |
| **`amenities_limit`** | `0` | Max scelte servizio (`0` = nessun limite). |
| **`action`** | *(empty)* | URL target GET del modulo. Vuoto usa archivio corrente, pagina corrente o home. |

Gli sviluppatori possono estendere le definizioni filtro con **`bec_unit_filter_definitions`**.

---

## Parametri query GET

Il modulo legge e scrive questi parametri URL:

| Parameter | Values | Filtro |
|-----------|--------|--------|
| **`bec_filter_order`** | `ASC`, `DESC`, o vuoto (qualsiasi) | Direzione ordinamento post |
| **`bec_filter_rooms_min`** | `1`–`10` o vuoto | Conteggio minimo camere |
| **`bec_filter_bathrooms_min`** | `1`, `1.5`, `2`, … o vuoto | Conteggio minimo bagni |
| **`bec_filter_amenities[]`** | Chiavi servizio (ripetibile) | Unità devono avere tutti i servizi selezionati |

I parametri di ricerca (`bec_checkin`, `bec_checkout`, `bec_adults`, ecc.) sono preservati come campi hidden all’invio filtri.

Chiavi extra da preservare possono essere aggiunte via **`bec_unit_filters_preserve_query_keys`**.

---

## UI progressive enhancement

Senza JavaScript, `<select>` nativi e checkbox funzionano comunque.

Con JS (`assets/public-unit-filters.js`):

- **Desktop** — I filtri select usano un popover picker; i servizi usano un popover multi-select.
- **Mobile** — I trigger aprono bottom sheet con azioni Done/Clear.

Hook CSS: `bec-unit-filters`, `bec-unit-filters--inline`, `bec-unit-filters--stacked`, `bec-unit-filters--hide-labels`, `bec-unit-filters__field--*`, `bec-unit-filters__picker*`, `bec-unit-filters__amenities*`.

---

## Integrazione Elementor e archivio

| Query ID | Comportamento |
|----------|---------------|
| **`bec_available_only`** | Applica filtri unità; con contesto ricerca completo, nasconde unità non disponibili |
| **`bec_filtered_units`** | Alias — stesso comportamento di `bec_available_only` |

Sull’archivio nativo **`bec_unit`**, **`UnitFilterQueryHooks`** applica la stessa logica filtro alla query principale.

Vedi **[Filtro Elementor Loop Grid](./11-elementor-loop-grid-availability-filter.md)**.

---

## Esempi

Filtri predefiniti (tutti e quattro gli integrati):

```
[bec_unit_filters]
```

Layout stacked, servizi limitati a cinque selezionati in admin:

```
[bec_unit_filters layout="stacked" amenities="selected" amenities_limit="5"]
```

Solo camere e bagni su una pagina risultati personalizzata:

```
[bec_unit_filters filters="rooms,bathrooms" action="/availability-results/"]
```

Chiavi servizio specifiche (ignora la cura Listing Filters):

```
[bec_unit_filters filters="amenities" amenities="wifi,parking,pool"]
```

---

## Vedi anche

- **[Listing Filters admin](../04-units/07-listing-filters-admin.md)**
- **[bec_available_units_count](./16-bec-available-units-count.md)**
- **[Contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)**
