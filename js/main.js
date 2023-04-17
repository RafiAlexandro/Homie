$(function () {

    $( ".home-img" ).animate({
        opacity: 1
      }, "slow", function() {
        // Animation complete.
      });

    $(window).scroll(function () {
        
        var scroll = $(window).scrollTop();

        // Navbar
        if (scroll >= 20) {
            $("#nav").addClass("bg-navbar");
        } else {
            $("#nav").removeClass("bg-navbar");
        };

        // Feature
        if (scroll >= 100) {

            $("#featured").animate({
                opacity: 1
            }, "slow", function() {
                // Animation complete.
            });

        };

        // Modern
        if (scroll >= 1400) {

            $("#modern").animate({
                opacity: 1
              }, "slow", function() {
                // Animation complete.
            });

        };

    });


});