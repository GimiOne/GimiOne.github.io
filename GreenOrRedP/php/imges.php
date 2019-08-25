<?php
ini_set('upload_max_filesize', '1M');
if($_FILES['inputfile']['size'] > 4500000){
	echo 'big';
}else if(isset($_FILES) && $_FILES['inputfile']['error'] == 0 && ($_FILES['inputfile']['type'] == 'image/jpeg' || $_FILES['inputfile']['type'] == 'image/png' || $_FILES['inputfile']['type'] == 'image/gif')){ // Проверяем, загрузил ли пользователь файл
$destiation_dir = dirname(__FILE__) .'/'.$_FILES['inputfile']['name']; // Директория для размещения файла
move_uploaded_file($_FILES['inputfile']['tmp_name'], $destiation_dir ); // Перемещаем файл в желаемую директорию
echo 1;
}
else{
echo 'Файл не загружен'; // Оповещаем пользователя о том, что файл не был загружен
}

?>
