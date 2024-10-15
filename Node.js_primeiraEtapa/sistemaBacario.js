saldo = 0

const operacoes = [
    {deposito: "150.00"},
    {saque: "50.00"},
    {deposito: "100.00"},
    {saque: "100.00" },
    {deposito: "100.00" },
    {deposito: "50.00" },
    {saque: "50.00" },
];

console.log("Extrato:")
operacoes.forEach(item => {
    const deposito = parseFloat(item.deposito);
    const saque = parseFloat(item.saque);

    if (deposito > 0){
        console.log(`Deposito: ${deposito}`)
        saldo += deposito;
        console.log(`Saldo: ${saldo}`)
    } else if (saque > 0){
        console.log(`Saque: ${saque}`)
        saldo -= saque;
        console.log(`Saldo: ${saldo}`)

    }
});
    
console.log("\n");
console.log(`Saldo Final:${saldo}`);
console.log("\n");
