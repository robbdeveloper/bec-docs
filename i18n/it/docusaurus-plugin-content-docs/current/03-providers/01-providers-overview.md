---
title: Panoramica provider
sidebar_label: Panoramica provider
description: Un solo motore di prenotazione attivo alla volta, credenziali in Connection e come le estensioni registrano nuovi motori.
---

# Panoramica provider

Un **provider** è la piattaforma di prenotazione con cui il plugin comunica via internet — oggi **Kross Booking** è integrato.

---

## Un provider attivo

Il sito memorizza la scelta del **provider attivo** (su **Booking Engine → Connection**).

- Solo **un’** integrazione guida le **nuove sincronizzazioni** e i moduli credenziali predefiniti alla volta.
- Ogni **Unità** ricorda comunque quale provider l’ha creata (colonna `Provider` nell’elenco Unità). Preventivi e checkout usano quel legame quando serve.

---

## Cosa fornisce un provider

Per un’integrazione tipica l’implementazione del provider:

1. **Autentica** con l’API di prenotazione (token, chiavi, hotel ID).
2. **Scarica l’inventario** durante la sync — tipologie di camera, foto, limiti occupazione, ecc.
3. **Risponde alle richieste di disponibilità** per date e conteggi ospiti (**preventivi**).
4. **Costruisce link o moduli di checkout** così gli ospiti continuano sul sito del motore di prenotazione.

---

## Aggiungere altri provider

L’elenco nel menu può essere esteso dagli sviluppatori con il filtro WordPress indicato nella schermata Connection (`bec_registered_providers`). Implementare un nuovo motore significa codificare secondo il contratto provider del plugin — vedi **[Aggiungere un provider](../09-developer-reference/06-adding-a-provider.md)**.

---

## Pagine correlate

- **[Kross Booking](./02-kross-booking.md)** — Credenziali e URL checkout per Kross.
- **[Collega il provider](../02-getting-started/02-connect-your-provider.md)**
