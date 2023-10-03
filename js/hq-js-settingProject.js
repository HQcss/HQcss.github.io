$(document).ready(function() {

    var vitrimenu = $('.inTop').offset().top;
    $(window).scroll(function(event) {
        /* Act on the event */
        var vitribody = $('body,html').scrollTop();
        // console.log(vitribody);

        if (vitribody > vitrimenu) {
            $('.inTop').addClass('bg-scroll');
        } else {
            $('.inTop').removeClass('bg-scroll');
        }
    });



});

function OnePage_project() {
    $(document).ready(function() {
        // console.log($('.chapter1').offset().top);
        $('.sidenav ul li:nth-child(1) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });

        // click menu 2
        $('.sidenav ul li:nth-child(2) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items2').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });

        // click menu 3

        $('.sidenav ul li:nth-child(3) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items3').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 4

        $('.sidenav ul li:nth-child(4) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items4').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 5

        $('.sidenav ul li:nth-child(5) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items5').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 6

        $('.sidenav ul li:nth-child(6) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items6').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 7

        $('.sidenav ul li:nth-child(7) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items7').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 8

        $('.sidenav ul li:nth-child(8) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items8').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 9

        $('.sidenav ul li:nth-child(9) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items9').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 10

        $('.sidenav ul li:nth-child(10) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items10').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 11

        $('.sidenav ul li:nth-child(11) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items11').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 12

        $('.sidenav ul li:nth-child(12) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items12').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 13

        $('.sidenav ul li:nth-child(13) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items13').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });
        // click menu 14

        $('.sidenav ul li:nth-child(14) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items14').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });





    });
}

function SrcollAddClass_project() {
    $(document).ready(function() {

        var vitrimenu = $('.content_items_1').offset().top;
        var vitrimenu2 = $('.content_items_2').offset().top;
        var vitrimenu3 = $('.content_items_3').offset().top;
        var vitrimenu4 = $('.content_items_4').offset().top;
        var vitrimenu5 = $('.content_items_5').offset().top;
        var vitrimenu6 = $('.content_items_6').offset().top;
        var vitrimenu7 = $('.content_items_7').offset().top;
        var vitrimenu8 = $('.content_items_8').offset().top;
        var vitrimenu9 = $('.content_items_9').offset().top;
        var vitrimenu10 = $('.content_items_10').offset().top;
        var vitrimenu11 = $('.content_items_11').offset().top;
        var vitrimenu12 = $('.content_items_12').offset().top;



        console.log(vitrimenu2);
        $(window).scroll(function(event) {
            /* Act on the event */
            var vitribody = $('body,html').scrollTop();

            // content-1
            if (vitribody >= vitrimenu) {
                $('.bg-items').addClass('bg-scroll animate-left');
                $('.button-side-bar').addClass('active animate-top');
                //code cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(1) a').addClass('active');

                // $(this).addClass('active');
                $('.boxMenuSystem').removeClass('bg-scroll');
            } else {
                $('.bg-items').removeClass('bg-scroll animate-left');
                $('.button-side-bar').removeClass('active animate-top');

            }
            // content-2
            if (vitribody >= vitrimenu2) {
                $('.bg-items2').addClass('bg-scroll animate-left');
                $('.bg-items').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(2) a').addClass('active');

            } else {
                $('.bg-items2').removeClass('bg-scroll animate-left');
            }
            // content-3
            if (vitribody >= vitrimenu3) {
                $('.bg-items3').addClass('bg-scroll animate-left');
                $('.bg-items2').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(3) a').addClass('active');

            } else {
                $('.bg-items3').removeClass('bg-scroll animate-left');
            }
            // content-4
            if (vitribody >= vitrimenu4) {
                $('.bg-items4').addClass('bg-scroll animate-left');
                $('.bg-items3').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(4) a').addClass('active');

            } else {
                $('.bg-items4').removeClass('bg-scroll animate-left');
            }
            // content-5
            if (vitribody >= vitrimenu5) {
                $('.bg-items5').addClass('bg-scroll animate-left');
                $('.bg-items4').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(5) a').addClass('active');

            } else {
                $('.bg-items5').removeClass('bg-scroll animate-left');
            }
            // content-6
            if (vitribody >= vitrimenu6) {
                $('.bg-items6').addClass('bg-scroll animate-left');
                $('.bg-items5').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(6) a').addClass('active');

            } else {
                $('.bg-items6').removeClass('bg-scroll animate-left');
            }
            // content-7
            if (vitribody >= vitrimenu7) {
                $('.bg-items7').addClass('bg-scroll animate-left');
                $('.bg-items6').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(7) a').addClass('active');

            } else {
                $('.bg-items7').removeClass('bg-scroll animate-left');
            }
            // content-8
            if (vitribody >= vitrimenu8) {
                $('.bg-items8').addClass('bg-scroll animate-left');
                $('.bg-items7').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(8) a').addClass('active');

            } else {
                $('.bg-items8').removeClass('bg-scroll animate-left');
            }
            // content-9
            if (vitribody >= vitrimenu9) {
                $('.bg-items9').addClass('bg-scroll animate-left');
                $('.bg-items8').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(9) a').addClass('active');

            } else {
                $('.bg-items9').removeClass('bg-scroll animate-left');
            }
            // content-10
            if (vitribody >= vitrimenu10) {
                $('.bg-items10').addClass('bg-scroll animate-left');
                $('.bg-items9').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(10) a').addClass('active');

            } else {
                $('.bg-items10').removeClass('bg-scroll animate-left');
            }
            // content-11
            if (vitribody >= vitrimenu11) {
                $('.bg-items11').addClass('bg-scroll animate-left');
                $('.bg-items10').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(11) a').addClass('active');

            } else {
                $('.bg-items11').removeClass('bg-scroll animate-left');
            }
            // content-12
            if (vitribody >= vitrimenu12) {
                $('.bg-items12').addClass('bg-scroll animate-left');
                $('.bg-items11').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(12) a').addClass('active');

            } else {
                $('.bg-items12').removeClass('bg-scroll animate-left');
            }




        });



    });
}