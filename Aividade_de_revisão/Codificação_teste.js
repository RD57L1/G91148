const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const usuarios = [];

// Rota para criar um novo usuário
app.post('/usuarios', (req, res) => {
  console.log(req.body); // Para depuração
  const { nome, email, cpf } = req.body;
  
  // Verificar se os dados são válidos
  if (!nome || !email || !cpf) {
    return res.status(400).send('Dados inválidos.');
  }

  // Adicionando o novo usuário ao array
  usuarios.push({ nome, email, cpf });
  res.status(201).send('Usuário criado com sucesso.');
});

// Rota para listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});


// Rota para exibir uma mensagem
app.get('/ola', (req, res) => {
  res.send('Olá, hora de turbinar a sua produtividade!')
})

// Rota para exibir uma mensagem com dados do banco
app.get('/ola/:nome', (req, res) => {
  const nomeBuscado = req.params.nome;

  // Encontrar o usuário no array de usuários
  const usuario = usuarios.find(usuario => usuario.nome.toLowerCase() === nomeBuscado.toLowerCase());

  if (usuario) {
    res.send(`Olá, ${usuario.nome}! Seu e-mail é ${usuario.email}. Seja bem-vindo(a) ao nosso site.`);
  } else {
    res.status(404).send('Usuário não encontrado.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});