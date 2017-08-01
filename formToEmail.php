<?php
// //if(!isset($_POST['Submit']))
// // $name = $_POST['name'];
// // $email=$_REQUEST['email'];
// // $message=$_REQUEST['description'];

if(isset($_POST["submit"])) {
$name = $_POST['name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['description'];
}

$email_from = 'billalpatel@hotmail.com';
$email_subject = 'New Form';
$email_body = 'Hello';
$to = 'billalpatel@hotmail.com';
// $headers = 

mail($to, $email_from, $email_subject $email_body);
?>



