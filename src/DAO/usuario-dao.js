const { throws } = require("assert");

module.exports = class UsuarioDAO {
    constructor (bd) {
        this.bd=bd;
    }
    listaUsuario(){
        return new Promise ((resolve, reject) => {
            this.bd.all ("SELECT * FROM USUARIOS", (error, linhas) => {
                if (error) reject ("Erro ao consultar tabelas")
                else resolve (linhas);
            })
        })
    }
}