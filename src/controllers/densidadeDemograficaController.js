var densidadeDemograficaModel = require("../models/densidadeDemograficaModel");

function buscarDensidadeDemografica(req, res) {
    const limite_linhas = 6;
    // var idUsuarioB = req.params.idUsuario;

    console.log(`Recuperando a Densidade Demográfica nos ultimos ${limite_linhas} meses.`);

    densidadeDemograficaModel.buscarDensidadeDemografica(/* idUsuarioB, */ limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos pontos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDensidadeDemografica
}