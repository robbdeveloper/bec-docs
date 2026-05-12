---
title: Come funziona
sidebar_label: Come funziona
description: Panoramica visuale di sincronizzazione, unità, contesto URL di ricerca, preventivi, checkout e fallback in Booking Engine Connector.
---

# Come funziona

Questa pagina è il **modello concettuale** dell’intero plugin: dove risiedono i dati, come si muovono e cosa percepiscono i visitatori.

{/* SCREENSHOT: Simple annotated diagram exported from design tool — optional alternative to Mermaid below */}
![Diagramma panoramica flusso](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/01-introduction/flow-overview.png`): flow-overview.png */}

---

## Flusso end-to-end

```mermaid
flowchart LR
  subgraph provider [Provider di prenotazione]
    API[API prenotazioni]
    Engine[Sito prenotazione ospiti]
  end

  subgraph wordpress [Il tuo sito WordPress]
    Sync[Sincronizzazione]
    Units[Articoli Unità]
    Shortcodes[Shortcode sulle pagine]
  end

  subgraph visitor [Visitatore]
    Browse[Naviga tra le unità]
    Search[Sceglie date e ospiti]
    Book[Clicca Continua o Prenota]
  end

  API --> Sync
  Sync --> Units
  Units --> Browse
  Browse --> Shortcodes
  Search --> Shortcodes
  Shortcodes --> API
  Shortcodes --> Book
  Book --> Engine
```

1. La **sincronizzazione** scarica l’inventario dall’**API del provider** e crea o aggiorna le **Unità** in WordPress.
2. Gli **shortcode** mostrano UI di ricerca, date, prezzi e widget di prenotazione sulle tue pagine.
3. Quando le date sono complete nell’URL, il plugin richiede un **preventivo** all’API (con cache di breve durata).
4. Il **checkout** invia il visitatore sul **sito di prenotazione** del provider (`Engine`) con i parametri di soggiorno corretti — non il checkout WordPress.

---

## Pagina singola unità (tipica)

```mermaid
flowchart TD
  URL["URL contiene bec_checkin bec_checkout ospiti"]
  URL --> Form{Date complete e valide?}
  Form -->|No| Partial[Solo modulo di ricerca o riepilogo incompleto]
  Form -->|Sì| Quote[Chiedi preventivo al provider]
  Quote --> FB{Si applicano le regole fallback?}
  FB -->|Sì| FallbackUI[Mostra contatto fallback o messaggio]
  FB -->|No| CTA[Mostra dettaglio prezzi e pulsante Continua]
  CTA --> Ext[Apri motore prenotazione esterno]
```

L’UI di prenotazione aggiunta automaticamente sulle singole unità segue logica simile; puoi anche posizionare gli shortcode manualmente.

---

## Pagine correlate

- **[Contesto di ricerca e URL](../05-bookings-and-checkout/01-search-context-and-urls.md)** — Parametri URL esatti.
- **[Architettura (sviluppatori)](../09-developer-reference/01-architecture.md)** — Diagrammi a livello di modulo.
