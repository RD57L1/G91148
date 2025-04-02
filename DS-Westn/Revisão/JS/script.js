document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario1');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const senha = document.getElementById('senha').value.trim();

        if (senha.length < 8) {
            alert('Senha inválida! Digite uma senha com pelo menos 8 caracteres.');
            document.getElementById('senha').focus();
            return;
        }

        alert(`Olá ${nome}, seja bem-vindo(a)!`);
        formulario.reset();
    });
});
