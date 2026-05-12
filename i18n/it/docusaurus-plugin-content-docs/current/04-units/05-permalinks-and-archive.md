---
title: Permalink e archivio
sidebar_label: Permalink e archivio
description: Booking Engine Units permalinks — segmento slug URL pubblico e elenco archivio unità opzionale.
---

# Permalink e archivio

Le unità compaiono sul front-end a URL controllati dalle **regole di riscrittura** WordPress.

Configurale in **Booking Engine → Units — permalinks**.

{/* SCREENSHOT: Units permalinks admin screen */}
![Impostazioni permalink Unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/units-permalinks-page.png`): units-permalinks-page.png */}

---

## Slug URL

**URL slug** imposta il segmento di percorso prima dello slug dell’unità.

| Impostazione | Esempio URL pubblico |
|--------------|----------------------|
| Vuoto / predefinito | `https://example.com/bec_unit/my-villa/` |
| Personalizzato `properties` | `https://example.com/properties/my-villa/` |

Modificarlo riguarda **ogni** URL unità. I motori di ricerca possono avere bisogno di tempo — coordina con il flusso SEO.

Salvare **rigenera le regole di riscrittura** così WordPress riconosce subito il nuovo modello.

---

## Archivio unità

Alcuni siti vogliono un **elenco navigabile di tutte le unità** allo slug radice:

- Abilita **Unit archive** quando serve qualcosa come `https://example.com/properties/` come template archivio (dipende dal tema).

Disabilitalo quando le unità devono comparire **solo** tramite menu, loop o link manuali — non come indice pubblico.

---

## Se i link danno 404

Dopo cambi strutturali:

1. Vai in **Impostazioni → Permalink** e clicca **Salva modifiche** una volta (senza edit) — WordPress aggiorna le regole.
2. Svuota cache server/CDN se serve.

---

## Pagine correlate

- **[Panoramica unità](./01-units-overview.md)**
