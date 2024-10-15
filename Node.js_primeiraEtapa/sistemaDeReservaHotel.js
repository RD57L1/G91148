class Quarto {
    constructor(numero, tipo, preco) {
        this.numero = numero;
        this.tipo = tipo;
        this.preco = preco;
        this.disponivel = true;
    }
}

class Reserva {
    constructor(quarto, nomeCliente, emailCliente, telefoneCliente) {
        this.quarto = quarto;
        this.nomeCliente = nomeCliente;
        this.emailCliente = emailCliente;
        this.telefoneCliente = telefoneCliente;
        this.paga = false;
    }
}

class Hotel {
    constructor() {
        this.quartos = [];
        this.reservas = [];
    }

    adicionarQuarto(numero, tipo, preco) {
        const quarto = new Quarto(numero, tipo, preco);
        this.quartos.push(quarto);
    }

    listarQuartosDisponiveis() {
        return this.quartos.filter(quarto => quarto.disponivel);
    }

    fazerReserva(numeroQuarto, nomeCliente, emailCliente, telefoneCliente) {
        const quarto = this.quartos.find(q => q.numero === numeroQuarto && q.disponivel);
        if (quarto) {
            const reserva = new Reserva(quarto, nomeCliente, emailCliente, telefoneCliente);
            this.reservas.push(reserva);
            quarto.disponivel = false;
            return reserva;
        } else {
            return null;
        }
    }

    realizarPagamento(numeroQuarto) {
        const reserva = this.reservas.find(r => r.quarto.numero === numeroQuarto);
        if (reserva) {
            reserva.paga = true;
        }
    }

    cancelarReserva(numeroQuarto) {
        const reservaIndex = this.reservas.findIndex(r => r.quarto.numero === numeroQuarto);
        if (reservaIndex !== -1) {
            const reserva = this.reservas[reservaIndex];
            reserva.quarto.disponivel = true;
            this.reservas.splice(reservaIndex, 1);
        }
    }

    listarReservas() {
        return this.reservas;
    }
}

// Exemplo de uso
const hotel = new Hotel();
hotel.adicionarQuarto(101, 'Simples', 100);
hotel.adicionarQuarto(102, 'Duplo', 150);

console.log('Quartos Disponíveis:', hotel.listarQuartosDisponiveis());

const reserva = hotel.fazerReserva(101, 'João Silva', 'joao@example.com', '123456789');
console.log('Reserva feita:', reserva);

hotel.realizarPagamento(101);
console.log('Reservas:', hotel.listarReservas());

hotel.cancelarReserva(101);
console.log('Quartos Disponíveis após cancelamento:', hotel.listarQuartosDisponiveis());