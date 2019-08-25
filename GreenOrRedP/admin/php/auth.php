<?php
$login = $_POST['login'];
$pass = $_POST['pass'];
if($login == 'admin' && $pass == 'hesoyam'){
	echo 1;
}else{
	echo 0;
}

exit;
?>
