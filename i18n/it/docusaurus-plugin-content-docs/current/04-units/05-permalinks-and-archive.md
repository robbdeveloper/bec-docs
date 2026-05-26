---
title: Permalink e archivio
sidebar_label: Permalink e archivio
description: Schermata Booking Engine Units — segmento slug URL pubblico, strutture URL e elenco archivio unità opzionale.
---

# Permalink e archivio

Le unità compaiono sul front-end a URL controllati dalle **regole di riscrittura** WordPress.

Configurale in **Booking Engine → Units**.

{/* SCREENSHOT: Units permalinks admin screen */}
![Impostazioni permalink Unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/units-permalinks-page.png`): units-permalinks-page.png */}

---

## Slug URL

**URL slug** imposta il segmento di percorso prima dello slug dell’unità (quando la struttura URL unità lo include).

| Impostazione | Esempio URL pubblico |
|--------------|----------------------|
| Vuoto / predefinito | `https://example.com/bec_unit/my-villa/` |
| Personalizzato `properties` | `https://example.com/properties/my-villa/` |

Modificarlo riguarda **ogni** URL unità. I motori di ricerca possono avere bisogno di tempo — coordina con il flusso SEO.

Salvare **rigenera le regole di riscrittura** così WordPress riconosce subito il nuovo modello.

**Option key:** `bec_unit_permalink_slug`

---

## Struttura URL unità

**Option key:** `bec_unit_url_structure`

Scegli come sono costruiti i permalink singola unità:

| Valore | Pattern | Esempio |
|--------|---------|---------|
| **`base`** (default) | `/{unit slug}/{unit name}` | `/properties/my-villa/` |
| **`base_category`** | `/{unit slug}/{category}/{unit name}` | `/properties/villas/my-villa/` |
| **`category_only`** | `/{category}/{unit name}` | `/villas/my-villa/` |

Le strutture che includono **`{category}`** richiedono **categorie unità** abilitate e unità con termini categoria assegnati.

Gli sviluppatori possono sovrascrivere il valore salvato con il filtro **`bec_unit_url_structure`**.

---

## Archivio unità

Alcuni siti vogliono un **elenco navigabile di tutte le unità** allo slug radice:

- Abilita **Unit archive** quando serve qualcosa come `https://example.com/properties/` come template archivio (dipende dal tema).

Disabilitalo quando le unità devono comparire **solo** tramite menu, loop o link manuali — non come indice pubblico.

**Option key:** `bec_unit_archive_enabled`

L’archivio nativo supporta **`[bec_unit_filters]`** e i parametri query **`bec_filter_*`** sulla query principale.

---

## Categorie unità (stessa schermata)

La pagina **Units** controlla anche la tassonomia opzionale **Unit category**:

- **Abilita** le categorie affinché il plugin possa **sincronizzare i termini** (quando il provider li fornisce) ed esporre eventualmente **URL pubblici categoria**.
- Imposta lo **slug URL categoria** (base predefinita `unit-category` se vuoto).
- Scegli **struttura URL categoria** — vedi **[Categorie unità](./06-unit-categories.md)**.

---

## Regole di validazione

Il modulo admin valida combinazioni incompatibili prima del salvataggio:

| Regola | Significato |
|--------|-------------|
| **`base` + URL categoria `unit_base`** | Non consentito — entrambi usano due segmenti URL e WordPress non li distingue. |
| **Strutture unità che richiedono categoria** | `base_category` e `category_only` richiedono categorie abilitate. |
| **URL categoria bare** | La struttura `bare` (`/{term name}/`) verifica conflitti slug con pagine, post, unità ed endpoint rewrite. |

Dopo cambi strutturali, visita **Impostazioni → Permalink** e clicca **Salva modifiche** una volta se i link danno 404.

---

## Siti multilingua

Con **WPML** o **Polylang** attivi, i prefissi lingua compaiono prima di questi percorsi come di consueto. Le opzioni struttura URL si applicano al percorso **dopo** il prefisso lingua.

---

## Se i link danno 404

Dopo cambi strutturali:

1. Vai in **Impostazioni → Permalink** e clicca **Salva modifiche** una volta (senza edit) — WordPress aggiorna le regole.
2. Svuota cache server/CDN se serve.

---

## Pagine correlate

- **[Categorie unità](./06-unit-categories.md)**
- **[Panoramica unità](./01-units-overview.md)**
- **[Panoramica schermate admin](../02-getting-started/05-admin-screens.md)**
