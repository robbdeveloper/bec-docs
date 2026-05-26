---
title: Usare Tools & Logs
sidebar_label: Tools & Logs
description: Admin Booking Engine Tools & Logs, filtri provider, colonne stato HTTP, correlazione, durata, supporto, filtro logging auth.
---

# Usare Tools & Logs

Vai in **Booking Engine → Tools & Logs** per ispezionare conversazioni HTTP recenti tra WordPress e i provider di prenotazione.

{/* SCREENSHOT: Tools & Logs table with filters */}
![Schermata admin Tools & Logs](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/08-troubleshooting/api-log-page.png`): api-log-page.png */}

---

## Filtri

| Filtro | Significato |
|--------|-------------|
| **Provider** | Restringi le righe a uno slug di integrazione (es. `kross`). |
| **HTTP status** | Concentrati su errori (`401`, `429`, `500`, …) vs successi (`200`). |

I filtri si applicano tramite menu a tendina in cima alla schermata (usano parametri URL internamente).

---

## Tabella database

Le righe sono nella tabella custom **`{prefix}bec_api_log`** (creata all’aggiornamento tramite migrazioni del plugin; versione DB in opzione **`bec_db_version`**). Colonne tipiche:

| Colonna | Scopo |
|---------|--------|
| `id` | Chiave primaria autoincrement. |
| `created_at` | Orario fine richiesta (server). |
| `provider_slug` | Chiave integrazione (es. `kross`). |
| `http_method` | Verbo (`GET`, `POST`, …). |
| `endpoint` | Percorso o etichetta logica (testo). |
| `status_code` | Codice HTTP quando noto. |
| `duration_ms` | Durata round-trip. |
| `error_category` | Bucket errore normalizzato (nullable). |
| `message` | Breve riassunto (nullable). |
| `unit_id` | ID post `bec_unit` correlato se il logger ha legato la chiamata a un’unità (nullable). |
| `correlation_id` | Valore header **`X-BEC-Correlation-Id`** per retry correlati. |

---

## Colonne spiegate

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

Si mostrano fino alle **200** righe più recenti — pianifica export/screenshot in anticipo se ruoti spesso i log. La UI admin riflette il sottoinsieme più utile delle colonne database descritte sopra.

---

## Righe auth

Scambi sensibili auth/token possono essere omessi salvo che gli sviluppatori abilitino esplicitamente il logging con filtro **`bec_log_auth_requests`** — non preoccuparti se il login riesce ma le righe auth restano nascoste.

---

## Pagine correlate

- **[Problemi comuni](./01-common-issues.md)**
- **[Panoramica schermate admin](../02-getting-started/05-admin-screens.md)**
