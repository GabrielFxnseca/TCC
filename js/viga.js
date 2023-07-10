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
    window.location.replace("calculoViga.html")

  } else {

    /*Cálculo do Volume*/
    let volume = Number(comp.value*(larg.value/100)*(altura.value/100)*qtd.value*1.1)
    document.getElementById("titulo1").innerHTML ="Volume de Concreto:"
    comp.disabled = true
    comp.value = `${volume.toFixed(3).replace('.', ',')} m³`

    /*Cácluo do Cimento*/
    document.getElementById("titulo2").innerHTML ="Cimento:"
    let cimentoMassa = (5.94*volume*50).toFixed(2)
    let cimentoSaco = cimentoMassa/50
    let valor = Math.trunc(cimentoSaco)

    if (cimentoMassa > 0 && cimentoMassa < 50) {
      cimentoSaco = 1
      larg.value =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Saco)` 
    } else if (cimentoSaco - valor < 0.5){
      cimentoSaco = (cimentoSaco + 1).toFixed(0)
      larg.value =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }else{
      cimentoSaco = cimentoSaco.toFixed(0)
      larg.value =`${cimentoMassa.replace('.', ',')} kg (${cimentoSaco} Sacos)` 
    }

    larg.type = "text"
    larg.disabled = true
    

    /*Cálculo da Areia*/
    document.getElementById("titulo3").innerHTML ="Areia:"
    let areiaVolume = (0.538*volume).toFixed(3)

    altura.type = "text"
    altura.disabled = true
    altura.value =`${areiaVolume.replace('.', ',')} m³` 

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

    observacoes.style.display = "flex"

  }
    
}

function voltar(event) {
    
  event.preventDefault()

   comp.value=""
   comp.disabled = false
   document.getElementById("titulo1").innerHTML ="Comprimento (m):"

   larg.value=""
   larg.disabled = false
   larg.type = "float"
   document.getElementById("titulo2").innerHTML ="Largura (cm):"

   altura.value=""
   altura.disabled = false
   altura.type = "float"
   document.getElementById("titulo3").innerHTML ="Altura (cm):"

   qtd.value=""
   qtd.disabled = false
   qtd.type = "integer"
   document.getElementById("titulo4").innerHTML ="Quantidade:"

   /*Elementos*/
   composicao.style.display = "none"
   seta.style.display = "none"
   observacoes.style.display = "none"

   /*Voltar para configuração original*/
   window.location.replace("CalculoViga.html")

}