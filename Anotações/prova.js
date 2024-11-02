const express = require("express")
const fs = require("fs")
const app = express()
const porta = 3000

app.use(express.json())

const usuarios = [];


app.post('/usuarios', (req, res) => {
    console.log(req.body); 
    const { nome, email, senha } = req.body;
    
    
    if (!nome || !email || !senha) {
      return res.status(400).send('Dados inválidos.');
    }
  
   
    usuarios.push({ nome, email, senha });
    res.status(201).send('Usuário criado com sucesso.');
  });

  
  app.post('/login',(req, res) => {

    const { email, senha } = req.body;
  
  console.log("Dados Recebido.");
  
  
    console.log("LOGIN");
    console.log("Email: "+email);
    console.log("Senha: "+senha);
  
  
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  
    if (usuario) {
      res.json({ message: "Bem-vindo, "+usuario.nome });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  });

app.listen(porta, () =>{
    console.log(`abrindo servidor em http://localhost:${porta}`)
})