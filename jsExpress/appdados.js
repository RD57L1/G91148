const express = require('express');

const app = express();
const porta = 8080;

// Middleware para parsear dados JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base de dados simulada
let usuarios = [];

// Rota POST /dados
app.post('/dados', (req, res) => {
  const usuarios = req.body;
  console.log('Dados recebidos:', usuarios);
  res.send("Dados: OK");
});

// Rota POST /login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  console.log("Dados Recebido.");
  console.log("Email:", email);
  console.log("Senha:", senha);

  // Encontrar o usuário na base de dados
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    res.json({ message: `Bem-vindo, ${usuario.nome}` });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Rota POST /usuarios (CADASTRO)
app.post('/usuarios', async (req, res) => {
  const { cad_nome, cad_email, cad_senha, cad_cargo } = req.body;

  console.log("CADASTRO");
  console.log("Nome:", cad_nome);
  console.log("Email:", cad_email);
  console.log("Senha:", cad_senha);
  console.log("Cargo:", cad_cargo);

  const usuario = usuarios.find(u => u.email === cad_email);

  if (usuario) {
    res.status(401).json({ error: `E-mail já existe no cadastro: ${usuario.email}` });
  } else {
    usuarios.push({ nome: cad_nome, email: cad_email, senha: cad_senha, cargo: cad_cargo });
    res.json({ message: "Usuário cadastrado com sucesso." });
  }
});

// Rota POST /atualiza (ATUALIZA)
app.post('/atualiza', async (req, res) => {
  const { atu_email, atu_senha, atu_nome, atu_cargo } = req.body;

  console.log("ATUALIZA");
  console.log("Email:", atu_email);
  console.log("Senha:", atu_senha);
  console.log("Nome:", atu_nome);
  console.log("Cargo:", atu_cargo);

  const usuario = usuarios.find(u => u.email === atu_email);

  if (usuario) {
    usuario.senha = atu_senha;
    usuario.nome = atu_nome;
    usuario.cargo = atu_cargo;
    res.json({ message: `Usuário ATUALIZADO com sucesso: ${usuario.email}` });
  } else {
    res.status(404).json({ error: "E-mail não encontrado." });
  }
});

// Rota POST /delete (EXCLUSÃO)
app.post('/delete', async (req, res) => {
  const { del_email } = req.body;

  console.log("EXCLUSÃO");
  console.log("Email:", del_email);

  const index = usuarios.findIndex(u => u.email === del_email);

  if (index !== -1) {
    usuarios.splice(index, 1);
    res.json({ message: `O usuário ${del_email} foi excluído.` });
  } else {
    res.status(404).json({ error: 'Usuário não encontrado.' });
  }
});

// Rota GET /usuarios (LISTA USUÁRIOS)
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota GET / (MENSAGEM DE BEM-VINDO)
app.get('/', (req, res) => {
  res.json({ message: "Olá, sou o servidor Node JS de Java Script." });
});

// Inicia o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando, acesse 127.0.0.1:${porta}`);
});
