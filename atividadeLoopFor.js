<<<<<<< HEAD
let notas = [10, 10, 10, 10];
=======
let notas = [10, 8, 5, 10];
>>>>>>> bf43763a864fed5e04efc6e0cf89a8a7dc6caa1f
var soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let = media = soma / notas.length;


<<<<<<< HEAD
console.log(`A média das notas é: ${media}`);
=======
console.log('A média das notas é:', media);
>>>>>>> bf43763a864fed5e04efc6e0cf89a8a7dc6caa1f

if (media >= 8) {
    console.log('Aprovado!');
} else if (media < 8) {
    console.log('Reprovado!');
}

