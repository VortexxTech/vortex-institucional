var database = require("../database/config");

function verificarDadosBairro(req) {
    var bairroSelecionado = req.params.bairro;

    var instrucaoSql = `
        SELECT 
            bairro,
            zona,
            valorM2,
            variacaoPrecoM2,
            variacaoAnualPrecoM2,
            variacaoMensalPrecoM2,
            idh,
            densidadeDemografica
        FROM DadosInseridos
        WHERE bairro = ?`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql, [bairroSelecionado])
        .then(resultado => {
            if (resultado.length === 0) {
                return { erro: true, mensagem: "O bairro selecionado não foi encontrado no banco de dados." };
            }

            let colunas = ["zona", "valorM2", "variacaoPrecoM2", "variacaoAnualPrecoM2", "variacaoMensalPrecoM2", "idh", "densidadeDemografica"];
            let dadosLinha = resultado[0]; 
            let colunasVazias = [];

            colunas.forEach(coluna => {
                if (!dadosLinha[coluna]) { 
                    colunasVazias.push(coluna);
                }
            });

            if (colunasVazias.length > 0) {
                return {
                    erro: false,
                    mensagem: `O dado de ${colunasVazias.join(", ")} não foram disponibilizado pelo Censo/IBGE para este bairro.`
                };
            } else {
                return { erro: false, mensagem: "Todos os dados estão disponíveis para este bairro." };
            }
        })
        .catch(err => {
            console.error("Erro ao verificar dados do bairro:", err);
            return { erro: true, mensagem: "Erro ao verificar os dados no banco de dados." };
        });
}

module.exports = {
    verificarDadosBairro
};