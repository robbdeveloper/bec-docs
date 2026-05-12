---
title: Flusso di checkout
sidebar_label: Flusso di checkout
description: Passaggio al motore di prenotazione esterno checkout GET vs POST costruzione URL più tariffe e comportamento pulsante Continua.
---

# Flusso di checkout

**Checkout**, in questo plugin, significa **passare** il visitatore da WordPress al sito di prenotazione del provider — non il checkout WooCommerce.

---

## Prerequisiti

Affinché compaiano link/moduli di checkout:

1. Il **[contesto di ricerca](./01-search-context-and-urls.md)** deve essere completo e valido.
2. L’unità deve mappare a un ID inventario remoto (**External ID**).
3. **Booking engine base URL** deve essere configurato in **Booking Engine → Checkout & fallback**.
4. Per checkout **POST** con **Kross** può servire un **rate ID** — senza di esso il checkout può restare disabilitato finché il preventivo non ne fornisce uno.

---

## GET vs POST

| Modalità | Cosa succede |
|----------|----------------|
| **GET** | Il visitatore clicca **Continue** / **Book** → il browser naviga verso un URL con parametri di soggiorno nella query string. |
| **POST** | Il visitatore clicca → il browser invia un **modulo** HTML con campi nascosti (alcuni stack richiedono corpi POST). |

Configura questo in **Checkout & fallback → How to open the booking engine**.

---

## Più tariffe

Quando si applicano più tariffe:

- I visitatori possono scegliere una tariffa dentro **`[bec_booking_summary]`**, aggiungendo **`bec_rate_id`** all’URL.
- Il checkout cerca di riusare la tariffa selezionata costruendo l’URL/modulo in uscita.

{/* SCREENSHOT: Booking summary showing multiple rate choices */}
![Selettore tariffe riepilogo prenotazione](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/05-bookings-and-checkout/booking-summary-rates.png`): booking-summary-rates.png */}

---

## Fascia prenotazione automatica sulle singole unità

Sulle pagine singola unità il plugin può appendere **CTA di prenotazione o fallback** dopo il contenuto in base ai preventivi — tema e shortcode controllano comunque il layout principale.

---

## Pagine correlate

- **[Kross Booking](../03-providers/02-kross-booking.md)**
- **[Modalità fallback](./04-fallback-mode.md)**
