<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "deine-email@example.com"; // Ersetze dies mit deiner E-Mail-Adresse
    $subject = "Neues Feedback von $name";
    $body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Danke für dein Feedback!";
    } else {
        echo "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.";
    }
}
?>
