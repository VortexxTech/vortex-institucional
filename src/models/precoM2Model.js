var database = require("../database/config");

function buscarZonasComMaiorPreco(){
    var instrucaoSql = `
SELECT zona, avg(valorM2) AS percentualValorizacao
FROM DadosInseridos
GROUP BY zona
ORDER BY percentualValorizacao DESC
LIMIT 1;
    `;
    console.log("Executando a consulta para zonas com maior preço de m²: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    
}



function buscarRegioesComMaiorPreco(){
    var instrucaoSql = `
      SELECT 
            bairro,
            AVG(valorM2) AS mediaValorM2
        FROM DadosInseridos
        GROUP BY bairro
        ORDER BY mediaValorM2 DESC
        LIMIT 6;
    `;
    console.log("Executando a consulta para os 6 bairros com maior preço de m²: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    
}

function buscarValorizacaoCidadeRegiao(limite_meses) {
    var instrucaoSql = `
    SELECT 
    bairro,max(valorM2)  AS zona FROM 
DadosInseridos GROUP BY bairro
ORDER BY zona DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL para a valorização: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarPrecoMedia(limite_meses) {
    var instrucaoSql = `
    SELECT 
    AVG(valorM2) AS mediaValorM2, 
    DATE_FORMAT(dtInsercao, '%Y-%m') AS mes
FROM DadosInseridos
WHERE cidade = 'SP'
GROUP BY DATE_FORMAT(dtInsercao, '%Y-%m')
ORDER BY mes DESC
LIMIT ${limite_meses};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarTopsIdh() {
    var instrucaoSql = `
  SELECT 
   DISTINCT bairro,
    (CAST(idh AS DECIMAL(3,2))) AS idh
FROM 
    DadosInseridos
ORDER BY 
    idh DESC
LIMIT 3;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarDataAtualizacao() {
    var instrucaoSql = `
  SELECT DATE_FORMAT(STR_TO_DATE(MAX(dtInsercao), '%Y-%m-%d'), '%d/%m/%Y') AS ultima_data_insercao
FROM DadosInseridos;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCapitaDemografica() {
    var instrucaoSql = `
WITH NormalizedData AS (
    SELECT bairro, 
           valorM2,  -- Mantendo o valorM2 para uso
           densidadeDemografica, 
           ((valorM2 - MIN(valorM2) OVER ()) / 
            (MAX(valorM2) OVER () - MIN(valorM2) OVER ())) AS renda_normalizada,  -- Normalizando valorM2
           ((densidadeDemografica - MIN(densidadeDemografica) OVER ()) / 
            (MAX(densidadeDemografica) OVER () - MIN(densidadeDemografica) OVER ()) ) AS densidade_normalizada
    FROM DadosInseridos
)
SELECT bairro, 
       valorM2 AS rendaPerCapita,  -- Renomeando valorM2 para rendaPerCapita na saída
       densidadeDemografica, 
       renda_normalizada,
       densidade_normalizada
FROM (
    SELECT * ,
           ROW_NUMBER() OVER (PARTITION BY bairro ORDER BY densidadeDemografica DESC) AS rn
    FROM NormalizedData
) subquery
WHERE rn = 1
ORDER BY densidadeDemografica DESC
LIMIT 5;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarPrecoMedia,
    buscarValorizacaoCidadeRegiao,
    buscarRegioesComMaiorPreco,
    buscarZonasComMaiorPreco,
    buscarTopsIdh,
    buscarDataAtualizacao,
    buscarCapitaDemografica
};