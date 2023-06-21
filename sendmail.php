<?php
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];
$email_from='johannahussico@gmail.com';
$email_subject='New form submission';
$email_body="name:$name.\n".
            "email:$email.\n".
            "subject:$subject.\n".
            "message:$message.\n";
$to='johannahussico@gmail.com';
$header="From: $email_from\r\n;
$header.= "Reply-To: $email\r\n";
mail($to,$email_subject,$email_body,$header);
header("Location:contact.html");
?>