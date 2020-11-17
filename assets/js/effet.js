   // Indiquer l'URL de l'image du flocon :
   var urlflocon = ["assets/img/leaf.png", "assets/img/ciseauxnew.png", "assets/img/stone.png"];
   var random = Math.floor(Math.random() * urlflocon.length);
   // Ecrire le nombre de flocons :
   var nombreflocons = 0;
   // Indiquer si la neige doit disparaÃ®tre aprÃ¨s x secondes (0=jamais) :
   var cacherflocons = 0;
   // Indiquer si la neige doit Ãªtre vue sur la fenÃªtre ou toute la page avant de disparaÃ®tre ("windowheight"=la fenÃªtre, "pageheight"=toute la page)
   var voirflocons = "pageheight";
   /////////// FIN DE LA PARTIE CONFIGURATION //////////////////////////////////
   var ie4up = (document.all) ? 1 : 0;
   var ns6up = (document.getElementById && !document.all) ? 1 : 0;

   function testIEcompatible() {
       return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
   }
   var dx, xp, yp; // Variables de coordonnÃ©es et de position
   var am, stx, sty; // Variables d'amplitude
   var i, doc_width = 924,
       doc_height = 868; // Taille de l'Ã©cran
   if (ns6up) {
       doc_width = self.innerWidth;
       doc_height = self.innerHeight;
   } else if (ie4up) {
       doc_width = testIEcompatible().clientWidth;
       doc_height = testIEcompatible().clientHeight;
   }
   dx = new Array();
   xp = new Array();
   yp = new Array();
   am = new Array();
   stx = new Array();
   sty = new Array();
   for (i = 0; i < nombreflocons; ++i) {
       dx[i] = 0; // Variables de coordonnÃ©es
       xp[i] = Math.random() * (doc_width - 50); // Variables de position
       yp[i] = Math.random() * doc_height;
       am[i] = Math.random() * 20; // Variables d'amplitude
       stx[i] = 0.02 + Math.random() / 10; // Variables de pas?
       sty[i] = 0.7 + Math.random(); // Variables de pas
       if (ie4up || ns6up) {
           if (i == 0) {
               document.write("<div class=\"imageTombante\" id=\"dot" + i + "\" style=\"POSITION: absolute; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + urlflocon[random] + "' border=\"0\"><\/div>");
           } else {
               document.write("<div class=\"imageTombante\" id=\"dot" + i + "\" style=\"POSITION: absolute; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + urlflocon[random] + "' border=\"0\"><\/div>");
           }
       }

       random = Math.floor(Math.random() * urlflocon.length);

   }

   function neigeIE_NS6() { // IE et NS6 : fonctions principales d'animation
       doc_width = ns6up ? window.innerWidth - 10 : testIEcompatible().clientWidth - 10;
       doc_height = (window.innerHeight && voirflocons == "windowheight") ? window.innerHeight : (ie4up && voirflocons == "windowheight") ? testIEcompatible().clientHeight : (ie4up && !window.opera && voirflocons == "pageheight") ? testIEcompatible().scrollHeight : testIEcompatible().offsetHeight;
       for (i = 0; i < nombreflocons; ++i) { // dÃ©placement pour chaque point ("dot")
           yp[i] += sty[i];
           if (yp[i] > doc_height - 50) {
               xp[i] = Math.random() * (doc_width - am[i] - 30);
               yp[i] = 0;
               stx[i] = 0.02 + Math.random() / 10;
               sty[i] = 0.7 + Math.random();
           }
           dx[i] += stx[i];
           document.getElementById("dot" + i).style.top = yp[i] + "px";
           document.getElementById("dot" + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + "px";
       }
       snowtimer = setTimeout("neigeIE_NS6()", 10);
   }

   function cacherneige() {
       if (window.snowtimer) clearTimeout(snowtimer)
       for (i = 0; i < nombreflocons; i++) document.getElementById("dot" + i).style.visibility = "hidden"
   }
   if (ie4up || ns6up) {
       neigeIE_NS6();
       if (cacherflocons > 0)
           setTimeout("cacherneige()", cacherflocons * 1000)
   }