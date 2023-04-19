<?php
define('HOST', '34.138.14.62:3306');
define('USUARIO', 'geoplus');
define('SENHA', '6nC.6uF)');
define('DB', 'geo');

$conexao2 = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possível conectar');