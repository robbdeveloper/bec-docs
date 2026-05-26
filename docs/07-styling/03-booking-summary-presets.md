---
title: Booking summary presets
sidebar_label: Booking summary presets
description: Default vs Compact booking summary preset screenshots accordion toggles inclusions conditions styling settings.
---

# Booking summary presets

Preset selection lives under **Booking Engine → Design → Booking summary → Layout style**.

---

## Default

Search panel stacks above main pricing blocks on desktop—the canonical sidebar experience.

{/* SCREENSHOT: Default preset desktop */}
![Booking summary Default preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/booking-summary-default.png`): booking-summary-default.png */}

---

## Compact

Adds `bec-booking-summary--preset-compact`, repositioning sections so search trails primary pricing on wider breakpoints—ideal when horizontal space is tight.

{/* SCREENSHOT: Compact preset desktop */}
![Booking summary Compact preset](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/booking-summary-compact.png`): booking-summary-compact.png */}

---

## Accordions for rate details

Two independent checkboxes govern optional disclosure panels inside summaries:

| Checkbox | Shows accordion when quote supplies matching copy |
|----------|---------------------------------------------------|
| **Inclusions** | Highlights bundled perks / board basis lines. |
| **Conditions** | Cancellation / payment condition snippets. |

Disable either when legal copy should remain outside collapsible regions or when themes handle disclaimers globally.

Rate-detail accordion headers use a chevron indicator (styled in **`booking-summary-default.css`**). Override chevron colour or rotation in **Extra CSS** via the accordion header selectors under `.bec-booking-summary`.

{/* SCREENSHOT: Booking summary accordions expanded */}
![Booking summary accordions](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/07-styling/booking-summary-accordions.png`): booking-summary-accordions.png */}

---

## Colour tokens (Default preset)

Default booking-summary CSS reads semantic tokens from **Shared theme variables** (or preset defaults):

| Token | Typical use |
|-------|-------------|
| **`--bec-bsummary-color-text`** | Body copy, rate names, search date day |
| **`--bec-bsummary-color-primary`** | Headline price, selected rate emphasis, primary buttons |
| **`--bec-bsummary-color-muted`** | Secondary labels, chevrons, helper text |
| **`--bec-bsummary-color-accent`** | Spinner and accent borders |

Define these once in **Shared theme variables** so Default and Compact presets stay aligned. See **[Theme variables & custom CSS](./04-theme-variables-and-custom-css.md)**.

---

## Mobile drawer scroll region

On small screens the slide-in drawer uses a flex column: back header and bottom actions stay pinned while **`bec-booking-summary__drawer-body`** wraps search through quote results and scrolls when content exceeds the viewport. Style the scroll region in **Extra CSS** without forcing whole-drawer overflow.

---

## Related pages

- **[bec_booking_summary](../06-shortcodes/06-bec-booking-summary.md)**
