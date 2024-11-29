var precoM2Model = require("../models/precoM2Model");

function buscarZonasComMaiorPreco(req, res) {
    console.log(`Recuperando a valorização do preço do m² da cidade de SP nos últimos 6 meses.`);

    precoM2Model.buscarZonasComMaiorPreco().then(function (resultado) {
        if (resultado.length > 0) {
         
            res.status(200).json(resultado[0]); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados de valorização.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarZonasComMaiorPreco(req, res) {
    console.log(`Recuperando a valorização do preço do m² da cidade de SP nos últimos 6 meses.`);

    precoM2Model.buscarZonasComMaiorPreco().then(function (resultado) {
        if (resultado.length > 0) {
         
            res.status(200).json(resultado[0]); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados de valorização.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarRegioesComMaiorPreco(req, res) {
    precoM2Model.buscarRegioesComMaiorPreco().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados de bairros com maior preço de m².", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPreco(req, res) {
    const limite_meses = 6;

    console.log(`Recuperando a média dos preços por m² nos últimos ${limite_meses} meses.`);

    precoM2Model.buscarPrecoMedia(limite_meses).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarValorizacao(req, res) {
    console.log(`Recuperando a valorização do preço do m² da cidade de SP nos últimos 6 meses.`);

    precoM2Model.buscarValorizacaoCidadeRegiao().then(function (resultado) {
        if (resultado.length > 0) {
         
            res.status(200).json(resultado[0]); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados de valorização.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarTopsIdh(req, res) {
    console.log(`Recuperando a idh das melhores 3 regiões.`);

    precoM2Model.buscarTopsIdh().then(function (resultado) {
        if (resultado.length > 0) {
         
            res.status(200).json(resultado); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados de idh.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDataAtualizacao(req, res) {
    console.log(`Recuperando a data de atualização dos dados.`);

    precoM2Model.buscarDataAtualizacao().then(function (resultado) {
        if (resultado.length > 0) {
         
            res.status(200).json(resultado[0]); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados de valorização.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function  buscarCapitaDemografica(req, res) {
    console.log(`Recuperando a renda per capita e Densidade.`);

    precoM2Model.buscarCapitaDemografica().then(function (resultado) {
        if (resultado.length > 0) {
         
            res.status(200).json(resultado); 
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados renda per capita e Densidade.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarPreco,
    buscarValorizacao,
    buscarRegioesComMaiorPreco,
    buscarZonasComMaiorPreco,
    buscarTopsIdh,
    buscarDataAtualizacao,
    buscarCapitaDemografica

};