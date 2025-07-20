<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db   = 'recipes_db';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Koneksi database gagal"]);
    exit;
}
?>
