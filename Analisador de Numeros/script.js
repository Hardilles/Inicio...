var num = window.document.getElementById('fnum')
var res = window.document.getElementById('res')
var lista = window.document.getElementById('flista')
var valores = [] //vetor - array//

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}

function inLista(n, l){ //um numero e uma lista//
    if (l.indexOf(Number(n))!= -1){
            return true
        } else {
            return false
        }
            
}

function adicionar(){
     if(isNumero(num.value) && !inLista(num.value, valores)){ //Se valor do campo txt1 = 0 ou Se valor do campo txt2 = 0 ou Se valor do campo txt3 = 0//
        //window.alert("Tudo ok") //Alerta de erro na tela//
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `==> ${num.value} <==`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert("[ERRO] - Valor inválido, ou já digitado") //Alerta de erro na tela//
    } 
    num.value = '' //Limpar o campo de digitação
    num.focus()   //Colocar o cursor no foco do campo de texto

}
function finalizar(){
    if(valores.length == 0) {
        window.alert('Adicione os numeros antes de finalizar!')
        } else {
            var tot = valores.length
            var maior = valores [0]
            var menor = valores [0]
            var soma = 0
            var media = 0

                for(var pos in valores){ 
                    soma += valores[pos] //soma os valores gravados na variavel//
                    media += valores[pos]/tot   //Média dos valores gravados na variavel//
                    if(valores[pos] > maior) //analisando se é o maior numero//
                    maior = valores[pos]
                    if(valores[pos] < menor) //analisando se é o menor numero//
                    menor = valores[pos]

                }


            //Escreva abaixo do botão o texto com os resultados//

            res.innerHTML = ''
            res.innerHTML += `Temos <b>${tot}</b> números cadastrados<br>`
            res.innerHTML += `O Maior número informado foi <b>${maior}</b><br>`
            res.innerHTML += `O Menor número informado foi <b>${menor}</b><br>`
            res.innerHTML += `A Soma dos números foi <b>${soma}</b><br>`
            res.innerHTML += `A Média dos números foi <b>${media}</b><br>`
    }

}