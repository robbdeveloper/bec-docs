---
title: Shortcode `[bec_unit_url]`
sidebar_label: bec_unit_url
description: Stampa permalink unità con parametri ricerca preservati, shortcode unit_id, uso in href, filtro bec_shortcode_unit_url.
---

# `[bec_unit_url]`

Stampa **solo il testo URL** per il permalink di un’unità, fondendo gli argomenti query **`bec_*`** attuali — ideale dentro `href=""`.

---

## Dove posizionarlo

Griglie elenco, menu di navigazione costruiti da blocchi HTML, pulsanti nei page builder che consentono shortcode negli attributi.

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`unit_id`** | `0` | ID post Unità; `0` usa il contesto del loop. |

---

## Esempi

```html
<a href="[bec_unit_url]">Vedi struttura</a>
```

```
[bec_unit_url unit_id="321"]
```

(Alcuni builder richiedono di abilitare l’esecuzione shortcode nei widget HTML.)

{/* SCREENSHOT: Listing card link inspector showing merged URL */}
![Uso bec_unit_url in elenco](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-url.png`): bec-unit-url.png */}

---

## Hook CSS

_Nessuno_ — output URL grezzo.

---

## Suggerimenti

Gli sviluppatori possono modificare via filtro **`bec_shortcode_unit_url`**.

Assicurati che i template di destinazione mostrino **`[bec_booking_summary]`** o blocchi correlati così gli ospiti atterrano con UI di checkout utilizzabile.
