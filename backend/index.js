const express = require('express');

const app = express();

app.use(express.json());
/** 
 * Rota / Recurso example: get(/users) (nome na rota após a "/")
 */

 /**
  * Métodos HTTP:
  * Utilizar "rotas" para os seguintes metodos.
  * 
  * GET: Buscar/listar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

  /**
   * Tipos de parâmetros:
   * Parâmetros que podem ser enviados para as rotas.
   * 
   * Query params:Parâmetros nomeados enviados na rota após "?" (Geralmente são filtros, paginação)
   * Route params: Parâmetros utilizados para identificar recursos (/users/:id)... Recurso ":id" ou /users/1;
   * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

app.post('/users', (request, response) => {
    //const params = request.query;
    //const params = request.params;
    const body = request.body;

    console.log(body);
    // return response.send('Hello World');
    return response.json({
        evento: "Semana OmniStack 11",
        aluno: "Jeova Sampaio"
    });
});

app.listen(3333);