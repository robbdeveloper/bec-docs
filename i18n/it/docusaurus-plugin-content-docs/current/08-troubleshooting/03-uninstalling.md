---
title: Disinstallazione
sidebar_label: Disinstallazione
description: Booking Engine Connector — disattivazione vs eliminazione, uninstall, BEC_UNINSTALL_DELETE_DATA, tabella log API, wp-config.
---

# Disinstallazione

Disattivare **Booking Engine Connector** mantiene configurazione e Unità sincronizzate — puoi spegnere temporaneamente senza perdere i post.

{/* SCREENSHOT: Plugins screen showing Deactivate Delete actions */}
![Plugin Disattiva vs Elimina](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/08-troubleshooting/plugins-uninstall.png`): plugins-uninstall.png */}

---

## Comportamento predefinito eliminazione

Eliminare il plugin da **Plugin → Elimina** esegue `uninstall.php`.

Per **default**, la disinstallazione **non** cancella intenzionalmente:

- Opzioni memorizzate (impostazioni `bec_*`)
- Tabella di log personalizzata (`wp_bec_api_log` con il prefisso tabella)

Come ci si aspetta in produzione dove si reinstalla spesso.

---

## Rimozione completa (passo sviluppatore)

Quando vuoi esplicitamente eliminare impostazioni plugin **e** tabelle interne, definisci **prima del caricamento plugin**:

```php
define('BEC_UNINSTALL_DELETE_DATA', true);
```

in `wp-config.php`.

Con questa costante **true**, la disinstallazione elimina chiavi opzioni note e rimuove la tabella API log — conferma sempre i backup perché i post Unità restano salvo rimozione manuale.

L’elenco pulizia autoritativo è in `uninstall.php` nel pacchetto del plugin.

---

## Pulizia manuale

Anche senza costanti:

- Elimina post **Units** se non serve più l’inventario sincronizzato.
- Rimuovi immagini Libreria media scollegate importate solo per gallery BEC.

---

## Documentazione correlata

Per l’elenco autoritativo di opzioni e tabelle rimosse con `BEC_UNINSTALL_DELETE_DATA` abilitato, vedi `uninstall.php` nel pacchetto del plugin.
