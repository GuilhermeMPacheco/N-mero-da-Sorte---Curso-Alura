// alert("Boas Vindas ao meu Site!");

// let numeroSecreto = 4;
// let chute;
// let tentativas = 0;

// // Enquanto o chute não for igual ao número secreto o código continuará rodando
// while(chute != numeroSecreto) {
//     chute = prompt("Escolha um número entre 1 e 10!");

//     // se chute for igual ao número secreto
//     if(!isNaN(chute)) {
//     tentativas++ 
//     if(chute == numeroSecreto) {
//         alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//     } else {
//         if(chute > numeroSecreto) {
//             alert(`O Número Secreto é menor que ${chute}`);
//         } else{
//             alert(`O Número Secreto é maior que ${chute}`);
//         }
//     }} else{alert('Isso não é um número!')}

//     //Mensagens pro console
//     console.log("O número Secreto é " + numeroSecreto);
//     console.log(`Seu chute foi: ${chute}`);
//     console.log(`Chute é igual ao número secreto? ${chute == numeroSecreto}`);
//     console.log(`Você já teve ${tentativas} tentativas.`);
// }

let opcao = prompt("Escolha se quer contagem regressiva (r) ou progressiva (p):");

if(opcao == "p" || opcao == "P") {
    let numero = prompt("Escolha o número para fazer a contagem progressiva!");
    let contador = 0;
    if(isNaN(numero)) {alert('isso não é um número!')} else{
    while(contador != numero){
        alert(contador);
        contador++
    }
    alert("Você chegou no fim da contagem progressiva!");
}}

if(opcao == "r" || opcao == "R") {
    let numero = prompt("Escolha o número para começar a contagem regresiva!");
    if(isNaN(numero)) {alert('isso não é um número!')} else{
    while(numero != 0) {
        alert(numero);
        numero--
    }
    alert("Você chegou no fim da contagem regressiva!");
}}
