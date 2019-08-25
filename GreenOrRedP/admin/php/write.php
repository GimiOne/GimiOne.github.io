<?php
$filename = 'data.json';
$key = $_POST['key'];
$login = $_POST['login'];
$pass = $_POST['pass'];
if($login === 'admin' && $pass === 'hesoyam'){
	if($key !== "" && $key !== undefined && $key !== null){
		file_put_contents($filename, $key);
	}
}	


echo $key;
exit;
?>
