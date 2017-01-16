jQuery(function($){
        $('.hamburger').click(function(){
            $('.menu').toggleClass('menu_hamburger')
        })
        $('.menu__link').click(function(){
            $('.menu').removeClass('menu_hamburger')
        })
})
