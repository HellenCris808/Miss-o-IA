const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "A vacinação em massa e a ampliação do acesso à atenção primária são estratégias fundamentais para a saúde pública?",
        alternativas: [
            {
                texto: "A vacinação reduz a circulação de patógenos na comunidade e protege indivíduos vulneráveis por meio da imunidade coletiva, enquanto a atenção primária previne o agravamento de doenças crônicas",
                afirmacao: "É verdadeira pois está expressa no Artigo 196 da Constituição Federal de 1988, que estabelece a saúde como direito universal."
            },
            {
                texto:  "A Integralidade é uma das diretrizes essenciais da Saúde Pública, significando que o sistema deve oferecer atendimento completo, que vai desde as ações de prevenção e promoção da saúde até o tratamento de doenças e reabilitação.",
                afirmacao: "Profissional da área da saúde ou estudante de epidemiologia."
            }    
           
        ]
    },
    {
       
            enunciado: "controle e combate a arboviroses, como a Dengue e a Chikungunya, exige ações contínuas do poder público e da sociedade civil?",
            alternativas: [
                {
                    texto: "As visitas domiciliares periódicas para eliminação de focos do vetor e a aplicação de larvicidas são indispensáveis para interromper o ciclo de reprodução do mosquito Aedes aegypti.",
                    afirmacao: "Você demonstra um perfil  de pesquisador e inovador que busca por meio da inovação soluções para o meio ambiente e sustentabilidade das gerações posteriores."
                },
                {
                    texto:  "Seria interessante explorar primeiramente fontes renováveis exotérmicas, em segundo plano utilizar a energia geotérmica apesar dos custos elevados de explorações e possibilidades de contaminação de rios. ",
                    afirmacao: "Agente de Combate a Endemias ou profissional de vigilância ambiental"
                }    
               
            ]
        },
        {
            enunciado: "O fortalecimento do Sistema Único de Saúde (SUS) passa pela consolidação da Atenção Primária à Saúde (APS) como porta de entrada preferencial da rede. Por que essa estratégia é considerada eficiente?",

            alternativas: [
                {
                    texto: "A APS estabelece vínculo continuado entre a equipe de saúde e o usuário, permitindo o acompanhamento do histórico do paciente e facilitando o diagnóstico precoce.",
                    afirmacao: "A APS estabelece vínculo continuado entre a equipe de saúde e o usuário, permitindo o acompanhamento do histórico do paciente e facilitando o diagnóstico precoce."
                },
                {
                    texto:    "A ordenação do fluxo de atendimento pela APS otimiza os recursos financeiros do sistema e evita a sobrecarga desnecessária de prontos-socorros e hospitais.",
               
                    afirmacao: "Sanitarista ou planejador de redes de atenção à saúde"
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();