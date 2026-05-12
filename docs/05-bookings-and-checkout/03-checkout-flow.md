---
title: Checkout flow
sidebar_label: Checkout flow
description: External booking engine hand-off GET vs POST checkout URL construction multiple rates and Continue button behaviour.
---

# Checkout flow

**Checkout**, in this plugin, means **handing off** the visitor from WordPress to your provider’s booking website—not WooCommerce checkout.

---

## Prerequisites

For checkout links/forms to appear:

1. **[Search context](./01-search-context-and-urls.md)** must be complete and valid.
2. The unit must map to a remote inventory ID (**External ID**).
3. **Booking engine base URL** must be configured under **Booking Engine → Checkout & fallback**.
4. For **POST** checkout with **Kross**, a **rate ID** may be required—without it checkout might stay disabled until the quote supplies one.

---

## GET vs POST

| Mode | What happens |
|------|----------------|
| **GET** | Visitor clicks **Continue** / **Book** → browser navigates to a URL carrying stay parameters as query arguments. |
| **POST** | Visitor clicks → browser submits an HTML **form** with hidden fields (some booking stacks require POST bodies). |

Configure this under **Checkout & fallback → How to open the booking engine**.

---

## Multiple rates

When more than one rate applies:

- Visitors may choose a rate inside **`[bec_booking_summary]`**, which adds **`bec_rate_id`** to the URL.
- Checkout tries to reuse the selected rate when building the outbound URL/form.

{/* SCREENSHOT: Booking summary showing multiple rate choices */}
![Booking summary rate selector](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/05-bookings-and-checkout/booking-summary-rates.png`): booking-summary-rates.png */}

---

## Automatic booking strip on unit singles

On singular unit pages the plugin may append **booking CTAs or fallback** after your content based on quotes—your theme plus shortcodes still control primary layout.

---

## Related pages

- **[Kross Booking](../03-providers/02-kross-booking.md)**
- **[Fallback mode](./04-fallback-mode.md)**
