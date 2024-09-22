alert("Boas vindas ao nosso site!");

let mensagemdeErro = "Erro! Preencha todos os campos"
alert(mensagemdeErro);

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");

if(idade >= 18) {alert("Pode tirar a habilitação!")}
if(idade < 18) {alert("Não pode tirar a habilitação!")}