---
title: Shortcode `[bec_quote]`
sidebar_label: bec_quote
description: Shortcode preventivo compatto, unit_id, show_rates, hook CSS bec-shortcode-quote, schede archivio.
---

# `[bec_quote]`

Mostra una **riga compatta disponibilità / prezzo** usando il servizio preventivi in cache — ideale accanto alle miniature negli archivi o in layout leggeri.

---

## Dove posizionarlo

Loop archivio unità, griglie “ correlate”, strisce hero — ovunque **`[bec_booking_summary]`** sarebbe troppo pesante.

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`unit_id`** | `0` | ID post Unità; `0` usa il post corrente nel loop. |
| **`show_rates`** | `auto` | Controlla elenco opzionale tariffe sotto il prezzo principale. Valori veri: `1`, `always`, `yes`, `true`; falsi: `0`, `never`, `no`, `false`. **`auto`** elenca tariffe solo se ce n’è più di una. |

---

## Esempi

```
[bec_quote]
```

```
[bec_quote show_rates="always"]
```

```
[bec_quote unit_id="456" show_rates="0"]
```

---

## Output visitatore

Richiede contesto URL **completo** — altrimenti vuoto.

{/* SCREENSHOT: Archive card with quote line */}
![bec_quote su scheda archivio](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-quote-archive.png`): bec-quote-archive.png */}

---

## Hook CSS

- Radice: `bec-shortcode-quote`
- Elenco tariffe: `bec-shortcode-quote__rates`, `bec-shortcode-quote__rate`, `bec-shortcode-quote__rate--selected`
- Etichette: `bec-shortcode-quote__rate-name`, `bec-shortcode-quote__rate-price`

---

## Suggerimenti

Gli sviluppatori possono regolare testo/HTML con i filtri **`bec_shortcode_quote_text`** / **`bec_shortcode_quote_html`**.
