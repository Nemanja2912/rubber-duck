<?php
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin (not recommended for production use)
header('Access-Control-Allow-Methods: POST'); // Allow only POST requests
header('Access-Control-Allow-Headers: content-type'); // Allow only the Content-Type header


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Build email message
    $to = '';
    $subject = 'New contact form submission';
    $message_body = "Name: $name\n\nEmail: $email\n\nMessage: $message";
    $headers = "From: $email\nReply-To: $email";

    // Send email
    $sent = mail($to, $subject, $message_body, $headers);

    // Send response
    header('Content-type: application/json');
    if ($sent) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false));
    }
} else {
    // Send error response
    header('Content-type: application/json');
    echo json_encode(array('success' => false));
}
?>
