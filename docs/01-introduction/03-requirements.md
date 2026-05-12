---
title: Requirements
sidebar_label: Requirements
description: Supported WordPress and PHP versions plus credentials and URLs needed for Kross Booking.
---

# Requirements

## WordPress and PHP

| Requirement | Details |
|-------------|---------|
| **WordPress** | **6.4** or newer (see plugin readme for “Tested up to”). |
| **PHP** | **8.0** or newer. |

Your hosting must allow outbound **HTTPS** requests so the plugin can reach your booking provider’s API.

---

## Administrator access

All **Booking Engine** screens need a user who can **manage settings**—normally an **Administrator**. If you use a role editor, ensure your editors have access where appropriate.

---

## What you need from Kross (typical setup)

Before configuring **[Connection](../02-getting-started/02-connect-your-provider.md)** and **[Checkout & fallback](../03-providers/02-kross-booking.md)**, gather:

| Item | Used for |
|------|-----------|
| **Hotel ID** | Tells the API which property to query. |
| **API key** | Secret key paired with your integration. |
| **API username** | Login identity for API token exchange (your provider may label this “API user”). |
| **API password** | Password for that API user. |
| **Booking engine base URL** | The **customer-facing** website where guests finish the reservation after clicking **Continue** / **Book** on your WordPress site (configured separately from API credentials). |

Exact labels in the Kross dashboard may differ; match them to the fields on **Booking Engine → Connection** and **Booking Engine → Checkout & fallback**.

{/* SCREENSHOT: Blurred/redacted Connection credentials fields showing labels only */}
![Connection credential fields labels](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/01-introduction/kross-credentials-blurred.png`): kross-credentials-blurred.png */}

---

## Related pages

- **[Install the plugin](../02-getting-started/01-installation.md)**
- **[Kross Booking](../03-providers/02-kross-booking.md)**
