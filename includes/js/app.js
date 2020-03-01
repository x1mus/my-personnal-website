$(document).ready(function() {
    function notValidField(element) {
        element.addClass('form__element--notvalid');
    }

    function isMyFormValid() {
        $('#form').on('submit', function(e) {
            const namesRegex = /^(?!undefined)[A-Za-zàâéèëêïîôùüçœ\'\’\-]{2,60}$/;
            const mailRegex = /^[A-Za-z0-9\-\.\_]+\@[a-z]+\.[a-z]+$/;

            const isLastName = namesRegex.test($('.form__input--lastName').val());
            const isFirstName = namesRegex.test($('.form__input--firstName').val());
            const isMail = mailRegex.test($('.form__input--mail').val());

            $('.form__message').html('');
            $('.form__input, .form__textarea').removeClass('form__element--notvalid');
            if(isLastName && isFirstName && isMail && $('.form__textarea').val() != '') {
                contactPost();
            } else {
                let errorMessage;
                let i = 0;

                if(!isLastName) {
                    notValidField($('.form__input--lastName'));
                    i = true;
                }

                if(!isFirstName) {
                    notValidField($('.form__input--firstName'));
                    i = true;
                }

                if(!isMail) {
                    notValidField($('.form__input--mail'));
                }

                if($('.form__textarea').val() == '') {
                    notValidField($('.form__textarea'));
                     i = true;
                }

                if(i) {
                    errorMessage = 'Veuillez remplir tous les champs';
                } else {
                    errorMessage = 'L\'e-mail est invalide';
                }

                $('.form__message').html(errorMessage);
            }

            e.preventDefault();
        });
    }

    if (window.location.hash == '#portfolio') {
        $('#main').load('portfolio.html');
    } else if (window.location.hash == '#blog') {
        $('#main').load('blog.html');
    } else if (window.location.hash == '#contact') {
        $('#main').load('contact.html');
    } else {
        $('#main').load('home.html');
    }

    $('[href="' + String(window.location.hash) + '"]').parent().addClass('navbar__tab--active');
    $('[href="' + String(window.location.hash) + '"]').parent().siblings('.navbar__tab').removeClass('navbar__tab--active');

	// For each link in the navigation bar when clicked
	$('.navbar__tab').on('click', function () {
        const currentPage = this;

		// We add the class .active to the link that is clicked and remove it from the others
        $(this).addClass('navbar__tab--active')
        $(this).siblings('.navbar__tab').removeClass('navbar__tab--active');

        // If the page asked is already loaded
        if ($(currentPage).children('a').attr('href').slice(1) != $('#main').children('div').attr('id')) {
            // Then we load the correct page with help of the id of that link
            $('#main').fadeOut(function() {
                $('#main').load($(currentPage).children('a').attr('href').slice(1) + '.html', function() {
                    $('#main').fadeIn();
                    
                    isMyFormValid();
                });
            });
        }
    });
});