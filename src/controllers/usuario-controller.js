const usuarioDao = require ('../DAO/usuario-dao')

module.exports = (app,bd)=> {
  const daoUsuario = new usuarioDao(bd);
  
  //Listagem de todos os usuários
  app.get('/usuario', async (req, resp) => {
    try {
    let respLista = await daoUsuario.listaUsuario()
    resp.send(respLista) 
  } catch(error) {
    resp.send(error)
  }
});
  //Listagem de um único usuário com base em um parâmetro de rota
  app.get('/usuario/:id', async (req, resp) => {
    try {
      const respBusca = await daoUsuario.buscaUsuario(req.params.id)
      resp.send(respBusca)
    } catch (erro) {
      resp.send(erro)
    }
  });
  // Inserção de um usuário
  app.post('/usuario', async (req, resp)=> {
    try {
      let dados  = [
        req.body.nome,
        req.body.email, 
        req.body.senha
      ];
      const respAdiciona = await daoUsuario.adicionaUsuario(dados)
      resp.send(respAdiciona)
    } catch (error){
      resp.send(error)
    }
  });

  // Modificação de um usuário
  app.put('/usuario/:id', async(req, resp)=> {
    let dados = [
      req.body.nome, 
      req.body.email, 
      req.body.senha,
      req.params.id
      ]
    try{
      const respModificaUsr= await daoUsuario.atualizaUsr(dados)
      resp.send(respModificaUsr)
    } catch (erro) {
      resp.send(erro)
    }
  });
  // Deleção de um usuários
  app.delete('/usuario/:id', async (req, resp) => {
    try{
      const respDeleta = await daoUsuario.deletaUsr(req.params.id)
      resp.send(respDeleta)
  
    } catch (erro){
      resp.send(erro)
  
    }
  });
  
}