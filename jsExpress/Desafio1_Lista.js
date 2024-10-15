//Primeiro Desafio

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/dados', (req, res) => {
    const usuarios = req.body;
    console.log('Dados recebidos:', usuarios);
    

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].cargo === 'Desenvolvedor' || usuarios[i].cargo === 'Desenvolvedora') {
            console.log(`Esses são os usuarios que são desenvolvedor(a): ${usuarios[i].nome}, ${usuarios[i].email}, ${usuarios[i].telefone}\n`);
        }
    }
});

app.listen(port, () => {
    console.log(`Start server: http://localhost: ${port}`)
});
