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
- **Sync** — Intervallo, opzioni nomi file gallery, **Esegui sincronizzazione ora**.
- **Units — permalinks** — Slug URL pubblico e attivazione archivio.
- **API Log** — Chiamate HTTP recenti al provider.
- **Checkout & fallback** — URL prenotazione esterna e fallback quando il motore non è disponibile.

Vedrai anche **Units** come menu dedicato per le strutture sincronizzate (separato da **Booking Engine**).

{/* SCREENSHOT: WordPress admin left sidebar with Booking Engine expanded and Units menu visible */}
![Barra laterale admin menu Booking Engine](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/admin-sidebar-booking-engine.png`): admin-sidebar-booking-engine.png */}

---

## Passo successivo

Continua con **[Collega il provider](./02-connect-your-provider.md)** per inserire le credenziali e testare l’API.
