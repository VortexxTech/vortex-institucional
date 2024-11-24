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

module.exports = {
    buscarIdh,
    buscarGraficoMediaValorM2,
    calcularPorcentagemRenda
};