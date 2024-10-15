produtosProntoEntrega = 0
const pedidos = [
    {numeroPedido: "1", status: "preparando"},
    {numeroPedido: "2", status: "entregue"},
    {numeroPedido: "3", status: "pronto"},
    {numeroPedido: "4", status: "pronto"},
    {numeroPedido: "5", status: "entregue"},
    {numeroPedido: "6", status: "pronto"},
    {numeroPedido: "7", status: "pronto"},
    {numeroPedido: "8", status: "preparando"},
];

console.log("\n");

console.log("Todos os pedidos realizado:");
pedidos.forEach(item => {
    const numeroPedido = item.numeroPedido;
    const status = item.status;

    console.log(`numeroPedido ${numeroPedido}, status ${status}`);

});

console.log("\n");
console.log("Pedidos pronto para entrega:")
pedidos.forEach(item => {
    const numeroPedido = item.numeroPedido;
    const status = item.status;

    if (status === "pronto") {
        produtosProntoEntrega++;
        console.log(`Pedido ${numeroPedido} pronto`);
    }
});
console.log("\n");
console.log("Quantidades de Pedidos prontos:");
console.log (`Existem: ${produtosProntoEntrega} pedidos prontos!`);