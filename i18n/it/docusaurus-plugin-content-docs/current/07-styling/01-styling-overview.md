---
title: Panoramica Design
sidebar_label: Panoramica Design
description: Pagina admin Booking Engine Design, variabili tema, preset ricerca e riepilogo prenotazione, accordion, Extra CSS, unit filters.
---

# Panoramica Design

Apri **Booking Engine → Design** per influenzare l’aspetto della barra di ricerca, del riepilogo prenotazione e dei filtri unità **senza modificare PHP**.

{/* SCREENSHOT: Full Design admin page */}
![Pagina impostazioni Design](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/styling-page-full.png`): styling-page-full.png */}

---

## Variabili tema condivise

La grande area di testo **Shared theme variables** accetta righe Custom Property (variabili CSS) o piccole regole. Il plugin le inietta insieme agli stili preset così ricerca e riepilogo possono condividere colori, raggi o font coerenti.

Esempio (illustrativo):

```css
--bec-brand: #1a365d;
--bec-radius: 8px;
```

---

## Sezione barra di ricerca

| Controllo | Scopo |
|-----------|--------|
| **Layout style** | **Enhanced** (intervallo date + popover ospiti) vs **Classic** (controlli separati). |
| **Extra CSS** | Regole libere sulle classi wrapper della ricerca — vedi **[Preset modulo di ricerca](./02-search-form-presets.md)**. |

---

## Sezione riepilogo prenotazione

| Controllo | Scopo |
|-----------|--------|
| **Layout style** | Layout desktop **Default** vs **Compact**. |
| **Rate details accordions** | Attiva pannelli **Inclusions** / **Conditions** quando il testo del preventivo li fornisce. |
| **Extra CSS** | Punta alla struttura DOM del riepilogo prenotazione. |

---

## Unit filters — extra CSS

**Option key:** `bec_styling_filters_extra_css`

CSS libero per il markup **`[bec_unit_filters]`** (`.bec-unit-filters*`, pannelli picker, sheet servizi). Vedi **[bec_unit_filters](../06-shortcodes/15-bec-unit-filters.md)** e **[Listing Filters admin](../04-units/07-listing-filters-admin.md)**.

---

## Sanificazione e sicurezza

I campi CSS passano da una sanificazione che blocca sequenze palesemente pericolose (come aperture HTML grezze nel textarea). Rispetta limiti di lunghezza ragionevoli — sposta fogli di stile enormi nel tema se necessario.

---

## Pagine correlate

- **[Variabili tema e CSS personalizzato](./04-theme-variables-and-custom-css.md)**
