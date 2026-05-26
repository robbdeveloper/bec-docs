---
title: Connect your provider
sidebar_label: Connect your provider
description: Booking Engine Connection screen — provider choice, Kross credentials, and Verify connection.
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

**Option key:** `bec_active_provider`

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

## Search and single-unit settings

Guest field mode, child ages, and automatic search/booking blocks on unit pages moved to **Booking Engine → Frontend**. See **[Frontend settings](./06-frontend-settings.md)**.

---

## Related pages

- **[Run your first sync](./03-run-your-first-sync.md)**
- **[Kross Booking (detailed)](../03-providers/02-kross-booking.md)**
- **[Admin screens overview](./05-admin-screens.md)**
