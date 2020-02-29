function contactPost() {
    let lastName = $('.form__input--lastName').val();
    let firstName = $('.form__input--firstName').val();
    let mail = $('.form__input--mail').val();
    let message = $('.form__textarea').val();
    let action = $('#form').attr('action');
    let captcha = grecaptcha.getResponse();

    $.ajax({
        url: action,
        method: 'POST',
        cache: false,

        data: {
            lastName : lastName,
            firstName : firstName,
            mail : mail,
            message : message,
            captcha : captcha
        },

        beforeSend: function() {
            console.log('load'); 
        },

        success: function(reponse) {
            $('.form__message').html(reponse);
            
            if(reponse == 'Message envoyé') {
                $('.form__message').css('color', 'var(--green-color)');
            }
        },

        error: function() {
            alert('Erreur de communication avec le serveur');
        }
    });
}