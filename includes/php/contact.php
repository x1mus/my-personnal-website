<?php
    if(isset($_POST['lastName']) && isset($_POST['firstName']) && isset($_POST['mail']) && isset($_POST['message']) && isset($_POST['captcha'])) {
        
        $lastName = htmlspecialchars($_POST['lastName']);
        $firstName = htmlspecialchars($_POST['firstName']);
        $mail = htmlspecialchars($_POST['mail']);
        $message = htmlspecialchars($_POST['message']);
        $reCaptchaReponse = $_POST['captcha'];
        
        if( (!empty($lastName) || $lastName == "0") && (!empty($firstName) || $firstName == "0") && (!empty($mail) || $mail == "0") && (!empty($message) || $message == "0")) {
            
            if(filter_var($mail, FILTER_VALIDATE_EMAIL)) {

                $headers  = 'MIME-Version: 1.0' . "\r\n";
                $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                $headers .= 'FROM:' . $mail;
                
                $to = 'my_email';
                $subject = "Maximilien Laenen - Portfolio";
                
                require 'recaptcha.php';
                $captcha = new Recaptcha('my_private_key');
              
                if($captcha->checkCode($reCaptchaReponse) === false) {
                    echo "Captcha invalide";
                } else {
                    if(mail($to, $subject, $message, $headers)) {
                        echo "Message envoyé";
                    } else {
                        echo "Erreur du serveur SMTP";
                    }
                }

            } else {
                echo "L'email est invalide";
            }

        } else {
            echo "Veuillez remplir tous les champs";
        }

    } else {
        header("Location: ../../index.html#contact");
    }
?>