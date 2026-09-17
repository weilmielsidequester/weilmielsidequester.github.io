# Sidequester

Webversion der App, zum Testen auf dem Handy.

**https://weilmielsidequester.github.io**

In Safari oeffnen, dann Teilen -> Zum Home-Bildschirm.

## Was hier liegt

Nur der gebaute Stand, nicht der Quellcode. Erzeugt mit `npm run web:bauen`.

Der Export ist bewusst flach: Der Upload ueber die GitHub-Weboberflaeche
verliert Ordnerpfade.

`.nojekyll` muss bleiben, sonst ignoriert GitHub Pages Ordner mit
Unterstrich am Anfang. `404.html` ist eine Kopie von `index.html`, damit
Unterseiten wie /entdecken auch direkt aufrufbar sind.

## Nach jedem neuen Build wieder einfuegen

`npm run web:bauen` erzeugt `index.html` und `404.html` neu. Zwei Dinge
in diesem Repo stammen nicht aus dem Build und gehen dabei verloren:

1. Der Ordner `home/` (Landingpage unter sidequester.ch/home) bleibt
   unberuehrt, weil der Export ihn nicht anfasst.
2. Die Einbindung von `home-verweis.js`. Diese Zeile muss in **beide**
   Dateien zurueck, direkt vor `</body>`:

   ```html
   <script src="/home-verweis.js" defer></script>
   ```

`home-verweis.js` begrenzt die Login-Spalte auf dem Desktop (sie war so
breit wie das Fenster) und haengt unter dem Formular einen Verweis auf
/home an. Beides ist ein Zusatz von aussen. **Dauerhaft gehoert es in
den App-Quellcode** — dann kann die Datei weg.
