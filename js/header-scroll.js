$(document).ready(

function() {
	var crown = document.querySelector("#mobile-logo")
	var demo  = document.querySelector("#main-logo")
	window.addEventListener( "scroll", scrollBrain, false )
		var body = document.body,
    		html = document.documentElement;
		var height = Math.max( body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight );

	function scrollBrain(){
		if ( window.pageYOffset >= demo.offsetTop + 100 ){
			return crown.classList.add("visible")
		}

		if ( crown.classList.contains("visible") ){
    	return crown.classList.remove("visible")
  		}
	};
});