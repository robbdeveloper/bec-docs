---
title: Contesto di ricerca e URL
sidebar_label: Contesto ricerca e URL
description: Parametri bec_* archivio unità redirect_url bec_search GET action contesto ricerca completo shortcode.
---

# Contesto di ricerca e URL

La maggior parte degli shortcode di prenotazione legge le **stesse informazioni dall’URL della pagina**. Questo snapshot condiviso si chiama **contesto di ricerca** (search context).

Quando si invia **`[bec_search]`**, il browser effettua una richiesta **GET** verso l’URL **`action`** del form. **`bec_checkin`**, **`bec_checkout`**, i campi ospite e ogni altro input **`bec_*`** compaiono come **parametri di query** su quell’URL.

La destinazione **non è sempre la stessa pagina** dello shortcode:

- **`[bec_search]`** predefinito (senza **`redirect_url`**) — WordPress porta il visitatore sull’**archivio unità** (o sulla **home** se manca l’URL archivio) con i parametri di ricerca — utile da homepage verso l’inventario.
- **`redirect_url="…"`** — Invia gli stessi parametri alla pagina o URL scelti.

Altri template (ricerca automatica su singola unità, `bec_render_search_form()`, ecc.) calcolano **`action`** dalla richiesta corrente; vedi **[bec_search](../06-shortcodes/02-bec-search.md)** e il filtro **`bec_search_form_action`** in **[Hook sync (sviluppatori)](../09-developer-reference/02-sync-hooks-and-filters.md)**.

{/* SCREENSHOT: Browser address bar zoomed showing bec_checkin bec_checkout parameters */}
![URL con parametri query BEC](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/05-bookings-and-checkout/url-query-params.png`): url-query-params.png */}

---

## Parametri comuni

| Parametro | Significato |
|-----------|-------------|
| `bec_checkin` | Data inizio soggiorno (formato atteso dal sito — di solito `YYYY-MM-DD`). |
| `bec_checkout` | Data fine soggiorno. |
| `bec_adults` | Numero adulti in modalità adulti + bambini. |
| `bec_children` | Numero bambini in modalità adulti + bambini. |
| `bec_total_guests` | Conteggio ospiti unico quando il provider usa la modalità **ospiti totali** (cablaggi interni lo mappano nel contesto preventivo/checkout). |
| `bec_child_age[]` | Campo ripetuto — un’età per bambino quando le età sono abilitate. |
| `bec_rate_id` | Piano tariffario selezionato quando esistono più tariffe — i link del riepilogo prenotazione riscrivono questo valore. |

I nomi dei parametri iniziano sempre con **`bec_`** per non collidere con altri plugin.

---

## Contesto “completo”

Gli shortcode che servono prezzi live (**preventivi**, **checkout**, **riepilogo prenotazione**) richiedono un contesto **completo**:

- Check-in **e** check-out compilati
- Almeno **un ospite pagante** rappresentato nel conteggio adulti interni (la modalità ospiti totali soddisfa questo automaticamente)

Se mancano le date, quegli shortcode di solito mostrano stati **solo ricerca** o **vuoti** invece di chiamare l’API.

---

## Esempi di URL

**Ricerca da homepage verso l’archivio unità (`[bec_search]` predefinito):**

```
https://example.com/properties/?bec_checkin=2026-06-01&bec_checkout=2026-06-08&bec_adults=2&bec_children=1
```

**Pagina risultati personalizzata con `redirect_url`:**

```
https://example.com/disponibilita/?bec_checkin=2026-06-01&bec_checkout=2026-06-08&bec_total_guests=3
```

**Stesse date su una pagina unità:**

```
https://example.com/properties/ocean-room/?bec_checkin=2026-06-01&bec_checkout=2026-06-08&bec_adults=2&bec_children=0
```

Usa **`[bec_unit_url]`** per costruire i link così non copi a mano i parametri — vedi **[bec_unit_url](../06-shortcodes/07-bec-unit-url.md)**.

---

## Pagine correlate

- **[Disponibilità e preventivi](./02-availability-and-quotes.md)**
- **[Panoramica shortcode](../06-shortcodes/01-shortcodes-overview.md)**
