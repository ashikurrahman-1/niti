
<?php
//getting data from php form
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$course = $_POST['course'];
$message = $_POST['message'];
$to = "nokrekitinfo@gmail.com";
$subject = "Mail From website";
$txt = "First Name = " . $firstName . "\r\n Last Name = " . $lastName . "\r\n Phone = " . $phone . "\r\n Email = " . $email . "\r\n Course = " .$course . "\r\n Message = " . $message;
$headers = "From: $email" . "\r\n";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect to thank you page
header("Location:thanks.html");
?>
