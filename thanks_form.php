<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$email = $_POST["email"];
$name = $_POST["name"];
$comment = $_POST["comment"];
$privacy = $_POST["privacy"];


$to = "support@" . $_SERVER['HTTP_HOST'];
$subject = "New Contact Form Submission";


$body .= "Email: $email\n";
$body .= "Name: $name\n";
$body .= "Comment: $comment\n";
$body .= "Privacy:\n$privacy";


$headers = "From: $to \r\n";

mail($to, $subject, $body, $headers);
header("Location: thanks.html");
exit();
}
?>