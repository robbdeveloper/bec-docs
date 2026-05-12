---
title: Providers overview
sidebar_label: Providers overview
description: One active booking provider at a time, credentials on Connection, and how extensions register new engines.
---

# Providers overview

A **provider** is the booking platform the plugin talks to over the internet—today **Kross Booking** ships built-in.

---

## One active provider

Your site stores an **active provider** choice (selected on **Booking Engine → Connection**).

- Only **one** integration drives **new syncs** and default credential forms at a time.
- Each **Unit** still remembers which provider created it (`Provider` column in the Units list). Quotes and checkout resolve using that linkage when needed.

---

## What a provider supplies

For a typical integration the provider implementation:

1. **Authenticates** with the booking API (token, keys, hotel ID).
2. **Downloads inventory** during sync—room types, photos, occupancy limits, etc.
3. **Answers availability requests** for given dates and guest counts (**quotes**).
4. **Builds checkout links or forms** so guests continue on the booking engine website.

---

## Adding more providers

The dropdown label list can be extended by developers using the WordPress filter mentioned on the Connection screen (`bec_registered_providers`). Implementing a new engine means coding against the plugin’s provider contract—see **[Adding a provider](../09-developer-reference/06-adding-a-provider.md)**.

---

## Related pages

- **[Kross Booking](./02-kross-booking.md)** — Credentials and checkout URL for Kross.
- **[Connect your provider](../02-getting-started/02-connect-your-provider.md)**
