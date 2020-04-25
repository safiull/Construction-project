$(document).ready(function(){
  $('.card').hover(

  	// trigger when mouse hover
    function(){
    	$(this).animate({
    		marginTop: "-=1%",
    	},200);
    },

    // trigger when mouse out
    function(){
    	$(this).animate({
    		marginTop: "0%"
    	},200);
    }
  );
});