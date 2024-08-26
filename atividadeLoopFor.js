let notas = [10, 8, 5, 10];
var soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let = media = soma / notas.length;


console.log('A média das notas é:', media);

if (media >= 8) {
    console.log('Aprovado!');
} else if (media < 8) {
    console.log('Reprovado!');
}

