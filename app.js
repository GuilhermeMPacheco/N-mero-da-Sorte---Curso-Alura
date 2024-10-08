let listaNumerosSorteados = [];
let numeroMax = 10;
let numeroMin = 1;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 0;

// Textos
function textoNaTela (tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};
function mensagemInicial() {
textoNaTela('h1', 'Hora do Desafio!');
textoNaTela('p', `Escolha um número entre ${numeroMin} e ${numeroMax}`);
}
mensagemInicial()

// Número Aleatório
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * (numeroMax+1-numeroMin) +numeroMin);
   if (listaNumerosSorteados.includes(numeroEscolhido)) {
    if(listaNumerosSorteados.length == numeroMax+1-numeroMin) {listaNumerosSorteados = [];}
    return gerarNumeroAleatorio();
   } else {
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

//Limpar Campo
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

// Botão Chutar
function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute >= numeroMin && chute <= numeroMax) {
        tentativas++;
        if(chute == numeroSecreto) {
            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            let textoAcerto = `Você acertou o número secreto (${numeroSecreto})!`;
            let textoPAcerto = `Você acertou com ${tentativas} ${palavraTentativa}!`;
            textoNaTela('h1', textoAcerto);
            textoNaTela('p', textoPAcerto);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
            let menorMaior = chute < numeroSecreto ? "maior" : "menor";
            let textoMenorMaior = `O número é ${menorMaior} que ${chute}`;
            textoNaTela('h1', textoMenorMaior);
            limparCampo();
        }} 
    else{
        let textoNumMaior = `O Número deve ser entre ${numeroMin} e ${numeroMax}!`;
        textoNaTela('p', textoNumMaior);
    }
}

// Reiniciar Jogo
function reiniciarJogo() {
    limparCampo();
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}