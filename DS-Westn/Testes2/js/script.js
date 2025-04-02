const formulario = document.getElementById('formulario1');

addEventListener('submit', (event) =>  {
    event.preventDefault();

const nome = document.getElementById('nome').value;
const senha = document.getElementById('senha').value;

if(senha.length < 8) {
alert(`Senha invalida, digite uma senha com mais de 8 digitos!`);
document.getElementById('senha').focus();
return;
}

alert(`Ola ${nome}, seja bem vindo!`);
event.target.reset();
})