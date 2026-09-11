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
