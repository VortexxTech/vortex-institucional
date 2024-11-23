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

module.exports = {
    buscarIdh,
};