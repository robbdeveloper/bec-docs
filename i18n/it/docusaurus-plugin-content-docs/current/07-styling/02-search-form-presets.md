---
title: Preset modulo di ricerca
sidebar_label: Preset modulo di ricerca
description: Barra di ricerca Enhanced vs Classic, screenshot anteprima, hook CSS bec-search-form-wrap Enhanced Classic.
---

# Preset modulo di ricerca

La scelta del preset è in **Booking Engine → Styling → Search bar → Layout style**.

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

## Idee hook Extra CSS

Abbina i preset ai selettori documentati in **[Variabili tema e CSS personalizzato](./04-theme-variables-and-custom-css.md)** — partendo da `.bec-search-form` e scendendo negli elementi `bec-search-form__*`.

---

## Pagine correlate

- **[Shortcode bec_search](../06-shortcodes/02-bec-search.md)**
