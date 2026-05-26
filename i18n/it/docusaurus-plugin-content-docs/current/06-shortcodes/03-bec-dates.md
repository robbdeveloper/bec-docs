---
title: Shortcode '[bec_dates]'
sidebar_label: bec_dates
description: Date soggiorno leggibili dall’URL, shortcode bec_dates, date_format preset label_style label, CSS bec-shortcode-dates.
---

# `[bec_dates]`

Produce un semplice **intervallo di date leggibile** da **`bec_checkin`** e **`bec_checkout`** nell’URL.

---

## Dove posizionarlo

Intestazioni pagina, riepiloghi fissi, banner di conferma — ovunque già trasporti in avanti i parametri di ricerca.

---

## Attributi

| Attribute | Default | Significato |
|-----------|---------|-------------|
| **`date_format`** | *(empty)* | Stringa formato PHP `date_i18n()`. Se impostata, sovrascrive **`preset`**. |
| **`preset`** | `long` | Formato integrato: `iso`, `short`, `medium`, `long`, `full` (nomi mese/giorno localizzati). |
| **`label_style`** | `from_to` | Modello intervallo: `arrow` (`%1$s → %2$s`), `from_to`, `from_to_lower`. Ignorato se è impostato **`label`**. |
| **`label`** | *(empty)* | Pattern `sprintf` personalizzato: **`%1$s`** = check-in, **`%2$s`** = check-out (sovrascrive **`label_style`**). |

Predefiniti globali: filtro **`bec_date_format_defaults`** (contesto `bec_dates`).

Gli sviluppatori possono ancora sostituire tutto l’output con **`bec_shortcode_dates_format`** (ritorno non vuoto salta la formattazione attributi).

Altri filtri: **`bec_shortcode_dates_text`**, **`bec_shortcode_dates_html`**, **`bec_format_date`**, **`bec_format_date_range`**.

---

## Esempi

Predefinito (formato lungo con “da … a …”):

```
[bec_dates]
```

Date ISO con separatore freccia:

```
[bec_dates preset="iso" label_style="arrow"]
```

Formato data PHP personalizzato:

```
[bec_dates date_format="j M Y" label="%1$s – %2$s"]
```

---

## Output visitatore

Quando il **[contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)** è incompleto lo shortcode **non stampa nulla**.

Altrimenti i visitatori vedono tipicamente un paragrafo come:

> lunedì 1 giugno 2026 a lunedì 8 giugno 2026

(con predefiniti **`preset="long"`** e **`label_style="from_to"`**)

oppure, con **`preset="iso"`** e **`label_style="arrow"`**:

> 2026-06-01 → 2026-06-08

(La formattazione locale segue WordPress e **`preset`** / **`date_format`** scelti.)

{/* SCREENSHOT: bec_dates paragraph under page title */}
![bec_dates front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-dates.png`): bec-dates.png */}

---

## Hook CSS

- `bec-shortcode-dates`

---

## Suggerimenti

Usa **`[bec_booking_summary]`** quando servono date **più** ospiti e prezzi — il riepilogo offre letture più ricche.
