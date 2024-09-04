const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como os vendavais estão relacionados às mudanças climáticas?",
        alternativas: [
            {
                texto: "A) As mudanças climáticas estão aumentando a intensidade e a frequência dos vendavais, pois o aumento das temperaturas oceânicas contribui para a formação de sistemas meteorológicos mais fortes e extremos.",
                afirmacao: "afirmação"
            },
            {
                texto: "B) Os vendavais são eventos naturais que não são influenciados pelas mudanças climáticas e permanecem constantes ao longo do tempo." ,
                afirmacao: "errada" 
            }
            
        ]
    },
    {
        enunciado: "02 - Qual é a relação entre o aumento da temperatura global e a frequência dos vendavais?",
        alternativas: [
            {
                texto: "a. O aumento da temperatura global contribui para um maior aquecimento dos oceanos, o que intensifica a formação e a frequência de vendavais e tempestades tropicais. ",
                afirmacao: "afirmação"
            },
            {
                texto: "B) O aumento da temperatura global reduz a frequência dos vendavais, já que o calor excessivo impede a formação de sistemas meteorológicos extremos.",
                afirmacao: "errada"
            }
        ]
    },
    {
        pergunta: "Como as mudanças climáticas afetam a previsão e o monitoramento de vendavais?",
        alternativas: [
            {
                texto: "A) As mudanças climáticas tornam a previsão e o monitoramento de vendavais mais desafiadores, pois as condições atmosféricas estão mudando e tornando os padrões climáticos menos previsíveis.",
                afirmacao: "afirmação"
            },
            {
                texto: "B) As mudanças climáticas simplificam a previsão e o monitoramento de vendavais, pois as condições climáticas se tornam mais estáveis e previsíveis.",
                afirmacao: "errada"
            }
            
        ]
    },
    {
        enunciado: "Qual foi um dos principais efeitos sociais da Primeira Guerra Mundial nas sociedades europeias?",
        alternativas: [
            {
                texto: "A) A Primeira Guerra Mundial causou uma grande mobilização de mulheres para o mercado de trabalho, já que muitos homens estavam na frente de batalha, o que resultou em mudanças significativas nas normas de gênero e no papel das mulheres na sociedade.",
                afirmacao: "afirmação"
            },
            {
                texto: "B) A guerra levou à estabilização das normas sociais e ao fortalecimento das instituições tradicionais, sem grandes mudanças nas estruturas de gênero ou na mobilidade social.",
                afirmacao: "errada"
            }
            
            
        ]
    },
    {
        enunciado: "Como a Segunda Guerra Mundial impactou a economia global e o comércio internacinal?",
        alternativas: [
            {
                texto: "A) A Segunda Guerra Mundial causou uma grande destruição das infraestruturas e indústrias, levando a uma recessão global profunda e a uma redução significativa no comércio internacional. ",
                afirmacao: "errada"
            },
            {
                texto:"B) A guerra estimulou o crescimento econômico e o comércio internacional, com a reconstrução pós-guerra levando ao desenvolvimento de novas economias e à expansão dos mercados globais.",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
