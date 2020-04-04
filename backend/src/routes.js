const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);
    return response.json({
        evento: "Semana OmniStack 11",
        aluno: "Jeova Carlos"
    });
});

module.exports = routes;