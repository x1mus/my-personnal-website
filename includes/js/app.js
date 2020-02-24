$(document).ready(function() {
	// Loading of the default page of the site.
	$('#main').load('home.html');

	// For each link in the navigation bar when clicked
	$('.navbar > div').on('click', function () {
		// We add the class .active to the link that is clicked and remove it from the others
    	$(this).children('a').addClass('active')
    	$(this).siblings('div').find('a').removeClass('active');

    	// Then we load the correct page with help of the id of that link
    	$('#main').load($(this).children('a').attr('id') + '.html');
    });
});