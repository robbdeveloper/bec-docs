---
title: Shortcode `[bec_unit_gallery]`
sidebar_label: bec_unit_gallery
description: Gallery JSON da ID allegati bec_core_gallery — limit, offset, size, unit_id, default — per JS personalizzato o template headless.
---

# `[bec_unit_gallery]`

Restituisce la **gallery canonica** dell’unità come **stringa JSON** costruita da **`bec_core_gallery`** (ID allegati WordPress importati in sync). Ogni elemento include metadati immagine risolti per una dimensione scelta.

Lo shortcode è pensato per **codice front-end personalizzato** (slider JS, blocchi React/Vue, ecc.). **Non** renderizza HTML e **non** accoda CSS/JS pubblici di Booking Engine.

---

## Dove posizionarlo

Nascosto in un template, in un wrapper che il tema legge con JavaScript, o ovunque si analizzi JSON lato client.

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`unit_id`** | `0` | ID post Unità; `0` usa il `bec_unit` corrente nel loop. |
| **`limit`** | `6` | Massimo immagini dopo **`offset`**. **`0`** = gallery **completa**. |
| **`offset`** | `0` | Salta i primi N ID allegati (ordine gallery da meta). |
| **`size`** | `large` | Slug dimensione immagine WordPress (es. `medium`, `full`). |
| **`default`** | `[]` | JSON di fallback senza gallery — deve essere JSON valido (predefinito array vuoto). |

---

## Forma JSON

Ogni elemento è un oggetto:

| Chiave | Tipo | Significato |
|--------|------|-------------|
| `id` | int | ID post allegato |
| `url` | string | URL immagine per **`size`** |
| `alt` | string | Testo alt dall’allegato |
| `width` | int | Larghezza in pixel (0 se sconosciuta) |
| `height` | int | Altezza in pixel (0 se sconosciuta) |

Lo shortcode emette JSON **escapato in HTML** (sicuro in `<script type="application/json">` o attributi `data-*` se decodifichi lato client).

Esempio (illustrativo):

```json
[{"id":101,"url":"https://example.com/wp-content/uploads/foto.jpg","alt":"Soggiorno","width":1024,"height":768}]
```

---

## Esempi

Prime sei immagini (predefinito):

```
[bec_unit_gallery]
```

Gallery completa, dimensione medium:

```
[bec_unit_gallery limit="0" size="medium"]
```

Seconda pagina di miniature (salta 6, prendi 6):

```
[bec_unit_gallery offset="6" limit="6"]
```

Unità specifica con fallback vuoto:

```
[bec_unit_gallery unit_id="123" default="[]"]
```

---

## Hook sviluppatori

| Filtro | Scopo |
|--------|--------|
| `bec_unit_gallery_attachment_ids` | Regola elenco ID prima della risoluzione URL (`$ids`, `$unitId`, `$context`). |
| `bec_unit_gallery_items` | Regola oggetti item risolti (`$items`, `$unitId`, `$context`). |
| `bec_unit_gallery_json` | Regola stringa JSON finale (`$json`, `$postId`, `$atts`). |

---

## Alternativa Elementor

Per widget **Gallery** o **Media Carousel** di Elementor, usa il dynamic tag **Unit gallery** — vedi **[Elementor — Unit gallery](./14-elementor-unit-gallery.md)**.

---

## Correlati

- **[Immagini gallery](../04-units/04-gallery-images.md)** — import, nomi file, modifica in admin
- **[Campi canonici unità — gallery](../09-developer-reference/04-canonical-unit-fields.md)**
