---
title: Shortcode `[bec_checkout]`
sidebar_label: bec_checkout
description: Shortcode CTA checkout — link o modulo POST, unit_id, CSS bec-shortcode-checkout bec-checkout-cta.
---

# `[bec_checkout]`

Produce il controllo principale **Prenota ora / Continua** che invia i visitatori al motore di prenotazione esterno.

---

## Dove posizionarlo

Template minimal dove gestisci i prezzi altrove — o accanto a **`[bec_quote]`** quando **non** usi **`[bec_booking_summary]`**.

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`unit_id`** | `0` | Post Unità; `0` usa il contesto singola unità. |

La disponibilità dell’URL di checkout dipende ancora dall’**[URL base configurato](../03-providers/02-kross-booking.md)** e da un **[contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)** valido.

---

## Esempi

```
[bec_checkout]
```

```
[bec_checkout unit_id="789"]
```

---

## Output visitatore

- **Checkout GET:** Ancora stilizzata come CTA (`bec-checkout-cta`).
- **Checkout POST:** `<form>` (`bec-checkout-form`) che invia campi nascosti.

{/* SCREENSHOT: bec_checkout button on unit page */}
![Pulsante bec_checkout](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-checkout.png`): bec-checkout.png */}

---

## Hook CSS

- Wrapper: `bec-shortcode-checkout`
- Classi CTA/form interne come sopra

---

## Suggerimenti

Preferisci **`[bec_booking_summary]`** se vuoi ricerca incorporata + drawer mobile + dettaglio — il riepilogo riusa internamente lo stesso renderer di checkout.
