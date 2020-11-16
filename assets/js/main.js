$(document).ready(function() {

    $(".contenu").hide();

    $(".btnJouez").click(function() {
        $(this).effect("bounce");

        $(".fond").hide("slide", {
            direction: "up"
        }, 1200, function() {
            $(".contenu").show("slide");
            nombreflocons = 0;

            $(".imageTombante").remove();
        });
    });

    $(".ouvrirInfo").click(function() {

        $(".regleResponsive").css("display", "block");

    })

    $(".fermerInfo").click(function() {

        $(".regleResponsive").css("display", "none");

    })

});