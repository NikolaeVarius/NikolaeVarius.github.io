$(document).ready(function() { 
	//Global Variable Regarding Nav Buttons. Need to figure out how to properly deal with this
	var $navbutton = $('.navbar-collapse ul li a');

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () { //this fixes weird interaction between mobile nav and desktop
            $('.navbar-toggle:visible').click();
    });

    //top nav bar behavior
	$navbutton.mouseover(function(){
	 	$(this).css({
	 		'color':'#486c96'
	 	});
	});
   	$navbutton.mouseover(function(){
 		$(this).css({
 			'color':'#e0e0e0'
 		});
    });

    function navOnClick(){

    }

    function getNavIndex(){

    }

	//This animates the on-load card enter/exit from bottom animation. I love this animation, its BEAUTIFUL
	$(".animate-panel-start").each(function (i) {
    var $panel = $(this); 
	    setTimeout(function() { 
			$panel.addClass('animate-panel-loaded') }, 500*i);
	 });

	$(".animate-about-panel-start").each(function (i) {
    	var $panel = $(this); 
	    setTimeout(function() { 
			$panel.addClass('animate-about-panel-loaded') }, 500*i);
	 });

	//Returns the index of the currently selected section
	function getCurrentSelection(){
		var $currentIndex;

		$('div .resumeCard').each(i).hasClass

	}

	//This section deals with the special case of the aside bar on the resume page
	//trying to figure out a good way to manage this"
	$(".aside-btn").click(function(){
		var $resumeSection = $(this)
		var $sectionindex = $resumeSection.index();
		console.log($sectionindex);

		if($sectionindex === 0){
			var $activepanel = $('#Profile');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("animate-panel-loaded");
			$activepanel.removeClass("animate-panel-start");
			$siblingpanel.toggleClass("deactivate-panel",true);
			$siblingpanel.toggleClass("animate-panel-loaded",false);

		}
		else if($sectionindex === 1){
			var $activepanel = $('#ProfExp');
			var $siblingpanel = $activepanel.siblings();

			
			$activepanel.addClass("animate-panel-loaded");
			$activepanel.removeClass("animate-panel-start");
			$siblingpanel.toggleClass("deactivate-panel",true);
			$siblingpanel.toggleClass("animate-panel-loaded",false);
		}
		else if($sectionindex === 2){
			var $activepanel = $('#Skills');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("animate-panel-loaded");
			$activepanel.removeClass("animate-panel-start");
			$siblingpanel.toggleClass("deactivate-panel",true);
			$siblingpanel.toggleClass("animate-panel-loaded",false);
		}
		else if($sectionindex === 3){
			var $activepanel = $('#Projects');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("animate-panel-loaded");
			$activepanel.removeClass("animate-panel-start");
			$siblingpanel.toggleClass("deactivate-panel",true);
			$siblingpanel.toggleClass("animate-panel-loaded",false);
		}
		else if($sectionindex === 4){
			var $activepanel = $('#Other');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("animate-panel-loaded");
			$activepanel.removeClass("animate-panel-start");
			$siblingpanel.toggleClass("deactivate-panel",true);
			$siblingpanel.toggleClass("animate-panel-loaded",false);
		};

	}); 
});