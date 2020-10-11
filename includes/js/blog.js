$(function() {
	$.ajax({
		url: 'api.php',
		method: 'GET',
		cache: false,

		success: function(response) {
			for(article of response) {
				$('#blog').prepend(
					"<div class='container blog'>"
						+ "<span class='blog__id'>"
							+ article.id
						+ "</span>"
						
						+ "<h2 class='blog__title'>"
							+ article.title
						+ "</h2>"
						
						+ "<div class='blog__info'>"
							+ "<div class='blog__date'>"
								+ article.creation_date
							+ "</div>"
						
							+ "<div class='blog__tag'>"
								+ article.tag
							+ "</div>"
						+ "</div>"
					
						+ "<div class='blog__hook'>"
							+ article.hook
						+ "</div>"

					+ "</div>"
				);
			}

			$('.blog').on('click', function() {
				let articleId = $(this).children('.blog__id').html();
				window.location.hash = "#" + $(this).children('.blog__title').html().toLowerCase().replace(/\s+/g, '-');

				for(article of response) {
					if(article.id == articleId) {
						console.log(article.id + " - " + articleId);
						$('#main').fadeOut(function() {
							console.log(article.id + " - " + articleId);
							$(this).empty();
							$(this).append(
								"<script src='includes/js/prism.js'></script>"
								+ "<div id='blog'>"
								+ "<div id='"
									+ article.title
								+ "'>"
								+ "<div class='container article'>"
									
									+ "<div class='article__header'>"
										+ "<h2 class='article__title'>"
											+ article.title
										+ "</h2>"
										
										+ "<div class='article__date'>posté le "
											+ article.creation_date
										+ "</div>"

										+ "<div class='article__sharing'>"
											+ "<i class='fab fa-facebook'></i>"
											+ "<i class='fab fa-twitter'></i>"
											+ "<i class='fab fa-linkedin'></i>"
											+ "<i class='fas fa-link'></i>"
										+ "</div>"
									+ "</div>"
									
									+ "<div class='article__content'>"
										+ article.content
									+ "</div>"

									+ "<div class='article__tag'>"
										+ "CATEGORIE: " + article.tag
									+ "</div>"
								+ "</div>"
								+ "</div>"
								+ "</div>"
							);
							$(this).fadeIn();
						});
					}
				}
			});
		},

		error: function() {
			console.log('error');
		}
	});
});