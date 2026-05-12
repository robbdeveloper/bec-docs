---
title: Disponibilità e preventivi
sidebar_label: Disponibilità e preventivi
description: Cos’è un preventivo, cache transiente ~5 minuti, nessuna disponibilità vs errori di validazione, preventivi bulk sugli archivi.
---

# Disponibilità e preventivi

Un **quote** (preventivo) è la risposta strutturata del plugin dal provider di prenotazione per:

> “Questa **unità**, queste **date**, questo **mix ospiti** — è prenotabile e a quali condizioni?”

Shortcode come **`[bec_quote]`** e **`[bec_booking_summary]`** trasformano i preventivi in testo e dettagli per il visitatore.

---

## Quando partono i preventivi

I preventivi partono solo se il **[contesto di ricerca](./01-search-context-and-urls.md)** è **completo** (date + rappresentazione ospiti).

---

## Cache

I risultati sono memorizzati brevemente (**circa cinque minuti** di default) così le pagine archivio non saturano l’API.

- Cambiare date o ospiti cambia la chiave cache — dopo le modifiche i visitatori vedono ricerche aggiornate.
- Gli sviluppatori possono regolare il TTL via filtri documentati.

---

## Possibili esiti

| Esito | Comportamento tipico lato visitatore |
|-------|-------------------------------------|
| **Available** | Righe di prezzo, pulsante Continua abilitato nel riepilogo prenotazione. |
| **No availability** | Messaggio che nulla è prenotabile per quel soggiorno — resta comunque la UI di ricerca dove configurata. |
| **Validation failed** | Date o occupazione rifiutate prima di contattare il provider — spesso vicino al modulo di ricerca. |
| **API error** | Secondo le impostazioni di **[fallback](./04-fallback-mode.md)**, i visitatori possono vedere contenuto di contatto invece di errori tecnici. |

---

## Preventivi bulk (nota tecnica)

Alcuni provider (incluso **Kross**) possono recuperare **molte unità insieme** per un intervallo di date e riusare il batch nei loop degli archivi — i visitatori vedono comunque righe per unità, ma il traffico API resta efficiente.

---

## Pagine correlate

- **[Elementor Loop Grid — nascondere unità non disponibili](../06-shortcodes/11-elementor-loop-grid-availability-filter.md)**
- **[Flusso di checkout](./03-checkout-flow.md)**
