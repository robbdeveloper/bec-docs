---
title: Shortcode '[bec_search]'
sidebar_label: bec_search
description: Shortcode bec_search redirect_url action archivio unità parametri GET bec_* attributi context form_id hook CSS Enhanced Classic.
---

# `[bec_search]`

Mostra la **barra di ricerca disponibilità** per check-in, check-out e ospiti. Il modulo usa **GET**: l’invio invia i parametri **`bec_*`** all’URL del **`action`** del form. Ogni pagina che riceve quei parametri condivide lo stesso **contesto di ricerca** con preventivi, checkout e filtri elenco.

---

## Dove posizionarlo

- Hero homepage, template header fisso, landing dedicata.
- Dentro **`[bec_booking_summary]`** riusa automaticamente gli stessi preset di stile.

{/* SCREENSHOT: Enhanced search bar front-end */}
![bec_search preset Enhanced](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-search-enhanced.png`): bec-search-enhanced.png */}

{/* SCREENSHOT: Classic search bar front-end */}
![bec_search preset Classic](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-search-classic.png`): bec-search-classic.png */}

---

## Dove viene inviato il modulo (`action`)

| Caso | `action` del form (destinazione GET) |
|------|--------------------------------------|
| **`[bec_search]`** senza **`redirect_url`** | Archivio delle **unità** (`get_post_type_archive_link` per il post type unità). Se WordPress non può costruire il link (es. **Unit archive** disattivato in **Booking Engine → Units**), si usa l’**URL home**. Tipico: ricerca in homepage → elenco inventario con `?bec_checkin=…`. |
| **`[bec_search]`** con **`redirect_url="/percorso/"`** | Invio all’URL indicato (URL completo o percorso radice-rel). I parametri **`bec_*`** sono aggiunti come query string. Esempio: `[bec_search redirect_url="/disponibilita/"]`. |

**Ricerca inserita automaticamente** (singola unità, `bec_render_search_form()`, hook tema) usa le regole di `SearchForm`: su **archivio unità** o **pagina singola** l’`action` è di solito **quella** pagina; altrimenti spesso **home**. **`redirect_url`** vuoto sullo shortcode **non** si applica lì — da PHP usa il filtro **`bec_search_form_action`** se serve un target fisso.

La modalità campi ospite è configurata in **Booking Engine → Frontend**, non su questo shortcode.

---

## Attributi

| Attribute | Default | Significato |
|-----------|---------|-------------|
| **`context`** | `shortcode` | Identificatore passato a hook stile/filtri — cambia se renderizzi più ricerche in modo diverso. |
| **`form_id`** | `bec-search-form-sc` | Base per l’`id` HTML sul `<form>` — il plugin aggiunge un suffisso **`wp_unique_id()`** così più istanze restano univoche. |
| **`redirect_url`** | *(empty)* | Opzionale. Destinazione GET (vedi **Dove viene inviato il modulo**). Passa da `esc_url()`; consentiti percorsi radice-relativi. |
| **`popover_placement`** | `auto` | Posizione popover calendario: `auto`, `top`, o `bottom`. `auto` si adatta allo spazio viewport. |
| **`daterange_format`** | *(empty)* | Formato PHP `date_i18n()` per il footer calendario. Se impostato, sovrascrive **`daterange_preset`**. |
| **`daterange_preset`** | `medium` | Formato footer integrato quando **`daterange_format`** è vuoto: `iso`, `short`, `medium`, `long`, o `full`. |

Filtri: **`bec_search_form_daterange_format`**, **`bec_search_form_popover_placement`**.

La modalità campi ospite front-end (follow provider / total guests / adults+children) è configurata in **Booking Engine → Frontend**, non su questo shortcode.

---

## Esempi

```
[bec_search]
```

```
[bec_search form_id="homepage-search" context="homepage"]
```

Invio a una pagina risultati personalizzata (stessa query `bec_*`):

```
[bec_search redirect_url="/disponibilita/" form_id="ricerca-risultati"]
```

Forza popover sopra la barra su layout stretti:

```
[bec_search popover_placement="top" daterange_preset="long"]
```

---

## Hook CSS (principali)

I wrapper esterni variano per preset:

- `bec-search-form-wrap`, `bec-search-form-wrap--enhanced`
- `bec-search-form`, `bec-search-form--enhanced`
- Parti interne come `bec-search-form__bar`, `bec-search-form__control`, `bec-search-form__button`, `bec-search-form__error`, `bec-search-form__child-ages`

I bundle specifici del preset stanno negli asset del plugin (`search-form-enhanced.css`, ecc.) — vedi **[Preset modulo di ricerca](../07-styling/02-search-form-presets.md)**.

---

## Suggerimenti

- **`[bec_search]`** senza **`redirect_url`** si aspetta un link **archivio unità** valido — se hai disattivato **Unit archive**, l’invio va in fallback alla **home**; riattiva l’archivio oppure imposta **`redirect_url`**.
- Abbina a **`[bec_unit_url]`** sulle schede elenco così il drill-down mantiene le date.
- I messaggi di validazione compaiono vicino al modulo quando le date contraddicono le regole del provider dopo l’invio.

---

## Vedi anche

- **[Impostazioni Frontend](../02-getting-started/06-frontend-settings.md)**
- **[Contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)**
