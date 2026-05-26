---
title: Impostazioni Frontend
sidebar_label: Impostazioni Frontend
description: Schermata Booking Engine Frontend — modalità input ospiti, età bambini, inserimento automatico ricerca, blocchi prenotazione sulle pagine singola unità.
---

# Impostazioni Frontend

Apri **Booking Engine → Frontend**.

Queste impostazioni controllano come la **barra di ricerca disponibilità** raccoglie gli ospiti e se la UI di prenotazione viene iniettata automaticamente sulle viste **singular `bec_unit`** — senza shortcode nell’editor.

{/* SCREENSHOT: Full Frontend page */}
![Pagina impostazioni Frontend](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-page-overview.png`): frontend-page-overview.png */}

---

## Modulo di ricerca

Si applica a **`[bec_search]`** e alla ricerca incorporata in **`[bec_booking_summary]`**.

### Come vengono raccolti gli ospiti

**Option key:** `bec_search_guest_input_mode`

| Opzione | Quando usarla |
|---------|-----------------|
| **Follow the active provider** | Predefinito. Allinea ciò che il provider si aspetta (es. un totale ospiti vs adulti + bambini). |
| **Single “Guests” count only** | Un solo numero per tutte le persone — più semplice per piccole strutture. |
| **Adults and children (separate fields)** | Quando serve uno split per prezzi o policy. |

### Età dei bambini nella ricerca

**Option key:** `bec_search_child_ages_mode`

| Opzione | Significato |
|---------|-------------|
| **Follow the active provider** | Usa le regole del motore. |
| **Ask for each child’s age** | Mostra un campo età per bambino quando il modulo è in modalità adulti + bambini. |
| **Do not ask for child ages** | Non chiede le età (non usato se raccogli solo un totale ospiti). |

{/* SCREENSHOT: Search form behaviour section on Frontend page */}
![Impostazioni modulo ricerca su Frontend](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-search-form-settings.png`): frontend-search-form-settings.png */}

---

## Pagine singola unità (blocchi automatici)

**Option keys:** `bec_auto_append_search_form_single_unit`, `bec_append_booking_blocks_to_content`

Il plugin può iniettare la UI di prenotazione sulle viste **singular `bec_unit`** senza shortcode nell’editor:

| Checkbox | Effetto |
|----------|---------|
| **Insert the availability search form above the main post content** | Antepone la stessa UI di **`[bec_search]`** sopra il corpo unità. Disattiva se aggiungi `[bec_search]` (o un riepilogo) manualmente in template o editor a blocchi. |
| **Append the booking quote and Continue button after the main post content when the URL has dates** | Dopo il contenuto, quando il contesto di ricerca dall’URL è **completo** (check-in, check-out, ospiti), aggiunge preventivo + CTA checkout (come **`[bec_booking_summary]`** / quote). Disattiva se usi `[bec_booking_summary]`, `[bec_quote]` o `[bec_checkout]` dove preferisci. |

Queste opzioni interagiscono con **[Contesto di ricerca](../05-bookings-and-checkout/01-search-context-and-urls.md)** e **[Flusso checkout](../05-bookings-and-checkout/03-checkout-flow.md)**.

---

## Pagine correlate

- **[Panoramica schermate admin](./05-admin-screens.md)**
- **[bec_search](../06-shortcodes/02-bec-search.md)**
- **[bec_booking_summary](../06-shortcodes/06-bec-booking-summary.md)**
