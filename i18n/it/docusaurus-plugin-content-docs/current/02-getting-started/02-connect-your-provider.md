---
title: Collega il provider
sidebar_label: Collega il provider
description: Schermata Booking Engine Connection — scelta provider, credenziali Kross e Verifica connessione.
---

# Collega il provider

Apri **Booking Engine → Connection**.

{/* SCREENSHOT: Full Connection page showing Provider dropdown at top */}
![Panoramica pagina Connection](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/connection-page-overview.png`): connection-page-overview.png */}

---

## Provider

Usa il menu **Provider** per scegliere quale integrazione di prenotazione è attiva.

In origine vedrai di norma **Kross Booking**. Ulteriori provider possono essere aggiunti dagli sviluppatori tramite filtri WordPress (vedi **[Aggiungere un provider](../09-developer-reference/06-adding-a-provider.md)**).

**Option key:** `bec_active_provider`

---

## Credenziali (Kross)

Compila i campi dal tuo account Kross (i nomi possono variare nella loro dashboard):

| Campo | Scopo |
|-------|--------|
| **Hotel ID** | Identifica la tua struttura verso l’API. |
| **API key** | Chiave segreta usata insieme all’utente API per ottenere un token di accesso. |
| **API username** | Nome utente per l’autenticazione API (la documentazione cita spesso esempi come `apiv5`). |
| **API user password** | Password per quell’utente API. |

**Suggerimento:** i campi di tipo password di solito **mantengono il valore salvato** se li lasci vuoti al salvataggio — inserisci un nuovo segreto solo quando intendi sostituirlo.

{/* SCREENSHOT: Connection credentials section only */}
![Sezione credenziali Connection](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/connection-credentials.png`): connection-credentials.png */}

Clicca **Save connection settings** al termine.

### Verifica connessione

Clicca **Verify connection** per eseguire uno scambio token reale con il provider (senza mostrare i segreti a schermo).

- **Successo** — Compare un avviso di amministrazione che conferma la risposta dell’API.
- **Fallimento** — Controlla refusi, liste IP consentite e che il server raggiunga l’API su HTTPS.

{/* SCREENSHOT: Green success notice after Verify connection */}
![Avviso di successo Verifica connessione](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/verify-connection-success.png`): verify-connection-success.png */}

---

## Impostazioni ricerca e singola unità

Modalità campi ospiti, età bambini e blocchi ricerca/prenotazione automatici sulle pagine unità sono passati a **Booking Engine → Frontend**. Vedi **[Impostazioni Frontend](./06-frontend-settings.md)**.

---

## Pagine correlate

- **[Esegui la prima sincronizzazione](./03-run-your-first-sync.md)**
- **[Kross Booking (dettagli)](../03-providers/02-kross-booking.md)**
- **[Panoramica schermate admin](./05-admin-screens.md)**
