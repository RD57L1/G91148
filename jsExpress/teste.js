const express = require('express');

const app = express();
const porta = 8080;

// Middleware para parsear dados JSON
app.use(express.json());

// Rota POST /login
app.post('/login', async (req, res) => {

  const { email, senha } = req.body;

console.log("Dados Recebido.");
res.send("Dados OK");

  console.log("LOGIN");
  console.log("Email: "+email);
  console.log("Senha: "+senha);



  // Encontrar o usuário na base de dados
  const usuario = user.suarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    res.json({ message: "Bem-vindo, "+usuario.nome });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});


app.listen(porta, () => {
  console.log(`Start server: http://localhost: ${porta}`);
});
