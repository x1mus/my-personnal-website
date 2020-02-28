function contactPost() {
    let lastName = $('.form__input--lastName').val();
    let firstName = $('.form__input--firstName').val();
    let mail = $('.form__input--mail').val();
    let message = $('.form__textarea').val();
    let action = $('#form').attr('action');

    $.ajax({
        url: action,
        method: "POST",
        cache: false,

        data: {
            lastName : lastName,
            firstName : firstName,
            mail : mail,
            message : message
        },

        beforeSend: function() {
            console.log("load"); 
        },

        success: function(reponse) {
            if(reponse == "Veuillez remplir tous les champs") {
                alert(reponse);
            } else if(reponse == "L'email est invalide") {
                alert(reponse);
            } else if(reponse == "Message envoyé") {
                alert(reponse);
            } else {
                alert("Erreur inconnue");
            }
        },

        error: function() {
            alert("Erreur de communication avec le serveur");
        }
    });
}