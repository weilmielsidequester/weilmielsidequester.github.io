/* ---------------------------------------------------------------
   Zwei Ergaenzungen fuer den Login-Screen, die von aussen kommen:

   1. Die Formularspalte war auf dem Desktop so breit wie das Fenster
      (1236 px bei 1280 px Bildschirm). Hier wird sie auf 420 px
      begrenzt und zentriert.
   2. Ein Verweis auf die Projektseite unter /home.

   ACHTUNG: Das ist ein Zusatz von aussen, nicht Teil der App. Beim
   naechsten `npm run web:bauen` werden index.html und 404.html neu
   erzeugt und die Einbindung geht verloren. Dann diese Zeile in
   BEIDEN Dateien wieder vor </body> einfuegen:

       <script defer src="/home-verweis.js"></script>

   Dauerhaft gehoert beides in den App-Quellcode.
   --------------------------------------------------------------- */
(function () {
  "use strict";

  var stil = document.createElement("style");
  stil.textContent = [
    /* Der Login-Container hat die Eingabefelder als direkte Kinder. */
    'div:has(> input[placeholder="E-Mail"]) {',
    "  max-width: 420px; width: 100%;",
    "  margin-left: auto; margin-right: auto;",
    "}",
    "#ueber-das-projekt {",
    "  display: block; margin: 18px auto 0; text-align: center;",
    "  font: 600 15px/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;",
    "  color: #8A8A93; text-decoration: none;",
    "  padding: 10px 16px; border-radius: 999px;",
    "}",
    "#ueber-das-projekt:hover { color: #1F1B18; background: rgba(0,0,0,.04); }"
  ].join("\n");
  document.head.appendChild(stil);

  function einbauen() {
    if (document.getElementById("ueber-das-projekt")) return;
    var feld = document.querySelector('input[placeholder="E-Mail"]');
    if (!feld || !feld.parentElement) return;          /* nicht auf dem Login-Screen */

    var link = document.createElement("a");
    link.id = "ueber-das-projekt";
    link.href = "/home";
    link.textContent = "Über das Projekt";
    feld.parentElement.appendChild(link);
  }

  einbauen();
  /* Die App rendert den Screen neu, wenn man hin- und herwechselt. */
  new MutationObserver(einbauen).observe(document.body, { childList: true, subtree: true });
})();
