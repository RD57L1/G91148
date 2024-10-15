//Aula3

const prompt = require('prompt-sync')();

const idade = prompt("Digite sua idade:");

if (idade >= 18){
    console.log("Você é maior de idade!")
    
} else {
    console.log("Você é menor de idade!")
}






const diaDaSemana = prompt("Escolha um dia da Semana de (1 a 7):");
   
switch (diaDaSemana) {
    case "1":
        console.log("Domingo");
        break;
    case "2":
        console.log("Segunda-feira");
        break;
    case "3":
        console.log("Terça-feira");
        break;
    case "4":
        console.log("Quarta-feira");
        break;
    case "5":
        console.log("Quinta-feira");
        break;
    case "6":
        console.log("Sexta-feira");
        break;
    case "7":
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido!");
}