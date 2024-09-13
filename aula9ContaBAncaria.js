class ContaBancaria {
    constructor(nomeDoCliente, saldoDoCliente, limiteDeSaqueDoCliente) {
        this.nome = nomeDoCliente;
        this.saldo = saldoDoCliente;
        this.limiteDeSaque = limiteDeSaqueDoCliente;
    }

    informacoes(){
        console.log('\nNome: ' + this.nome + ' \nsaldo: ' + this.saldo + ' \nlimite de saque: ' + this.limiteDeSaque);
    };

    consultarSaldo(){
        console.log('\nSaldo atual: ' + this.saldo + '\n');
    };

    realizarSaque(valor){
        if (valor <= this.limiteDeSaque && valor <= this.saldo) {
            this.saldo -= valor;
        return `Saque de R$: ${valor.toFixed(2)} realizado com sucesso!.`
       } else {
        return `Saque de R$: ${valor.toFixed(2)} não permitido. Verifique o valor ou limite de saque!`
       }
};

    depositar(valor){
        this.saldo += valor; 
        return `Depósito de R$: ${valor.toFixed(2)} realizado com sucesso!`
    }
};

const cliente1 = new ContaBancaria('Rodrigo Nascimento Silva', 1500.00, 2000.00);
const cliente2 = new ContaBancaria('Clayton Silva', 2500.00, 2000.00);
const cliente3 = new ContaBancaria('Thiago Santos', 3500.00, 2000.00);
const cliente4 = new ContaBancaria('Felipe Lima', 1000.00, 2000.00);


cliente1.informacoes();
console.log(cliente1.realizarSaque(3000.00));
console.log(cliente1.depositar(1000.00));
cliente1.consultarSaldo(); 

cliente2.informacoes();
console.log(cliente2.realizarSaque(500.00));
console.log(cliente2.depositar(9000.00));
cliente2.consultarSaldo(); 

cliente3.informacoes();
console.log(cliente3.realizarSaque(2001.00));
console.log(cliente3.depositar(10000.00));
cliente3.consultarSaldo(); 

cliente4.informacoes();
console.log(cliente4.realizarSaque(2000.00));
console.log(cliente4.depositar(1000.00));
cliente4.consultarSaldo(); 