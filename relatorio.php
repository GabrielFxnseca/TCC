<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Relatório</title>
    <link rel="stylesheet" href="css/relatorio.css">
    <script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfAIsedorq1EwqrPLJPc0-yoIrbuzHtiA&amp;callback=initMap">
    </script>
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit" async="" defer="">
    </script>
   
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
    <div class="table">
        <table>
         <thead>
            <tr>
                <td>Produto</td>
                <td>QNTD</td>
                <td>Preço</td>
            </tr>
         </thead>

         <tbody>
            <tr>
                <td><input type="text"></td>
                <td><input type="number"></td>
                <td><input type="text"></td>
                
            </tr>

            <tr>
                <td><input type="text"></td>
                <td><input type="number"></td>
                <td><input type="text"></td>
                
            </tr>

            <tr>
                <td><input type="text"></td>
                <td><input type="number"></td>
                <td><input type="text"></td>
                
            </tr>
         </tbody>

         <tfoot>
            <tr>
                <td colspan="2" align="right"></td>
                <td></td>
            </tr>
         </tfoot>
         </table>
    </div>
    
    <div class="mapa">
    <iframe style="border: 0;" src="https://8nhegburoc.execute-api.us-east-1.amazonaws.com/Prod/buscarCep?cep=02336000&amp;distancia=350000#" width="90%" height="500" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
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