<?php
$filename = 'data.json';
$text = 'lol dsdsd.';
$xx = $_POST['key'];
file_put_contents($filename, $xx);
//$text = file_get_contents($filename);
echo $xx;
exit;
?>
