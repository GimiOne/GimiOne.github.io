<html>
<head>
    <title>Загрузка файлов на сервер</title>
    <meta charset="utf-8">
</head>
<body>

<?php $filed = "save.txt";
$rez = "Записано в файлик";
file_put_contents($filed, $rez);
?>

</body>
</html>