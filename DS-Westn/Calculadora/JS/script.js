function botaoNum(numero) {
    let display = document.getElementById('display');
    display.value += numero;
}

function botaoOperador(operador) {
    let display = document.getElementById('display');
    display.value += operador;
}

function calcular() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
}

function limpar () {
    document.getElementById('display').value ="";
}

function apagar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
