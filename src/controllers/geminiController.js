const geminiModel = require("../models/geminiModel")

function perguntar(req, res) {
    const pergunta = req.body.pergunta;

    geminiModel.perguntar(pergunta).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos pontos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    perguntar
}