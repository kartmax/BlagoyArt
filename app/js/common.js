$(function() {

	// Custom JS

    //menu
    $('.menu').prepend('<div class="menu__mobBtn mobBtn"><div class="mobBtn__item"></div><div class="mobBtn__item"></div><div class="mobBtn__item"></div><div class="mobBtn__item"></div></div>');
    $('.menu__nav').children('li').addClass('nav__item');
    $('.mobBtn').click(function () {
        $(this).toggleClass('menu__mobBtn_active');
        $('.menu__nav').slideToggle(100);
    });

    var $navHasSub = $('.menu ul').parent('li');
    var $subMenu = $('.menu li ul');

    $navHasSub.addClass('nav__hasSubmenu hasSubmenu');
    $navHasSub.prepend('<span class="icon-open"></span>');
    $subMenu.addClass('submenu');
    $subMenu.children('li').addClass('submenu__item');

    var $MenuHasHas = $('.menu li ul li');
    $MenuHasHas.append('<div class="overlay"></div>');
    $MenuHasHas.hover(function () {
       $(this).children('.overlay').fadeToggle(100);
    });


    $navHasSub.hover(function () {
        var screenMin = window.matchMedia('(min-width:760px)');
        if(screenMin.matches) {
            $(this).children('.submenu').slideToggle(100);
        }
    });
    $navHasSub.children('.icon-open').on('click', function () {
        var screenMax = window.matchMedia('(max-width:760px)');
        if(screenMax.matches) {
            $(this).parent('.nav__hasSubmenu').children('.submenu').slideToggle(100);
        }
    });
    $(window).resize(function () {
        $subMenu.fadeOut(0);
    });



    //slider
    $('.slider, .sliderMob').slick({
        dots: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });

});
