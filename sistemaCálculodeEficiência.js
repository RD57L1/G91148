const maquina = [
    {nome: "máquina(A)", producao: "1200", tempoOperacao: "24" },
    {nome: "máquina(B)", producao: "1500", tempoOperacao: "24" },
    {nome: "máquina(C)", producao: "1000", tempoOperacao: "24" },
    {nome: "máquina(D)", producao: "2000", tempoOperacao: "24" },
    {nome: "máquina(E)", producao: "900", tempoOperacao: "24" },
    {nome: "máquina(F)", producao: "500", tempoOperacao: "24" },
]

console.log("\n");

maquina.forEach(item => {
    const nome = (item.nome);
    const producao = (item.producao);
    const tempoOperacao = (item.tempoOperacao);

    console.log(`Maquinario: ${nome}, produziu ${producao} produtos, em ${tempoOperacao} horas de produção`)

    const mediaProducao = producao / tempoOperacao;
    var arredondado = parseFloat(mediaProducao.toFixed(2));

    if (mediaProducao >= 60 ){
        console.log(`${nome} está com a media de produção em ${arredondado} boa produtividade! .\n`);
     }else if (mediaProducao >= 30){
        console.log(`${nome} está com a media de produção em ${arredondado} produtividade baixa!.\n`);
     }else{
      (mediaProducao)
        console.log(`${nome} está com a media de produção em ${arredondado} produtividade extremamente baixa alerta!!!.\n`);
     }
});


