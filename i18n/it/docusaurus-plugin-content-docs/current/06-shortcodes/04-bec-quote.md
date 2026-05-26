---
title: Shortcode '[bec_quote]'
sidebar_label: bec_quote
description: Shortcode preventivo compatto, unit_id, show_rates, price_mode, formattazione valuta, decimals number_style, hook CSS bec-shortcode-quote.
---

# `[bec_quote]`

Mostra una **riga compatta disponibilità / prezzo** usando il servizio preventivi in cache — ideale accanto alle miniature negli archivi o in layout leggeri.

---

## Dove posizionarlo

Loop archivio unità, griglie correlate, strisce hero — ovunque **`[bec_booking_summary]`** sarebbe troppo pesante.

---

## Attributi

| Attribute | Default | Significato |
|-----------|---------|-------------|
| **`unit_id`** | `0` | ID post Unità; `0` usa il post corrente nel loop. |
| **`show_rates`** | `never` | Elenco tariffe opzionale sotto il prezzo principale. Truthy: `1`, `always`, `yes`, `true`. **`auto`** elenca tariffe solo se ce n’è più di una. Falsy: `0`, `never`, `no`, `false`. |
| **`price_mode`** | `total` | `total` (totale soggiorno) o `per_night` (importo notturno). Aggiunge classe `bec-shortcode-quote--per-night`. |
| **`currency_display`** | `symbol` | `code` (es. `EUR`) o `symbol` (es. `€`). |
| **`currency_position`** | `after` | `before` o `after` rispetto all’importo. |
| **`decimals`** | `2` | Cifre decimali (`0`–`4`). |
| **`decimal_sep`** | *(locale)* | Separatore decimale. Vale solo se **entrambi** **`decimal_sep`** e **`thousands_sep`** sono impostati. |
| **`thousands_sep`** | *(locale)* | Separatore migliaia. Abbinare a **`decimal_sep`**. |
| **`number_style`** | `eu` | `locale`, `eu` (es. `1.234,56`) o `us` (es. `1,234.56`). |

Predefiniti valuta globali: filtro **`bec_money_format_defaults`** (contesto `bec_quote`).

Quando l’unità **non** è disponibile, l’elemento root riceve anche la classe **`no-results`**.

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

Prezzo per notte con simbolo prima dell’importo:

```
[bec_quote price_mode="per_night" currency_display="symbol" currency_position="before" number_style="eu"]
```

---

## Output visitatore

Richiede contesto URL **completo** — altrimenti vuoto.

Con più tariffe e nessuna selezionata nell’URL, la riga principale può mostrare **“From %s”** (siti in italiano: **“Da %s”**).

{/* SCREENSHOT: Archive card with quote line */}
![bec_quote su scheda archivio](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-quote-archive.png`): bec-quote-archive.png */}

---

## Hook CSS

- Root: `bec-shortcode-quote`, `bec-shortcode-quote--per-night`, **`no-results`** quando non disponibile
- Elenco tariffe: `bec-shortcode-quote__rates`, `bec-shortcode-quote__rate`, `bec-shortcode-quote__rate--selected`
- Etichette: `bec-shortcode-quote__rate-name`, `bec-shortcode-quote__rate-price`

---

## Suggerimenti

Gli sviluppatori possono regolare testo/HTML con **`bec_shortcode_quote_text`** / **`bec_shortcode_quote_html`**, o formattare importi con **`bec_format_money`** e **`bec_currency_symbols`**.
