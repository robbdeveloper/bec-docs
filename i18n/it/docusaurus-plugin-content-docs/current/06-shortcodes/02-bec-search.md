---
title: Shortcode `[bec_search]`
sidebar_label: bec_search
description: Modulo ricerca GET, redirect_url, action archivio unità, attributi context form_id, hook CSS, preset Enhanced e Classic.
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
| **`[bec_search]`** senza **`redirect_url`** | Archivio delle **unità** (`get_post_type_archive_link`). Se WordPress non può costruire il link (es. **Unit archive** disattivato in **Units — permalinks**), si usa l’**URL home**. Tipico: ricerca in homepage → elenco inventario con `?bec_checkin=…`. |
| **`[bec_search]`** con **`redirect_url="/percorso/"`** | Invio all’URL indicato (URL completo o percorso radice-rel). I parametri **`bec_*`** sono aggiunti come query string. Esempio: `[bec_search redirect_url="/disponibilita/"]`. |

**Ricerca inserita automaticamente** (singola unità, `bec_render_search_form()`, hook tema) usa le regole di `SearchForm`: su **archivio unità** o **pagina singola** l’`action` è di solito **quella** pagina; altrimenti spesso **home**. Lo shortcode con `redirect_url` vuoto **non** modifica questi percorsi — da PHP usa il filtro **`bec_search_form_action`** se serve un target fisso.

La modalità campi ospite (follow provider / ospiti totali / adulti+bambini) resta in **Booking Engine → Connection**, non negli attributi dello shortcode.

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|---------------|-------------|
| **`context`** | `shortcode` | Identificatore per hook di stile/filtri — utile con più ricerche nella stessa pagina. |
| **`form_id`** | `bec-search-form-sc` | Attributo HTML `id` sul `<form>` — unico per pagina se ci sono più moduli. |
| **`redirect_url`** | *(vuoto)* | Opzionale. Destinazione GET (vedi sopra). Passa da `esc_url()`; consentiti percorsi radice-relativi. |

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

- **[Contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)**
