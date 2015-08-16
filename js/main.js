

(function($) {
	
	$('#burger-btn').on('click', function(e) {

		e.preventDefault();

		$('#topnav').toggleClass('active');
	});

})(jQuery);