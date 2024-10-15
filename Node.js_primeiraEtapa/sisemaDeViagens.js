class Viagens {
    constructor(destino, dataDePartida, dataDeRetorno) {
        this.destino = destino;
        this.dataDePartida = dataDePartida;
        this.dataDeRetorno = dataDeRetorno;
    }
}




class AgendadorDeViagens {
    constructor() {
        this.viagens = [];
    }

    adicionarViagem(destino, dataDePartida, dataDeRetorno) {
        const novaViagem = new Viagens(destino, dataDePartida, dataDeRetorno);
        this.viagens.push(novaViagem);
    }

    listarViagens() {
        return this.viagens.map((viagem, index) => ({
            id: `viagem-${index + 1}`,
            Destino: viagem.destino,
            DataDePartida: viagem.dataDePartida,
            DataDeRetorno: viagem.dataDeRetorno
        }));
    }

    cancelarViagem(id) {
        const index = parseInt(id.split('-')[1]) - 1;
        if (index >= 0 && index < this.viagens.length) {
            this.viagens.splice(index, 1);
            console.log(`Viagem ${id} cancelada com sucesso.`);
        } else {
            console.log(`Viagem ${id} não encontrada.`);
        }

    }
}


const agendador = new AgendadorDeViagens();

agendador.adicionarViagem("Paris", "2023-08-15", "2023-08-22");
agendador.adicionarViagem("Londres", "2023-09-01", "2023-09-08");
agendador.adicionarViagem("Brasil", "2023-12-23", "2024-01-05 ");
console.log(agendador.listarViagens());

agendador.cancelarViagem("viagem-2");
agendador.cancelarViagem("viagem-1");


console.log("\nViagens atualizadas:\n");
console.log(agendador.listarViagens());