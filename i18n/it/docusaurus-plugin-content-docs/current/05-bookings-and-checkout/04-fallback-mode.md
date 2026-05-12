---
title: Modalità fallback
sidebar_label: Modalità fallback
description: Abilitazione fallback, sempre fallback, contenuto inline vs link, trigger disponibilità vuota errori provider PublicContentBlocks vs shortcode bec_fallback.
---

# Modalità fallback

**Fallback** è UI sostitutiva opzionale quando disponibilità/checkout live **non** deve prevalere — interruzioni, limiti di quota o flusso deliberato **prima il contatto**.

Configurala in **Booking Engine → Checkout & fallback**.

{/* SCREENSHOT: Checkout fallback admin page Fallback section expanded */}
![Impostazioni checkout e fallback](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/05-bookings-and-checkout/checkout-fallback-settings.png`): checkout-fallback-settings.png */}

---

## Interruttori principali

| Impostazione | Significato |
|--------------|-------------|
| **Enable fallback** | Attiva globalmente le funzioni fallback (i trigger singoli applicano comunque). |
| **Always use fallback** | Forza il fallback **anche quando i preventivi hanno successo** — utile per siti vetrina che non spingono mai la prenotazione istantanea. |

---

## Modalità di presentazione

| Modalità | Cosa vede il visitatore |
|----------|-------------------------|
| **Inline content** | Testo/HTML arricchito configurato in WordPress — shortcode consentiti al suo interno. |
| **Link only** | Un solo pulsante evidente verso la pagina contatti o un PDF di policy di prenotazione. |

---

## Quando il fallback scatta automaticamente

Checkbox separate decidono se il fallback sostituisce la UI di prenotazione quando:

- **Preventivo vuoto / nessun inventario** (`bec_fallback_empty_quote`).
- **Errori provider** in categorie come rate limiting, autenticazione, quota, validazione, errori server, ecc.

Se le categorie non coprono il caso, il visitatore può non vedere né fallback né checkout — vedi **[Problemi comuni](../08-troubleshooting/01-common-issues.md)**.

---

## `[bec_fallback]` vs iniezione automatica

| Meccanismo | Posizionamento |
|------------|----------------|
| **Shortcode `[bec_fallback]`** | Decidi esattamente dove compare il markup — sidebar, footer, zona page builder |
| **Append automatico su singole unità** | Il plugin filtra il contenuto dopo aver ottenuto i preventivi — mostra fallback al posto della CTA prenotazione quando le regole corrispondono. |

---

## Pagine correlate

- **[Shortcode bec_fallback](../06-shortcodes/09-bec-fallback.md)**
