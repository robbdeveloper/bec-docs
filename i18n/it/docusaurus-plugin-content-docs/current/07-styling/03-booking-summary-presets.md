---
title: Preset riepilogo prenotazione
sidebar_label: Preset riepilogo prenotazione
description: Riepilogo prenotazione Default vs Compact, screenshot, interruttori accordion inclusioni condizioni.
---

# Preset riepilogo prenotazione

La scelta del preset è in **Booking Engine → Design → Booking summary → Layout style**.

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

Le intestazioni accordion del dettaglio tariffa usano un indicatore chevron (stilizzato in **`booking-summary-default.css`**). Sovrascrivi colore o rotazione chevron in **Extra CSS** via i selettori intestazione accordion sotto `.bec-booking-summary`.

{/* SCREENSHOT: Booking summary accordions expanded */}
![Accordion riepilogo prenotazione](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/booking-summary-accordions.png`): booking-summary-accordions.png */}

---

## Token colore (preset Default)

Il CSS Default del riepilogo legge token semantici da **Shared theme variables** (o default preset):

| Token | Uso tipico |
|-------|------------|
| **`--bec-bsummary-color-text`** | Testo corpo, nomi tariffa, giorno data ricerca |
| **`--bec-bsummary-color-primary`** | Prezzo headline, tariffa selezionata, pulsanti primari |
| **`--bec-bsummary-color-muted`** | Etichette secondarie, chevron, testo di supporto |
| **`--bec-bsummary-color-accent`** | Spinner e bordi di accento |

Definiscili una volta in **Shared theme variables** così preset Default e Compact restano allineati. Vedi **[Variabili tema e CSS personalizzato](./04-theme-variables-and-custom-css.md)**.

---

## Regione scroll drawer mobile

Su schermi piccoli il drawer slide-in usa una colonna flex: intestazione indietro e azioni in basso restano fissi mentre **`bec-booking-summary__drawer-body`** avvolge ricerca fino ai risultati preventivo e scorre se il contenuto supera il viewport. Stilizza la regione scroll in **Extra CSS** senza forzare overflow sull’intero drawer.

---

## Pagine correlate

- **[bec_booking_summary](../06-shortcodes/06-bec-booking-summary.md)**
