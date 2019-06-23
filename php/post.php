<?php
    $key = $_POST['key'];
    $fp = fopen('sortedMovies(1st)10000.json', 'a');
	fwrite($fp, $key);
	fclose($fp);
?>