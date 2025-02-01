const questoes = [
    {questao: "1 + 1 = W",
     opcoes: ["2","1","4","Hello World!"],
     resposta: 3

    },

    
];

let repostaatual = 0;
let pontos = 0;

const perguntasElement = document.getElementById("perguntas");
const opcoesElement = document.getElementById("respostas");
const respostaElement = document.getElementById("resultado");
const pontosElement = document.getElementById("pontos");

function carregarPerguntas() {
    const questoes = questao[respostaatual];
    perguntasElement.textContent = questoes.questao;
    respostaElement.innerHTML = "";

    questoes.opcoes.forEach((opcoes, index) => {
        const button = document.createElement('button');
        button.textContent = opcoes;
        button.onclick = () => checkOpcoes(index);
        opcoesElement.appendChild(button);
    });
}

function checkOpcoes (selected) {
    const questoes = questoes[repostaatual];
    if (selected === questoes.resposta) {
        respostaElement.textContent = "Acertou, continue assim!";
        pontos++;
    } else {
        respostaElement.textContent = `Errado! A resposta correta era ${pergunta.opcoes[pergunta.resposta]}`;
    }
    pontosElement.textContent = `Pontos: ${pontos}`;
    respostaatual++;

    if (respostaatual < pergunta.length) {
        setTimeout(() => {
            respostaElement.textContent = "";
            carregarPerguntas();
        }, 1000);
    } else {
        setTimeout(() => {
            endGame();
        }, 1000);
    }
}


function endGame() {
    perguntasElement.textContent = "Fim do Jogo!";
    opcoesElement.innerHTML = "";
    respostaElement.textContent = `Você fez ${pontos} ponto(s) de ${pergunta.length}.`;   
}

carregarPerguntas();