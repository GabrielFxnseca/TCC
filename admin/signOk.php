<?php

include('../connection/connection.php');
session_start();

$nome = mysqli_real_escape_string($conn, trim($_POST['nome']));
$email = mysqli_real_escape_string($conn, trim($_POST['email']));
$senha = mysqli_real_escape_string($conn, trim(md5($_POST['senha'])));

$sql = "select count(*) as total from Conta where email = '$email'";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_assoc($result);

if ($row['total'] == 1) {
    $_SESSION['email_existe'] = true;
    header('Location: sign.php');
    exit();
}

$sql = "INSERT INTO Conta(nome, email, senha) VALUES ('$nome', '$email', '$senha')";

if ($conn->query($sql) === TRUE) {
    $_SESSION['status_cadastro'] = true;
}

$conn->close();

header('Location: ../sign.php');
exit;

?>