---
title: Shortcode `[bec_dates]`
sidebar_label: bec_dates
description: Date soggiorno leggibili dall’URL, shortcode bec_dates, CSS bec-shortcode-dates.
---

# `[bec_dates]`

Produce un semplice **intervallo di date leggibile** da **`bec_checkin`** e **`bec_checkout`** nell’URL.

---

## Dove posizionarlo

Intestazioni pagina, riepiloghi fissi, banner di conferma — ovunque già trasporti in avanti i parametri di ricerca.

---

## Attributi

_Nessuno._ Il comportamento può essere personalizzato dagli sviluppatori via filtri (`bec_shortcode_dates_format`).

---

## Esempi

```
[bec_dates]
```

---

## Output visitatore

Quando il **[contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)** è incompleto lo shortcode **non stampa nulla**.

Altrimenti i visitatori vedono tipicamente un paragrafo come:

> Lun 1 giu → Lun 8 giu

(La formattazione locale segue le impostazioni WordPress.)

{/* SCREENSHOT: bec_dates paragraph under page title */}
![bec_dates front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-dates.png`): bec-dates.png */}

---

## Hook CSS

- `bec-shortcode-dates`

---

## Suggerimenti

Usa **`[bec_booking_summary]`** quando servono date **più** ospiti e prezzi — il riepilogo offre letture più ricche.
