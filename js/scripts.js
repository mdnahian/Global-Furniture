$(document).ready(function () {
	$( "#toggleNav" ).click(function() {
		$( ".nav-menu" ).toggleClass( "is-active" );
		console.log("working...");
	});
});