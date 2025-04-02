// dark-mode.js

// Função para ativar o modo escuro
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Salva a preferência do usuário
    updateButtonText();
}

// Função para desativar o modo escuro
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Salva a preferência do usuário
    updateButtonText();
}

// Função para atualizar o texto do botão
function updateButtonText() {
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Escuro';
    }
}

// Verifica a preferência salva do usuário ao carregar a página
function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Adiciona o evento de clique ao botão de alternância
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }
}

// Inicializa o modo escuro e configura o botão
function initDarkMode() {
    checkSavedTheme();
    setupThemeToggle();
}

// Executa a função de inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initDarkMode);