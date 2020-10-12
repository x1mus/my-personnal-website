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
						let articleToLoad = article;
						$('#main').fadeOut(function() {
							$(this).empty();
							$(this).append(
								"<script src='includes/js/prism.js'></script>"
								+ "<div class='article__container' id='"
									+ articleToLoad.title
								+ "'>"
								+ "<div class='container article'>"
									
									+ "<div class='article__header'>"
										+ "<h2 class='article__title'>"
											+ articleToLoad.title
										+ "</h2>"
										
										+ "<div class='article__date'>posté le "
											+ articleToLoad.creation_date
										+ "</div>"

										+ "<div class='article__sharing'>"
											+ "<i class='fab fa-facebook'></i>"
											+ "<i class='fab fa-twitter'></i>"
											+ "<i class='fab fa-linkedin'></i>"
											+ "<i class='fas fa-link'></i>"
										+ "</div>"
									+ "</div>"
									
									+ "<div class='article__content'>"
										+ articleToLoad.content
									+ "</div>"

									+ "<div class='article__tag'>"
										+ "CATEGORIE: " + articleToLoad.tag
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