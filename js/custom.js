$(function () {

    // MENU
    $('.nav-link').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
        disable: 'mobile',
        duration: 800,
        anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function () {
        $('.nav-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });


    // PROJECT SLIDE
    $('#project-slide').owlCarousel({
        loop: true,
        center: true,
        autoplayHoverPause: false,
        autoplay: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });

});


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    elmnt.outerHTML = this.responseText;
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}