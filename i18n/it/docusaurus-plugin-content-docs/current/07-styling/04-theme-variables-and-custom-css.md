---
title: Variabili tema e CSS personalizzato
sidebar_label: Variabili tema e CSS
description: Elenco di riferimento classi CSS per ricerca, riepilogo prenotazione, checkout, fallback, servizi, camere — targeting campi Extra CSS.
---

# Variabili tema e CSS personalizzato

Usa le textarea **Booking Engine → Styling** — o il foglio di stile del tema — per ritocchi visivi.

---

## Textarea variabili tema

Incolla Custom Properties riutilizzabili (`--token: value;`). Poiché entrambi i preset consumano gli stessi hook, definire i colori una sola volta mantiene allineate barre Enhanced e riepiloghi.

---

## Hook barra di ricerca

Prefissi:

- `.bec-search-form-wrap`, `.bec-search-form-wrap--enhanced`
- `.bec-search-form`, `.bec-search-form--enhanced`

Discendenti rappresentativi:

- `.bec-search-form__bar`
- `.bec-search-form__control`
- `.bec-search-form__button`
- `.bec-search-form__error`
- `.bec-search-form__child-ages`

Ispeziona `assets/styling/search-form-enhanced.css` / `search-form-classic.css` nel plugin per selettori eshaustivi.

{/* SCREENSHOT: Browser devtools highlighting bec-search-form element */}
![Ispeziona hook CSS modulo ricerca](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/devtools-search-classes.png`): devtools-search-classes.png */}

---

## Hook riepilogo prenotazione

Radice:

- `.bec-booking-summary`
- `.bec-booking-summary--preset-compact`

Regioni rappresentative (non esaustivo):

- `.bec-booking-summary__search`
- `.bec-booking-summary__desktop`
- `.bec-booking-summary__head-price`
- `.bec-booking-summary__breakdown`
- `.bec-booking-summary__actions`
- `.bec-booking-summary__mobile`
- `.bec-booking-summary__drawer`

Abbinali ad attributi `data-*` come `data-bec-booking-summary`, `data-bec-bsummary-continue`, `data-bec-rate-id` per selettori avanzati.

{/* SCREENSHOT: Devtools tree for booking summary */}
![Ispeziona hook CSS riepilogo](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/devtools-summary-classes.png`): devtools-summary-classes.png */}

---

## Hook checkout e preventivo

- `.bec-shortcode-checkout`
- `.bec-checkout-cta`, `.bec-checkout-form`
- `.bec-shortcode-quote`, `.bec-shortcode-quote__rates`, `.bec-shortcode-quote__rate`

---

## Hook fallback

- `.bec-fallback`, `.bec-fallback__link`, `.bec-fallback__inner`

---

## Hook renderer `[bec_unit_info]`

Griglia servizi:

- `.bec-amenities`, `.bec-amenities__item`, …

Disposizione camere:

- `.bec-bedrooms`, `.bec-bedrooms__grid`, …

---

## Suggerimenti

Ambito le regole sotto un wrapper genitore controllato dal tema (es. `.site-content .bec-booking-summary`) per evitare di stilizzare per errore le anteprime in admin.
