$(function () { //this set of functions deals with the nav bar
	var $navbutton = $('.navbar-collapse ul li a'); //set variable for individual nav buttons

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
            $('.navbar-toggle:visible').click();
    });

    $navbutton.on("mouseover",function(){ //change color when mouse hover over nav button
	 	$(this).css({
	 		'color':'#486c96'
	 	});
	});

   	$navbutton.on("mouseout",function(){ //change color when mouse exit
 		$(this).css({
 			'color':'#e0e0e0'
 		});
    });

});

//This animates the on-load card enter from bottom animation. I love this animation, its BEAUTIFUL
$(document).ready(function () {
	$(".animate-panel").each(function (i) {
    var $panel = $(this); 

	    setTimeout(function() { 
			$panel.addClass('animate-panel-loaded') }, 300*i);
	  	});

	$(".animate-about-panel").each(function (i) {
    	var $panel = $(this); 

	    setTimeout(function() { 
			$panel.addClass('animate-about-panel-loaded') }, 300*i);
	  	});



	//This section specifically for resume page
	// $("div > ul > li").click(function(){
	// 	var clicked = $(this).index();
	// 		$(this).css({
	// 			'color':'white'
	// 	});

	// $(".main-pages :nth-child(clicked)").function()({ //animate panel coming in when requisite button is pressed
	// 		$(this).addClass("active").siblings().removeClass("active");
	//   	});


	// $(".main-pages :nth-child(clicked)").each(function (i) { //animate sliding out when other panel in pressed
 //    	var $panel = $(this); 

	// 		$(this).addClass("active").siblings().removeClass("active");
	//   	});
});  
