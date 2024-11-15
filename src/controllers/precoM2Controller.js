var precoM2Model = require("../models/precoM2Model");

function buscarPreco(req, res) {

    const limite_linhas = 6;
    // var idUsuarioB = req.params.idUsuario;

    console.log(`Recuperando os preços por m² nos ultimos ${limite_linhas} meses.`);

    precoM2Model.buscarPreco(/* idUsuarioB, */ limite_linhas).then(function (resultado) {
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
    buscarPreco
}