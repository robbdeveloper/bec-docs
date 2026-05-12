---
title: Riferimento API Kross Booking
sidebar_label: API Kross
description: API Kross v5 auth get-token calendar book get-room-types mapping plugin BEC filtri HTTP WordPress POST corpo JSON.
---

# API Kross Booking (riferimento BEC)

> **Riferimento sviluppatori:** per sviluppatori di temi e plugin.

Riferimento per il provider Kross di **Booking Engine Connector**, allineato a un’integrazione **v5 validata** (WordPress + client HTTP) usata per disponibilità in produzione e metadati stanze.

## Panoramica

| Elemento | Valore |
|----------|--------|
| **Base URL** | `https://api.krossbooking.com` |
| **Revisione API** | **v5** (percorsi prefissati `/v5/...`) |

Tutte le chiamate autenticate inviano **JSON** e si aspettano risposte **JSON**. L’integrazione memorizza un **token auth** a breve termine e lo rinnova quando manca o è scaduto.

## Autenticazione

### Endpoint

`GET /v5/auth/get-token` (alcuni client accettano lo stesso JSON anche su **POST**, che WordPress richiede — vedi sotto)

URL completo: `https://api.krossbooking.com/v5/auth/get-token`

### Richiesta

- **Header:** `Accept: application/json`, `Content-Type: application/json`
- **Body (JSON):** credenziali richieste dallo scambio token Kross v5:

| Campo | Descrizione |
|-------|-------------|
| `api_key` | API key da Kross |
| `hotel_id` | Identificatore struttura / hotel (stringa, es. id stile slug) |
| `username` | Utente API (es. `apiv5` nell’integrazione di riferimento) |
| `password` | Password utente API |

> **Nota HTTP:** il client di riferimento usa **GET con body JSON**. `wp_remote_request` di WordPress non può inviare body JSON su GET (si aspetta array per query encoding). Il plugin BEC usa quindi **POST** con lo stesso body JSON. Se l’ambiente richiede strettamente solo GET, usa transport personalizzato o filtri fuori dal core WP HTTP.

### Risposta (successo)

Il JSON parsato include un oggetto `data` annidato, ad esempio:

| Percorso | Significato |
|----------|-------------|
| `data.auth_token` | Token stile Bearer per chiamate successive |
| `data.auth_token_expire` | Scadenza come stringa datetime (confronta con “ora” per rinnovare) |

In caso di fallimento, gestisci errori HTTP e registra i corpi risposta (l’integrazione di riferimento registra eccezioni client/server).

### Ciclo di vita token (comportamento di riferimento)

1. Leggi token + scadenza in cache dallo storage.
2. Se token vuoto **oppure** ora corrente ≥ scadenza → chiama di nuovo `get-token` e persiste nuovi valori.
3. Opzionale: refresh forzato (`force_new`) quando sai che il token non è valido.

Questo corrisponde a **refresh proattivo per scadenza**, non solo su `401`.

## Richieste autenticate (v5)

Per [Kross API v5](https://api.krossbooking.com/apiv5/), dopo lo scambio token le chiamate usano:

- **URL:** `https://api.krossbooking.com` + percorso (es. `/v5/calendar/book`).
- **Metodo:** `POST` con JSON per la maggior parte degli endpoint (BEC mappa `GET` logico su `POST` dove WordPress non può inviare body JSON su GET).
- **Header:** `Accept: application/json`, `Content-Type: application/json`, **`Authorization: Bearer <token da get-token>`**.
- **Body (JSON):** solo payload endpoint (es. filtri per `get-room-types`, date + occupazione per `calendar/book`) — **nessun** wrapper `{ "auth_token", "data" }`.

### Forma risposta (generale)

Le risposte di successo includono payload **`data`** (array o oggetto), **`ruid`**, e opzionalmente **`count`** / **`total_count`**. Alcune risposte possono includere un legacy **`result`** booleano. Errori API restituiscono HTTP 4xx/5xx con **`error_code`**, **`error_message`**, e **`ruid`** nel body JSON (vedi riferimento errori Kross).

### Cache (riferimento)

Per richieste **GET**, il sito di riferimento cachea JSON decodificato (es. transient) con chiave endpoint + metodo + `data` serializzata, con TTL (es. 5 minuti per GET generici, più breve per calendario, es. 60s). Aggiungi jitter se serve per evitare herd.

### Stringhe JSON annidate

Alcuni endpoint restituiscono **stringhe codificate JSON dentro array** (in particolare su PHP più recente). Un passo di **decodifica ricorsiva** per valori stringa che risultano JSON mantiene stabile il codice a valle.

## Disponibilità (calendario prenotabile)

### Endpoint

`GET /v5/calendar/book`

### Payload `data` (minimo)

| Campo | Descrizione |
|-------|-------------|
| `date_from` | Data inizio (formato come nel riferimento: `from` guidato da query) |
| `date_to` | Data fine |
| `guests` | Conteggio ospiti usato per la ricerca |

### Payload esteso (usato altrove nel riferimento)

| Campo | Descrizione |
|-------|-------------|
| `adults` | Conteggio adulti (a volte allineato a `guests`) |
| `children` | Conteggio bambini (es. `'0'`) |
| `with_be_info` | Include info relative al motore prenotazione (`true` se serve) |
| `cod_channel` | Codice canale, es. `'BE'` (booking engine) |

### Uso della risposta

- Se `result` è true e `data` è **non vuoto:** ogni riga include **`id_room_type`** (e possibilmente campi tariffa/prezzo). Raccogli valori `id_room_type` per filtrare contenuti CMS (es. ville con lo stesso id).
- Se `result` è true e `data` è **vuoto:** la UI di riferimento trattava come “nessun inventario” e usava una lista sentinella (es. `['0']`) per meta-query così **nessuna villa corrisponde** — adatta alle esigenze prodotto.

## Tipi di stanza (metadati)

### Endpoint

`GET /v5/rooms/get-room-types`

### Payload `data` (esempio)

| Campo | Descrizione |
|-------|-------------|
| `id_room_type` | Id tipo stanza / unità |
| `with_custom_fields` | `true` per includere campi personalizzati |
| `with_long_term` | Relativo lunghi soggiorni |
| `with_account_manager` | Info account manager |
| `with_additional_info` | Info extra |
| `with_be_info` | Info motore prenotazione |

Usa la prima riga corrispondente (es. `data[0]`) per limiti occupazione (`min_occupancy`, `max_occupancy`, ospiti default, ecc.) quando guidi la config front-end.

## Tariffe canale (opzionale)

### Endpoint

`GET /v5/channel/get-rates`

### Payload `data` (esempio)

| Campo | Descrizione |
|-------|-------------|
| `id_room_type` | Id tipo stanza |
| `cod_channel` | es. `'BE'` |

Usato quando si aggiornano cache legate alle tariffe (riferimento: elimina cache per chiave prima del refetch).

## Mapping al plugin BEC

| Concetto | Riferimento WordPress | Direzione BEC |
|---------|------------------------|-----------------|
| Credenziali | `api_key`, `hotel_id`, `username`, `password` | Opzioni `bec_kross_*` (admin Connection); segreti secondo policy prodotto |
| Storage token | Opzioni o transient + scadenza | `KrossAuthenticator`: POST `…/v5/auth/get-token` + body JSON (limite WP HTTP; stesso payload del GET di riferimento); `data.auth_token` / `data.auth_token_expire`; filtri `bec_kross_auth_endpoint`, `bec_kross_base_url` |
| HTTP | `Authorization: Bearer` + body JSON (payload endpoint) | `KrossApiClient`; opzionale `bec_kross_api_401_retries` dopo invalidazione token |
| Tipi stanza | `/v5/rooms/get-room-types` | `KrossProvider::fetchRemoteUnits()`; filtro `bec_kross_room_types_payload` |
| Disponibilità | `/v5/calendar/book` | `KrossProvider::getQuoteForUnit()`; filtri `bec_kross_calendar_book_payload`, `bec_kross_quote_result` |

**Versione API minima per questo documento:** **v5** (come nell’integrazione di riferimento).

---

*Codice interno plugin: namespace sotto `BookingEngineConnector\`. Filtri HTTP: `bec_http_*`. Default Kross: auth `https://api.krossbooking.com/v5/auth/get-token`, base `https://api.krossbooking.com` (sovrascrivibile via filtri).*
