---
title: Preset riepilogo prenotazione
sidebar_label: Preset riepilogo prenotazione
description: Riepilogo prenotazione Default vs Compact, screenshot, interruttori accordion inclusioni condizioni.
---

# Preset riepilogo prenotazione

La scelta del preset è in **Booking Engine → Styling → Booking summary → Layout style**.

---

## Default

Il pannello ricerca si impila sopra i blocchi prezzo principali su desktop — esperienza sidebar canonica.

{/* SCREENSHOT: Default preset desktop */}
![Preset Default riepilogo](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/booking-summary-default.png`): booking-summary-default.png */}

---

## Compact

Aggiunge `bec-booking-summary--preset-compact`, riposizionando le sezioni così la ricerca segue il prezzo principale su breakpoint larghi — ideale quando lo spazio orizzontale è poco.

{/* SCREENSHOT: Compact preset desktop */}
![Preset Compact riepilogo](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/booking-summary-compact.png`): booking-summary-compact.png */}

---

## Accordion per dettaglio tariffa

Due checkbox indipendenti governano pannelli opzionali a scomparsa nei riepiloghi:

| Checkbox | Mostra l’accordion quando il preventivo fornisce testo corrispondente |
|----------|------------------------------------------------------------------------|
| **Inclusions** | Evidenzia vantaggi inclusi / righe trattamento pasti. |
| **Conditions** | Frammenti su cancellazione / condizioni di pagamento. |

Disattiva uno o entrambi se il testo legale deve restare fuori da regioni collassabili o se il tema gestisce i disclaimer globalmente.

{/* SCREENSHOT: Booking summary accordions expanded */}
![Accordion riepilogo prenotazione](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/booking-summary-accordions.png`): booking-summary-accordions.png */}

---

## Pagine correlate

- **[bec_booking_summary](../06-shortcodes/06-bec-booking-summary.md)**
