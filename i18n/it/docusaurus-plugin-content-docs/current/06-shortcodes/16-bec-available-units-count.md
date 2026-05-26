---
title: Shortcode '[bec_available_units_count]'
sidebar_label: bec_available_units_count
description: Conteggio unità che corrispondono a filtri e disponibilità per il contesto ricerca URL corrente; format, zero_text, etichette singolare/plurale.
---

# `[bec_available_units_count]`

Stampa il **numero di unità pubblicate** che corrispondono ai parametri **`bec_filter_*`** correnti e, quando il contesto ricerca è completo, unità **disponibili** per quelle date e ospiti.

Usa le stesse regole di conteggio del Query ID Elementor Loop Grid **`bec_available_only`** / **`bec_filtered_units`**.

---

## Dove posizionarlo

- Sopra un Elementor Loop Grid sulle pagine risultati ricerca.
- Nei titoli template archivio accanto a **`[bec_unit_filters]`**.
- Ovunque la query principale o il loop elenchi già unità filtrate.

---

## Attributi

| Attribute | Default | Significato |
|-----------|---------|-------------|
| **`format`** | `number` | `number` stampa solo il conteggio; `text` usa pattern **`singular`** / **`plural`**. |
| **`zero_text`** | *(empty)* | Testo personalizzato quando il conteggio è `0`. Vuoto + `format="number"` stampa `0`; vuoto + `format="text"` non stampa nulla. |
| **`singular`** | *(empty)* | Pattern `sprintf` per conteggio `1` (es. `%d available unit`). Default stringa tradotta quando singular e plural sono vuoti. |
| **`plural`** | *(empty)* | Pattern `sprintf` per conteggio `> 1`. |
| **`hide_without_search`** | `0` | Se truthy, non produce output finché il contesto ricerca non è completo (check-in, check-out, ospiti). |
| **`class`** | *(empty)* | Classi CSS extra aggiunte allo span root (separate da spazio). |

Filtri: **`bec_available_units_count`**, **`bec_shortcode_available_units_count_html`**.

---

## Esempi

Numero semplice:

```
[bec_available_units_count]
```

Etichetta leggibile:

```
[bec_available_units_count format="text" singular="%d property available" plural="%d properties available"]
```

Nascondi finché il visitatore non ha cercato:

```
[bec_available_units_count hide_without_search="1" format="text"]
```

Stato zero personalizzato:

```
[bec_available_units_count format="text" zero_text="No units match your filters"]
```

Con classe extra per stile tema:

```
[bec_available_units_count class="results-count"]
```

---

## Hook CSS

- Root: `bec-available-units-count`
- Classi opzionali dall’attributo **`class`**

---

## Vedi anche

- **[bec_unit_filters](./15-bec-unit-filters.md)**
- **[Filtro Elementor Loop Grid](./11-elementor-loop-grid-availability-filter.md)**
- **[Disponibilità e preventivi](../05-bookings-and-checkout/02-availability-and-quotes.md)**
