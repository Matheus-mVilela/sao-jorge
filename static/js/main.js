jQuery(document).ready(function () {
    $(document).ready(function () {
        $('a[href^="#"].my-nav-link').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 100
            }, 900, 'swing', function () {
                window.location.hash = target - 100;
            });
        });
    });
});

function showNav() {
    var element = document.getElementById("header-Id");
    var bar = document.getElementById("bar-Id");
    element.classList.toggle("displayblock");

    bar.classList.toggle("colorwhite");
}


$('.img-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
});


$("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
    }
});


$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
        $("header").addClass('secondary-bg')
    }
    else {
        if ($("header").hasClass('secondary-bg')) {
            $("header").removeClass('secondary-bg');
        }
    }
});


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


new WOW().init();