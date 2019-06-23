<?php
	// $arr = array(date('d M Y H:i:s'),5,'Hello');
	// $obj = array(
	// 	'name' => 'dick',
	// 	'surname' => 'dickov',
	// 	'age' => array(13,45)
	// );
	// $concat = 'Alex' . ' ' . 'Braun';
	// foreach ($obj as $val) {
	// 	echo $val . '<br/>';
	// }

	// $connection = mysqli_connect('localhost1','mysql','mysql','wordpress');
	// if($connection === false){
	// 	echo 'Не удалость подключиться к базе данных test_db';
	// 	echo mysqli_connect_error();
	// 	exit();
	// }else{
	// 	echo 'Поключение к test_db прошло успешно<br/>';
	// }
	
	// $dbresult = mysqli_query($connection, "SELECT * FROM `wp_users`");
	
	// while(($record = mysqli_fetch_assoc($dbresult))){
	// 	// print_r($record) . '<br/>';
	// 	echo "<div id='block'><h2 class='title'>Nickname: " . $record['user_nicename'] . "</h2></div><hr/>";
	// }
	
	// echo $r1['user_email'];
$jsonStr = file_get_contents("dataOMDB.json");
$json = json_decode($jsonStr,true);

//Начальные символы названия фильма
$inputTitle = strtolower('a');
$searchRegexp = '/^'. $inputTitle .'[A-Za-zА-Яа-я 0-9-\']+/m';


searchMovies($json,$searchRegexp);
function searchMovies($json,$regexp){
	$objsMvies = array();
	foreach ($json as $val) {
		$lowerStr = strtolower($val['Title']);
		if(preg_match_all($regexp,$lowerStr, $matches, PREG_SET_ORDER, 0) !== 0){
			
			array_push($objsMvies,$val);
		}
		// echo $val['Title'] . '<br/>';
		
	}
	echo json_encode($objsMvies);
}
exit;	

?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="style.css"/>
</head>
<body>
	<!-- <script>alert()</script> -->
	<div id="block">
		<h2 class="title">Nickname: <?php echo $r1['user_nicename']; ?></h2>
		<p class="year"></p>
	</div>
	<!-- <script src="script.js"></script> -->
</body>
</html>