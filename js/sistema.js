/*p>Cálculo para o traço (1:2:8) de cimento, cal e areia.</p>
            <p>O saco de cimento consdierado possui 50 kg.</p>
            <p>O saco de cal consdierado possui 20 kg.</p>
            <p>Valores com acrescimo de 10% para possíveis perdas.</p>
            <p>É essencial o acompanhamento de um profissional especializado, não sendo responsabilidade dos criadores do "Obra Facilitada" divergências entre os cálculos do site e o resultado da obra.</p>
        </div>*/



        const botao1 = document.querySelector('#botao1')
        const botao2 = document.querySelector('#botao2')
        const botao3 = document.querySelector('#botao3')
        const botao4 = document.querySelector('#botao4')
        const botao5 = document.querySelector('#botao5')
        const botao6 = document.querySelector('#botao6')


        botao.addEventListener('click', calcular)
        seta.addEventListener('click', voltar)


/*Mudar para a página do cálculo*/
function mudarPagina1() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.14
    let comprimeto = 0.19
    let lagura = 0.09

    /*Calculo da área*/
    let areaVazia = comprimentoVazio*alturaVazia
    let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
    como porta, janela ou algum outro tipo de buraco*/
    areaConstruida.toFixed(2)

    /*Calculo da quantidade de blocos*/
    let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
    let qtdBlocos = areaConstruida*n*1.1
    qtdBlocos.toFixed(0)

    /*Calculo da quantidade de argamassa*/
    let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
    volumeTotal.toFixed(3)

    /*Calculo da quantidade de cimento*/
    let cimentoMassa = volumeTotal*192.52
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)
   if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    /*Calculo da quantidade de cal*/
    let calMassa = volumeTotal*171.13
    let calSaco = calMassa/20
    let valor2 = Math.trunc(calSaco)
   if (calMassa > 0 && calMassa < 20) {
      calSaco = 1
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
    } else if (calSaco - valor < 0.5){
      calSaco = (calSaco + 1).toFixed(0)
      l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }else{
      calSaco = calSaco.toFixed(0)
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }

    /*Calculo da quantidade de areia*/
    let areiaVolume = volumeTotal*1.14
    areiaVolume.toFixed(3)
    //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina2() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.14
    let comprimeto = 0.24
    let lagura = 0.09

    /*Calculo da área*/
    let areaVazia = comprimentoVazio*alturaVazia
    let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
    como porta, janela ou algum outro tipo de buraco*/
    areaConstruida.toFixed(2)

    /*Calculo da quantidade de blocos*/
    let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
    let qtdBlocos = areaConstruida*n*1.1
    qtdBlocos.toFixed(0)

    /*Calculo da quantidade de argamassa*/
    let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
    volumeTotal.toFixed(3)

    /*Calculo da quantidade de cimento*/
    let cimentoMassa = volumeTotal*192.52
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)
   if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    /*Calculo da quantidade de cal*/
    let calMassa = volumeTotal*171.13
    let calSaco = calMassa/20
    let valor2 = Math.trunc(calSaco)
   if (calMassa > 0 && calMassa < 20) {
      calSaco = 1
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
    } else if (calSaco - valor < 0.5){
      calSaco = (calSaco + 1).toFixed(0)
      l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }else{
      calSaco = calSaco.toFixed(0)
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }

    /*Calculo da quantidade de areia*/
    let areiaVolume = volumeTotal*1.14
    areiaVolume.toFixed(3)
    //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina3() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.19
    let comprimeto = 0.24
    let lagura = 0.09
    
   /*Calculo da área*/
   let areaVazia = comprimentoVazio*alturaVazia
   let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
   como porta, janela ou algum outro tipo de buraco*/
   areaConstruida.toFixed(2)

   /*Calculo da quantidade de blocos*/
   let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
   let qtdBlocos = areaConstruida*n*1.1
   qtdBlocos.toFixed(0)

   /*Calculo da quantidade de argamassa*/
   let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
   volumeTotal.toFixed(3)

   /*Calculo da quantidade de cimento*/
   let cimentoMassa = volumeTotal*192.52
   let cimentoSaco = cimentoMassa/50
   let valor = Math.trunc(cimentoSaco)
  if (cimentoMassa > 0 && cimentoMassa < 50) {
     cimentoSaco = 1
     // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
   } else if (cimentoSaco - valor < 0.5){
     cimentoSaco = (cimentoSaco + 1).toFixed(0)
     l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
   }else{
     cimentoSaco = cimentoSaco.toFixed(0)
     // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
   }

   /*Calculo da quantidade de cal*/
   let calMassa = volumeTotal*171.13
   let calSaco = calMassa/20
   let valor2 = Math.trunc(calSaco)
  if (calMassa > 0 && calMassa < 20) {
     calSaco = 1
     // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
   } else if (calSaco - valor < 0.5){
     calSaco = (calSaco + 1).toFixed(0)
     l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
   }else{
     calSaco = calSaco.toFixed(0)
     // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
   }

   /*Calculo da quantidade de areia*/
   let areiaVolume = volumeTotal*1.14
   areiaVolume.toFixed(3)
   //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina4() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.19
    let comprimeto = 0.29
    let lagura = 0.09

   /*Calculo da área*/
   let areaVazia = comprimentoVazio*alturaVazia
   let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
   como porta, janela ou algum outro tipo de buraco*/
   areaConstruida.toFixed(2)

   /*Calculo da quantidade de blocos*/
   let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
   let qtdBlocos = areaConstruida*n*1.1
   qtdBlocos.toFixed(0)

   /*Calculo da quantidade de argamassa*/
   let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
   volumeTotal.toFixed(3)

   /*Calculo da quantidade de cimento*/
   let cimentoMassa = volumeTotal*192.52
   let cimentoSaco = cimentoMassa/50
   let valor = Math.trunc(cimentoSaco)
  if (cimentoMassa > 0 && cimentoMassa < 50) {
     cimentoSaco = 1
     // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
   } else if (cimentoSaco - valor < 0.5){
     cimentoSaco = (cimentoSaco + 1).toFixed(0)
     l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
   }else{
     cimentoSaco = cimentoSaco.toFixed(0)
     // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
   }

   /*Calculo da quantidade de cal*/
   let calMassa = volumeTotal*171.13
   let calSaco = calMassa/20
   let valor2 = Math.trunc(calSaco)
  if (calMassa > 0 && calMassa < 20) {
     calSaco = 1
     // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
   } else if (calSaco - valor < 0.5){
     calSaco = (calSaco + 1).toFixed(0)
     l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
   }else{
     calSaco = calSaco.toFixed(0)
     // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
   }

   /*Calculo da quantidade de areia*/
   let areiaVolume = volumeTotal*1.14
   areiaVolume.toFixed(3)
   //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina5() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.19
    let comprimeto = 0.19
    let lagura = 0.115

    /*Calculo da área*/
    let areaVazia = comprimentoVazio*alturaVazia
    let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
    como porta, janela ou algum outro tipo de buraco*/
    areaConstruida.toFixed(2)

    /*Calculo da quantidade de blocos*/
    let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
    let qtdBlocos = areaConstruida*n*1.1
    qtdBlocos.toFixed(0)

    /*Calculo da quantidade de argamassa*/
    let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
    volumeTotal.toFixed(3)

    /*Calculo da quantidade de cimento*/
    let cimentoMassa = volumeTotal*192.52
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)
   if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    /*Calculo da quantidade de cal*/
    let calMassa = volumeTotal*171.13
    let calSaco = calMassa/20
    let valor2 = Math.trunc(calSaco)
   if (calMassa > 0 && calMassa < 20) {
      calSaco = 1
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
    } else if (calSaco - valor < 0.5){
      calSaco = (calSaco + 1).toFixed(0)
      l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }else{
      calSaco = calSaco.toFixed(0)
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }

    /*Calculo da quantidade de areia*/
    let areiaVolume = volumeTotal*1.14
    areiaVolume.toFixed(3)
    //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina6() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.19
    let comprimeto = 0.24
    let lagura = 0.115

    /*Calculo da área*/
    let areaVazia = comprimentoVazio*alturaVazia
    let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
    como porta, janela ou algum outro tipo de buraco*/
    areaConstruida.toFixed(2)

    /*Calculo da quantidade de blocos*/
    let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
    let qtdBlocos = areaConstruida*n*1.1
    qtdBlocos.toFixed(0)

    /*Calculo da quantidade de argamassa*/
    let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
    volumeTotal.toFixed(3)

    /*Calculo da quantidade de cimento*/
    let cimentoMassa = volumeTotal*192.52
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)
   if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    /*Calculo da quantidade de cal*/
    let calMassa = volumeTotal*171.13
    let calSaco = calMassa/20
    let valor2 = Math.trunc(calSaco)
   if (calMassa > 0 && calMassa < 20) {
      calSaco = 1
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
    } else if (calSaco - valor < 0.5){
      calSaco = (calSaco + 1).toFixed(0)
      l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }else{
      calSaco = calSaco.toFixed(0)
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }

    /*Calculo da quantidade de areia*/
    let areiaVolume = volumeTotal*1.14
    areiaVolume.toFixed(3)
    //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina7() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.19
    let comprimeto = 0.29
    let lagura = 0.115

    /*Calculo da área*/
    let areaVazia = comprimentoVazio*alturaVazia
    let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
    como porta, janela ou algum outro tipo de buraco*/
    areaConstruida.toFixed(2)

    /*Calculo da quantidade de blocos*/
    let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
    let qtdBlocos = areaConstruida*n*1.1
    qtdBlocos.toFixed(0)

    /*Calculo da quantidade de argamassa*/
    let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
    volumeTotal.toFixed(3)

    /*Calculo da quantidade de cimento*/
    let cimentoMassa = volumeTotal*192.52
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)
   if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    /*Calculo da quantidade de cal*/
    let calMassa = volumeTotal*171.13
    let calSaco = calMassa/20
    let valor2 = Math.trunc(calSaco)
   if (calMassa > 0 && calMassa < 20) {
      calSaco = 1
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
    } else if (calSaco - valor < 0.5){
      calSaco = (calSaco + 1).toFixed(0)
      l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }else{
      calSaco = calSaco.toFixed(0)
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }

    /*Calculo da quantidade de areia*/
    let areiaVolume = volumeTotal*1.14
    areiaVolume.toFixed(3)
    //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina8() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.19
    let comprimeto = 0.19
    let lagura = 0.09

    /*Calculo da área*/
    let areaVazia = comprimentoVazio*alturaVazia
    let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
    como porta, janela ou algum outro tipo de buraco*/
    areaConstruida.toFixed(2)

    /*Calculo da quantidade de blocos*/
    let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
    let qtdBlocos = areaConstruida*n*1.1
    qtdBlocos.toFixed(0)

    /*Calculo da quantidade de argamassa*/
    let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
    volumeTotal.toFixed(3)

    /*Calculo da quantidade de cimento*/
    let cimentoMassa = volumeTotal*192.52
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)
   if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    /*Calculo da quantidade de cal*/
    let calMassa = volumeTotal*171.13
    let calSaco = calMassa/20
    let valor2 = Math.trunc(calSaco)
   if (calMassa > 0 && calMassa < 20) {
      calSaco = 1
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
    } else if (calSaco - valor < 0.5){
      calSaco = (calSaco + 1).toFixed(0)
      l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }else{
      calSaco = calSaco.toFixed(0)
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }

    /*Calculo da quantidade de areia*/
    let areiaVolume = volumeTotal*1.14
    areiaVolume.toFixed(3)
    //=`${areiaVolume.replace('.', ',')} m³` 

}
function mudarPagina9() {
    event.preventDefault()

    window.location.href="calculadora.html" 

    /*Coeficientes para cálculo*/
    let altura = 0.19
    let comprimeto = 0.19
    let lagura = 0.14

    /*Calculo da área*/
    let areaVazia = comprimentoVazio*alturaVazia
    let areaConstruida = comprimentoLugar*alturaLugar - areaVazia; /*Área vazia é a área sem parede: 
    como porta, janela ou algum outro tipo de buraco*/
    areaConstruida.toFixed(2)

    /*Calculo da quantidade de blocos*/
    let n = 1/[(comprimento + 0.01)*(altura + 0.01)]
    let qtdBlocos = areaConstruida*n*1.1
    qtdBlocos.toFixed(0)

    /*Calculo da quantidade de argamassa*/
    let volumeTotal = areaConstruida*1.1*[1-n*(comprimento*altura)]*largura
    volumeTotal.toFixed(3)

    /*Calculo da quantidade de cimento*/
    let cimentoMassa = volumeTotal*192.52
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)
   if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      l// =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      // =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    /*Calculo da quantidade de cal*/
    let calMassa = volumeTotal*171.13
    let calSaco = calMassa/20
    let valor2 = Math.trunc(calSaco)
   if (calMassa > 0 && calMassa < 20) {
      calSaco = 1
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Saco)` 
    } else if (calSaco - valor < 0.5){
      calSaco = (calSaco + 1).toFixed(0)
      l// =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }else{
      calSaco = calSaco.toFixed(0)
      // =`${calMassa.replace('.', ',')} kg (${calSaco} Sacos)` 
    }

    /*Calculo da quantidade de areia*/
    let areiaVolume = volumeTotal*1.14
    areiaVolume.toFixed(3)
    //=`${areiaVolume.replace('.', ',')} m³` 

}
