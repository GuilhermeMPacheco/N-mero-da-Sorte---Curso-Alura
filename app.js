/*
alert("Boas Vindas ao Jogo do Número Secreto!");

let numeroMax = 5000;
let numeroMin = 1;
let numeroSecreto = parseInt(Math.random() * numeroMax +1);
let chute;
let tentativas = 0;

// Enquanto o chute não for igual ao número secreto o código continuará rodando
while(chute != numeroSecreto) { 
    chute = prompt(`Escolha um número entre ${numeroMin} e ${numeroMax}!`);

    // Quando ele chutar:
    if(!isNaN(chute)) {
        if(chute >= numeroMin && chute <= numeroMax) {
            tentativas++ 

            //Mensagens pro console
            console.log("O número Secreto é " + numeroSecreto);
            console.log(`Seu chute foi: ${chute}`);
            console.log(`Chute é igual ao número secreto? ${chute == numeroSecreto}`);
            console.log(`Você já teve ${tentativas} tentativas.`);

            if(chute == numeroSecreto) {
                break;
            } else {
                let menorMaior = chute < numeroSecreto ? "maior" : "menor";
                alert(`O Número Secreto é ${menorMaior} que ${chute}`);

            }} else{alert(`O Número deve ser entre ${numeroMin} e ${numeroMax}!`);}
    } else {alert('Isso não é um número!');}}

// Após acertar a resposta
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
*/

let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio!";

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute() {
    let number1 = Number(prompt("Escolha um número:"));
    let number2 = Number(prompt("Escolha outro número:"));
    alert(`A soma de seus dois números foi: ${number1 + number2}`);
}