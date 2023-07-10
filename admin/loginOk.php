<?php
session_start();

include ('../connection/connection.php');

if(empty($_POST['email']) || empty($_POST['senha'])){

    header('Location: login.php');
    exit();

}

$email = mysqli_real_escape_string($conn, $_POST['email']);
$senha = mysqli_real_escape_string($conn, $_POST['senha']);

$query = "select id_conta, email from Conta where email = '{$email}' and senha = md5('{$senha}')";

$result = mysqli_query($conn, $query);

$row = mysqli_num_rows($result);

if ($row == 1) {
    $_SESSION['email'] = $email;
    header('Location: painel.php');
    exit();
}else{
    $_SESSION['nao_autenticado'] = true;
    header('Location: login.php');
    exit();
}

?>