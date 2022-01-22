$(function() {
	$.ajax({
		url : 'https://api.github.com/users/x1mus/repos',
    	method : 'GET',
    	cache : false,

    	success: function(response) {
        	for(repository of response) {
        		$('#portfolio').append(
        			"<a class='container project' href='" 
        			+ repository.html_url 
        			+ "' target='_blank'> <div class='project__image' style='background: url(includes/svg/"
        			+ String(repository.language).toLowerCase()
        			+ ".svg) no-repeat'></div> <div class='project__title'>" 
        			+ repository.name 
        			+ "</div></a>"
        		);
        	}
    	},

    	error: function() {
        	console.log('error');
    	}
    });
});
