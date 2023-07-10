const comp = document.querySelector('#comp')
const larg = document.querySelector('#larg')
const altura = document.querySelector('#altura')
const qtd = document.querySelector('#qtd')
const botao = document.querySelector('#botao')
const seta = document.querySelector('#seta')
const composicao = document.querySelector('.composicao')
const observacoes = document.querySelector('#observacoes')

botao.addEventListener('click', calcular)
seta.addEventListener('click', voltar)

function calcular(event) {
  event.preventDefault()
    
  if (comp.value <= 0 || larg.value <= 0 || altura.value <= 0 || qtd.value <= 0) {
    
    alert("Valor Incorreto!")
    comp.type = "float"
    larg.type = "float"
    altura.type = "float"
    qtd.type = "integer"
    window.location.replace("CalculoPilar.html")

  } else {

    /*Cálculo do Volume*/
    let volume = Number(altura.value*(comp.value/100)*(larg.value/100)*qtd.value*1.1)
    document.getElementById("titulo1").innerHTML ="Volume de Concreto:"
    altura.disabled = true
    altura.value = `${volume.toFixed(3).replace('.', ',')} m³`

    /*Cácluo do Cimento*/
    document.getElementById("titulo2").innerHTML ="Cimento:"
    let cimentoMassa = (5.94*volume*50).toFixed(2)
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)

    if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      comp.value =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      comp.value =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      comp.value =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    comp.type = "text"
    comp.disabled = true
    

    /*Cálculo da Areia*/
    document.getElementById("titulo3").innerHTML ="Areia:"
    let areiaVolume = (0.538*volume).toFixed(3)

    larg.type = "text"
    larg.disabled = true
    larg.value =`${areiaVolume.replace('.', ',')} m³` 

    /*Cálculo da Brita*/
    document.getElementById("titulo4").innerHTML ="Brita:"
    let britaVolume = (0.840*volume).toFixed(3)

    qtd.type = "text"
    qtd.disabled = true
    qtd.value =`${britaVolume.replace('.', ',')} m³` 

    /*Ver seta*/
    seta.style.display = "flex"

    /*Ver botão*/
    botao.style.display = "none"

    /*Ver composição*/
    composicao.style.display = "inline"

    observacoes.style.display = "inline"

  }
    
}

function voltar(event) {
    
  event.preventDefault()

   document.getElementById("titulo1").innerHTML ="Altura (m):"
   altura.value=""
   altura.disabled = false

   document.getElementById("titulo2").innerHTML ="Comprimento (cm):"
   comp.value=""
   comp.disabled = false
   comp.type = "float"

   document.getElementById("titulo3").innerHTML ="Largura (cm):"
   larg.value=""
   larg.disabled = false
   larg.type = "float"

   document.getElementById("titulo4").innerHTML ="Quantidade:"
   qtd.value=""
   qtd.disabled = false
   qtd.type = "integer"

    /*Elementos*/
    composicao.style.display = "none"
    seta.style.display = "none"
    observacoes.style.display = "none"

   /*Voltar para configuração original*/
   window.location.replace("CalculoPilar.html")

}