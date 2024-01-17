const key = "34bbbde103920e48a9516ea1973d12e4"

function ColocarDadosNaTela(dados) {

    console.log(dados)
    document.querySelector(".cidade") .innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp") .innerHTML = Math.floor(dados.main.temp)+"ºC" //"Math.floor" arredonda//
    document.querySelector(".texto-previsao") .innerHTML = dados.weather[0].description
    document.querySelector(".umidade") .innerHTML = "Umidade relativa do ar " + dados.main.humidity + "%"
    document.querySelector(".img-previsao") .src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function BuscarCidade(cidade) {
    //"&lang=pt_br" trazer em portugues "&units=metric" trazer em graus ceusius//
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    ColocarDadosNaTela(dados)
}


function CliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    BuscarCidade(cidade)

}