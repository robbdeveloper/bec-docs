---
title: Problemi comuni
sidebar_label: Problemi comuni
description: Risoluzione problemi Booking Engine Connector — verifica connessione, sync, checkout, cron, fallback, preventivi vuoti, pulsante prenotazione assente.
---

# Problemi comuni

Matrice rapida sintomo → causa → azione per amministratori WordPress tipici.

| Sintomo | Probabile causa | Cosa provare |
|---------|-----------------|---------------|
| **Verify connection fallisce** | Credenziali errate, refuso, firewall che blocca HTTPS in uscita | Ricopia segreti da Kross, testa da altra rete/VPN, chiedi all’hosting di consentire `api.krossbooking.com`. |
| **Nessuna unità dopo sync** | Credenziali incomplete o inventario remoto vuoto | Leggi errori nell’avviso sync, conferma che Hotel ID mappi camere attive in Kross. |
| **Molte unità “skipped”** | Unità con **sync disabilitata** (`bec_sync_enabled`) | Controlla meta box ispettore unità — l’azione riga sync manuale aggiorna comunque singole righe. |
| **Pulsante prenotazione assente** | Date incomplete / URL base checkout mancante / checkout POST senza rate ID | Conferma parametri URL presenti, compila **Booking engine base URL**, prova GET temporaneamente per validare il flusso. |
| **Preventivi sempre vuoti** | Date non valide rispetto al provider o occupazione oltre i limiti | Regola ospiti, allarga finestra soggiorno, ispeziona **[API Log](./02-using-the-api-log.md)** per risposte calendario. |
| **Cron in ritardo** | WP-Cron a basso traffico | Genera visite manualmente o usa cron server su `wp-cron.php`; esegui **Run sync now** occasionalmente. |
| **Duplicati gallery / nomi strani** | Prefisso/suffisso cambiato a progetto avviato | Esegui strumenti rinomina documentati in **[Immagini gallery](../04-units/04-gallery-images.md)** con cautela in orari di basso traffico. |
| **“Another sync is already running” a lungo** | Sync completa legittima lunga **oppure** **lock sync** obsoleto dopo tab admin chiusa | Attendi completamento; leggi **[Sincronizzare le unità](../04-units/02-syncing-units.md)**; usa **Clear sync lock** nella pagina Sync solo se sei sicuro che nessun job sia attivo. |
| **Né fallback né checkout su errori** | Trigger fallback escludono categoria errore | Regola categorie in **Checkout & fallback** o consulta filtri sviluppatore (`bec_booking_error_notice_html`). |
| **`[bec_unit_info]` vuoto** | Chiave errata o payload obsoleto | Ri-sincronizza l’unità, conferma ortografia chiave renderer — vedi **[bec_unit_info](../06-shortcodes/08-bec-unit-info.md)**. |
| **Etichette servizi con `u0027` o apostrofi corrotti** | Doppia codifica legacy nel JSON memorizzato (corretto in **0.1.30**) | Aggiorna il plugin; apri l’unità e salva, oppure esegui **sync** per riscrivere i servizi; le etichette si riparano in lettura con `AmenityItem::repairLabelString()`. |

---

## Ancora bloccato?

Raccogli:

1. Versione plugin (`[bec_version]`).
2. Screenshot oscurato delle impostazioni Connection (nascondi segreti).
3. Una riga **[API Log](./02-using-the-api-log.md)** con endpoint in errore + stato HTTP.

{/* SCREENSHOT: Example API log row highlighting status column */}
![Esempio riga API log](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/08-troubleshooting/api-log-sample-row.png`): api-log-sample-row.png */}
