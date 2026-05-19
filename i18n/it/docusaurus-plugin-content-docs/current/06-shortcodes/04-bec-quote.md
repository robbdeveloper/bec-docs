---
title: Shortcode `[bec_quote]`
sidebar_label: bec_quote
description: Shortcode preventivo compatto, unit_id, show_rates, formattazione valuta, decimals number_style, hook CSS bec-shortcode-quote.
---

# `[bec_quote]`

Mostra una **riga compatta disponibilità / prezzo** usando il servizio preventivi in cache — ideale accanto alle miniature negli archivi o in layout leggeri.

---

## Dove posizionarlo

Loop archivio unità, griglie correlate, strisce hero — ovunque **`[bec_booking_summary]`** sarebbe troppo pesante.

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`unit_id`** | `0` | ID post Unità; `0` usa il post corrente nel loop. |
| **`show_rates`** | `auto` | Elenco tariffe opzionale sotto il prezzo. Veri: `1`, `always`, `yes`, `true`. Falsi: `0`, `never`, `no`, `false`. **`auto`** elenca tariffe solo se ce n’è più di una. |
| **`currency_display`** | `code` | `code` (es. `EUR`) o `symbol` (es. `€`). |
| **`currency_position`** | `after` | `before` o `after` rispetto all’importo. |
| **`decimals`** | `2` | Cifre decimali (`0`–`4`). |
| **`decimal_sep`** | *(locale)* | Separatore decimale. Vale solo se **entrambi** **`decimal_sep`** e **`thousands_sep`** sono impostati. |
| **`thousands_sep`** | *(locale)* | Separatore migliaia. Abbinare a **`decimal_sep`**. |
| **`number_style`** | `locale` | `locale`, `eu` (es. `1.234,56`) o `us` (es. `1,234.56`). |

Predefiniti valuta globali: filtro **`bec_money_format_defaults`** (contesto `bec_quote`).

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

Simbolo europeo prima dell’importo:

```
[bec_quote currency_display="symbol" currency_position="before" number_style="eu"]
```

---

## Output visitatore

Richiede contesto URL **completo** — altrimenti vuoto.

Con più tariffe e nessuna selezionata nell’URL, la riga principale può mostrare **“Da %s”** (siti in italiano).

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

Gli sviluppatori possono regolare testo/HTML con **`bec_shortcode_quote_text`** / **`bec_shortcode_quote_html`**, o formattare importi con **`bec_format_money`** e **`bec_currency_symbols`**.
