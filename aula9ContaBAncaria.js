class ContaBancaria {
    constructor(nomeDoCliente, saldoDoCliente, limiteDeSaqueDoCliente) {
        this.nome = nomeDoCliente;
        this.saldo = saldoDoCliente;
        this.limiteDeSaque = limiteDeSaqueDoCliente;
    }

    informacoes(){
        console.log('\nNome: ' + this.nome + ' \nsaldo: ' + this.saldo + ' \nlimite de saque: ' + this.limiteDeSaque);
    }

    consultarSaldo(){
        console.log('\nSaldo atual: ' + this.saldo);
    }

    realizarSaque(valor){
        if (valor <= this.limiteDeSaque && valor <= this.saldo) {
            this.saldo -= valor;
        return `Saque de R$ ${valor} realizado com sucesso.`
       } else {
        return "Saque não permitido. Verifique o valor ou limite de saque"
       }
}

    depositar(valor){
        this.saldo += valor; 
        return `Depósito de R$ ${valor} realizado com sucesso.`
    }
};

const cliente1 = new ContaBancaria('Rodrigo Nascimento Silva', 1500.00, 2000.00);
const cliente2 = new ContaBancaria('Clayton Silva', 2500.00, 2000.00);
const cliente3 = new ContaBancaria('Thiago Santos', 3500.00, 2000.00);
const cliente4 = new ContaBancaria('Felipe Lima', 1000.00, 2000.00);


cliente1.consultarSaldo();
cliente1.realizarSaques((3000.00));
cliente1.depositar((1000.00))