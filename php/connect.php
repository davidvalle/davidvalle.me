<?php

//Datos de conexion a MySQL
$host = "rdbms.strato.de";
$user = "U2541145";
$pass = "xbtr6bxbtr6b";
$dbname = "DB2541145";

$sql = new mysqli($host, $user, $pass, $dbname);

if( !$sql ) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . $sql->mysqli_connect_errno . PHP_EOL;
    echo "Debugging error: " . $sql->mysqli_connect_error . PHP_EOL;
    exit;
}

?>
