let numeroPergunta = 1
let acertos = 0
let perguntaRespondida = 0
let tentativas = 0

let perguntaAtual = document.querySelector(".pergunta")
let questãoUm = document.querySelector(".p1")
let questãoDois = document.querySelector(".p2")
let questãoTrês = document.querySelector(".p3")
let questãoQuatro = document.querySelector(".p4")

let numeroPerguntaBot = document.querySelector(".numero")
let segundosHtml = document.querySelector(".seconds")

function limparBotoes(){
    questãoUm.style.backgroundColor = "#1bbbf8"
    questãoDois.style.backgroundColor = "#1bbbf8"
    questãoTrês.style.backgroundColor = "#1bbbf8"
    questãoQuatro.style.backgroundColor = "#1bbbf8"
}

function primeiraPergunta(){
    perguntaAtual.innerHTML = "Qual a capital do Brasil?"
    questãoUm.innerHTML = "Rio de janeiro"
    questãoDois.innerHTML = "São paulo"
    questãoTrês.innerHTML = "Brasília"
    questãoQuatro.innerHTML = "Argentina"
    numeroPerguntaBot.innerHTML = numeroPergunta
}

function segundaPergunta(){
    perguntaAtual.innerHTML = "Quanto pesa uma abelha?"
    questãoUm.innerHTML = "500mg"
    questãoDois.innerHTML = "100mg"
    questãoTrês.innerHTML = "230mg"
    questãoQuatro.innerHTML = "420mg"
    limparBotoes()
    numeroPerguntaBot.innerHTML = numeroPergunta
}

function terceiraPergunta(){
    perguntaAtual.innerHTML = "Qual a raiz quadrada de 4?"
    questãoUm.innerHTML = "3"
    questãoDois.innerHTML = "2"
    questãoTrês.innerHTML = "1"
    questãoQuatro.innerHTML = "8"
    limparBotoes()
    numeroPerguntaBot.innerHTML = numeroPergunta
}

function quartaPergunta(){
    perguntaAtual.innerHTML = "Qual a idade de Juliana Bonde?"
    questãoUm.innerHTML = "27"
    questãoDois.innerHTML = "18"
    questãoTrês.innerHTML = "25"
    questãoQuatro.innerHTML = "23"
    limparBotoes()
    numeroPerguntaBot.innerHTML = numeroPergunta

    let acabouBotao = document.querySelector(".botaoPergunta").textContent = "Acabar quiz"
}

function respostaUm(){
    if(numeroPergunta == 1 && tentativas == 0){
        questãoUm.style.backgroundColor = "red"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
    } else if (numeroPergunta == 2 && tentativas == 0){
        questãoUm.style.backgroundColor = "red"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
    } else if(numeroPergunta == 3 && tentativas == 0) {
        questãoUm.style.backgroundColor = "red"
        questãoDois.style.backgroundColor = "green"
        questãoTrês.style.backgroundColor = "#1bbbf8"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
    } else if(numeroPergunta == 4 && tentativas == 0) {
        questãoUm.style.backgroundColor = "green"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "#1bbbf8"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
        acertos++
    }
}

function respostaDois(){
    if(numeroPergunta == 1 && tentativas == 0){
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "red"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
    } else if (numeroPergunta == 2 && tentativas == 0){
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "red"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
    } else if(numeroPergunta == 3 && tentativas == 0) {
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "green"
        questãoTrês.style.backgroundColor = "#1bbbf8"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
        acertos++
    } else if(numeroPergunta == 4 && tentativas == 0) {
        questãoUm.style.backgroundColor = "green"
        questãoDois.style.backgroundColor = "red"
        questãoTrês.style.backgroundColor = "#1bbbf8"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
    }
}

function respostaTrês(){
    if(numeroPergunta == 1 && tentativas == 0){
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        acertos++
        numeroPergunta++
        tentativas = 1
    } else if (numeroPergunta == 2 && tentativas == 0){
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        acertos++
        numeroPergunta++
        tentativas = 1
    } else if(numeroPergunta == 3 && tentativas == 0) {
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "green"
        questãoTrês.style.backgroundColor = "red"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numertoPergunta++
        tentativas = 1
    } else if(numeroPergunta == 4 && tentativas == 0) {
        questãoUm.style.backgroundColor = "green"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "red"
        questãoQuatro.style.backgroundColor = "#1bbbf8"
        numeroPergunta++
        tentativas = 1
    }
}

function respostaQuatro(){
    if(numeroPergunta == 1 && tentativas == 0){
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "red"
        numeroPergunta++
        tentativas = 1
    } else if(numeroPergunta == 2 && tentativas == 0) {
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "green"
        questãoQuatro.style.backgroundColor = "red"
        numeroPergunta++
        tentativas = 1
    } else if(numeroPergunta == 3 && tentativas == 0) {
        questãoUm.style.backgroundColor = "#1bbbf8"
        questãoDois.style.backgroundColor = "green"
        questãoTrês.style.backgroundColor = "#1bbbf8"
        questãoQuatro.style.backgroundColor = "red"
        numeroPergunta++
        tentativas = 1
    } else if(numeroPergunta == 4 && tentativas == 0) {
        questãoUm.style.backgroundColor = "green"
        questãoDois.style.backgroundColor = "#1bbbf8"
        questãoTrês.style.backgroundColor = "#1bbbf8"
        questãoQuatro.style.backgroundColor = "red"
        numeroPergunta++
        tentativas = 1
    }
    
}

function iniciarTimer(sec, html){
    let timer = setInterval(function(){
                    html.innerHTML = sec
                    sec--
                    if(sec == 0){
                        setTimeout(function(){
                            alert("Seu tempo acabou")
                            clearInterval(timer)
                        }, 1000)
                    }
                }, 1000)
}

function proximaPergunta(){
    if(numeroPergunta == 2){
        tentativas = 0
        segundaPergunta()
    } else if(numeroPergunta == 3){
        tentativas = 0
        terceiraPergunta()
    } else if(numeroPergunta == 4){
        tentativas = 0
        quartaPergunta()
    } else if(numeroPergunta == 5){
        alert("Parabéns, você acabou o quiz com um total de "+ acertos +" acertos!")
    }
}

window.onload = function (){
    primeiraPergunta()
    iniciarTimer(10, segundosHtml)
}