module.exports = (app)=> {
  app.get(`/tarefa`, (req, resp)=> {
  resp.send('<h2>Rota de tarefa ativada GET: Rastreamento da aplicação sendo feita com nodemon</h2>')
  })

  app.post(`/tarefa`, (req, resp)=> {
      resp.send('<h2>Rota de tarefa ativada POST: Tarefa adicionada</h2>')
  })
}
 