const tarefaDao = require ('../DAO/tarefa-dao')

module.exports = (app,bd)=> {
  const daoTarefa = new tarefaDao(bd)

//Inserção de uma tarefa - CREATE
app.post('/tarefa', async(req, resp)=> {
  const dados = [
    req.body.titulo, 
    req.body.descricao, 
    req.body.status, 
    req.body.dataCriacao,
    req.body.id_usuario]

  try{
    const respCriaTarefa = await daoTarefa.criaTarefa(dados)
    resp.send(respCriaTarefa)
  } catch (erro) {
    resp.send(erro)
  }
});

//Listagem de todas as tarefas - READ
app.get('/tarefa', async(req, resp)=> {
  try{
    const respListaDeTarefa = await daoTarefa.listaTarefa();
    resp.send(respListaDeTarefa)
  } catch(erro) {
    resp.send(erro)
  }
  });

//Modificação de uma tarefa - UPDATE
app.put('/tarefa/:id', async(req, resp)=> {
  let dados = [
    req.body.titulo, 
    req.body.descricao, 
    req.body.status, 
    req.body.dataCriacao,
    req.body.id_usuario,
    req.params.id,
    ]

  try{
    const respModificaTarefa = await daoTarefa.atualizaTarefa(dados)
    resp.send(respModificaTarefa)
  } catch (erro) {
    resp.send(erro)
  }
});

//Deleção de uma tarefa - DELETE
app.delete('/tarefa/:id', async (req, resp) => {
  try{
    const respDeletaTarefa = await daoTarefa.deletaTarefa(req.params.id)
    resp.send(respDeletaTarefa)

  } catch (erro){
    resp.send(erro)

  }
});

//Listagem de uma tarefa com base em um parâmetro de rota

app.get('/tarefa/:id', async (req, resp) => {
  try {
    const respBuscaTarefa = await daoTarefa.buscaTarefa(req.params.id)
    resp.send(respBuscaTarefa)

  } catch (erro) {
    resp.send(erro)

  }
});

}
 