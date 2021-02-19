const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;

const usuarioController = require('./controllers/usuario-controller.js'); //importando o que esta c/ *exports* no arquivo
const tarefaController = require('./controllers/tarefa-controller.js'); //importando o que esta c/ *exports* no arquivo

const bd = require ('./infra/sqlite-db')

const app = express()
app.use(bodyParser.json());

usuarioController(app,bd)
tarefaController(app,bd)


app.get ('/', (req, resp)=> {
  resp.send("Tô rodando no Heroku")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
