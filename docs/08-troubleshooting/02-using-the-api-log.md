---
title: Using the API log
sidebar_label: Using the API log
description: Booking Engine API Log admin provider filter HTTP status columns correlation duration support troubleshooting auth logging filter.
---

# Using the API log

Navigate to **Booking Engine → API Log** to inspect recent HTTP conversations between WordPress and booking providers.

{/* SCREENSHOT: API Log table with filters */}
![API Log admin screen](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/08-troubleshooting/api-log-page.png`): api-log-page.png */}

---

## Filters

| Filter | Meaning |
|--------|---------|
| **Provider** | Narrow rows to one integration slug (e.g. `kross`). |
| **HTTP status** | Focus on errors (`401`, `429`, `500`, …) vs successes (`200`). |

Filters apply via drop-downs at the top of the screen (they use URL parameters internally).

---

## Database table

Rows are stored in the custom table **`{prefix}bec_api_log`** (created on upgrade via plugin migrations tracked by the **`bec_db_version`** option). Typical columns:

| Column | Purpose |
|--------|---------|
| `id` | Autoincrement primary key. |
| `created_at` | Request completion time (server time). |
| `provider_slug` | Integration key (e.g. `kross`). |
| `http_method` | Verb (`GET`, `POST`, …). |
| `endpoint` | Path or logical label (stored as text). |
| `status_code` | HTTP status when available. |
| `duration_ms` | Round-trip duration. |
| `error_category` | Normalised error bucket when classified (nullable). |
| `message` | Short summary / excerpt (nullable). |
| `unit_id` | Related `bec_unit` post ID when the logger tied the call to a unit (nullable). |
| `correlation_id` | **`X-BEC-Correlation-Id`** header value for bundled retries. |

---

## Columns explained

| Column | Purpose |
|--------|---------|
| **Time** | When the request finished on WordPress. |
| **Provider** | Integration slug owning the request. |
| **Method** | HTTP verb (`GET`, `POST`, …). |
| **Endpoint** | Relative path or logical endpoint label recorded by logger. |
| **Status** | HTTP status code returned (when available). |
| **Duration** | Round-trip milliseconds—helps detect timeouts vs slow APIs. |
| **Correlation** | Trace id tying related retries together—share with vendor support. |
| **Message** | Short human-readable summary / error excerpt. |

Up to **200** newest rows display—plan exports/screenshots early if you rotate logs frequently. The admin UI mirrors the most useful subset of the database columns described above.

---

## Auth rows

Sensitive auth/token exchanges may be omitted unless developers explicitly enable logging via **`bec_log_auth_requests`** filter—don’t panic if login succeeds yet auth rows stay hidden.

---

## Related pages

- **[Common issues](./01-common-issues.md)**
