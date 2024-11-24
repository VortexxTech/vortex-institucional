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
//kpi 1
function obterDensidadeBairro(bairro) {
    const query = `
        SELECT 
          DATE_FORMAT(dtInsercao, '%Y-%m-%d') AS dtInsercao,
            densidadeDemografica
        FROM 
            DadosInseridos
        WHERE 
            bairro = '${bairro}'
        ORDER BY 
            dtInsercao DESC
        LIMIT 1;
    `;
    console.log("Executando a query:", query);
    return database.executar(query);
}

//KPI2
function buscarRankingBairro(bairro) {
    const instrucaoSql = `
        WITH Classificacao AS (
            SELECT 
                bairro,
                valorM2,
                RANK() OVER (ORDER BY valorM2 DESC) AS ranking
            FROM 
                DadosInseridos
            WHERE 
                dtInsercao = (SELECT MAX(dtInsercao) FROM DadosInseridos)
        )
        SELECT 
            bairro,
            valorM2,
            ranking
        FROM 
            Classificacao
        WHERE 
            bairro = '${bairro}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
//KPI 3
function buscarTaxaValorizacao(bairro) {
    const instrucaoSql = `
        WITH Dados AS (
            -- Preço do metro quadrado atual
            SELECT valorM2 AS dado_atual
            FROM DadosInseridos
            WHERE dtInsercao = (SELECT MAX(dtInsercao) FROM DadosInseridos)
            AND bairro = '${bairro}'
        ),
        DadosAnteriores AS (
            -- Preço do metro quadrado há 12 meses
            SELECT valorM2 AS dado_anopassado
            FROM DadosInseridos
            WHERE dtInsercao = DATE_FORMAT(CURDATE() - INTERVAL 12 MONTH, '%Y-%m-%d')
            AND bairro = '${bairro}'
        )
        SELECT 
            ROUND(((atual.dado_atual - anterior.dado_anopassado) / anterior.dado_anopassado) * 100, 2) AS taxa_valorizacao,
            atual.dado_atual,
            anterior.dado_anopassado
        FROM Dados AS atual
        CROSS JOIN DadosAnteriores AS anterior;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarIdh,
    buscarMediaValorM2,
    calcularPorcentagemRendaMaior,
    obterDensidadeBairro,
    buscarRankingBairro,
    buscarTaxaValorizacao
};