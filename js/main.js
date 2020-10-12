$(function () {
    $(".header__slider").slick({
        dots:true,
        vertical:true,
    dotsClass:'slider__dots',
       
       arrows:false,
       speed: 500,
        responsive: [
            {
                breakpoint:441,
                settings: {
                    arrows:false,
                    dots:true
                }
            }
        ]
    })
    $(".menu__toggle").on('click', function(){
        $(".menu").slideToggle();
    })

});