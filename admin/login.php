<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Login</title>
    <link rel="stylesheet" href="../css/login.css">
    <script src="https://accounts.google.com/gsi/client?hl=fr" async defer></script>
    <script>
        function handleCredentialResponse(response) {

        }
        window.onload = function () {
          google.accounts.id.initialize({
            client_id: "1056638564368-7q7dlumv2lojdnt120toqg84omp36o7o.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
        }
    </script>
    
</head>

<body>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <header>
        <h2><a href="../index.php" class="logo">Obra Facilitada</a></h2>
        <div class="navigation">
            <a href="../calculadora.php">Calculadora</a>
            <a href="../relatorio.php">Relatório</a>
            <a href="../suporte.php">Suporte</a>
            <a id="login-button" href="admin/login.php">Login</a>
           
        </div>
    </header>


    <div id="container">
        <form id="login">
            <div id="h1">
                <h1>Login</h1>
            </div>

            <div id="input">

                <input type="email" name="email" id="email" placeholder="Email">
                <input type="password" name="senha" id="senha" placeholder="Senha">
            </div>

            <div id="entrar">
                <button id="botao1">ENTRAR</button>
            </div>
            <div id="social">
                
                <div id="buttonDiv"></div> 
        
            </div>


            <div id="criar">
                <a href="sign.php">criar conta</a>
            </div>


            <div id="esqueci">
                <a href="">esqueci minha senha</a>
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