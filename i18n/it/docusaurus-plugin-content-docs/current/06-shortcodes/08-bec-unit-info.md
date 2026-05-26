---
title: Shortcode '[bec_unit_info]'
sidebar_label: bec_unit_info
description: HTML unità specifico del provider da payload sync — chiavi amenities_grid bedroom_arrangements unit_id, estensione sviluppatori bec_unit_info_renderers.
---

# `[bec_unit_info]`

Mostra **frammenti HTML specifici del provider** basati sui dati di sync memorizzati (`bec_sync_payload`). Le chiavi variano per provider — per **Kross** il plugin include **`amenities_grid`** e **`bedroom_arrangements`**.

Gli sviluppatori possono registrare chiavi aggiuntive — vedi **[Renderer unit info (sviluppatori)](../09-developer-reference/07-unit-info-renderers.md)**.

---

## Dove posizionarlo

Template corpo unità sotto descrizioni, tab o accordion gestiti dal tema.

---

## Attributi

| Attribute | Default | Significato |
|-----------|---------|-------------|
| **`key`** | *(empty)* | Id renderer — obbligatorio per output significativo. |
| **`unit_id`** | `0` | Id post Unità; `0` usa il post corrente. |
| **`default`** | *(empty)* | Mostrato se renderer assente o payload non valido — testo semplice (escapato). |
| **Anything else** | — | Passati ai renderer (`columns`, `font_pack`, …). |

---

## Kross: `amenities_grid`

```
[bec_unit_info key="amenities_grid"]
```

| Pass-through | Default | Significato |
|--------------|---------|-------------|
| **`font_pack`** | `font-1` | Slug bundle font icone registrato via filtri asset servizi. |
| **`columns`** | `2` | Colonne griglia **1–6** (desktop, ≥640px). |
| **`columns_mobile`** | `1` | Colonne griglia **1–6** sotto 640px. Imposta variabile CSS **`--bec-amenities-cols-mobile`**. |
| **`limit`** | `0` (all) | Massimo icone dopo ordinamento etichette — `0` mantiene l’elenco intero. |
| **`category`** | *(unset)* | Filtra servizi per slug categoria memorizzata (es. `amenity`). |

Esempio:

```
[bec_unit_info key="amenities_grid" columns="3" columns_mobile="2" limit="12" category="amenity"]
```

{/* SCREENSHOT: amenities_grid front-end */}
![bec_unit_info amenities_grid](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-info-amenities.png`): bec-unit-info-amenities.png */}

---

## Kross: `bedroom_arrangements`

```
[bec_unit_info key="bedroom_arrangements"]
```

| Pass-through | Default | Significato |
|--------------|---------|-------------|
| **`font_pack`** | `font-1` | Stessi pack icone delle amenities. |
| **`columns`** | `3` | Colonne griglia camere **1–6**. |
| **`title`** | *(empty)* | Sostituisce titolo sezione — lascia vuoto per usare le traduzioni. |
| **`show_title`** | hidden | Il titolo sezione è **nascosto** di default. Imposta **`show_title="1"`** per mostrarlo. |

Esempio:

```
[bec_unit_info key="bedroom_arrangements" show_title="1" title="Sleeping arrangements"]
```

{/* SCREENSHOT: bedroom_arrangements front-end */}
![bec_unit_info bedroom_arrangements](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-info-bedrooms.png`): bec-unit-info-bedrooms.png */}

---

## Hook CSS (esempi)

- Stack servizi: `bec-amenities`, `bec-amenities__item`, …
- Stack camere: `bec-bedrooms`, `bec-bedrooms__grid`, …

Il markup esatto appartiene all’output del renderer — ispeziona l’HTML front-end durante lo stile.

---

## Suggerimenti

Se l’output è sempre vuoto verifica:

1. Ortografia **`key`** corrisponde al renderer registrato.
2. L’unità ha completato la sync (**payload non vuoto**).
3. **`unit_id`** punta al post corretto.
