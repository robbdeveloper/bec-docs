---
title: Documentazione Booking Engine Connector
slug: /
sidebar_label: Home
description: "Collega WordPress al motore di prenotazione: sincronizza le unità, ricerca, preventivi, checkout e stile da un unico plugin."
---

# Booking Engine Connector

**Booking Engine Connector** collega il tuo sito WordPress a un sistema di prenotazione esterno (oggi: **Kross Booking**). Le tue camere o strutture compaiono come **Unità** in WordPress. I visitatori scelgono date e ospiti; il plugin verifica la **disponibilità** in tempo reale e li invia sul sito del provider per **completare la prenotazione**.

## Cosa fa il plugin

- **Mantiene aggiornato l’inventario** — Scarica i metadati delle unità (e le immagini della gallery) dal provider di prenotazione in WordPress.
- **Ricerca sul tuo sito** — Gli shortcode mostrano una barra di ricerca che passa i dettagli del soggiorno nell’URL così ogni pagina “conosce” le date dell’ospite.
- **Preventivi in tempo reale** — Mostra prezzi e disponibilità quando l’API di prenotazione risponde (con una cache ragionevole).
- **Passaggio al checkout** — “Prenota” / “Continua” invita gli ospiti all’URL del motore di prenotazione configurato con i parametri corretti.

{/* SCREENSHOT: Docs landing hero — optional branded graphic or screenshot of front-end search + booking summary */}
![Panoramica documentazione](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/intro/docs-hero-placeholder.png`): docs-hero-placeholder.png */}

---

## Scegli il tuo percorso

### [Installazione e collegamento](./02-getting-started/01-installation.md)

Carica e attiva il plugin, inserisci le credenziali del provider in **Booking Engine → Connessione** e verifica che il collegamento funzioni.

### [Gestire le unità](./04-units/01-units-overview.md)

Comprendi le **Unità**, esegui la sincronizzazione, modifica i campi canonici, le immagini della gallery e gli URL pubblici.

### [Aggiungere la prenotazione alle pagine (shortcode)](./06-shortcodes/01-shortcodes-overview.md)

Inserisci ricerca, preventivi, checkout, riepilogo prenotazione e altro con gli shortcode WordPress.

### [Elementor Loop Grid — filtro disponibilità](./06-shortcodes/11-elementor-loop-grid-availability-filter.md)

**Elementor Pro:** nascondi le schede unità senza disponibilità in un Loop Grid usando l’ID query `bec_available_only`.

### [Stile e personalizzazione](./07-styling/01-styling-overview.md)

Scegli i preset di layout per la barra di ricerca e il riepilogo prenotazione, aggiungi variabili di tema e punta alle classi CSS in sicurezza.

---

## Passi successivi

Inizia da **[Introduzione → Cos’è Booking Engine Connector?](./01-introduction/01-what-is-bec.md)** per il quadro generale, oppure vai direttamente a **[Per iniziare → Installazione](./02-getting-started/01-installation.md)**.

Gli sviluppatori che estendono il plugin possono aprire **[Riferimento per sviluppatori](./09-developer-reference/01-architecture.md)** dopo le guide utente.
