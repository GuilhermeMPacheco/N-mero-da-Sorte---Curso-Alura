/* 
alert("Boas Vindas ao meu Site!");

let numeroSecreto = 4;
let chute = prompt('Escolha um número entre 1 e 10');
console.log("O número Secreto é " + numeroSecreto);
console.log(`Seu chute foi: ${chute}`);
console.log(`Chute é igual ao número secreto? ${chute == numeroSecreto}`);

// se chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Você acertou o número secreto! ${numeroSecreto}`)
} else {
    alert('Você errou :(')
}
    */

// Desafio 1: Dia da Semana
let DiaSemana = prompt("Qual é o dia da semana?");
if(DiaSemana == "Sábado" || DiaSemana == "Domingo") {
    alert("Bom fim de semana!")
} else {
    alert("Boa Semana!")
}

// Desafio 2: Número Negativo ou Positivo
var numero = prompt("Escolha um número");
if(numero < 0){alert('Seu número é negativo!')} else{
if(numero == 0){alert('Seu número é 0!')} else{
if(numero > 0){alert('Seu número é positivo!')} else{
alert("Isso não é um número!")}}} 