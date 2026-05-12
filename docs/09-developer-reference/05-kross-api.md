---
title: Kross Booking API reference
sidebar_label: Kross API
description: Kross API v5 auth get-token calendar book get-room-types mapping BEC plugin filters HTTP WordPress POST JSON body.
---

# Kross Booking API (BEC reference)

> **Developer reference:** This section is for theme and plugin developers.

Reference for the **Booking Engine Connector** Kross provider, aligned with a **validated v5 integration** (WordPress + HTTP client) used for production availability and room metadata.

## Overview

| Item | Value |
|------|-------|
| **Base URL** | `https://api.krossbooking.com` |
| **API revision** | **v5** (paths prefixed `/v5/...`) |

All authenticated calls send **JSON** and expect **JSON** responses. The integration stores a short-lived **auth token** and refreshes it when missing or expired.

## Authentication

### Endpoint

`GET /v5/auth/get-token` (some clients also accept the same JSON on **POST**, which WordPress requires—see below)

Full URL: `https://api.krossbooking.com/v5/auth/get-token`

### Request

- **Headers:** `Accept: application/json`, `Content-Type: application/json`
- **Body (JSON):** credentials required by Kross v5 token exchange:

| Field | Description |
|-------|-------------|
| `api_key` | API key from Kross |
| `hotel_id` | Property / hotel identifier (string, e.g. slug-style id) |
| `username` | API user (e.g. `apiv5` in the reference integration) |
| `password` | API user password |

> **HTTP note:** The reference client uses **GET with a JSON body**. WordPress’s `wp_remote_request` cannot send a JSON body on GET (it expects an array for query encoding). The BEC plugin therefore uses **POST** with the same JSON body. If your environment requires strict GET-only behaviour, use a custom transport or filter outside core WP HTTP.

### Response (success)

Parsed JSON includes a nested `data` object, for example:

| Path | Meaning |
|------|---------|
| `data.auth_token` | Bearer-style token for subsequent calls |
| `data.auth_token_expire` | Expiry as a datetime string (compare with “now” to decide refresh) |

On failure, handle HTTP errors and log response bodies (reference integration logs client/server exceptions).

### Token lifecycle (reference behaviour)

1. Read cached token + expiry from storage.
2. If token is empty **or** current time ≥ expiry → call `get-token` again and persist new values.
3. Optional: force refresh (`force_new`) when you know the token is invalid.

This matches **proactive refresh by expiry**, not only on `401`.

## Authenticated requests (v5)

Per [Kross API v5](https://api.krossbooking.com/apiv5/), calls after token exchange use:

- **URL:** `https://api.krossbooking.com` + path (e.g. `/v5/calendar/book`).
- **Method:** `POST` with JSON for most endpoints (BEC maps logical `GET` to `POST` where WordPress cannot send a JSON body on GET).
- **Headers:** `Accept: application/json`, `Content-Type: application/json`, **`Authorization: Bearer <token from get-token>`**.
- **Body (JSON):** the endpoint payload only (e.g. filters for `get-room-types`, dates + occupancy for `calendar/book`) — **no** `{ "auth_token", "data" }` wrapper.

### Response shape (general)

Success responses include a **`data`** payload (array or object), **`ruid`**, and optional **`count`** / **`total_count`**. Some responses may include a legacy **`result`** boolean. API failures return HTTP 4xx/5xx with **`error_code`**, **`error_message`**, and **`ruid`** in the JSON body (see Kross error reference).

### Caching (reference)

For **GET** requests, the reference site caches decoded JSON (e.g. transients) keyed by endpoint + method + serialized `data`, with a TTL (e.g. 5 minutes for general GETs, shorter for calendar, e.g. 60s). Add jitter if needed to avoid stampedes.

### Nested JSON strings

Some endpoints return **JSON-encoded strings inside arrays** (notably on newer PHP). A **recursive decode** step for string values that parse as JSON keeps downstream code stable.

## Availability (bookable calendar)

### Endpoint

`GET /v5/calendar/book`

### `data` payload (minimum)

| Field | Description |
|-------|-------------|
| `date_from` | Start date (format as used in reference: query-driven `from`) |
| `date_to` | End date |
| `guests` | Guest count used for search |

### Extended payload (used elsewhere in reference)

| Field | Description |
|-------|-------------|
| `adults` | Adult count (sometimes aligned with `guests`) |
| `children` | Child count (e.g. `'0'`) |
| `with_be_info` | Include booking-engine-related info (`true` when needed) |
| `cod_channel` | Channel code, e.g. `'BE'` (booking engine) |

### Using the response

- If `result` is true and `data` is **non-empty:** each row includes **`id_room_type`** (and possibly rate/pricing fields). Collect `id_room_type` values to filter CMS content (e.g. villas keyed by the same id).
- If `result` is true and `data` is **empty:** reference UI treated that as “no inventory” and used a sentinel list (e.g. `['0']`) for meta-queries so that **no villas match** — adjust to product needs.

## Room types (metadata)

### Endpoint

`GET /v5/rooms/get-room-types`

### `data` payload (example)

| Field | Description |
|-------|-------------|
| `id_room_type` | Room / unit type id |
| `with_custom_fields` | `true` to include custom fields |
| `with_long_term` | Long-stay related |
| `with_account_manager` | Account manager info |
| `with_additional_info` | Extra info |
| `with_be_info` | Booking engine info |

Use the first matching row (e.g. `data[0]`) for occupancy limits (`min_occupancy`, `max_occupancy`, default guests, etc.) when driving front-end config.

## Channel rates (optional)

### Endpoint

`GET /v5/channel/get-rates`

### `data` payload (example)

| Field | Description |
|-------|-------------|
| `id_room_type` | Room type id |
| `cod_channel` | e.g. `'BE'` |

Used when refreshing rate-related caches (reference: delete cache by key before refetch).

## Mapping to BEC plugin

| Concept | WordPress reference | BEC direction |
|---------|---------------------|----------------|
| Credentials | `api_key`, `hotel_id`, `username`, `password` | Options `bec_kross_*` (Connection admin); secrets per product policy |
| Token storage | Options or transients + expiry | `KrossAuthenticator`: POST `…/v5/auth/get-token` + JSON body (WP HTTP limitation; same payload as reference GET); `data.auth_token` / `data.auth_token_expire`; filters `bec_kross_auth_endpoint`, `bec_kross_base_url` |
| HTTP | `Authorization: Bearer` + JSON body (endpoint payload) | `KrossApiClient`; optional `bec_kross_api_401_retries` after token invalidation |
| Room types | `/v5/rooms/get-room-types` | `KrossProvider::fetchRemoteUnits()`; filter `bec_kross_room_types_payload` |
| Availability | `/v5/calendar/book` | `KrossProvider::getQuoteForUnit()`; filters `bec_kross_calendar_book_payload`, `bec_kross_quote_result` |

**Minimum API version for this document:** **v5** (as used in the reference integration).

---

*Internal plugin code: namespaces under `BookingEngineConnector\`. HTTP filters: `bec_http_*`. Kross defaults: auth `https://api.krossbooking.com/v5/auth/get-token`, base `https://api.krossbooking.com` (overridable via filters).*
