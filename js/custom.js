$(function () { //this set of functions deals with the nav bar
	var $navbutton = $('.navbar-collapse ul li a'); //set variable for individual nav buttons

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
            $('.navbar-toggle:visible').click();
    });

    $navbutton.on("mouseover",function(){ //change color when mouse hover
	 	$(this).css({
	 		'background-color':'#1a237e'
	 	});
	 	//$(this).animate({'background-color':'#1a237e'}, 'slow');
    });

   	$navbutton.on("mouseout",function(){ //change color when mouse exit
 		$(this).css({
 			'background-color':'#0d113f'
 		});
    });

});

$(document).ready(function () {
	$( ".panel" ).hide();

	$( "#panel-1" ).slideDown( 100, function() {
	$( "#panel-4" ).slideDown( 100, function() {
	$( "#panel-2" ).slideDown( 200, function() {
	$( "#panel-3" ).slideDown( 300, function() {

		}); 
		});      
	});     
	});   
});  