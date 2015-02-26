$(function () { //this set of functions deals with the nav bar
	var $navbutton = $('.navbar-collapse ul li a'); //set variable for individual nav buttons

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
            $('.navbar-toggle:visible').click();
    });

    $navbutton.on("mouseover",function(){ //change color when mouse hover
	 	$(this).css({
	 		'background-color':'#1a237e'
	 	});
    });

   	$navbutton.on("mouseout",function(){ //change color when mouse exit
 		$(this).css({
 			'background-color':'#0d113f'
 		});
    });

});

$(document).ready(function () {
	$( ".panel" ).hide();

	//$( ".panel" ).fadeIn( 2000, function() {
	//$( ".panel" ).fadeIn( 3000, function() {
	//$( ".panel" ).fadeIn( 4000, function() {

	$( "#panel-1" ).fadeIn( 100, function() {
	$( "#panel-2" ).fadeIn( 200, function() {
	$( "#panel-3" ).fadeIn( 300, function() {




		});      
		});     
	});   
});  