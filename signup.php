<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullName = $_POST["fullName"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $course = $_POST["course"];
    $type = $_POST["type"];
    $address = $_POST["address"]; 

    
        // Prepare email content
        $to = "nokrekitofficial@gmail.com";
        $subject = "New Signup";
        $email_content = "Name: $fullName\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Course: $course\n";
        $email_content .= "Type: $type\n";
        $email_content .= "Address: $address\n";

        // Send email
        $headers = "From: $email";

        if (mail($to, $subject, $email_content, $headers)) {
              header("Location: thanks.html");
              exit();
        } else {
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    
}
?>