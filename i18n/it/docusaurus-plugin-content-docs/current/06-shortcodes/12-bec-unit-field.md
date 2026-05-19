---
title: Shortcode `[bec_unit_field]`
sidebar_label: bec_unit_field
description: Valori scalari dal payload unità sincronizzato tramite percorsi puntati — field, type, unit_id, default — CIN e campi Kross personalizzati.
---

# `[bec_unit_field]`

Mostra un **singolo valore scalare** dal payload provider sincronizzato dell’unità (`bec_sync_payload` → `raw`). Usalo per testo o numeri semplici non coperti dai renderer **`[bec_unit_info]`** o dai meta canonici **`bec_core_*`**.

Per il **CIN** italiano (Codice Identificativo Nazionale), preferisci il campo canonico sincronizzato in **`bec_core_cin`** (modificabile in **Unità — campi core**). Puoi comunque leggerlo con questo shortcode se serve.

---

## Dove posizionarlo

Template unità, footer, righe normative o schede archivio dove serve un dato (codice registrazione, campo API personalizzato, metratura, ecc.).

---

## Attributi

| Attributo | Predefinito | Significato |
|-----------|-------------|-------------|
| **`field`** | *(vuoto)* | **Obbligatorio.** Percorso puntato sotto **`raw`** del provider (es. `cin`, `size_sqm`, `custom_fields.custom_1.it`). |
| **`type`** | `string` | `string` (predefinito) o `number` — forza il tipo; valori non scalari → **`default`**. |
| **`unit_id`** | `0` | ID post Unità; `0` usa il post corrente nel loop. |
| **`default`** | *(vuoto)* | Testo se il campo manca o non è valido (HTML escapato). |

Le mappe con locale nel payload richiedono un **segmento locale esplicito** nel percorso (es. `custom_fields.custom_1.it`) — nessun fallback automatico di locale nel percorso.

---

## Esempi

CIN dal payload raw (disponibile anche come meta canonico dopo la sync):

```
[bec_unit_field field="cin"]
```

Campo Kross personalizzato con segmento locale:

```
[bec_unit_field field="custom_fields.custom_1.it"]
```

Superficie numerica:

```
[bec_unit_field field="size_sqm" type="number"]
```

Unità esplicita su scheda archivio:

```
[bec_unit_field field="cin" unit_id="456" default="—"]
```

---

## Output visitatore

- Solo **testo semplice escapato** (nessun wrapper HTML).
- **`field`** vuoto → **`default`** o niente.
- Tipo post errato / payload assente → **`default`** o niente.

---

## Hook sviluppatori

| Filtro | Scopo |
|--------|--------|
| `bec_unit_field_value` | Regola il valore prima della coercizione (`$value`, `$field`, `$postId`, `$decoded`, `$context`, `$passThrough`). |
| `bec_kross_unit_field_value` | Regolazione specifica Kross (stessi argomenti). |

I provider implementano **`ProviderInterface::getUnitFieldValue()`** — vedi **[Aggiungere un provider](../09-developer-reference/06-adding-a-provider.md)**.

---

## Correlati

- **[Campi canonici unità — CIN](../09-developer-reference/04-canonical-unit-fields.md)**
- **[bec_unit_info](./08-bec-unit-info.md)** — blocchi HTML strutturati invece di scalari
- **[Modifica di un’unità](../04-units/03-editing-a-unit.md)** — meta box canonico incluso il CIN
