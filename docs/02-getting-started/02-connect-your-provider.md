---
title: Connect your provider
sidebar_label: Connect your provider
description: Booking Engine Connection screen — provider choice, Kross credentials, Verify connection, and search form guest settings.
---

# Connect your provider

Open **Booking Engine → Connection**.

{/* SCREENSHOT: Full Connection page showing Provider dropdown at top */}
![Connection page overview](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/connection-page-overview.png`): connection-page-overview.png */}

---

## Provider

Use the **Provider** dropdown to choose which booking integration is active.

Out of the box you will normally see **Kross Booking**. Additional providers can be added by developers via WordPress filters (see **[Adding a provider](../09-developer-reference/06-adding-a-provider.md)**).

---

## Credentials (Kross)

Fill in the fields from your Kross account (names may vary in their dashboard):

| Field | Purpose |
|-------|---------|
| **Hotel ID** | Identifies your property to the API. |
| **API key** | Secret key used together with your API user to obtain an access token. |
| **API username** | Username for API authentication (documentation often mentions examples such as `apiv5`). |
| **API user password** | Password for that API user. |

**Tip:** Password-type fields usually **keep the saved value** if you leave them blank when saving—only type a new secret when you intend to replace it.

{/* SCREENSHOT: Connection credentials section only */}
![Connection credentials section](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/connection-credentials.png`): connection-credentials.png */}

Click **Save connection settings** when you are done.

### Verify connection

Click **Verify connection** to run a real token exchange with the provider (without exposing your secrets on screen).

- **Success** — You will see an admin notice confirming the API answered.
- **Failure** — Check typos, IP allowlists, and that your server can reach the API over HTTPS.

{/* SCREENSHOT: Green success notice after Verify connection */}
![Verify connection success notice](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/verify-connection-success.png`): verify-connection-success.png */}

---

## Search form (front)

On the same **Connection** page, the plugin lets you control how guests are counted on the **front-end search bar** (used by `[bec_search]` and inside the booking summary).

### How guests are collected

| Option | When to use it |
|--------|----------------|
| **Follow the active provider** | Default. Matches what your provider expects (e.g. one total guest count vs adults + children). |
| **Single “Guests” count only** | One number for all people—simplest for small properties. |
| **Adults and children (separate fields)** | When you need a split headcount for pricing or policies. |

### Child ages in search

| Option | Meaning |
|--------|---------|
| **Follow the active provider** | Uses the engine’s rules. |
| **Ask for each child’s age** | Shows one age field per child when the form is in adults + children mode. |
| **Do not ask for child ages** | Omits age fields (not used when you only collect a single guest total). |

{/* SCREENSHOT: Search form behaviour section on Connection page */}
![Search form settings on Connection](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/connection-search-form-settings.png`): connection-search-form-settings.png */}

---

## Related pages

- **[Run your first sync](./03-run-your-first-sync.md)**
- **[Kross Booking (detailed)](../03-providers/02-kross-booking.md)**
- **[Search context](../05-bookings-and-checkout/01-search-context-and-urls.md)**
