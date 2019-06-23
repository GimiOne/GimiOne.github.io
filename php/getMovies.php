<?php
$jsonStr = file_get_contents("IMDBFilms(1st at 50000).json");
$json = json_decode($jsonStr,true);
$text = $_POST['key'];

//Начальные символы названия фильма
$inputTitle = strtolower($text);
$searchRegexp = '/[A-Za-zА-Яа-я 0-9-\']*'. $inputTitle .'[A-Za-zА-Яа-я 0-9-\']*/m';


searchMovies($json,$searchRegexp,$inputTitle);

function searchMovies($json,$regexp,$inputTitle){
	$objsMovies = array();
	$count = 0;

	//BinarySearch(t,$json);
	foreach ($json as $val) {
		if($count >= 21){
			break;
		}
		$lowerStr = strtolower($val['Title']);
		if(preg_match_all($regexp,$lowerStr, $matches, PREG_SET_ORDER, 0) !== 0 ){
			array_push($objsMovies,$val);
			$count++;
		}	
		
	}
	// echo $objsMovies;
	
	echo json_encode($objsMovies);
}


// function binarySearch($arr, $x) 
// { 
//     if (count($arr) === 0) return false; 
//     $low = 0; 
//     $high = count($arr) - 1; 
//     while ($low <= $high) { 
//         $mid = floor(($low + $high) / 2); 
//         if($arr[$mid] == $x) { 
//             return true; 
//         } 
//         if ($x < $arr[$mid]) { 
//             $high = $mid -1; 
//         } 
//         else { 
//             $low = $mid + 1; 
//         } 
//     } 
//     return false; 
// }
  

// $arr = array(1, 2, 3, 4, 5); 
// $value = 6; 
// $result = binarySearch($arr, $value);
//     echo $result;


exit;
?>