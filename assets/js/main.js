$(document).ready(function() {

    $(".contenu").hide();

    $(".btnJouez").click(function() {
        $(this).effect("bounce");

        $(".fond").hide("slide", {
            direction: "up"
        }, 500, function() {
            $(".contenu").show("slide");
            nombreflocons = 0;

            $(".imageTombante").remove();
        });
    });

    $("#info").click(function() {

        if ($(this).text() == "Info") {
            $("#col3").css("height", "100%");
            $(".contenuDiv").css("visibility", "visible");
            $(this).text("X");
        } else {
            $("#col3").css("height", "100px");
            $(".contenuDiv").css("visibility", "hidden");
            $(this).text("Info");
        }
    })


    // remettre en place les règles du jeu en responsive

    function myFunction(x) {
        if (x.matches) { // If media query matches
            $("#col3").css("height", "100px");
            $(".contenuDiv").css("visibility", "hidden");

        } else {
            $("#col3").css("height", "100%");
            $(".contenuDiv").css("visibility", "visible");


        }
    }

    var x = window.matchMedia("(max-width: 992px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


});