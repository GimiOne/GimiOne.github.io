<?php
    $key = $_POST['key'];
    $fp = fopen('IMDBFilms.json', 'a');
	fwrite($fp, $key);
	fclose($fp);
?>