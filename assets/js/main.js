$(document).ready(function() {

    $("#btnPlay").click(function() {

        if ($(this).text() == "Play song") {
            document.getElementById('player').play()
            $(this).text("Stop");
        } else if ($(this).text() == "Stop") {
            document.getElementById('player').pause()
            $(this).text("Play song");
        }
    })


    $(".contenu").hide();

    $(".btnJouez").click(function() {
        $(this).effect("bounce");

        $(".fond").hide("slide", {
            direction: "up"
        }, 1200, function() {
            $(".contenu").show("slide", 1000);
            nombreflocons = 0;

            $(".imageTombante").remove();
        });
    });

    $(".ouvrirInfo").click(function() {

        // $(".regleResponsive").css("display", "block");
        $(".regleResponsive").show("slide", {
                direction: "right"
            },
            500);
    })

    $(".fermerInfo").click(function() {

        $(".regleResponsive").hide("slide", {
                direction: "right"
            },
            500);

    })

});