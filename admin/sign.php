<?php

session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Sing in</title>
    <link rel="stylesheet" href="../css/sign.css">
</head>

<body>
    <header>
        <h2><a href="../index.php" class="logo">Obra Facilitada</a></h2>
        <div class="navigation">
            <a href="../calculadora.php">Calculadora</a>
            <a href="../relatorio.php">Relatório</a>
            <a href="../suporte.php">Suporte</a>
            <a id="login-button" href="login.php">Login</a>

        </div>
    </header>

    <div id="container">

        <form method="POST" action="signOk.php">

            <div id="h1">

                <h1>Crie sua conta</h1>

            </div>

                <?php
                if(isset($_SESSION['status_cadastro'])):
                ?>
                <div id="cadastro_sucesso">
                    <p>Cadastro realizado com sucesso.<br>
                    Faça login informando o email e senha <a href="../admin/login.php">aqui</a></p>
                </div>
                <?php
                endif;
                unset($_SESSION['status_cadastro']);
                ?>

                <?php
                if(isset($_SESSION['email_existe'])):
                ?>
                <div id="email_existente">
                    <p>O Email utilizado já existe.<br>
                    Informe um novo e tente novamente.</p>
                </div>
                <?php
                endif;
                unset($_SESSION['email_existe']);
                ?>

            <div id="input">

                <input type="text" placeholder="Nome" name="nome">
                <input type="email" placeholder="Email" name="email">
                <input type="password" name="senha" id="senha" placeholder="Senha">
                <input type="password" placeholder="Repita a senha">

            </div>
            <div id="botao1">

                <button type="submit" >CRIAR CONTAR</button>
                
            </div>

        </form>

    </div>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>

</html>