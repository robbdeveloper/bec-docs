---
title: Usare l’API Log
sidebar_label: API Log
description: Admin Booking Engine API Log, filtri provider, colonne stato HTTP, correlazione, durata, supporto, filtro logging auth.
---

# Usare l’API Log

Vai in **Booking Engine → API Log** per ispezionare conversazioni HTTP recenti tra WordPress e i provider di prenotazione.

{/* SCREENSHOT: API Log table with filters */}
![Schermata admin API Log](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/08-troubleshooting/api-log-page.png`): api-log-page.png */}

---

## Filtri

| Filtro | Significato |
|--------|-------------|
| **Provider** | Restringi le righe a uno slug di integrazione (es. `kross`). |
| **HTTP status** | Concentrati su errori (`401`, `429`, `500`, …) vs successi (`200`). |

I filtri si applicano tramite menu in cima alla schermata (usano parametri URL internamente).

---

## Colonne

| Colonna | Scopo |
|---------|--------|
| **Time** | Quando la richiesta è terminata su WordPress. |
| **Provider** | Slug dell’integrazione proprietaria della richiesta. |
| **Method** | Verbo HTTP (`GET`, `POST`, …). |
| **Endpoint** | Percorso relativo o etichetta logica registrata dal logger. |
| **Status** | Codice di stato HTTP restituito (se disponibile). |
| **Duration** | Millisecondi round-trip — aiuta a distinguere timeout vs API lente. |
| **Correlation** | Trace id che lega retry correlati — condividilo col supporto vendor. |
| **Message** | Breve riassunto leggibile / estratto errore. |

Si mostrano fino alle **200** righe più recenti — pianifica export/screenshot in anticipo se ruoti spesso i log.

---

## Righe auth

Scambi sensibili auth/token possono essere omessi salvo che gli sviluppatori abilitino esplicitamente il logging con filtro **`bec_log_auth_requests`** — non preoccuparti se il login riesce ma le righe auth restano nascoste.

---

## Pagine correlate

- **[Problemi comuni](./01-common-issues.md)**
