$(document).ready(function() { 
	//this set of functions deals with the nav bar
	var $navbutton = $('.navbar-collapse ul li a'); //set variable for individual nav buttons

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () { //this fixes weird interaction between mobile nav and desktop
            $('.navbar-toggle:visible').click();
    });

	$navbutton.mouseover(function(){ //change text color when mouse hover over nav button
	 	$(this).css({
	 		'color':'#486c96'
	 	});
	});

   	$navbutton.mouseover(function(){ //change text color when mouse exit
 		$(this).css({
 			'color':'#e0e0e0'
 		});
    });
	//This animates the on-load card enter/exit from bottom animation. I love this animation, its BEAUTIFUL
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


	//This section deals with the special case of the aside bar on the resume page
	//trying to figure out a good way to manage this"
	$(".aside-btn").click(function(){
		var $resumeSection = $(this)
		var $sectionindex = $resumeSection.index();
		console.log($sectionindex);

		if($sectionindex === 0){
			var $activepanel = $('#Profile');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("active");
			$activepanel.removeClass("deactive");
			$siblingpanel.toggleClass("active",false);

		}
		else if($sectionindex === 1){
			var $activepanel = $('#ProfExp');
			var $siblingpanel = $activepanel.siblings();

			
			$activepanel.addClass("active");
			$activepanel.removeClass("deactive");
			$siblingpanel.toggleClass("deactive",true);
			$siblingpanel.toggleClass("active",false);
		}
		else if($sectionindex === 2){
			var $activepanel = $('#Skills');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("active");
			$activepanel.removeClass("deactive");
			$siblingpanel.toggleClass("deactive",true);
			$siblingpanel.toggleClass("active",false);
		}
		else if($sectionindex === 3){
			var $activepanel = $('#Projects');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("active");
			$activepanel.removeClass("deactive");
			$siblingpanel.toggleClass("deactive",true);
			$siblingpanel.toggleClass("active",false);
		}
		else if($sectionindex === 4){
			var $activepanel = $('#Other');
			var $siblingpanel = $activepanel.siblings();

			$activepanel.addClass("active");
			$activepanel.removeClass("deactive");
			$siblingpanel.toggleClass("deactive",true);
			$siblingpanel.toggleClass("active",false);
		};

	}); 
});