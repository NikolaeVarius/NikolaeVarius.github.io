$(function () {
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
                $('.navbar-toggle:visible').click();
        });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".menu").css({"background-color":"transparent"});   
        }
    })
})