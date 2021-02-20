
# :rocket: Desenvolvimento de uma API RESTFULL
## Sobre: 
Este projeto foi desenvolvido durante o módulo de back-end do curso de Desenvolvimento Web na [Resília Educação](https://www.resilia.work). 

Trata-se de uma aplicação para auxílio e gerenciamento de tempo por meio do acompanhamento de tarefas de um usuário. As tarefas são monitoradas pelos status:
<strong>
*  Em andamento 
*  Contínua 
*  Concluído 
</strong>

Para dar início a utilização dessa API é necessário que tenha o `Node.js` previamente instalado em sua máquina. 

Para clonar o repositório execute em seu terminal (cmd):
`git clone` https://github.com/mainara07/todo_app_api.git

## Como instalar as dependências do projeto :question:
Para instalação das dependências é necessário o uso do gerenciador de pacote NPM

### Execute: 

 💻 `npm install` :point_right: este comando irá instalar todas as dependencias presentes neste aplicativo

 💻  `npm start`:point_right: este comando irá ativar o servidor na sua máquina

## Quais são as rotas possíveis :question:

Nesta aplicação trabalharemos com duas entidades: `Usuário` e `Tarefa`.
O projeto foi desenvolvido com base no modelo de arquitetura `REST` realizando requisições com os seguintes verbos HTTP para modificar e enviar dados: 

* **GET**
* **POST**
* **UPDATE** 
* **DELETE**

## ROTAS

➡️ Para usuário
* http://localhost:8080/usuario - Rota com *GET* que listará todos os usuários 
* http://localhost:8080/usuario - Rota com *POST* para criação de usuário no banco
* http://localhost:8080/usuario/:id - Rota *PUT* - Altera dados do usuário conforme id passado
* http://localhost:8080/usuario/:id - Rota com *DELETE* que irá deletar um registro na tabela de **usuários** com base no id passado 
* http://localhost:8080/usuario/:id- Rota com *GET* que apresenta um usuário com base no ID passado

➡️ Para tarefa 
* http://localhost:8080/tarefa - Rota com *GET* que listará todos as tarefas
* http://localhost:8080/tarefa - Rota com *POST* para criação de tarefa no banco
* http://localhost:8080/tarefa/:id - Rota com *PUT* que realiza alteração de dados em alguma **tarefa** conforme id passado
* http://localhost:8080/tarefa/:id - Rota com *DELETE* que irá deletar um registro na tabela de **TAREFAS** com base no id passado 
* http://localhost:8080/tarefa/:id- Rota com *GET* que apresenta um tarefa com base no ID passado