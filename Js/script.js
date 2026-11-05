// 1. Mapeamento dos elementos do seu HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".btn-jogar-novamente");

// Elementos da Tela Inicial (Botão Jogar)
const telaInicial = document.querySelector(".tela-inicial");
const botaoJogar = document.querySelector(".btn-jogar");

// 2. Banco de Perguntas sobre Saúde Pública
const perguntas = [
    {
        enunciado: "Ao caminhar pelo seu bairro, você percebe acúmulo de água parada em recipientes no quintal de algumas casas. O que você faz?",
        alternativas: [
            {
                texto: "Alertar os vizinhos sobre o risco de focos do mosquito Aedes aegypti.",
                afirmacao: "Você demonstrou consciência comunitária e ajudou na prevenção de arboviroses como a Dengue."
            },
            {
                texto: "Ignorar, pois acredita que a responsabilidade é apenas da prefeitura.",
                afirmacao: "Você aprendeu mais tarde que a prevenção da Dengue depende da ação de cada cidadão."
            }
        ]
    },
    {
        enunciado: "Está ocorrendo uma campanha nacional de vacinação na Unidade Básica de Saúde (UBS) local. Qual é a sua atitude?",
        alternativas: [
            {
                texto: "Verificar a caderneta de vacinação e ir ao posto tomar as doses pendentes.",
                afirmacao: "Sua atitude contribuiu para aumentar a imunidade coletiva e proteger pessoas vulneráveis."
            },
            {
                texto: "Decidir não tomar a vacina por causa de boatos que leu na internet.",
                afirmacao: "Você percebeu que buscar informações em fontes oficiais do SUS evita a desinformação."
            }
        ]
    },
    {
        enunciado: "Na sua escola ou comunidade, está acontecendo uma palestra sobre a importância da higienização correta das mãos. Como você reage?",
        alternativas: [
            {
                texto: "Presta atenção e adota a prática de lavar as mãos com água e sabão frequentemente.",
                afirmacao: "Você adotou um hábito simples que é a principal barreira contra infecções bacterianas e virais."
            },
            {
                texto: "Acha que lavar as mãos apenas com água rapidamente é o suficiente.",
                afirmacao: "Com o tempo, compreendeu que o uso do sabão é fundamental para eliminar germes de verdade."
            }
        ]
    }
];

// 3. Variáveis de controle do jogo
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// 4. Função para o Botão JOGAR
function iniciarJogo() {
    if (telaInicial) {
        telaInicial.style.display = "none"; // Esconde a tela de início
    }
    caixaPrincipal.style.display = "block"; // Mostra o jogo
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

// 5. Funções de lógica do jogo (Seu código original)
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

// 6. Eventos dos Botões
if (botaoJogar) {
    botaoJogar.addEventListener("click", iniciarJogo);
}

if (botaoJogarNovamente) {
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}