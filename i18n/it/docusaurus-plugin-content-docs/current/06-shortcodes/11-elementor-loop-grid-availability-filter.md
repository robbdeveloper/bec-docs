---
title: Elementor — nascondere unità senza disponibilità
sidebar_label: Filtro Elementor Loop Grid
description: Usa un Query ID personalizzato sul Loop Grid di Elementor così le schede elenco mostrano solo unità disponibili per le date di ricerca correnti.
---

# Elementor — nascondere unità senza disponibilità

Se elenchi le **Unità** in un **[Loop Grid](https://elementor.com/help/loop-grid/) di **Elementor Pro** e ogni scheda include **`[bec_quote]`**, le unità senza disponibilità compaiono comunque in griglia con testo tipo *“Nessuna disponibilità per queste date.”*

Booking Engine Connector registra **Query ID Elementor personalizzati** che filtrano il loop **prima** che le schede vengano renderizzate: restano solo le unità che corrispondono ai **filtri unità** e, quando il contesto ricerca è completo, unità **disponibili** per quelle date.

---

## Requisiti

- **Elementor Pro** (Loop Grid e relative opzioni query).
- Unità sincronizzate con **`bec_external_id`** non vuoto (collegato al provider), come per i preventivi altrove.

---

## Configurazione

1. Modifica la pagina (o il template) che contiene il **Loop Grid**.
2. Seleziona il widget **Loop Grid**.
3. Apri il pannello **Query**.
4. In **Query ID**, inserisci:

   ```
   bec_available_only
   ```

   oppure l’alias:

   ```
   bec_filtered_units
   ```

5. Assicurati che la sorgente query sia il post type **Units** (o la query che già elenca post `bec_unit`).
6. **Aggiorna** / pubblica.

Quando un visitatore apre la pagina **con** parametri di ricerca completi nell’URL (ad esempio dopo **`[bec_search]`**), la griglia mostra **solo** le unità che il provider segnala disponibili per quelle date. Le righe senza disponibilità sono omesse del tutto — niente schede vuote.

Quando l’URL **non** ha un contesto di ricerca completo (mancano check-in, check-out e ospiti), il plugin **non** applica il filtro disponibilità — la griglia si comporta come un elenco normale così le landing mostrano tutte le unità. I **filtri unità** (parametri `bec_filter_*`) si applicano comunque se presenti.

Posiziona **`[bec_unit_filters]`** sopra la griglia e **`[bec_available_units_count]`** in un titolo per un’esperienza elenco completa. Vedi **[bec_unit_filters](./15-bec-unit-filters.md)**.

---

## Note di comportamento

| Situazione | Cosa succede |
|------------|----------------|
| Contesto ricerca **completo** (`bec_checkin`, `bec_checkout`, `bec_adults` o il pattern ospiti URL del provider) | Il loop è limitato alle sole unità disponibili. |
| Contesto ricerca **incompleto** | Nessun filtro disponibilità; tutte le unità della query possono comparire (come prima). I filtri unità si applicano comunque. |
| **[Modalità fallback](../05-bookings-and-checkout/04-fallback-mode.md)** impostata su uso sempre fallback contatto | Nessun filtro; tutte le unità restano visibili così il messaggio fallback può applicarsi per scheda se lo usi. |
| Nessuna unità corrispondente | Elementor mostra lo stato vuoto / “nessun risultato” della griglia (niente schede). |

Il filtro rispetta i vincoli del Loop Grid (es. filtri tassonomia): nell’insieme dei risultati restano solo i post che soddisfano la query della griglia **e** hanno disponibilità. Griglie molto grandi sono limitate per prestazioni (default **500** unità per richiesta); gli sviluppatori possono modificare con il filtro `bec_elementor_availability_max_units`.

I preventivi usano la stessa **cache di breve durata** che altrove — vedi **[Disponibilità e preventivi](../05-bookings-and-checkout/02-availability-and-quotes.md)**.

---

## Correlati

- **[Contesto ricerca e URL](../05-bookings-and-checkout/01-search-context-and-urls.md)** — quali parametri query legge il plugin.
- **[bec_quote](./04-bec-quote.md)** — cosa mostra lo shortcode preventivo in ogni scheda.
- **[bec_unit_filters](./15-bec-unit-filters.md)** — modulo filtri per lo stesso elenco.
- **[Aggiungi ricerca e prenotazione alle pagine](../02-getting-started/04-add-search-and-booking-to-pages.md)** — layout minimo con ricerca + elenchi.

Personalizzare la stringa Query ID o l’elenco post richiede hook WordPress **`apply_filters`** (`bec_elementor_availability_query_id`, `bec_elementor_available_post_ids`, `bec_elementor_availability_max_units`) — vedi **[Riferimento sviluppatori](../09-developer-reference/01-architecture.md)**.
