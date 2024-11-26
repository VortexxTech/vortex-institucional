const idhModel = require("../models/idhModel");

function buscarIdh(req, res) {
    const bairro = req.query.selectedNome; // Pega o valor enviado na URL

    if (!bairro) {
        console.error("Erro: 'selectedNome' não foi enviado na requisição.");
        return res.status(400).json({ error: 'Bairro (selectedNome) é necessário!' });
    }

    console.log(`Buscando IDH para o bairro: ${bairro}`);
    idhModel.buscarIdh(bairro)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.json({ idh: parseFloat(resultado[0].idh) }); // Garante que o valor seja numérico
            } else {
                res.status(404).json({ error: 'Nenhum dado encontrado para o bairro!' });
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar IDH:", erro.sqlMessage || erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor." });
        });
}

function buscarGraficoMediaValorM2(req, res) {
    const bairro = req.query.selectedNome; // Pegando o valor enviado na query string

    if (!bairro) {
        console.error("Erro: 'selectedNome' não foi enviado na requisição.");
        return res.status(400).json({ error: 'Bairro (selectedNome) é necessário!' });
    }

    console.log(`Buscando média de valor por m² para o bairro: ${bairro}`);
    idhModel.buscarMediaValorM2(bairro)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ error: 'Nenhum dado encontrado para o bairro!' });
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar média do valor por m²:", erro.sqlMessage || erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor." });
        });
}

function calcularPorcentagemRenda(req, res) {
    const bairro = req.query.selectedNome; // Pegue o bairro enviado na requisição.

    if (!bairro) {
        return res.status(400).json({ error: "Bairro (selectedNome) é necessário!" });
    }

    idhModel.calcularPorcentagemRendaMaior(bairro)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.json(resultado[0]);
            } else {
                res.status(404).json({ error: "Nenhum dado encontrado para o bairro!" });
            }
        })
        .catch((erro) => {
            console.error("Erro ao calcular porcentagem da renda:", erro.sqlMessage || erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor." });
        });
}

function obterDensidade(req, res) {
    const bairro = req.query.selectedNome;

    if (!bairro) {
        return res.status(400).json({ error: "Bairro (selectedNome) é necessário!" });
    }

    idhModel.obterDensidadeBairro(bairro)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.json(resultado[0]);
            } else {
                res.status(404).json({ error: "Nenhum dado encontrado para o bairro!" });
            }
        })
        .catch((erro) => {
            console.error("Erro ao obter densidade do bairro:", erro.sqlMessage || erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor." });
        });
}
//KPI2
function buscarRanking(req, res) {
    const bairro = req.query.selectedNome;

    if (!bairro) {
        return res.status(400).json({ error: "Bairro (selectedNome) é obrigatório!" });
    }

    idhModel.buscarRankingBairro(bairro)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado[0]); // Retorna o resultado do ranking
            } else {
                res.status(404).json({ error: "Nenhum dado encontrado para o bairro informado!" });
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar ranking do bairro:", erro.sqlMessage || erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor." });
        });
}
function buscarTaxaValorizacao(req, res) {
    const bairro = req.query.selectedNome;

    if (!bairro) {
        return res.status(400).json({ error: "Bairro (selectedNome) é obrigatório!" });
    }

    // Chama o model para buscar a taxa de valorização
    idhModel.buscarTaxaValorizacao(bairro)
        .then(resultado => {
            if (resultado.length > 0) {
                // Retorna os resultados, com a taxa de valorização e os dados de valor m² atual e passado
                res.json(resultado[0]);
            } else {
                res.status(404).json({ error: "Nenhum dado encontrado para o bairro informado!" });
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar taxa de valorização do bairro:", erro.sqlMessage || erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor." });
        });
}

///////
function buscarValorM2(req, res) {
    const bairro = req.query.selectedNome; // Pega o valor enviado na URL

    if (!bairro) {
        console.error("Erro: 'selectedNome' não foi enviado na requisição.");
        return res.status(400).json({ error: 'Bairro (selectedNome) é necessário!' });
    }

    console.log(`Buscando valorM2 para o bairro: ${bairro}`);
    idhModel.buscarValorM2MaisRecente(bairro)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.json({ valorM2: parseFloat(resultado[0].valorM2) }); // Garante que o valor seja numérico
            } else {
                res.status(404).json({ error: 'Nenhum dado encontrado para o bairro!' });
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar valorM2:", erro.sqlMessage || erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor." });
        });
}
module.exports = {
    buscarIdh,
    buscarGraficoMediaValorM2,
    calcularPorcentagemRenda,
    obterDensidade,
    buscarRanking,
    buscarTaxaValorizacao,
    buscarValorM2
};