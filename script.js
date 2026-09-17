const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Quais são os princípios fundamentais da Saúde Pública no Brasil que garantem o direito à saúde e a organização do Sistema Único de Saúde (SUS)?",
        alternativas: [
            {
                texto: "A Saúde Pública atua com base no princípio da Universalidade, garantindo que a saúde seja um direito fundamental de todos os cidadãos e um dever do Estado, sem qualquer tipo de discriminação.",
                afirmacao: "É verdadeira pois está expressa no Artigo 196 da Constituição Federal de 1988, que estabelece a saúde como direito universal."
            },
            {
                texto:  "A Integralidade é uma das diretrizes essenciais da Saúde Pública, significando que o sistema deve oferecer atendimento completo, que vai desde as ações de prevenção e promoção da saúde até o tratamento de doenças e reabilitação.",
                afirmacao: "É verdadeira pois a Lei Orgânica da Saúde (Lei nº 8.080/1990) define a integralidade como a articulação contínua das ações e serviços preventivos e curativos em todos os níveis de complexidade do sistema."
            }    
           
        ]
    },
    {
       
            enunciado: "Como a descentralização do sistema e o controle social influenciam a gestão da Saúde Pública no Brasil?",
            alternativas: [
                {
                    texto: "A descentralização transfere a responsabilidade e a gestão dos serviços de saúde do nível federal para os níveis estadual e municipal, aproximando as decisões das reais necessidades de cada localidade.",
                    afirmacao: "Você demonstra um perfil  de pesquisador e inovador que busca por meio da inovação soluções para o meio ambiente e sustentabilidade das gerações posteriores."
                },
                {
                    texto:  "Seria interessante explorar primeiramente fontes renováveis exotérmicas, em segundo plano utilizar a energia geotérmica apesar dos custos elevados de explorações e possibilidades de contaminação de rios. ",
                    afirmacao: "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico."
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
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