---
title: Preset modulo di ricerca
sidebar_label: Preset modulo di ricerca
description: Barra di ricerca Enhanced vs Classic, screenshot anteprima, hook CSS bec-search-form-wrap Enhanced Classic.
---

# Preset modulo di ricerca

La scelta del preset è in **Booking Engine → Design → Search bar → Layout style**.

---

## Enhanced

- Controllo date in stile **intervallo** moderno più selettore ospiti consolidato (pattern popover).
- Aggiunge classi modificatore come `bec-search-form-wrap--enhanced` e `bec-search-form--enhanced`.

{/* SCREENSHOT: Enhanced preset wide desktop */}
![Preset ricerca Enhanced](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/search-enhanced-desktop.png`): search-enhanced-desktop.png */}

**Scegli Enhanced quando** vuoi una barra orizzontale compatta adatta alle hero.

---

## Classic

- Input separati simili ai widget di prenotazione tradizionali.

{/* SCREENSHOT: Classic preset desktop */}
![Preset ricerca Classic](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/search-classic-desktop.png`): search-classic-desktop.png */}

**Scegli Classic quando** il tema stilizza già input discreti o preferisci massima familiarità.

---

## Posizionamento popover (Enhanced)

Su desktop e tablet, i popover data e ospiti rispettano **`popover_placement`** su **`[bec_search]`** (o **`SearchForm::render()`**):

| Valore | Comportamento |
|--------|----------------|
| **`auto`** (default) | Si apre sotto il trigger; passa **sopra** se non c’è spazio sotto nel viewport. Si riposiziona su scroll/resize mentre è aperto. |
| **`top`** | Si apre sempre sopra. |
| **`bottom`** | Si apre sempre sotto. |

Override filtro: **`bec_search_form_popover_placement`**. Su mobile i popover usano comunque il layout bottom sheet indipendentemente da questa impostazione.

---

## Footer intervallo date (Enhanced)

Il footer calendario (`.drp-selected`, accanto a Cancel/Apply) mostra l’intervallo selezionato con **`daterange_format`** o **`daterange_preset`** da **`[bec_search]`** / **`[bec_booking_summary]`**. Dalla **0.1.36**, il footer usa una griglia responsive così lettura date e pulsanti restano allineati su viewport stretti.

I form Enhanced espongono **`data-bec-daterange-format`** per il picker Moment.js. Filtri: **`bec_search_form_daterange_format`**, **`bec_daterange_moment_format_presets`**, **`bec_php_date_format_to_moment`**.

---

## Backdrop e sincronizzazione overlay

La ricerca Enhanced condividde backdrop/overlay tra picker intervallo date e popover ospiti così solo un pannello risulta “aperto”. Se personalizzi z-index o colore overlay in **Extra CSS**, punta sia agli hook backdrop di `.bec-search-form-wrap--enhanced` sia ai wrapper popover ospiti per coerenza visiva.

---

## Idee hook Extra CSS

Abbina i preset ai selettori documentati in **[Variabili tema e CSS personalizzato](./04-theme-variables-and-custom-css.md)** — partendo da `.bec-search-form` e scendendo negli elementi `bec-search-form__*`.

---

## Pagine correlate

- **[Shortcode bec_search](../06-shortcodes/02-bec-search.md)**
