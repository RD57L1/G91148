// Função para alternar entre os modos claro e escuro
function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');

    // Alterna entre as classes 'modo-claro' e 'modo-oscuro'
    body.classList.toggle('modo-claro');
    body.classList.toggle('modo-oscuro');

    // Alterna a imagem de fundo do cabeçalho
    if (body.classList.contains('modo-oscuro')) {
        header.classList.add('modo-oscuro');
        header.classList.remove('modo-claro');
    } else {
        header.classList.add('modo-claro');
        header.classList.remove('modo-oscuro');
    }

    localStorage.setItem('theme', body.classList.contains('modo-oscuro') ? 'escuro' : 'claro');
}

function loadTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const savedTheme = localStorage.getItem('theme');
    const currentHour = new Date().getHours();

    if (savedTheme) {
        if (savedTheme === 'escuro') {
            body.classList.add('modo-oscuro');
            header.classList.add('modo-oscuro');
        } else {
            body.classList.add('modo-claro');
            header.classList.add('modo-claro');
        }
    } else {
        if (currentHour >= 18 || currentHour < 6) {
            body.classList.add('modo-oscuro');
            header.classList.add('modo-oscuro');
        } else {
            body.classList.add('modo-claro');
            header.classList.add('modo-claro');
        }
    }
}

function showGreeting(name) {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour >= 6 && currentHour < 12) {
        greetingMessage = `Bom dia, ${name}!`;
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = `Boa tarde, ${name}!`;
    } else {
        greetingMessage = `Boa noite, ${name}!`;
    }

    const greetingElement = document.createElement('div');
    greetingElement.textContent = greetingMessage;
    greetingElement.classList.add('greeting');
    document.body.appendChild(greetingElement);

    setTimeout(() => {
        greetingElement.remove();
    }, 5000);
}

document.querySelector('#contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#nome').value;
    showGreeting(name);
});

document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);

window.addEventListener('load', loadTheme);