---
title: Kross Booking
sidebar_label: Kross Booking
description: Credenziali API Kross, Verifica connessione, URL base motore prenotazione, checkout GET vs POST e differenze rispetto alle API key.
---

# Kross Booking

Questa pagina tratta la configurazione **specifica Kross**: credenziali API in **Connection** e impostazioni **Checkout & fallback** che decidono dove atterrano gli ospiti dopo **Continue** / **Book**.

{/* SCREENSHOT: Split Connection credentials left and Checkout base URL right */}
![Impostazioni Kross Connection e Checkout](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/03-providers/kross-connection-checkout-split.png`): kross-connection-checkout-split.png */}

---

## Credenziali API (Connection)

Apri **Booking Engine → Connection**, scegli **Kross Booking** e compila:

| Campo | Significato semplice |
|-------|----------------------|
| **Hotel ID** | Quale hotel/struttura in Kross rappresenta questo sito WordPress. |
| **API key** | Segreto emesso da Kross per l’accesso API. |
| **API username** | Identità usata con la password per ottenere un **Bearer token**. |
| **API user password** | Password per quell’utente API. |

Usa **Verify connection** dopo aver salvato (o anche prima, secondo il comportamento del modulo) per confermare che WordPress possa scambiare un token — controllo rapido di sanità.

---

## URL motore di prenotazione (Checkout & fallback)

**Separato dalle credenziali API:** gli ospiti non incollano mai le API key. Serve l’URL del **sito di prenotazione pubblico** dove si completano le prenotazioni.

Apri **Booking Engine → Checkout & fallback**.

### URL base motore di prenotazione

Incolla l’URL completo che Kross ti ha fornito per il motore rivolto agli ospiti (spesso un sottodominio di prenotazione con il tuo brand).

- Se questo campo è **vuoto**, i pulsanti di checkout possono restare nascosti finché non lo configuri.

### Come aprire il motore di prenotazione

| Modalità | Esperienza visitatore |
|----------|------------------------|
| **GET** | Il browser naviga verso un URL lungo che include i parametri di soggiorno come query string. |
| **POST** | Il plugin produce un **modulo** che invia campi nascosti al motore quando l’ospite clicca — alcuni middleware richiedono POST. |

**Nota per POST:** il checkout Kross può richiedere un **rate ID** nei dati in uscita. Se nessuna tariffa è selezionata in URL/contesto, il checkout POST potrebbe non essere disponibile finché una tariffa non è risolvibile (es. dal preventivo).

---

## Supporto e dettagli API

Percorsi HTTP e tabella endpoint per sviluppatori: **[Riferimento API Kross](../09-developer-reference/05-kross-api.md)**.

---

## Pagine correlate

- **[Collega il provider](../02-getting-started/02-connect-your-provider.md)**
- **[Flusso di checkout](../05-bookings-and-checkout/03-checkout-flow.md)**
- **[Modalità fallback](../05-bookings-and-checkout/04-fallback-mode.md)**
