---
title: Aggiungi ricerca e prenotazione alle pagine
sidebar_label: Ricerca e prenotazione sulle pagine
description: Tutorial rapido — posiziona bec_search su una landing e bec_booking_summary sulle pagine unità con editor a blocchi o classico.
---

# Aggiungi ricerca e prenotazione alle pagine

È un layout **minimo** usato da molti siti: ricerca dove serve, widget di prenotazione ricco su ogni pagina unità.

---

## 1. Metti una barra di ricerca sulla homepage (o pagina dedicata)

1. Modifica la pagina nell’**editor a blocchi**.
2. Aggiungi un blocco **Shortcode** (o **HTML personalizzato** se il tema consente shortcode lì).
3. Incolla:

```
[bec_search]
```

4. **Aggiorna** la pagina.

**Dove arriva la ricerca:** con il semplice **`[bec_search]`**, l’invio va per impostazione predefinita all’**archivio delle unità** (l’elenco pubblico dell’inventario), **non** di nuovo alla homepage — così l’elenco può leggere **`bec_*`** dall’URL. Se l’archivio è disattivato, WordPress usa la **home**; abilita **Unit archive** in **Booking Engine → Units — permalinks** oppure aggiungi **`redirect_url="/tua-pagina/"`** allo shortcode. Dettagli: **[bec_search](../06-shortcodes/02-bec-search.md)**.

Quando un visitatore invia il modulo, il browser carica la destinazione con date e ospiti nell’**URL**. Gli altri shortcode **su quella pagina** leggono gli stessi valori.

{/* SCREENSHOT: Front-end Enhanced or Classic search bar in a page header */}
![Shortcode barra ricerca front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-search-bar.png`): frontend-search-bar.png */}

---

## 2. Aggiungi un riepilogo prenotazione su ogni pagina unità

Nel template **singola unità** o nel contenuto dell’articolo:

```
[bec_booking_summary]
```

Questo blocco include:

- Ricerca incorporata quando mancano le date
- Prezzo e dettaglio quando l’API restituisce un preventivo
- Pulsante **Continue** verso il motore di prenotazione esterno (se configurato)
- Link **Enquiry** opzionale

Se lo shortcode è sulla pagina dell’unità stessa, **non** serve passare un ID unità.

{/* SCREENSHOT: Desktop booking summary with price and Continue button */}
![Riepilogo prenotazione desktop front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/frontend-booking-summary.png`): frontend-booking-summary.png */}

---

## 3. Opzionale: riga prezzo negli archivi

In un **query loop**, griglia personalizzata o template archivio puoi mostrare un prezzo compatto per un’unità specifica:

```
[bec_quote unit_id="123"]
```

Sostituisci `123` con l’ID post WordPress dell’unità. Lo shortcode produce testo solo se l’URL ha già date complete — vedi **[bec_quote](../06-shortcodes/04-bec-quote.md)**.

---

## 4. Opzionale: Elementor Pro Loop Grid senza schede “nessuna disponibilità”

Se costruisci l’elenco con **Elementor Pro** Loop Grid invece che solo shortcode, imposta il **Query ID** della griglia su **`bec_available_only`** così le unità senza disponibilità per la ricerca URL corrente sono **nascoste** (non mostrate come schede vuote). Vedi **[Elementor — nascondere unità senza disponibilità](../06-shortcodes/11-elementor-loop-grid-availability-filter.md)**.

---

## 5. Opzionale: link che preservano la ricerca

Costruendo link HTML da un elenco a un’unità, usa **`[bec_unit_url]`** dentro `href` per mantenere check-in, check-out e ospiti:

```html
<a href="[bec_unit_url]">Vedi dettagli</a>
```

Oppure passa un ID post specifico: `[bec_unit_url unit_id="123"]`.

---

## Stile

Modifica l’aspetto in **Booking Engine → Styling** o aggiungi CSS — vedi **[Panoramica stile](../07-styling/01-styling-overview.md)**.

---

## Riferimento completo shortcode

**[Panoramica shortcode →](../06-shortcodes/01-shortcodes-overview.md)**
