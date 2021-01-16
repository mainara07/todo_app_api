module.exports = (app)=> {
  app.get(`/usuario`, (req, resp)=> {
  resp.send('<h2>Rota de usuário ativada GET: Rastreamento da aplicação sendo feita com nodemon</h2>')
  })

  app.post(`/usuario`, (req, resp)=> {
      resp.send('<h2>Rota de usuário ativada Post: Usuário adicionado</h2>')
  })
} 
