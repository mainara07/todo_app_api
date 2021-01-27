const express = require('express');
const bodyParser = require('body-parser');

const usuarioController = require('./controllers/usuario-controller.js'); //importando o que esta c/ *exports* no arquivo
const tarefaController = require('./controllers/tarefa-controller.js'); //importando o que esta c/ *exports* no arquivo

const Usuario = require('./models/usuario');
const Tarefa = require('./models/tarefa');

const sqlite = require ('sqlite3').verbose();
const bd = require ('./infra/sqlite-db')

const app = express()
const port = 8080


usuarioController(app,bd)
tarefaController(app,bd)

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
