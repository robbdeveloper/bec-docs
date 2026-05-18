---
title: Installazione
sidebar_label: Installazione
description: Carica, attiva Booking Engine Connector e trova il menu Booking Engine nell’amministrazione WordPress.
---

# Installazione

## Carica il plugin

Puoi installare **Booking Engine Connector** in uno dei modi standard di WordPress:

1. **Caricamento ZIP** — In **Plugin → Aggiungi nuovo → Carica plugin**, scegli il file `booking-engine-connector.zip` e clicca **Installa ora**, poi **Attiva**.
2. **FTP / file manager** — Carica la cartella del plugin in `wp-content/plugins/booking-engine-connector/` così il file principale del plugin sia in  
   `wp-content/plugins/booking-engine-connector/booking-engine-connector.php`, poi attiva in **Plugin**.

---

## Dopo l’attivazione

Compare un nuovo menu di primo livello nella barra laterale di amministrazione: **Booking Engine**.

I sottomenu includono di solito:

- **Dashboard** — Panoramica e collegamenti alle impostazioni.
- **Connection** — Provider e credenziali API (più comportamento del modulo di ricerca).
- **Styling** — Preset e CSS personalizzato.
- **Sync** — Intervallo, **Kross booking engines** (filtro sync completa), opzioni nomi file galleria, **Run sync now** (avanzamento a batch con JS), **Clear sync lock**, rinomina globale file galleria.
- **Units — permalinks** — Slug URL pubblico, **archivio unità** e **categorie unità** opzionali (tassonomia + slug URL categoria).
- **API Log** — Chiamate HTTP recenti al provider.
- **Checkout & fallback** — URL prenotazione esterna e fallback quando il motore non è disponibile.

Vedrai anche **Units** come menu dedicato per le strutture sincronizzate (separato da **Booking Engine**).

{/* SCREENSHOT: WordPress admin left sidebar with Booking Engine expanded and Units menu visible */}
![Barra laterale admin menu Booking Engine](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/admin-sidebar-booking-engine.png`): admin-sidebar-booking-engine.png */}

---

## Aggiornamenti da GitHub (opzionale)

Le release possono essere pubblicate come **asset ZIP su GitHub** (pattern tipo `booking-engine-connector-*.zip`). Il plugin include **Plugin Update Checker** così WordPress può segnalare aggiornamenti quando i metadati sono raggiungibili.

- **Repository pubblico** — Di norma installa/aggiorna da **Bacheca → Aggiornamenti** senza costanti aggiuntive.
- **Repository privato** — Definisci **`BEC_GITHUB_UPDATER_TOKEN`** in `wp-config.php` (abbastanza presto nel caricamento, prima dei plugin) con permesso di leggere gli asset di release.

---

## Passo successivo

Continua con **[Collega il provider](./02-connect-your-provider.md)** per inserire le credenziali e testare l’API.
