$(document).ready(function () {


    $('#headMenu').click(function () {
        $('#headMenu').toggleClass('change');
        $('#custom-top-header').toggleClass('headerbg');
    });



    //Header animation

    function animateHeader() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('custom-head-scrol');
            $('.nav-link').addClass('nav-link-scroll');
            $('#headMenu').addClass('change-color');
        } else {
            $('header').removeClass('custom-head-scrol');
            $('.nav-link').removeClass('nav-link-scroll');
            $('#headMenu').removeClass('change-color');
        }
        
    }


    //animation 
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);

            }
        });
    }





//    function animation() {
//        var windowHeight = $(window).height();
//        var scrollTop = $(window).scrollTop();
//
//        $('.animation').each(function () {
//            var topPosition = $(this).offset().top;
//            if (topPosition < scrollTop + windowHeight - 100) {
//                var animation = $(this).data('animation');
//                var delay = $(this).data('delay');
//                delay = parseInt(delay);
//                $(this).css('animation-delay', delay + 's').addClass(animation);
//            }
//
//        });
//    }


    animation();
    animateHeader();

    $(window).scroll(function () {
        animation();
        animateHeader();
    });

    // EASE SCROLL

//    $(document).on('click', 'a[href^="#"]', function (event) {
//        event.preventDefault();
//
//        $('html, body').animate({
//            scrollTop: $($.attr(this, 'href')).offset().top
//        }, 800);
//    });

    //counter up 


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});