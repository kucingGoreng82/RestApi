<?php
// $mahasiswa = [
//     [
//     "nama" => "Kucing Goreng",
//     "nrp" => "09876543",
//     "email" => "kucinggoreng@gmail.com"
// ],
// [
//     "nama" => "Ayam Goreng",
//     "nrp" => "09876543",
//     "email" => "kucinggoreng@gmail.com"
// ]
// ];
// var_dump($mahasiswa);

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar','root','root');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);


$data = json_encode($mahasiswa);
echo $data;
?>