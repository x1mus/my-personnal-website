$(document).ready(function() {
	// Loading of the default page of the site.
	$('#main').load('home.html');

	// For each link in the navigation bar when clicked
	$('.navbar__tab').on('click', function () {
		// We add the class .active to the link that is clicked and remove it from the others
    	$(this).addClass('navbar__tab--active')
    	$(this).siblings('.navbar__tab').removeClass('navbar__tab--active');

    	let currentPage = this;

    	// Then we load the correct page with help of the id of that link
    	$('#main').fadeOut(function() {
    		$('#main').load($(currentPage).children('a').attr('id') + '.html', function() {
    			$('#main').fadeIn();
    		});
    	});
    });
});