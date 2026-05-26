---
title: Kross Booking
sidebar_label: Kross Booking
description: Kross API credentials, Verify connection, booking engine base URL, GET vs POST checkout, and how this differs from API keys.
---

# Kross Booking

This page covers **Kross-specific** setup: API credentials on **Connection**, and **Checkout & fallback** settings that control where guests land after clicking **Continue** / **Book**.

{/* SCREENSHOT: Split Connection credentials left and Checkout base URL right */}
![Kross Connection and Checkout settings](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/03-providers/kross-connection-checkout-split.png`): kross-connection-checkout-split.png */}

---

## API credentials (Connection)

Open **Booking Engine → Connection**, choose **Kross Booking**, and complete:

| Field | Plain-language meaning |
|-------|-------------------------|
| **Hotel ID** | Which hotel/property in Kross this WordPress site represents. |
| **API key** | Secret issued by Kross for API access. |
| **API username** | Identity used together with the password to obtain a **Bearer token**. |
| **API user password** | Password for that API user. |

Use **Verify connection** after saving (or even before saving, depending on form behaviour) to confirm WordPress can exchange a token—your quickest sanity check.

---

## Booking engines (sync filter)

Sync behaviour can optionally **limit which Kross room types** are imported during a **full** sync:

1. Go to **Booking Engine → Sync & Import**.
2. Under **Kross booking engines**, click **Refresh booking engines list from Kross** to load `be_enabled` slugs from **`/v5/rooms/get-room-types`** into the checklist.
3. **Leave all boxes unchecked** to sync the full inventory (recommended unless you need a subset).
4. Tick specific slugs to include only room types whose normalised payload’s **`be_enabled`** list matches **any** selected slug.

Single-unit row actions and bulk sync still refresh individual posts on demand; the filter mainly affects **scheduled** and **Run sync now** full passes.

---

## Booking engine URL (Checkout & fallback)

**Separate from API credentials:** guests never paste API keys. They need the **public booking website** URL where reservations are completed.

Open **Booking Engine → Checkout & fallback**.

### Booking engine base URL

Paste the full URL Kross gave you for the **guest-facing** booking engine (often looks like your branded booking subdomain).

- If this field is **empty**, checkout buttons may stay hidden until you configure it.

### How to open the booking engine

| Mode | Visitor experience |
|------|---------------------|
| **GET** | The browser navigates to a long URL that includes stay parameters as query arguments. |
| **POST** | The plugin outputs a **form** that submits hidden fields to the booking engine when the guest clicks the button—some middleware requires POST. |

**Note for POST:** Kross checkout may require a **rate ID** in the outgoing data. If no rate is selected in the URL/context, POST checkout might not be available until a rate can be resolved (e.g. from the quote).

---

## Support and API details

Technical HTTP path and endpoint table for developers: **[Kross API reference](../09-developer-reference/05-kross-api.md)**.

---

## Related pages

- **[Connect your provider](../02-getting-started/02-connect-your-provider.md)**
- **[Syncing units](../04-units/02-syncing-units.md)**
- **[Checkout flow](../05-bookings-and-checkout/03-checkout-flow.md)**
- **[Fallback mode](../05-bookings-and-checkout/04-fallback-mode.md)**
