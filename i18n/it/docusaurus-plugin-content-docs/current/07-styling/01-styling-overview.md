---
title: Panoramica stile
sidebar_label: Panoramica stile
description: Pagina admin Booking Engine Styling, variabili tema, preset ricerca e riepilogo prenotazione, accordion, Extra CSS.
---

# Panoramica stile

Apri **Booking Engine → Styling** per influenzare l’aspetto della barra di ricerca e del riepilogo prenotazione **senza modificare PHP**.

{/* SCREENSHOT: Full Styling admin page */}
![Pagina impostazioni Styling](/img/bec-screenshot-placeholder.svg)
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

## Sanificazione e sicurezza

I campi CSS passano da una sanificazione che blocca sequenze palesemente pericolose (come aperture HTML grezze nel textarea). Risposta limiti di lunghezza ragionevoli — sposta fogli di stile enormi nel tema se necessario.

---

## Pagine correlate

- **[Variabili tema e CSS personalizzato](./04-theme-variables-and-custom-css.md)**
