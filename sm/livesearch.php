<?php
//if(!empty($_GET['query'])){
	$connection = mysqli_connect('localhost','mysql','mysql','Movies');
	if($connection === false){
		echo mysqli_connect_error();
		exit();
	}
	$text = (string)$_GET['query'];
	$dbresult = mysqli_query($connection, "SELECT `Title` FROM `MoviesIMDB` WHERE `Title` LIKE '%$text%' LIMIT 10");

	$arrs = array();
	while($record = mysqli_fetch_assoc($dbresult)){
		array_push($arrs, $record);
	}
	echo json_encode($arrs);
//}
exit();
?>