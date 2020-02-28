<?php
    if(isset($_POST['lastName']) && isset($_POST['firstName']) && isset($_POST['mail']) && isset($_POST['message'])) {
        
        $lastName = htmlspecialchars($_POST['lastName']);
        $firstName = htmlspecialchars($_POST['firstName']);
        $mail = htmlspecialchars($_POST['mail']);
        $message = htmlspecialchars($_POST['message']);
        
        if( (!empty($lastName) || $lastName == "0") && (!empty($firstName) || $firstName == "0") && (!empty($mail) || $mail == "0") && (!empty($message) || $message == "0") ) {
            
            if(filter_var($mail, FILTER_VALIDATE_EMAIL)) {

                $headers  = 'MIME-Version: 1.0' . "\r\n";
                $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                $headers .= 'FROM:' . $mail;
                
                $to = 'laenen.maximilien@outlook.com';
                $subject = "Maximilien Laenen - Portfolio";
              
              
                mail($to, $subject, $message, $headers);
                echo "Message envoyé";

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