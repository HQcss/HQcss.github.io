//    slide STYLE 3
function slide_style_3() {
    // code auto click
    auto_click = setInterval(function() {
        $('.slide-control-next').trigger('click');
    }, 1000000);
    // 1. phần xử lý next slide
    $('.slide-control-next').click(function(event) {
        //    clearInterval(auto_click);
        var next_slide = $('.active').next();
        // next_slide.length == 0 (tới slide cuối)
        if (next_slide.length == 0) {
            $('.active').addClass('NEXT_action_hidden_style_3').one('webkitAnimationEnd', function(event) {
                $('.NEXT_action_hidden_style_3').removeClass('NEXT_action_hidden_style_3').removeClass('active');

            });

            //    
            $('.slide-img:first-child').addClass('next-element-style-3').one('webkitAnimationEnd', function(event) {




                $('.next-element-style-3').addClass('active').removeClass('next-element-style-3');
                // js animate (slide đầu tiên sẽ add class)
                $('.active .background-line .element-img-1').addClass('animate-zoom-style2');
                $('.active .background-line .element-img-2').addClass('animate-bottom');
                $('.active .background-line .element-text-1').addClass('animate-top');


            });


        } else {
            $('.active').addClass('NEXT_action_hidden_style_3').one('webkitAnimationEnd', function(event) {
                $('.NEXT_action_hidden_style_3').removeClass('NEXT_action_hidden_style_3');
                // js animate (khi nhấn nút next sẽ remove class trước)
                $('.animate-zoom-style2').removeClass('animate-zoom-style2');
                $('.animate-bottom').removeClass('animate-bottom');
                $('.animate-top').removeClass('animate-top');
            });
            // js de slide tiep theo di vao
            next_slide.addClass('next-element-style-3').one('webkitAnimationEnd', function(event) {
                $('.active').removeClass('active');
                $('.next-element-style-3').addClass('active').removeClass('next-element-style-3');
                // js cho animate (slide đi vào sẽ add class)
                $('.active .background-line .element-img-1').addClass('animate-zoom-style2');
                $('.active .background-line .element-img-2').addClass('animate-bottom');
                $('.active .background-line .element-text-1').addClass('animate-top');
            });
        }


        // 1.2 xử lý cho nút li khi click nút next
        var vitri_li = $('.select-slide').index() + 1;
        $(' .ul-slide li').removeClass('select-slide');
        if (vitri_li == $(' .ul-slide li').length) {
            vitri_li = 0;
        }
        $('.ul-slide li:nth-child(' + (vitri_li + 1) + ')').addClass('select-slide');
        // kết thúc phần xử lý 1.2   

    });
    //    KẾT THÚC PHẦN XỬ LÝ NÚT NEXT


    //2. phần xử lý prev slide


    $('.slide-control-prev').click(function(event) {
        // huỷ chạy tự động
        //    clearInterval(auto_click);

        var prev_slide = $('.active').prev();
        // (prev_slide.length == 1 trường hợp slide hiện tại là slide đầu tiên)
        if (prev_slide.length == 1) {
            $('.active').addClass('PREV_action_hidden_style_3').one('webkitAnimationEnd', function(event) {
                $('.PREV_action_hidden_style_3').removeClass('PREV_action_hidden_style_3');
                // js animate

                $('.active .background-line .element-img-1').addClass('animate-zoom-style2');
                $('.active .background-line .element-img-2').addClass('animate-bottom');
                $('.active .background-line .element-text-1').addClass('animate-top');


            });

            // js de slide tiep theo di vao
            prev_slide.addClass('prev-element-style-3').one('webkitAnimationEnd', function(event) {
                $('.active').removeClass('active');
                $('.prev-element-style-3').addClass('active').removeClass('prev-element-style-3');
                // js animate

                $('.animate-zoom-style2').removeClass('animate-zoom-style2');
                $('.animate-bottom').removeClass('animate-bottom');
                $('.animate-top').removeClass('animate-top');
            });
            // phần else xử lý lùi slide (slide cuối cùng)
        } else {
            $('.active').addClass('PREV_action_hidden_style_3').one('webkitAnimationEnd', function(event) {
                $('.PREV_action_hidden_style_3').removeClass('PREV_action_hidden_style_3');
                // js animate
                $('.animate-zoom-style2').removeClass('animate-zoom-style2');
                $('.animate-bottom').removeClass('animate-bottom');
                $('.animate-top').removeClass('animate-top');
            });

            // js de slide tiep theo di vao
            $(' .slide-img:last-child').addClass('prev-element-style-3').one('webkitAnimationEnd', function(event) {
                $('.active').removeClass('active');
                $('.prev-element-style-3').addClass('active').removeClass('prev-element-style-3');
                // js cho animate
                $('.active .background-line .element-img-1').addClass('animate-zoom-style2');
                $('.active .background-line .element-img-2').addClass('animate-bottom');
                $('.active .background-line .element-text-1').addClass('animate-top');
            });
        }

        // 2.1 xử lý cho nút li khi click nút next
        var vitri_li = $('.select-slide').index() + 1;
        $('.ul-slide li').removeClass('select-slide');
        if (vitri_li == 1) {
            vitri_li = $(' .ul-slide li').length + 1;
        }
        $(' .ul-slide li:nth-child(' + (vitri_li - 1) + ')').addClass('select-slide');
        // kết thúc phần xử lý 2.1

    });
    //    KẾT THÚC PHẦN XỬ LÝ NÚT PREV



    // 3. phần xử lý khi click vào nút li để hiển thị slide
    $('.ul-slide li').click(function(event) {
        $('.ul-slide li').removeClass('select-slide');
        $(this).addClass('select-slide');
        // js animate xử lý reomove class khi click li
        $('.animate-zoom-style2').removeClass('animate-zoom-style2');
        $('.animate-bottom').removeClass('animate-bottom');
        $('.animate-top').removeClass('animate-top');

        // xử lý tính vị trí slide khi click vào li

        //    cho slide hiện tại biến mất
        $('.active').addClass('NEXT_action_hidden_style_3').one('webkitAnimationEnd', function(event) {
            $('.NEXT_action_hidden_style_3').removeClass('NEXT_action_hidden_style_3');


        });

        //    cho slide dc click hiển thị

        $(' .slide-img:nth-child(' + ($(this).index() + 1) + ')').addClass('next-element-style-3').one('webkitAnimationEnd', function(event) {

            //    
            $('.active').removeClass('active');

            //    
            $('.next-element-style-3').addClass('active').removeClass('next-element-style-3');
            // js cho animate
            $('.active .background-line .element-img-1').addClass('animate-zoom-style2');
            $('.active .background-line .element-img-2').addClass('animate-bottom');
            $('.active .background-line .element-text-1').addClass('animate-top');

        });
    });
    //    KẾT THÚC PHẦN XỬ LÝ CLICK NÚT LI ĐỂ CHUYỂN SLIDE
}
// menuSmall
function small_menu() {
    $('.content_menu , .link').slideUp(0);

    $('.box-menu-small span,.content_menu span').click(function() {

        $(this).next('.content_menu,.link').slideToggle();

        $(this).toggleClass('bg-selector color-selector');
        $(this).toggleClass('demo ');
    });
}
// menuSmall-style2
function small_menu_style_2() {
    // $('.abc').slideUp(0);

    $('.icon-menu-mediate').click(function() {

        $('.menu-container').toggleClass('menu-small-visible');


    });
}

//--------------------------------------------------------------- hide show box
function hideShow_box() {
    $('.box-login').animate({ opacity: 0, marginLeft: -900 }, 0);

    $('.btn_dangky').click(function(event) {
        $('.box-reg').animate({ opacity: 1, marginLeft: 0 }, 500);
        $('.box-login').animate({ opacity: 0, marginLeft: -900 }, 0);
    });

    $('.btn_dangnhap').click(function(event) {
        $('.box-login').animate({ opacity: 1, marginLeft: 0 }, 500);
        $('.box-reg').animate({ opacity: 0, marginLeft: -900 }, 0);
    });
}
//------------------------------------------------------------------------ ScrollBox
function scrollBox() {
    $('.text').slideUp(0);

    $('.box h5').click(function() {

        $(this).next('.text').slideToggle();

        $(this).toggleClass('hoverColor');
    });
}
//---------------------------------------------------------------------- Onepage
function OnePage() {
    // console.log($('.chapter1').offset().top);
    $('.menutren ul li:nth-child(1) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page2').offset().top }, 1500, "easeOutElastic");
        $('.menutren ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.menutren ul li:nth-child(2) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page3').offset().top }, 1500, "easeOutElastic");
        $('.menutren ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.menutren ul li:nth-child(3) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page4').offset().top }, 1500, "easeOutElastic");
        $('.menutren ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.menutren ul li:nth-child(4) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page5').offset().top }, 1500, "easeOutElastic");
        $('.menutren ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.menutren ul li:nth-child(5) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page5').offset().top }, 1500, "easeOutElastic");
        $('.menutren ul li a').removeClass('active');
        $(this).addClass('active');
    });

}
//---------------------------------------------------------------------- Onepage
function OnePage_pin() {
    // console.log($('.chapter1').offset().top);
    $('.menu-pin ul li:nth-child(1) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page1').offset().top }, 1500, "easeOutElastic");
        $('.menu-pin ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.menu-pin ul li:nth-child(2) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page2').offset().top }, 1500, "easeOutElastic");
        $('.menu-pin ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.menu-pin ul li:nth-child(3) a').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('.content-page3').offset().top }, 1500, "easeOutElastic");
        $('.menu-pin ul li a').removeClass('active');
        $(this).addClass('active');
    });

}
//------------------------------------------------------------------- Back to top
function BackToTop() {
    $('.backtotop').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });
}

// --------------------------------------------------------------Pin top menu
function pinTopMenu() {
    var vitrimenu = $('.menu-pin').offset().top;

    $(window).scroll(function(event) {
        /* Act on the event */
        var vitribody = $('body,html').scrollTop();
        // console.log(vitribody);
        // console.log(vitrimenu);


        if (vitribody >= vitrimenu) {
            $('.menu-pin').addClass('in_top');

        } else {
            $('.menu-pin').removeClass('in_top');
        }
    });
}


//---------------------------------------------------- fancyBox
// No_effect
function FancyBox_No_effect() {
    $('.boxImg a').fancybox();
}
// Effect
function FancyBox_Effect() {
    $('.boxImg a').fancybox({ openEffect: 'elastic' });
}

//---------------------------------------------------- LoadMore
function LoadMore() {
    TweenMax.staggerFrom($('.NDbandau .initial'), 1, { top: 100, opacity: 0 }, 0.5)

    // những nội dung nằm trong class NDthem sẽ ẩn
    $('.NDthem').slideUp(0);

    // khi click vào button class load những nội dung nằm trong class NDthem sẽ hiện
    $('.load_more').click(function() {
        $('.NDthem').slideDown(0);
        TweenMax.staggerFrom($('.NDthem .more'), 1, { top: 100, opacity: 0 }, 0.5)
        $('.load_more').addClass('hidden');
        $('.row_loadMore').addClass('height_x2');
    });
}

//---------------------------------------------------------- Mansory layout
function mansory() {

    $hieuung = $('.content-mansory').isotope({
        // options
        itemSelector: '.box-mansory-style2,.box-mansory',
        layoutMode: 'masonry'
    });
    $hieuung.imagesLoaded().progress(function() {
        $hieuung.isotope('layout');
    });

}

// -------------------------------------------------filter button js

function Filter() {
    $('.content-filter ul ').isotope({
        itemSelector: 'li'
    });

    $('nav ul li a').click(function(event) {
        /* Act on the event */
        var danhmuc = $(this).data('danhmucanh');
        var ten = $(this).text();
        if (danhmuc == 'all') {

            $('section h6').text("Tất cả ảnh");
            $('.content-filter ul').isotope({ filter: '*' });
        } else {
            $('section h6').text(ten);
            $('.content-filter ul').isotope({ filter: danhmuc });
        }
        return false;
    });
}
// ----------------------------------------------------filter box search
function search_filter() {

    $('.content-filter ul').isotope({
        itemSelector: 'li'
    });

    $('.tukhoa').keypress(function(event) {
        if (event.keyCode == 13) {
            tu1 = $('.tukhoa').val();
            tu1 = "." + tu1;
            $('.content-filter ul').isotope({ filter: tu1 });
        }
    })

    // code tim kiem tu dong
    thoigian = setInterval(function() {
        tu1 = $('.tukhoa').val();
        tu1 = "." + tu1;
        $('.content-filter ul').isotope({ filter: tu1 });
    }, 200);
}

//--------------------------------------------- Menu transform and back to top

function MenuTransform() {
    $(window).scroll(function() {
        if ($('body,html').scrollTop() > 300) {
            // $('.menutren').addClass('bg-scroll');
            $('.menutren').removeClass('transparent');
            $('.menutren').addClass('w3-card-4');
            $('.menutren ul li a').addClass('color_change');
            $('.box-left-pin').addClass('box-show');

            $('.musicpin ').addClass('icon-show');
            $('.menu-small ').addClass('bg-menu-small');
        } else {
            // $('.menutren').removeClass('bg-scroll');
            $('.menutren').addClass('transparent');

            $('.menutren ul li a').removeClass('color_change');
            $('.menutren').removeClass('w3-card-4');
            $('.backtotop').removeClass('icon_back_top_show');
            $('.box-left-pin').removeClass('box-show');

            $('.musicpin ').removeClass('icon-show');
            $('.menu-small ').removeClass('bg-menu-small');
        }
    });
    // back to top

    $('.backtotop').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });
}



// -------------------------------------------------------------------Wow

function Wow_js() {
    new WOW().init();
}

//------------------------------------------------------------------ TweenMax

//  TweenMax.to (tenphantu ,thoigian, {ten thuoc tinh:gia tri,..});
// .from : là từ vị trí đó trở về vị trí mặc định
// .to : là từ vị trí mặc định tới vị trí đã đặt
// .fromTo: Từ vị trí A đến vị trí B
// .staggerTo: là chuyển động đi với những phần tử giống nhau
// .staggerFrom: ngược lại với stagerTo

// phần tử đồng nhất

function staggerFrom_func() {
    TweenMax.staggerFrom($('.btn-primary'), 1, { x: 200, opacity: 0, ease: Bounce.easeOut }, 0.5);
}

function staggerTo_func() {
    TweenMax.staggerTo($('.btn-primary'), 1, { x: 200, opacity: 0 }, 0.5);
}

// phần tử đơn lẻ

function TweenMaxTo() {
    TweenMax.to($('.menutren '), 1, { y: 200, opacity: 0, scale: 0 });
}

function TweenMaxFrom() {
    TweenMax.from($('.nut1 '), 1, { x: 200, opacity: 0 });
}

function TweenMaxFromTo() {
    TweenMax.fromTo($('.nut1 '), 1, { x: 200, }, { x: -200 });
}
// kết hợp với hàm click
$('.nut3').click(function(event) {
    TweenMax.fromTo($('.nut4 '), 1, { x: 200, }, { x: -200 });
    TweenMax.to($(this), 1, { x: "+=200", });
});

// modal box
function modal_box() {
    $('.download-code,.box-menu-bars').click(function() {
        $(this).next('.modal-box').addClass('select');

        $('.background').addClass('select');
        $('.box-menu-bars').addClass('inactive');
        $('.modal-box').addClass('select');

    });
    $('.btn-close,.background').click(function() {
        $('.modal-box').removeClass('select');
        $('.background').removeClass('select');
        $('.box-menu-bars').removeClass('inactive');

    });
}

function music_box() {
    $('.musicpin').click(function() {
        $('.box-main').addClass('active');


    });
    $('.themepin').click(function() {
        $('.box-select-theme').addClass('active');


    });
    $('.close-music').click(function() {
        $('.box-main').removeClass('active');


    });
    $('.close-seleclt-theme,.bg-select-theme').click(function() {
        $('.box-select-theme').removeClass('active');


    });
}

function modal_hd() {

    $('.modal-hd').addClass('active');
    //    tat 
    $('.close-modal-hd,.bg-modal-hd').click(function() {
        $('.modal-hd').removeClass('active');


    });
    var thongbao = setInterval(function() {

        $('.modal-hd').removeClass('active');
        clearInterval(thongbao);
    }, 10000);


}

// tab
function tab_box() {
    $('.tab-thumbnail .thumbnail-img').click(function() {
        x = $(this).index();
        x = x + 1;
        $('.large-img-tab').removeClass('active');
        $('.large-img-tab:nth-child(' + x + ')').addClass('active');
    });
}


// plugin
// OWL slide


function slideBasic() {
    $("#owl-demo").owlCarousel({

        autoPlay: 5000, //Set AutoPlay to 3 seconds

        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
}

// update 30-4-2022

// slide product
// function slideProduct() {

//     var soluongslide = $('.box-ratio a img').length;
//     $('.box-ratio a').append("<img src='' class='anh'>");
//     $('.previous-product').click(function(event) {
//         // console.log('test link');
//         // lấy src ảnh
//         // x = $('.box-ratio img:nth-child(1)').attr('src');
//         // gán src
//         // $('.box-ratio img:nth-child(3)').attr({ src: x })

//         $('.anh').attr({ src: $('.box-ratio a img:nth-child(2)').attr('src') })

//         console.log('bây giờ là :' + soluongslide);
//         if (soluongslide == soluongslide) {
//             soluongslide = 0;
//         }
//         soluongslide = soluongslide + 1;

//     });
// }