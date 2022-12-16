 //    slide STYLE 1
 function slide_style_1() {
     // code auto click
     auto_click = setInterval(function() {
         $('.slide-control-next').trigger('click');
     }, 10000);
     // 1. phần xử lý next slide
     $('.slide-control-next').click(function(event) {
         //    clearInterval(auto_click);
         var next_slide = $('.active').next();

         if (next_slide.length == 0) {
             $('.active').addClass('NEXT_action_hidden_style_1').one('webkitAnimationEnd', function(event) {
                 $('.NEXT_action_hidden_style_1').removeClass('NEXT_action_hidden_style_1');
             });

             //    
             $('.slide-img:first-child').addClass('next-element-style-1').one('webkitAnimationEnd', function(event) {

                 //    
                 $('.active').removeClass('active');

                 //    
                 $('.next-element-style-1').addClass('active').removeClass('next-element-style-1');

             });


         } else {
             $('.active').addClass('NEXT_action_hidden_style_1').one('webkitAnimationEnd', function(event) {
                 $('.NEXT_action_hidden_style_1').removeClass('NEXT_action_hidden_style_1');
             });
             // js de slide tiep theo di vao
             next_slide.addClass('next-element-style-1').one('webkitAnimationEnd', function(event) {
                 $('.active').removeClass('active');
                 $('.next-element-style-1').addClass('active').removeClass('next-element-style-1');
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

         if (prev_slide.length == 1) {
             $('.active').addClass('PREV_action_hidden_style_1').one('webkitAnimationEnd', function(event) {
                 $('.PREV_action_hidden_style_1').removeClass('PREV_action_hidden_style_1');
             });

             // js de slide tiep theo di vao
             prev_slide.addClass('prev-element-style-1').one('webkitAnimationEnd', function(event) {
                 $('.active').removeClass('active');
                 $('.prev-element-style-1').addClass('active').removeClass('prev-element-style-1');
             });
         } else {
             $('.active').addClass('PREV_action_hidden_style_1').one('webkitAnimationEnd', function(event) {
                 $('.PREV_action_hidden_style_1').removeClass('PREV_action_hidden_style_1');
             });

             // js de slide tiep theo di vao
             $(' .slide-img:last-child').addClass('prev-element-style-1').one('webkitAnimationEnd', function(event) {
                 $('.active').removeClass('active');
                 $('.prev-element-style-1').addClass('active').removeClass('prev-element-style-1');
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

         // xử lý tính vị trí slide khi click vào li

         //    cho slide hiện tại biến mất
         $('.active').addClass('NEXT_action_hidden_style_1').one('webkitAnimationEnd', function(event) {
             $('.NEXT_action_hidden_style_1').removeClass('NEXT_action_hidden_style_1');
         });

         //    cho slide dc click hiển thị

         $(' .slide-img:nth-child(' + ($(this).index() + 1) + ')').addClass('next-element-style-1').one('webkitAnimationEnd', function(event) {

             //    
             $('.active').removeClass('active');

             //    
             $('.next-element-style-1').addClass('active').removeClass('next-element-style-1');

         });
     });
     //    KẾT THÚC PHẦN XỬ LÝ CLICK NÚT LI ĐỂ CHUYỂN SLIDE
 }
 //    slide STYLE 2
 function slide_style_2() {
     // code auto click
     auto_click = setInterval(function() {
         $('.slide-control-next').trigger('click');
     }, 500000);
     // 1. phần xử lý next slide
     $('.slide-control-next').click(function(event) {
         //    clearInterval(auto_click);
         var next_slide = $('.active').next();

         if (next_slide.length == 0) {
             $('.active').addClass('NEXT_action_hidden_style_2').one('webkitAnimationEnd', function(event) {
                 $('.NEXT_action_hidden_style_2').removeClass('NEXT_action_hidden_style_2').removeClass('active');
             });

             //    
             $('.slide-img:first-child').addClass('next-element-style-2').one('webkitAnimationEnd', function(event) {



                 //    
                 $('.next-element-style-2').addClass('active').removeClass('next-element-style-2');

             });


         } else {
             $('.active').addClass('NEXT_action_hidden_style_2').one('webkitAnimationEnd', function(event) {
                 $('.NEXT_action_hidden_style_2').removeClass('NEXT_action_hidden_style_2');
             });
             // js de slide tiep theo di vao
             next_slide.addClass('next-element-style-2').one('webkitAnimationEnd', function(event) {
                 $('.active').removeClass('active');
                 $('.next-element-style-2').addClass('active').removeClass('next-element-style-2');
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

         if (prev_slide.length == 1) {
             $('.active').addClass('PREV_action_hidden_style_2').one('webkitAnimationEnd', function(event) {
                 $('.PREV_action_hidden_style_2').removeClass('PREV_action_hidden_style_2');
             });

             // js de slide tiep theo di vao
             prev_slide.addClass('prev-element-style-2').one('webkitAnimationEnd', function(event) {
                 $('.active').removeClass('active');
                 $('.prev-element-style-2').addClass('active').removeClass('prev-element-style-2');
             });
         } else {
             $('.active').addClass('PREV_action_hidden_style_2').one('webkitAnimationEnd', function(event) {
                 $('.PREV_action_hidden_style_2').removeClass('PREV_action_hidden_style_2');
             });

             // js de slide tiep theo di vao
             $(' .slide-img:last-child').addClass('prev-element-style-2').one('webkitAnimationEnd', function(event) {
                 $('.active').removeClass('active');
                 $('.prev-element-style-2').addClass('active').removeClass('prev-element-style-2');
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

         // xử lý tính vị trí slide khi click vào li

         //    cho slide hiện tại biến mất
         $('.active').addClass('NEXT_action_hidden_style_2').one('webkitAnimationEnd', function(event) {
             $('.NEXT_action_hidden_style_2').removeClass('NEXT_action_hidden_style_2');
         });

         //    cho slide dc click hiển thị

         $(' .slide-img:nth-child(' + ($(this).index() + 1) + ')').addClass('next-element-style-2').one('webkitAnimationEnd', function(event) {

             //    
             $('.active').removeClass('active');

             //    
             $('.next-element-style-2').addClass('active').removeClass('next-element-style-2');

         });
     });
     //    KẾT THÚC PHẦN XỬ LÝ CLICK NÚT LI ĐỂ CHUYỂN SLIDE
 }

 //    slide STYLE 3
 function slide_style_3() {
     // code auto click
     auto_click = setInterval(function() {
         $('.slide-control-next').trigger('click');
     }, 10000);
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