---
title: Categorie unità
sidebar_label: Categorie unità
description: Tassonomia opzionale bec_unit_category — attiva nella schermata Units, slug URL, struttura URL, sync da Kross, archivi pubblici ed etichette multilingua.
---

# Categorie unità

Le **categorie unità** sono una tassonomia WordPress opzionale sui post **`bec_unit`**. Se abilitata, il plugin può assegnare ogni unità sincronizzata a un **termine categoria** quando il provider attivo fornisce i dati (Kross mappa le categorie del tipo camera in un frammento `unit_category` normalizzato su ogni riga remota).

Le categorie si configurano nella stessa schermata dei permalink unità: **Booking Engine → Units**.

---

## Abilitazione e base URL

| Impostazione | Significato |
|--------------|-------------|
| **Enable the Unit Category taxonomy** | Attiva la tassonomia: UI in admin (barra laterale modifica unità, colonne elenco), URL pubblici opzionali, REST per i termini quando è attiva, e **assegnazione alla sincronizzazione** dopo ogni upsert unità. |
| **Category URL slug** | Segmento di percorso prima dello slug del termine (base predefinita **`unit-category`** se il campo è vuoto). Esempio: `https://example.com/unit-category/mia-categoria/`. |

La **chiave interna** della tassonomia nel database è sempre **`bec_unit_category`** — solo lo slug di rewrite pubblico è configurabile.

**Option keys:** flag abilitazione tassonomia, `bec_unit_category_permalink_slug`

Salvare il modulo **rinfresca le regole di riscrittura** così WordPress applica subito gli slug.

---

## Struttura URL categoria

**Option key:** `bec_unit_category_url_structure`

| Valore | Pattern | Esempio |
|--------|---------|---------|
| **`category_base`** (default) | `/{category slug}/{term name}` | `/unit-category/villas/` |
| **`unit_base`** | `/{unit slug}/{term name}` | `/properties/villas/` |
| **`bare`** | `/{term name}` | `/villas/` |

**Compatibilità:** `unit_base` non può essere combinato con struttura URL unità **`base`** (`/{unit slug}/{unit name}`) — entrambi producono URL a due segmenti ambigui.

**`bare`** richiede categorie abilitate e supera controlli conflitto con pagine, post, slug unità ed endpoint rewrite esistenti.

Gli sviluppatori possono sovrascrivere con il filtro **`bec_unit_category_url_structure`**.

---

## Disattivazione dopo l’uso

Se disattivi **Enable**:

- Gli archivi pubblici categoria e la UI categoria in admin scompaiono.
- **Termini e assegnazioni sono conservati** — non vengono eliminati — così puoi riattivare senza perdere dati.

Le strutture URL unità che richiedono categorie (`base_category`, `category_only`) non possono essere salvate mentre le categorie sono disabilitate.

---

## Come la sync assegna le categorie

Dopo ogni sincronizzazione riuscita di un’unità, dopo l’aggiornamento dei meta, il plugin:

1. Legge `unit_category` dalla riga remota normalizzata (dopo il filtro `bec_sync_remote_unit`).
2. Consente agli sviluppatori di modificarla con **`bec_sync_unit_category`**.
3. Crea/aggiorna un termine identificato da **`bec_provider_slug`** + **`bec_external_id`** sul termine, poi imposta quel termine sull’unità.

Se il provider non invia una categoria per un’unità, non viene assegnato nulla in quel passaggio.

---

## Meta termine (supporto)

I termini categoria memorizzano il collegamento al provider e le etichette (non esposte via REST di default):

| Meta termine | Scopo |
|--------------|--------|
| `bec_external_id` | Id categoria lato provider. |
| `bec_provider_slug` | es. `kross`. |
| `bec_category_names` | JSON mappa locale a due lettere → etichetta leggibile. |
| `bec_category_normalized` | JSON del descrittore usato nell’ultima sync. |
| `bec_last_sync_at` | Ultimo aggiornamento del termine da sync. |

I titoli archivio preferiscono un’etichetta da **`bec_category_names`** per la lingua del sito (`bec_provider_locale` con contesto `unit_category`).

---

## Siti multilingua

Con **WPML** o **Polylang**, gli URL termine categoria seguono la configurazione prefisso lingua come le altre tassonomie WordPress.

---

## Pagine correlate

- **[Permalink e archivio](./05-permalinks-and-archive.md)** — slug unità, archivio, struttura URL unità e la stessa schermata admin.
- **[Sincronizzare le unità](./02-syncing-units.md)** — sync completa e filtri motori Kross.
- **[Riferimento meta (sviluppatori)](../09-developer-reference/03-post-meta-reference.md)** — tabella meta termine.
- **[Hook e filtri sync (sviluppatori)](../09-developer-reference/02-sync-hooks-and-filters.md)** — `bec_sync_unit_category` e filtri tassonomia.
