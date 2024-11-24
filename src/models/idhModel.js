const database = require("../database/config");

function buscarIdh(bairro) {
    // Concatenando diretamente o valor do bairro na consulta
    const instrucaoSql = `
        SELECT 
            idh
        FROM 
            DadosInseridos
        WHERE 
            bairro = '${bairro}'
            AND dtInsercao = (
                SELECT MAX(dtInsercao) 
                FROM DadosInseridos 
                WHERE bairro = '${bairro}'
            );
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql); // Sem parâmetros, pois estamos concatenando diretamente
}

function buscarMediaValorM2(bairro) {
    const instrucaoSql = `
        SELECT 
            AVG(valorM2) AS mediaValorM2, 
            DATE_FORMAT(dtInsercao, '%Y-%m') AS mes
        FROM DadosInseridos
        WHERE bairro = '${bairro}'
        GROUP BY DATE_FORMAT(dtInsercao, '%Y-%m')
        ORDER BY mes DESC
        LIMIT 4;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function calcularPorcentagemRendaMaior(bairro) {
    const instrucaoSql = `
        SELECT 
            bairro,
            rendaPerCapita,
           ROUND(((rendaPerCapita - 3443) / 3443) * 100, 2) AS porcentagemMaior
        FROM 
            DadosInseridos
        WHERE 
            bairro = '${bairro}'
        ORDER BY 
            dtInsercao DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarIdh,
    buscarMediaValorM2,
    calcularPorcentagemRendaMaior
};