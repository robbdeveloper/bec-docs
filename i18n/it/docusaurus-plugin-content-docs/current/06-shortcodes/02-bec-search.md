---
title: Shortcode `[bec_search]`
sidebar_label: bec_search
description: Modulo ricerca disponibilità, attributi, form_id, hook CSS, preset Enhanced vs Classic.
---

# `[bec_search]`

Mostra la **barra di ricerca disponibilità** che i visitatori usano per check-in, check-out e ospiti. Invio del modulo ricarica la pagina con parametri **`bec_*`** così ogni altro shortcode vede gli stessi dettagli di soggiorno.

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

## Attributi

| Attributo | Predefinito | Significato |
|-----------|---------------|-------------|
| **`context`** | `shortcode` | Identificatore passato a hook di stile/filtro — cambialo se mostri più ricerche in modo diverso. |
| **`form_id`** | `bec-search-form-sc` | `id` HTML sul `<form>` — deve essere unico per pagina se emetti più moduli. |

Il comportamento dei campi ospite (ospiti unici vs adulti+bambini vs default provider) è configurato globalmente in **Booking Engine → Connection**, non nello shortcode.

---

## Esempi

```
[bec_search]
```

```
[bec_search form_id="homepage-search" context="homepage"]
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

- Abbina a **`[bec_unit_url]`** sulle schede elenco così il drill-down mantiene le date.
- I messaggi di validazione compaiono vicino al modulo quando le date contraddicono le regole del provider dopo l’invio.

---

## Vedi anche

- **[Contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)**
