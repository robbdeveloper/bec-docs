---
title: Shortcode `[bec_booking_summary]`
sidebar_label: bec_booking_summary
description: Riepilogo prenotazione completo — attributi, preventivo incompleto, fallback, drawer mobile, fisarmoniche, enquiry, preset compatto.
---

# `[bec_booking_summary]`

**Riquadro/card prenotazione** tutto-in-uno: ricerca incorporata se mancano le date, dettaglio quando disponibile, selettore tariffe opzionale, barra mobile fissa + drawer, link richiesta informazioni e passaggio al checkout.

---

## Dove posizionarlo

Template singola unità — tipicamente colonna destra / sidebar sticky che i builder espongono tramite blocchi shortcode.

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`unit_id`** | `0` | ID post Unità; `0` usa la pagina unità corrente. |
| **`form_id`** | `bec-booking-summary` | Stringa base per id HTML (varianti desktop/mobile aggiungono suffissi). |
| **`context`** | `bec_booking_summary` | Passata ai filtri campi ricerca — cambia solo se i temi la richiedono. |
| **`tax_note`** | *(vuoto)* | Piccolo disclaimer sotto i totali — se vuoto usa default/filtro. |
| **`show_enquiry`** | `1` | Imposta `0`, `false` o `no` per nascondere il link secondario richiesta. |
| **`enquiry_label`** | tradotto “Enquiry” | Testo ancora per l’azione secondaria (le impostazioni fallback forniscono URL/testo di riserva). |
| **`daterange_format`** | *(empty)* | Formato PHP `date_i18n()` per il footer calendario della ricerca incorporata. Sovrascrive **`daterange_preset`** se impostato. |
| **`daterange_preset`** | `medium` | Preset footer quando **`daterange_format`** è vuoto: `iso`, `short`, `medium`, `long`, o `full`. |

---

## Modalità di comportamento (stati)

| Stato | Cosa vede il visitatore |
|-------|---------------------------|
| **Date incomplete** | Pannello stile **`[bec_search]`** incorporato + elementi richiesta — niente checkout ancora. |
| **Preventivo OK e prenotabile** | Prezzo principale, selettore tariffe opzionale, righe di dettaglio, pulsante Continua. |
| **Nessuna disponibilità** | Messaggio di stato vuoto + aggiornamento ricerca. |
| **Errore API preventivo** | Messaggistica orientata agli errori — può abbinarsi al **[fallback](../05-bookings-and-checkout/04-fallback-mode.md)** secondo la configurazione. |
| **Fallback attivato** | Contenuto fallback inline accanto a ricerca/richiesta secondo le regole. |

I layout mobile duplicano i controlli critici (`bec-booking-summary__mobile`, id drawer/backdrop derivati da `form_id`). La regione scroll del corpo drawer usa **`bec-booking-summary__drawer-body`**.

{/* SCREENSHOT: Desktop booking summary available state */}
![Riepilogo desktop disponibile](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-desktop-available.png`): bec-booking-summary-desktop-available.png */}

{/* SCREENSHOT: Desktop unavailable or empty state */}
![Riepilogo desktop non disponibile](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-desktop-unavailable.png`): bec-booking-summary-desktop-unavailable.png */}

{/* SCREENSHOT: Mobile bottom bar collapsed */}
![Barra mobile riepilogo](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-mobile-bar.png`): bec-booking-summary-mobile-bar.png */}

{/* SCREENSHOT: Mobile drawer open */}
![Drawer mobile riepilogo](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-mobile-drawer.png`): bec-booking-summary-mobile-drawer.png */}

{/* SCREENSHOT: Compact preset */}
![Preset compatto riepilogo](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-compact.png`): bec-booking-summary-compact.png */}

{/* SCREENSHOT: Fallback embedded inside summary */}
![Riepilogo con fallback](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-booking-summary-fallback.png`): bec-booking-summary-fallback.png */}

---

## Esempi

```
[bec_booking_summary]
```

```
[bec_booking_summary unit_id="123" form_id="sidebar-booking" show_enquiry="0"]
```

```
[bec_booking_summary tax_note="IVA inclusa." enquiry_label="Scrivici" daterange_preset="long"]
```

---

## Hook CSS (selezione)

Radice:

- `bec-booking-summary`, opzionale `bec-booking-summary--preset-compact`
- La radice espone spesso `data-bec-booking-summary`, `data-bec-post-id`

Regioni:

- `bec-booking-summary__inner`, modificatori `--incomplete`, `--fallback`
- Shell ricerca: `bec-booking-summary__search`, modificatori `--incomplete`, `--desktop`, `--drawer`, `--trail`
- Colonna desktop: `bec-booking-summary__desktop`
- Prezzo testata: `bec-booking-summary__head`, `__title`, `__head-price`, `__head-amount`, `__head-sub`
- Letture: `bec-booking-summary__readouts`, `__readout-row`, `__readout`
- Tariffe: `bec-booking-summary__rate-select`, `__rate-list`, `__rate-item`, `is-selected`, `__rate-link`
- Accordion (rispettano interruttori stile): `bec-booking-summary__accordions`, `__accordion`
- Dettaglio: `bec-booking-summary__breakdown`, `__row`, `__tax-note`
- Azioni: `bec-booking-summary__actions`, `__action--primary`, `__action--secondary`
- Mobile: `bec-booking-summary__mobile`, `__bar`, `__backdrop`, `__drawer`, `__drawer-body`, `__hero`
- Messaggi: `bec-booking-summary__message`, `--error`, `--empty`

---

## Suggerimenti

- Gli accordion per **inclusioni** / **condizioni** seguono gli interruttori admin in **[Design](../07-styling/01-styling-overview.md)**.
- Cambiare tariffa scrive **`bec_rate_id`** nell’URL per il checkout a valle.
