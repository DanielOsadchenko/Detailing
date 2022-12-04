<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('uk', 'PHPMailer/language/phpmailer.lang-uk.php');
$mail->IsHTML(true);

$mail->setFrom('superguydan@gmail.com', 'Нова заявка!');
$mail->addAddress('dm.osadchenko@gmail.com');
$mail->Subject = 'Тобі відправили нову заявку на роботу';


$body= '<h1>Заявка</h1>';

if(trim(!empty($_POST['name']))) {
  $body.='<p><strong>Name:</strong> '.$_POST['name']'</p>';
}

if(trim(!empty($_POST['tel']))) {
  $body.='<p><strong>Tel:</strong> '.$_POST['tel']'</p>';
}

if(trim(!empty($_POST['car']))) {
  $body.='<p><strong>Car:</strong> '.$_POST['car']'</p>';
}

if(trim(!empty($_POST['work']))) {
  $body.='<p><strong>Work:</strong> '.$_POST['work']'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
  $message = 'Помилка!';
} else {
  $message = 'Заявка відправлена! Дякуємо за довіру!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

