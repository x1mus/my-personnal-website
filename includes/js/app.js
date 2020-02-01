$(document).ready(function() {
	// Loading of the default page of the site.
	$("#main_content").load("home.html");

	// For each link in the navigation bar when clicked
	$('.navbar > a').on('click', function () {
		// We add the class .active to the link that is clicked and remove it from the others
    	$(this).addClass('active').siblings().removeClass('active');

    	// Then we load the correct page with help of the id of that link
    	$('#main_content').load($(this).attr('id') + '.html');
    });
});