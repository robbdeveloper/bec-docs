---
title: Cos’è Booking Engine Connector?
sidebar_label: Cos’è BEC?
description: Panoramica su unità, provider, ricerca, preventivi, checkout e modalità fallback per siti WordPress.
---

# Cos’è Booking Engine Connector?

**Booking Engine Connector** è un plugin WordPress che collega il tuo sito a un **motore di prenotazione** esterno (il software che gestisce disponibilità reale e accetta le prenotazioni).

Pensalo in quattro parti:

1. **Provider** — Il sistema di prenotazione dietro le quinte (ad esempio **Kross Booking**). Il plugin comunica con la sua API usando le credenziali inserite in WordPress.
2. **Unità** — Ogni camera o struttura affittabile diventa un articolo **Unità** in WordPress (`Unità` nel menu di amministrazione). Nomi, descrizioni, foto e molti dettagli vengono compilati quando **sincronizzi**.
3. **Ricerca e preventivi** — I visitatori scelono check-in, check-out e ospiti. Queste informazioni viaggiano nell’**URL** della pagina (parametri di query). Il plugin chiede al provider se l’unità è disponibile e quanto costa — un **preventivo**.
4. **Checkout** — Quando tutto è a posto, un pulsante invita l’ospite sul sito di prenotazione del provider per completare pagamento e conferma.

Costruisci pagine e template come sempre su WordPress; il plugin aggiunge **shortcode** (piccole istruzioni come `[bec_search]`) che mostrano barre di ricerca, prezzi, riepiloghi prenotazione e pulsanti.

{/* SCREENSHOT: Split view — WordPress unit edit screen left, front-end unit page with search dates in URL right */}
![Concetto: admin unità vs front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/01-introduction/concept-admin-vs-front.png`): concept-admin-vs-front.png */}

---

## Glossario

| Termine | Significato |
|---------|-------------|
| **Unità** | Elemento prenotabile sincronizzato dal provider — tipologia di camera, appartamento, villa, ecc. Salvato come contenuto WordPress in **Unità**. |
| **Provider** | L’integrazione con la piattaforma di prenotazione (es. Kross). Credenziali e comportamento API dipendono dal provider attivo. |
| **Sincronizzazione** | Operazione che scarica l’elenco aggiornato delle unità e aggiorna WordPress — titoli, campi, immagini gallery e una copia memorizzata della riga API grezza per il debug. |
| **Shortcode** | Scorciatoia WordPress che incolli in una pagina o blocco (es. `[bec_booking_summary]`) che il plugin sostituisce con UI o testo di prenotazione. |
| **Preventivo** | La risposta del plugin dal provider per “questa unità, queste date, questi ospiti” — disponibilità e prezzo usati dagli shortcode e dal riepilogo prenotazione. |
| **Contesto di ricerca** | Le date e il numero ospiti passati nell’URL (`bec_checkin`, `bec_checkout`, ecc.). Gli shortcode leggono lo stesso contesto così ogni blocco resta allineato. |
| **Fallback** | Messaggio di solo contatto o personalizzato quando la prenotazione live non è mostrata — utile in caso di disservizi o se preferisci prima le richieste. |

---

## Pagine correlate

- **[Come funziona](./02-how-it-works.md)** — Schema del flusso dati dal provider al visitatore.
- **[Requisiti](./03-requirements.md)** — Versione WordPress, PHP e cosa chiedere a Kross.
- **[Installazione](../02-getting-started/01-installation.md)** — Configurazione iniziale.
