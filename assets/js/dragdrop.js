$(document).ready(function() {
    $(init);

    var nombrePartie = 0;
    var pourcentJoueur = 0;
    var pourcentOrdi = 0;
    var scoreJoueur = 0;
    var scoreOrdi = 0;

    $("#btnRecommencer").click(function() {

        // On redonne les autorisations de drag & drop
        $("#reposeCarteJ").empty();
        $("#reposeCarteO").empty();

        $("#reposeCarteJ").droppable("enable");

        init();
    })

    function init() {

        // On vide les choix de jeu. On fait ca pour s'assurer que pour la prochaine partie, les cartes ne s'ajoutent pas sur les anciennes qui n'ont pas été jouée.
        $("#pierre").empty();
        $("#feuille").empty();
        $("#ciseaux").empty();

        // On les remets pour la prochaine partie.
        $("#pierre").append("<img src='assets/img/stone.png' alt='pierre' data-type='pierre'>");
        $("#feuille").append("<img src='assets/img/leaf.png' alt='feuille' data-type='feuille'>");
        $("#ciseaux").append("<img src='assets/img/ciseauxnew.png' alt='ciseaux' data-type='ciseaux'>");

        $(".cadre img").draggable({
            // containment: '#content',
            cursor: 'move',
            revert: true
        });

        $("#reposeCarteJ").droppable({
            accept: '.cadre img',
            hoverClass: 'hovered',
            drop: handleCardDrop /* on appelle une fonction dès qu'une carte est droppé. ici on appelle la fonction de jeu de l'ordi, à la fin de cette fonction on appelle qui fait les vérif de gagnant. */
        });
    }

    function handleCardDrop(event, ui) {

        $(this).append(ui.draggable);

        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this),
            my: 'left top',
            at: 'left top'
        });

        ActionOrdi();

    }


    function ActionOrdi() {

        var tableau = ["<img src=\"assets/img/stone.png\" alt=\"pierre\" data-type=\"pierre\"></img>", "<img src=\"assets/img/leaf.png\" alt=\"feuille\" data-type=\"feuille\"></img>", "<img src=\"assets/img/ciseauxnew.png\" alt=\"ciseaux\" data-type=\"ciseaux\"></img>"];

        var random = Math.floor(Math.random() * tableau.length);


        // on fait jouer l'ordi aléatoirement.
        $("#reposeCarteO").append(tableau[random]);

        verifGagnant();
    }

    function verifGagnant() {

        var typeLogoJoueur = $("#reposeCarteJ img").data("type");
        var typeLogoOrdi = $("#reposeCarteO img").data("type");

        if (typeLogoJoueur == "pierre") {
            if (typeLogoOrdi == "feuille") {

                scoreOrdi++;
                $("#iconOrdi").effect("bounce");

            } else if (typeLogoOrdi == "ciseaux") {

                $("#iconJoueur").effect("bounce");
                scoreJoueur++;

            }
        } else if (typeLogoJoueur == "feuille") {
            if (typeLogoOrdi == "pierre") {

                $("#iconJoueur").effect("bounce");
                scoreJoueur++;

            } else if (typeLogoOrdi == "ciseaux") {

                $("#iconOrdi").effect("bounce");
                scoreOrdi++;

            }
        } else if (typeLogoJoueur == "ciseaux") {
            if (typeLogoOrdi == "pierre") {

                $("#iconOrdi").effect("bounce");
                scoreOrdi++;

            } else if (typeLogoOrdi == "feuille") {

                $("#iconJoueur").effect("bounce");
                scoreJoueur++;

            }
        }

        nombrePartie++;

        pourcentJoueur = Math.round(scoreJoueur / nombrePartie * 100);
        pourcentOrdi = Math.round(scoreOrdi / nombrePartie * 100);

        $("#PourcentJ").text(pourcentJoueur);
        $("#PourcentO").text(pourcentOrdi);

        // if (scoreJoueur == 1)
        //     nombreflocons = 12;


        $("#scoreJ").text(scoreJoueur);
        $("#scoreO").text(scoreOrdi);
        $("#nbPartie").text(nombrePartie);

    }
});