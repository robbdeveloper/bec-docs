---
title: Elementor — dynamic tag Unit gallery
sidebar_label: Elementor Unit gallery
description: Dynamic tag Elementor per bec_core_gallery — widget Gallery e Media Carousel, limit, offset, Unit ID.
---

# Elementor — dynamic tag Unit gallery

Booking Engine Connector registra un **dynamic tag** Elementor che alimenta controlli **Gallery** e **Media Carousel** (e altri controlli categoria gallery) dallo stesso meta **`bec_core_gallery`** usato in sync e nello shortcode **`[bec_unit_gallery]`**.

---

## Requisiti

- **Elementor** (free o Pro) con dynamic tag attivi.
- Post unità sincronizzati con ID allegati in **`bec_core_gallery`**.
- Nei template loop, ogni elemento dovrebbe essere un post **`bec_unit`** (oppure imposta **Unit ID** esplicitamente).

---

## Configurazione

1. Modifica pagina o template **Elementor** (singola unità, item loop archivio, ecc.).
2. Aggiungi widget **Gallery** o **Media Carousel** (o altro widget con controllo gallery dinamico).
3. Apri il controllo **gallery** → icona **dinamico**.
4. Scegli **Booking Engine → Unit gallery**.

{/* SCREENSHOT: selettore dynamic tag Elementor con Unit gallery */}
![Dynamic tag Elementor Unit gallery](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/elementor-unit-gallery-tag.png`): elementor-unit-gallery-tag.png */}

---

## Controlli del tag

| Controllo | Predefinito | Significato |
|-----------|-------------|-------------|
| **Image limit** | `6` | Massimo immagini dopo l’offset. **`0`** = gallery intera. |
| **Offset** | `0` | Salta le prime N immagini nell’ordine memorizzato. |
| **Unit ID** | *(vuoto)* | ID post Unità. **Vuoto** = **post corrente** (pagina unità o item Loop Grid). |

Elementor risolve gli **ID allegati** dalla Libreria media (gli URL vengono da WordPress, non da JSON shortcode).

---

## Note comportamento

| Situazione | Cosa succede |
|------------|----------------|
| Post corrente è **`bec_unit`** | Gallery dall’ordine **`bec_core_gallery`** di quell’unità. |
| **Unit ID** impostato | Usa sempre quell’unità, anche fuori dal loop unità. |
| Nessuna immagine / unità non valida | Gallery vuota (stato vuoto Elementor). |
| Stessi dati di **`[bec_unit_gallery]`** | Sì — **`UnitGalleryPresenter`** condiviso; lo shortcode emette URL JSON, il tag righe allegato native. |

---

## Hook sviluppatori

| Filtro | Scopo |
|--------|--------|
| `bec_unit_gallery_elementor_rows` | Regola righe `{ id: attachmentId }` prima del consumo Elementor. |
| `bec_unit_gallery_elementor_value` | Valore finale del tag (`$rows`, `$postId`, `$settings`). |

Anche **`bec_unit_gallery_attachment_ids`** filtra gli ID (vedi **[bec_unit_gallery](./13-bec-unit-gallery.md)**).

---

## Correlati

- **[Elementor — nascondere unità senza disponibilità](./11-elementor-loop-grid-availability-filter.md)** — Query ID Loop Grid `bec_available_only`
- **[bec_unit_gallery](./13-bec-unit-gallery.md)** — output JSON per JS personalizzato
- **[Immagini gallery](../04-units/04-gallery-images.md)**
