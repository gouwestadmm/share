
$( document ).ready(function() {
  	// give nav a background when neccessary
  	$('.header-content').waypoint(function(direction) {
  		 if (direction === 'down') {
      		$(".navbar").addClass("scrolled")
   		}
   		else{
  			$(".navbar").removeClass("scrolled")
  			}
	});
});

