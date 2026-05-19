---
title: Shortcode `[bec_dates]`
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

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`date_format`** | *(vuoto)* | Stringa formato PHP `date_i18n()`. Se impostata, sovrascrive **`preset`**. |
| **`preset`** | `iso` | Formato integrato: `iso`, `short`, `medium`, `long`, `full` (nomi mese/giorno localizzati). |
| **`label_style`** | `arrow` | Modello intervallo: `arrow` (`%1$s → %2$s`), `from_to`, `from_to_lower`. Ignorato se è impostato **`label`**. |
| **`label`** | *(vuoto)* | Pattern `sprintf` personalizzato: **`%1$s`** = check-in, **`%2$s`** = check-out (sovrascrive **`label_style`**). |

Predefiniti globali: filtro **`bec_date_format_defaults`** (contesto `bec_dates`).

Gli sviluppatori possono ancora sostituire tutto l’output con **`bec_shortcode_dates_format`** (ritorno non vuoto salta la formattazione attributi).

Altri filtri: **`bec_shortcode_dates_text`**, **`bec_shortcode_dates_html`**, **`bec_format_date`**, **`bec_format_date_range`**.

---

## Esempi

Predefinito (date ISO con freccia):

```
[bec_dates]
```

Formato lungo con “da … a …”:

```
[bec_dates preset="long" label_style="from_to"]
```

Formato data PHP personalizzato:

```
[bec_dates date_format="j M Y" label="%1$s – %2$s"]
```

---

## Output visitatore

Quando il **[contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)** è incompleto lo shortcode **non stampa nulla**.

Altrimenti i visitatori vedono tipicamente un paragrafo come:

> Lun 1 giu → Lun 8 giu

(con **`preset="iso"`**)

oppure, con **`preset="long"`**:

> lunedì 1 giugno 2026 → lunedì 8 giugno 2026

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
