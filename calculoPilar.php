<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/calculoPilar.css">
</head>
<body>
<section>
    <header>
        <h2><a href="index.php" class="logo">Obra Facilitada</a></h2>
        <div class="navigation">
            <a href="calculadora.php">Calculadora</a>
            <a href="relatorio.php">Relatório</a>
            <a href="suporte.php">Suporte</a>
            <a id="login-button" href="admin/login.php">Login</a>

        </div>
    </section>

 <section>

    

    <form id="formulario">
        
        <div id = "calculadora">

            <div>
                <img src="images/seta.png" id="seta"> 
            </div>
         
            <label id = "titulo1" for="altura">Altura (m):</label>
            <input type="float" id="altura"  pattern='[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)'>
            <p class="alerta">Digite um valor válido!</p>

            <p class = composicao>Materiais:</p>

            <label id = "titulo2" for="comp">Comprimento (cm):</label>
            <input type="float" id="comp"  pattern='[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)'>
            <p class="alerta">Digite um valor válido!</p>

            <label id = "titulo3" for="largura">Largura (cm):</label>
            <input type="float" id="larg"  pattern='[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)'>
            <p class="alerta">Digite um valor válido!</p>
            
            <label id = "titulo4" for="qtd">Quantidade:</label>
            <input type="integer" id="qtd"  pattern='[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)'><br><br>
            <p class="alerta">Digite um valor válido!</p>
        </div>
        <div>
            <button type="button" id="botao">Calcular</button><br><br><br>
        </div>
    
        <div id="observacoes">
            <p>Cálculo para o traço (1:2:4) de cimento, areia e brita 1.</p>
            <p>O saco de cimento consdierado possui 50 kg.</p>
            <p>Valores com acrescimo de 10% para possíveis perdas.</p>
            <p>É essencial o acompanhamento de um profissional especializado, não sendo responsabilidade dos criadores do "Obra Facilitada" divergências entre os cálculos do site e o resultado da obra.</p>
        </div>
   
        <script src="js/pilar.js"></script>

    </form>
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