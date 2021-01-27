const Usuario = require ('../models/usuario')
const UsuarioDAO = require ('../DAO/usuario-dao')

module.exports = (app,bd)=> {

  const usuarioDAO = new UsuarioDAO(bd);

  app.get('/usuario', (req, resp) => {
    usuarioDAO.listaUsuario()
    .then((usuario) => {
      resp.send(usuario)
    })
    .catch((erro) =>{
      resp.send(erro)
    })
  })

  app.get('/usuario/:nome', (req,resp)=> {
    for (let usr of bd.usuarios){
      if (usuario.email== req.params.email){
        resp.send(usuario);
      }
    }
  });

  app.post('/usuario', (req, resp)=> {
    bd.run('INSERT INTO USUARIOS(NOME,EMAIL,SENHA) VALUES (?,?,?)', [req.body.nome,req.body.email,req.body.senha]), 
    function (err) {
      if (err){
        throw new Error (`Erro ao tentar inserir ${err}`);
      } else {
        resp.send("Usuario adicionado ao banco")
      }
    } 
  });
}