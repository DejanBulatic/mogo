$(document).ready(function () {


    $('#headMenu').click(function () {
        $('#headMenu').toggleClass('change');
        $('#custom-top-header').toggleClass('headerbg');
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('custom-head-scrol');
        } else {
            $('header').removeClass('custom-head-scrol');
        }
    });

    function animation(){
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        $('.animation').each(function(){
            var topPosition = $(this).offset().top;
            if(topPosition < scrollTop + windowHeight - 100){
                var animation = $(this).data('animation');
                var delay = $(this).data('delay');
                delay = parseInt(delay);
                $(this).css('animation-delay', delay+'s').addClass(animation);
            }
            
        });
    }
    
    
    animation();
    
    $(window).scroll(function(){
        animation();
    });
    
    


});