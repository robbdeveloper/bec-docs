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

- **Dashboard** — Card di stato e collegamenti rapidi alle attività comuni.
- **Connection** — Provider e credenziali API.
- **Frontend** — Campi ospiti del modulo di ricerca e iniezione contenuto singola unità.
- **Sync & Import** — Intervallo, Kross booking engines, opzioni nomi file galleria; tab **Tools** per run sync, clear lock, rinomina globale galleria.
- **Units** — Slug URL pubblico, strutture URL, archivio unità e categorie unità opzionali.
- **Listing Filters** — Cura servizi per `[bec_unit_filters]`.
- **Design** — Preset, token e Extra CSS (inclusi unit filters).
- **Checkout & Fallback** — URL prenotazione esterna e fallback quando il motore non è disponibile.
- **Tools & Logs** — Chiamate HTTP recenti al provider.

Vedrai anche **Units** come menu dedicato per le strutture sincronizzate (separato da **Booking Engine**).

Vedi **[Panoramica schermate admin](./05-admin-screens.md)** per la mappa completa di ogni schermata.

{/* SCREENSHOT: WordPress admin left sidebar with Booking Engine expanded and Units menu visible */}
![Barra laterale admin menu Booking Engine](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/admin-sidebar-booking-engine.png`): admin-sidebar-booking-engine.png */}

---

## Aggiornamenti da GitHub (opzionale)

Le release possono essere pubblicate come **asset ZIP su GitHub** (pattern tipo `booking-engine-connector-*.zip`). Il plugin include **Plugin Update Checker** così WordPress può segnalare aggiornamenti quando i metadati sono raggiungibili.

- **Repository pubblico** — Di norma installa/aggiorna da **Bacheca → Aggiornamenti** senza costanti aggiuntive.
- **Repository privato** — Definisci **`BEC_GITHUB_UPDATER_TOKEN`** in `wp-config.php` (abbastanza presto nel caricamento, prima dei plugin) con permesso di leggere gli asset di release.

**L’intestazione Version deve coincidere con la release.** L’updater legge la riga `Version:` in `booking-engine-connector.php` dall’asset di release. Se il tag GitHub dice `0.1.30` ma lo ZIP ha ancora un numero più vecchio nell’header, WordPress potrebbe non offrire l’aggiornamento. Pubblica release in cui tag, nome file ZIP e header plugin sono allineati.

---

## Passo successivo

Continua con **[Collega il provider](./02-connect-your-provider.md)** per inserire le credenziali e testare l’API.
