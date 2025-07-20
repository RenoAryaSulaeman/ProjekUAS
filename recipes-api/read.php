<?php
// Header untuk CORS dan tipe konten
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Tangani preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "db.php";

// Ambil data resep beserta jumlah likes
$sql = "SELECT id, title, summary, image, spoonacular_id, likes FROM recipes";
$result = $conn->query($sql);

$recipes = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['summary'] = html_entity_decode($row['summary']);
        $row['likes'] = (int) $row['likes']; // pastikan likes sebagai integer
        $recipes[] = $row;
    }
}

// Kirim hasil sebagai JSON
echo json_encode($recipes);

$conn->close();
?>
