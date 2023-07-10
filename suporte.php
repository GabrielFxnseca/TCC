<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Suporte</title>
    <link rel="stylesheet" href="css/suporte.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous">
</head>

<body>

    <header>
        <h2><a href="index.php" class="logo">Obra Facilitada</a></h2>
        <div class="navigation">
            <a href="calculadora.php">Calculadora</a>
            <a href="relatorio.php">Relatório</a>
            <a href="suporte.php">Suporte</a>
            <a id="login-button" href="admin/login.php">Login</a>

        </div>
    </header>
    <section class="contact">
        <div class="content">
            <h2>entre em contato</h2>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><img src="images/phone-solid.svg" alt=""></div>
                    <div class="text">
                        <h3>Telefone</h3>
                        <p>71 987521486</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><img src="images/envelope-solid.svg" alt=""></div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>obrafacilitada@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form>
                    <h2>Envie sua mensagem</h2>
                    <div class="inputBox">
                        <input type="text" placeholder="Digite sue nome">
                        <input type="email" name="" id="" placeholder="Digite seu email">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem..."></textarea>
                        <input type="button" value="Enviar">

                    </div>
                </form>
            </div>
        </div>
    </section>
    
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