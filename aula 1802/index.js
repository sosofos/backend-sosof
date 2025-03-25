const express = require("express");
const userService = require("./userservice");

const app = express();
app.use(express.json());

//rota para criar usuario

app.post("/users", async (req, res) => {
    const { nome, email, senha, endereco, telefone, cpf } = req.body;
    if (!nome || !email || !senha || !endereco || !telefone || !cpf) {
        return res.status(400).json
            ({ error: "os dados são obrigatorios" })
    }

    const user = await userService.addUser(nome, email, senha, endereco, telefone, cpf);
    res.status(200).json({ user });
})

//rota para listar todos os arquivos
app.get("/users", (req, res) => {
    res.json(userService.getUsers());
});

app.delete("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    try {
        const resultado = userService.deleleUser(id);
        // tenta excluir usuario
        res.status(200).json(resultado);
        // retorna mensagem de sucesso
    } catch (erro) {
        res.status(404).json({ error: erro.message })
        // retorna a mensagem de erro
    }
});

app.put("/users/:id", (req, res) => {
    const id = parseInt(req, params, id);
    const {nome, email, senha, endereco, telefone, cpf} = req.body;
    try {
        const resultado = userService.alterUser(id, nome, email, senha, endereco, telefone, cpf)
        res.status(200).json(resultado);
    }catch(erro){
        res.status(400).json({ error: erro.message})
    }
})

const port = 3000;
app.listen(port, () => {
    console.log("Servidor rodando na porta:", port);
})

