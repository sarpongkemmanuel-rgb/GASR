<?php

include "config.php";



if($_SERVER["REQUEST_METHOD"] == "POST"){



$name = htmlspecialchars($_POST["name"]);

$email = htmlspecialchars($_POST["email"]);

$country = htmlspecialchars($_POST["country"]);





// Check empty fields

if(empty($name) || empty($email) || empty($country)){


echo "

<script>

alert('Please complete all fields');

window.history.back();

</script>

";


exit();

}







// Email message


$message = "

New Conference Registration


Name:
$name


Email:
$email


Country:
$country


";





$subject = "New Conference Registration";



$headers = "From: ".$website_name."\r\n";

$headers .= "Reply-To: ".$email."\r\n";





// Send email


mail(
$admin_email,
$subject,
$message,
$headers
);






// Success message


echo "

<!DOCTYPE html>

<html>

<head>

<title>Registration Successful</title>


<style>


body{

font-family:Arial;

background:#111;

color:white;

text-align:center;

padding:100px;

}



.box{

background:white;

color:#333;

padding:40px;

border-radius:15px;

max-width:500px;

margin:auto;

}



a{

display:inline-block;

margin-top:20px;

background:#f5b700;

padding:12px 25px;

border-radius:30px;

text-decoration:none;

color:black;

}


</style>


</head>



<body>


<div class='box'>


<h1>Thank You!</h1>


<p>
Your conference registration has been received.
</p>


<a href='../index.html'>
Back To Website
</a>


</div>



</body>

</html>


";



}

else{


header("Location: ../index.html");

exit();

}


?>