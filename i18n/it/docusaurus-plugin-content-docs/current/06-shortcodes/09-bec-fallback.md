---
title: Shortcode `[bec_fallback]`
sidebar_label: bec_fallback
description: UI contatto fallback — contenuto inline ricco o modalità solo link, CSS bec-fallback, impostazioni Booking Engine Checkout fallback.
---

# `[bec_fallback]`

Mostra l’**esperienza fallback** definita dall’amministratore: HTML ricco inline o un singolo link in uscita — controllata globalmente da **Booking Engine → Checkout & fallback**.

---

## Dove posizionarlo

Barre laterali, footer, trigger modale, colonne secondarie accanto a **`[bec_booking_summary]`** quando vuoi sempre opzioni di contatto manuali visibili.

---

## Attributi

_Nessuno._ Le opzioni di presentazione stanno interamente nelle impostazioni.

---

## Esempi

```
[bec_fallback]
```

{/* SCREENSHOT: bec_fallback inline rich content */}
![bec_fallback modalità inline](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-fallback-inline.png`): bec-fallback-inline.png */}

{/* SCREENSHOT: bec_fallback link only */}
![bec_fallback modalità solo link](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-fallback-link.png`): bec-fallback-link.png */}

---

## Hook CSS

- Wrapper: `bec-fallback`
- Variante link: `bec-fallback__link`
- Wrapper inline: `bec-fallback__inner`
- Suggerimento se non impostato: `bec-fallback__hint`

---

## Suggerimenti

L’iniezione automatica di fallback sulle singole unità segue le **[Regole fallback](../05-bookings-and-checkout/04-fallback-mode.md)** — questo shortcode espone lo stesso renderer ovunque **tu** lo posizioni.

Gli sviluppatori possono incapsulare HTML tramite filtro **`bec_fallback_html`**.
