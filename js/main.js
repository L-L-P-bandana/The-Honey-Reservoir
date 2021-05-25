$(document).ready(function () {


    let $btns = $('.projects .the-button-legion button');


    $btns.click(function (e) {

        $('.projects .the-button-legion button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .grid').isotope({
            filter: selector
        });

        return false;
    })

    // sticky navigation menu

    let nav_offset_top = $('.header').height() + 50;

    function navbarFixed() {
        if ($('.header').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll = nav_offset_top) {
                    $('.header .main-nav').addClass('navbar_fixed');
                } else {
                    $('.header .main-nav').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});