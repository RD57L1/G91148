const express = require('express');
const app = express();
const port = 3000;

// Simulando um banco de dados de usuários (comum usar um banco de dados real)
const usuarios = [
    {nome: 'Alice Silva', email: 'alice.silva@example.com', cpf: '125.654.987-00'},
    {nome: 'Bruno Souza', email: 'bruno.souza@example.com', cpf: '125.344.987-00'},
    {nome: 'arla Pereira', email: 'carla.pereira@example.com',cpf: '115.654.987-00'},
    {nome: 'Daniel Costa', email: 'daniel.costa@example.com', cpf: '125.624.987-00'},
    {nome: 'Eduarda Lima', email: 'eduarda.lima@example.com', cpf: '015.654.987-00'}
  ];

// Middleware para permitir que o servidor entenda JSON
app.use(express.json());

// Rota para exibir uma mensagem de boas-vindas personalizada
app.get('/ola/:nome', (req, res) => {
    const nome = req.params.nome; 
    res.send(`Olá, ${nome}! Seja bem-vindo(a) ao nosso site.`);
});
// Rota para listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota para criar um novo usuário
app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  // Validação básica (adicione mais validações conforme necessário)
  if (!novoUsuario.nome || !novoUsuario.email || !novoUsuario.cpf) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }
  novoUsuario.id = usuarios.length + 1;
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});