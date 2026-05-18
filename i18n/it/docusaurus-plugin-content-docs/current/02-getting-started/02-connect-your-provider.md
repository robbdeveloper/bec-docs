---
title: Collega il provider
sidebar_label: Collega il provider
description: Schermata Booking Engine Connection — scelta provider, credenziali Kross, Verifica connessione e impostazioni ospiti del modulo di ricerca.
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

## Modulo di ricerca (front-end)

Nella stessa pagina **Connection**, il plugin consente di contare gli ospiti nella **barra di ricerca front-end** (usata da `[bec_search]` e dentro il riepilogo prenotazione).

### Come vengono raccolti gli ospiti

| Opzione | Quando usarla |
|---------|-----------------|
| **Follow the active provider** | Predefinito. Allinea ciò che il provider si aspetta (es. un totale ospiti vs adulti + bambini). |
| **Single “Guests” count only** | Un solo numero per tutte le persone — più semplice per piccole strutture. |
| **Adults and children (separate fields)** | Quando serve uno split per prezzi o policy. |

### Età dei bambini nella ricerca

| Opzione | Significato |
|---------|-------------|
| **Follow the active provider** | Usa le regole del motore. |
| **Ask for each child’s age** | Mostra un campo età per bambino quando il modulo è in modalità adulti + bambini. |
| **Do not ask for child ages** | Non chiede le età (non usato se raccogli solo un totale ospiti). |

{/* SCREENSHOT: Search form behaviour section on Connection page */}
![Impostazioni modulo ricerca in Connection](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/connection-search-form-settings.png`): connection-search-form-settings.png */}

---

## Pagine singular unit (blocchi automatici)

Sempre in **Connection**, sotto **Single unit pages**, puoi far iniettare al plugin la UI di prenotazione sulle viste **singular `bec_unit`** senza shortcode nell’editor:

| Checkbox | Effetto |
|----------|---------|
| **Insert the availability search form above the main post content** | Antepone la stessa UI di **`[bec_search]`** al corpo unità. Disattiva se aggiungi `[bec_search]` (o un riepilogo) manualmente in template o editor a blocchi. |
| **Append the booking quote and Continue button after the main post content when the URL has dates** | Dopo il contenuto, quando il contesto di ricerca dall’URL è **completo**, aggiunge preventivo + CTA checkout (come **`[bec_booking_summary]`** / quote). Disattiva se usi `[bec_booking_summary]`, `[bec_quote]` o `[bec_checkout]` dove preferisci. |

Collegato a **[Contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)** e **[Flusso checkout](../05-bookings-and-checkout/03-checkout-flow.md)**.

---

## Pagine correlate

- **[Esegui la prima sincronizzazione](./03-run-your-first-sync.md)**
- **[Kross Booking (dettagli)](../03-providers/02-kross-booking.md)**
- **[Contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)**
