const express = require('express')
const usuarioController = require('/.controllers/usuario-controller.js') //importando o que esta c/ *exports* no arquivo
const tarefaController = require('/.controllers/tarefa-controller.js') //importando o que esta c/ *exports* no arquivo
const app = express()
const port = 8080

usuarioController(app)
tarefaController(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
