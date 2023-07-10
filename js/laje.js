const comp = document.querySelector('#comp')
const larg = document.querySelector('#larg')
const altura = document.querySelector('#altura')
const brita = document.querySelector('#brita')
const resultado = document.querySelector('.resultado')
const botao = document.querySelector('#botao')
const seta = document.querySelector('#seta')
const observacoes = document.querySelector('#observacoes')
const composicao = document.querySelector('.composicao')

botao.addEventListener('click', calcular)
seta.addEventListener('click', voltar)

function calcular(event) {
  event.preventDefault()
    
  if (comp.value <= 0 || larg.value <= 0 || altura.value <= 0) {
    
    alert("Valor Incorreto!")
    comp.type = "float"
    larg.type = "float"
    altura.type = "float"
    window.location.replace("calculoLaje.html")

  } else {

    /*Cálculo do Volume*/
    let volume = Number(comp.value*larg.value*(altura.value/100)*1.1)
    document.getElementById("titulo1").innerHTML ="Volume de Concreto:"
    comp.disabled = true
    comp.value = `${volume.toFixed(3).replace('.', ',')} m³`

    /*Cácluo do Cimento*/
    document.getElementById("titulo2").innerHTML ="Cimento:"
    let cimentoMassa = (6.9*volume*50).toFixed(2)
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
    let areiaVolume = (0.622*volume).toFixed(3)

    altura.type = "text"
    altura.disabled = true
    altura.value =`${areiaVolume.replace('.', ',')} m³` 

    /*Cálculo da Brita*/
    let britaVolume = (0.768*volume).toFixed(3)
    brita.value =`${britaVolume.replace('.', ',')} m³` 
    resultado.style.display = "flex"
    brita.style.display = "flex"

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
   document.getElementById("titulo3").innerHTML ="Espessura (cm):"

   /*Elementos*/
   composicao.style.display = "none"
   seta.style.display = "none"
   resultado.style.display = "none"
   brita.style.display = "none"
   observacoes.style.display = "none"

   /*Voltar para configuração original*/
   window.location.replace("CalculoLaje.html")

}

