const express = require("express")
const fs = require("fs")
const app = express()
const porta = 3000

app.use(express.json())

app.post("/login", (req, res) =>{
    const info = req.body
    

    fs.readFile("funcionarios.json", "utf8", (err, data) =>{
        if(err) {
            console.log("erro ao ler o arquivo")
        }

        let funcionarios = JSON.parse(data)

        const logar = funcionarios.find(encontrar =>
            encontrar.email === info.email && encontrar.senha === info.senha
        )

        if(logar) {
            return res.send("Usuario logado")
        }

        else{
            return res.send("Usuario nao encontrado")
        }
    })
})

app.listen(porta, () =>{
    console.log(`abrindo servidor em http://localhost:${porta}`)
})