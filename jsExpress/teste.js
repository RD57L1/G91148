const express = require('express');

const app = express();
const porta = 8080;

app.use(express.json());


// Base de dados simulada (substituir por um banco de dados real)
app.post('/dados', (req, res) => {
  const usuarios = req.body;
  console.log('Dados recebidos:', usuarios);
res.send("Dados: OK");
});


app.listen(porta, () => {
  console.log(`Start server: http://localhost: ${porta}`);
});

