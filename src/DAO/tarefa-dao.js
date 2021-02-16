//tratamento e manipulação do banco de dados - tabela tarefa
module.exports = class TarefaDAO {
    constructor (bd){
        this.bd=bd;
    }

    criaTarefa (dados){
        return new Promise ((resolve, reject) => {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)", dados,(erro, linhas) => {
                if (erro) reject ("Erro ao adicionar dados na tabela 'TAREFAS'")
                else resolve ("Dados adicionados com sucesso!");
            })
        })

    }
    
    listaTarefa (){
        return new Promise ((resolve, reject) => {
            this.bd.all ("SELECT * FROM TAREFAS", (error, linhas) => {
                if (error) reject ("Erro ao consultar tabela de TAREFAS")
                else resolve (linhas);
            })
        })
    }
    
    atualizaTarefa (dados){
        return new Promise ((resolve, reject) => {
            this.bd.run("UPDATE TAREFAS SET TITULO=?, DESCRICAO=?, STATUS=?, DATACRIACAO=?, ID_USUARIO=? WHERE ID = ?", dados, (error) => {
                if (error) reject ("Erro ao atualizar tabela de TAREFAS")
                else resolve ("Linha atualizada");
            })
        })
    }

    deletaTarefa (dados){
        return new Promise ((resolve, reject) => {
            this.bd.run("DELETE FROM TAREFAS WHERE ID = ?", dados, (error, linhas) => {
                if (error) reject ("Erro ao deletar informação da tabela TAREFAS")
                else resolve ("Informação deletada");
            })
        })

    }

    buscaTarefa (dados){
        return new Promise ((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS WHERE ID = ?", dados, (error, linhas) =>{
                if (error) reject ("Erro ao consultar informação na tabela TAREFAS")
                else resolve (linhas);
            })
        })

    }

}