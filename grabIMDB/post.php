<?php
    $key = $_POST['key'];
    $fp = fopen('data.json', 'a');
	fwrite($fp, $key);
	fclose($fp);
?>