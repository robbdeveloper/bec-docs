---
title: Requisiti
sidebar_label: Requisiti
description: Versioni supportate di WordPress e PHP, più credenziali e URL necessari per Kross Booking.
---

# Requisiti

## WordPress e PHP

| Requisito | Dettagli |
|-----------|----------|
| **WordPress** | **6.4** o più recente (vedi readme del plugin per “Testato fino a”). |
| **PHP** | **8.0** o più recente. |

L’hosting deve consentire richieste **HTTPS** in uscita così il plugin può raggiungere l’API del provider di prenotazione.

---

## Accesso amministratore

Tutte le schermate **Booking Engine** richiedono un utente che possa **gestire le impostazioni** — di norma un **Amministratore**. Se usi un editor dei ruoli, assicura l’accesso dove serve.

---

## Cosa serve da Kross (configurazione tipica)

Prima di configurare **[Connessione](../02-getting-started/02-connect-your-provider.md)** e **[Checkout e fallback](../03-providers/02-kross-booking.md)**, raccogli:

| Elemento | Uso |
|----------|-----|
| **Hotel ID** | Indica all’API quale struttura interrogare. |
| **API key** | Chiave segreta abbinata alla tua integrazione. |
| **Nome utente API** | Identità di accesso per lo scambio token API (il provider può chiamarla “API user”). |
| **Password API** | Password per quell’utente API. |
| **URL base motore prenotazione** — Il sito **rivolto al cliente** dove gli ospiti completano la prenotazione dopo aver cliccato **Continua** / **Prenota** sul tuo WordPress (configurato separatamente dalle credenziali API). |

Le etichette nella dashboard Kross possono differire; abbinalle ai campi in **Booking Engine → Connessione** e **Booking Engine → Checkout e fallback**.

{/* SCREENSHOT: Blurred/redacted Connection credentials fields showing labels only */}
![Etichette campi credenziali Connessione](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/01-introduction/kross-credentials-blurred.png`): kross-credentials-blurred.png */}

---

## Pagine correlate

- **[Installa il plugin](../02-getting-started/01-installation.md)**
- **[Kross Booking](../03-providers/02-kross-booking.md)**
