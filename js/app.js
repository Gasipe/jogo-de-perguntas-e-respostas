const questoes = [
    {pergunta: "1 + 1 = ?",
     resposta: ["2","1","4","Hello World!"],
     correta: 3

    }, {pergunta: "1 + 1 = ?",
        resposta: ["2","1","4","Hello World!"],
        correta: 3
   
       }

    
];

let respostaatual = 0;
let pontos = 0;

const perguntasElement = document.querySelector(".perguntas");
const opcoesElement = document.querySelector(".respostas");
const respostaElement = document.getElementById("resultado");
const pontosElement = document.getElementById("pontos");

function carregarPerguntas () {
    const questao = questoes[respostaatual];
    perguntasElement.textContent = questao.pergunta;
    opcoesElement.innerHTML = "";

    questao.resposta.forEach((resposta, index) => {
        const button = document.createElement("button");
        button.textContent = resposta;
        button.onclick = () => checkPergunta(index);
        opcoesElement.appendChild(button);
    });
}

function checkPergunta(selected) {
    const questao = questoes[respostaatual];
    if (selected === questao.correta) {
        respostaElement.textContent = "Correto!";
        pontos++;
    } else {
        respostaElement.textContent =  `Errado, a resposta correta era "${questao.resposta[questao.correta]}".`;
    }
    pontosElement.textContent = `Pontos: ${pontos}`;
    respostaatual++;

    if(respostaatual < questoes.length) {
        setTimeout(() => {
            respostaElement.textContent = "";
            carregarPerguntas();
        }, 1000);
    } else {
        setTimeout  (() => {
            endGame();
        }, 1000);
    }
}
function endGame() {
    perguntasElement.textContent = "Fim de jogo!";
    opcoesElement.innerHTML = "";
    respostaElement.textContent = `Você fez ${pontos} de ${questoes.length}.`;
}

carregarPerguntas();