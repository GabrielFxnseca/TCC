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
        <form>
            <div id="h1">
                <h1>Crie sua conta</h1>
            </div>
            <div id="input">
                <input type="email" placeholder="Email">
                <input type="password" name="senha" id="senha" placeholder="Senha">
                <input type="password" placeholder="Repita a senha">
            </div>
            <div id="botao1">
                <button>CRIAR CONTAR</button>
            </div>
        </form>
    </div>

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