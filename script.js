let numeroPergunta = 1
let acertos = 0
let perguntaRespondida = 0
let tentativas = 0
const numeroMostrarGrande = document.querySelector(".perguntas")
 
const perguntaAtual = document.querySelector(".pergunta")
const questãoUm = document.querySelector(".p1")
const questãoDois = document.querySelector(".p2")
const questãoTrês = document.querySelector(".p3")
const questãoQuatro = document.querySelector(".p4")

const numeroPerguntaBot = document.querySelector(".numero")
const segundosHtml = document.querySelector(".seconds")

const acabouBotao = document.querySelector(".botaoPergunta")

acabouBotao.addEventListener("click", function(){
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
        numeroMostrarGrande.parentNode.removeChild(numeroMostrarGrande)
        numeroDiv.textContent = acertos;
        alert("Parabéns, você acabou o quiz com um total de "+ acertos +" acertos!")
        window.addEventListener("load", criarDiv())
        acabouBotao.innerHTML = "reiniciar página"
        acabouBotao.addEventListener("click", function(){
            window.location.reload()
        })
    }
})


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

    acabouBotao.textContent = "Acabar quiz"
}

function opcaoUm(){
    if(tentativas == 0){
        switch(numeroPergunta){
            case 1:
                limparBotoes(), questãoUm.style.backgroundColor = "red", questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 2:
                limparBotoes(), questãoUm.style.backgroundColor = "red", questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 3:
                limparBotoes(), questãoUm.style.backgroundColor = "red", questãoDois.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 4:
                limparBotoes(), questãoUm.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                acertos++
                break
        }
    }
}

function opcaoDois(){
    if(tentativas == 0){
        switch(numeroPergunta){
            case 1:
                limparBotoes(), questãoDois.style.backgroundColor = "red", questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 2:
                limparBotoes(), questãoDois.style.backgroundColor = "red", questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 3:
                limparBotoes(), questãoDois.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                acertos++
                break
            case 4:
                limparBotoes(), questãoDois.style.backgroundColor = "red", questãoUm.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
        }
    }
}

function opcaoTres(){
    if(tentativas == 0){
        switch(numeroPergunta){
            case 1:
                limparBotoes(), questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                acertos++
                break
            case 2:
                limparBotoes(), questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                acertos++
                break
            case 3:
                limparBotoes(), questãoTrês.style.backgroundColor = "red", questãoDois.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 4:
                limparBotoes(), questãoTrês.style.backgroundColor = "red", questãoDois.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
        }
    }
}

function opcaoQuatro(){
    if(tentativas == 0){
        switch(numeroPergunta){
            case 1:
                limparBotoes(), questãoQuatro.style.backgroundColor = "red", questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 2:
                limparBotoes(), questãoQuatro.style.backgroundColor = "red", questãoTrês.style.backgroundColor = "green"
                numeroPergunta++
                tentativas++
                break
            case 3:
                limparBotoes(), questãoQuatro.style.backgroundColor = "red", questãoDois.style.backgroundColor = "green"    
                numeroPergunta++
                tentativas++
                break
            case 4:
                limparBotoes(), questãoQuatro.style.backgroundColor = "red", questãoUm.style.backgroundColor = "green" 
                numeroPergunta++
                tentativas++
                break
        }
    }
}

function iniciarTimer(sec, html){
    let timer = setInterval(function(){
                    html.innerHTML = sec
                    sec--
                    if(sec == 0){
                        setTimeout(function(){
                            acabouBotao.disabled = true
                            alert("Seu tempo acabou")
                            clearInterval(timer)
                        }, 1000)
                    } else if (numeroPergunta == 5) {
                        clearInterval(timer)
                    }
                }, 1000)
}

const numeroDiv = document.createElement("numeroDiv")
numeroDiv.classList.add("resultadoFinal")
const meio = document.querySelector(".mid")
numeroDiv.textContent = acertos;

function criarDiv(){
    document.querySelector(".mid").appendChild(numeroDiv);

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
        numeroMostrarGrande.parentNode.removeChild(numeroMostrarGrande)
        numeroDiv.textContent = acertos;
        alert("Parabéns, você acabou o quiz com um total de "+ acertos +" acertos!")
        window.addEventListener("load", criarDiv())
        acabouBotao.innerHTML = "reiniciar página"
    }
}

window.onload = function (){
    primeiraPergunta()
    iniciarTimer(10, segundosHtml)
}