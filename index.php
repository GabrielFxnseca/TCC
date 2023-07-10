<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Página Inicial</title>
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet">
   
</head>

<body>
    <section id="section1">
        <header>
            <h2><a href="index.php" class="logo">Obra Facilitada</a></h2>
            <div class="navigation">
                <a href="calculadora.php">Calculadora</a>
                <a href="relatorio.php">Relatório</a>
                <a href="suporte.php">Suporte</a>
                <a id="login-button" href="admin/login.php">Login</a>

            </div>
        </header>
        <div class="content">
            <div class="info">
                <h2>Construa <br><span>Do Seu Jeito</span></h2>
                <p>A obra facilitada é o lugar ideal para quem quer realizar uma obra. <br> Utilizando nosso site você economizará  tempo e dinheiro <br>usando  nossas ferramentas construidas da maneira mais <br> dinâmica póssivel  para facilitar sua vida na hora de construir.</p>
                <a href="#section-1" class="info-btn">saiba mais</a>
            </div>
        </div>
    </section>

    <section id="section-1">
    <div class="service">
        <div class="title">
            <h2>Nossos Serviços</h2>
        </div>

        <div class="box">
            <div class="card">
                <img class="img1" src="images/calculator.png" alt="">
                <h5>Calculadora</h5>
                <div class="pra">
                    <p>Utilize essa fermamenta para calcular máteriais de construção e ter uma noção completa do que será necessário para sua obra.</p>
                    <p style="text-align: center" ;>
                        <a class="button" href="calculadora.php">Saiba Mais</a>
                    </p>
                </div>
            </div>


            <div class="card">
                <img class="img1" src="images/financial.png" alt="">
                <h5>Relatório</h5>
                <div class="pra">
                    <p>Utilize essa ferramenta para economizar tempo e encontrar todas as  lojas mais próximas de você.</p>
                    <p style="text-align: center" ;>
                        <a class="button" href="relatorio.php">Saiba mais</a>
                    </p>
                </div>
            </div>



            <div class="card">
                <img class="img1" src="images/help.png" alt="">
                <h5>Suporte</h5>
                <div class="pra">
                    <p>Entre em contato com a gente para tirar dúvidas, dar sugestões e reportar possivéis erros no site enviando uma mensagem.</p>
                    <p style="text-align: center" ;>
                        <a class="button" href="suporte.php">Saiba mais</a>
                    </p>
                </div>

            </div>
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