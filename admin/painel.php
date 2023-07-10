<?php

//session_start();

include('../admin/valicacao_login.php');

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Página Inicial</title>
    
    <link rel="stylesheet" href="../css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet">
   
</head>

<body>
    
        <header>
            <h2><a href="index.php" class="logo">Obra Facilitada</a></h2>
            <div class="navigation">
                <a href="../calculadora.php">Calculadora</a>
                <a href="../relatorio.php">Relatório</a>
                <a href="../suporte.php">Suporte</a>
                <a id="login-button" href="../admin/logout.php">Logout</a>

            </div>
        </header>

        <h2>Olá, <?php echo $_SESSION['email'];?></h2>


    <footer>
        
        <ul class="social">
            <li><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href=""><ion-icon name="logo-whatsapp"></ion-icon></a></li>       
        </ul>
       
    </footer>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>


</html>