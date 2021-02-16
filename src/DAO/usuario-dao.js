//tratamento e manipulação do banco de dados - tabela usuario

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

    adicionaUsuario(dados){
        return new Promise((resolve, reject) => {
            this.bd.get("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", dados, (error, linhas) => {
                if (error) reject ("Erro ao adicionar usuário")
                else resolve ("Usuário adicionado com sucesso!"); 
            })
        })
    }

    buscaUsuario (dados){
        return new Promise ((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS WHERE ID =?", dados, (error, linhas) =>{
                if (error) reject ("Erro ao consultar informação na tabela TAREFAS")
                else resolve (linhas);
            })
        })
    }

    deletaUsr (dados) {
        return new Promise ((resolve, reject) => {
            this.bd.run("DELETE FROM USUARIOS WHERE ID=?", dados, (error, linhas) => {
                if (error) reject ("Erro ao deletar informação da tabela USUARIOS")
                else resolve ("Usuário deletado");
            })
        });
    }

    atualizaUsr (dados) {
        return new Promise ((resolve, reject) => {
            this.bd.run("UPDATE USUARIOS SET NOME=?, EMAIL=?, SENHA=? WHERE ID= ?", dados, (erro) => {
                if (erro) reject ("Erro ao atualizar tabela")
                else resolve("Tabela atualizada")
            })
        })
    }
    
}