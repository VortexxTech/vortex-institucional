var database = require("../database/config");

function buscarZonasComMaiorPreco(){
    var instrucaoSql = `
SELECT 
    valorMesAtual.zona,
    ROUND((valorMesAtual.mediaValorM2 - valorMesAnterior.mediaValorM2) / valorMesAnterior.mediaValorM2 * 100, 2) AS percentualValorizacao
FROM 
    (SELECT 
         zona,
         AVG(valorM2) AS mediaValorM2
     FROM DadosInseridos
     WHERE cidade = 'SP' AND DATE_FORMAT(dtInsercao, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m')
     GROUP BY zona) AS valorMesAtual
JOIN 
    (SELECT 
         zona,
         AVG(valorM2) AS mediaValorM2
     FROM DadosInseridos
     WHERE cidade = 'SP' AND DATE_FORMAT(dtInsercao, '%Y-%m') = DATE_FORMAT(CURDATE() - INTERVAL 1 MONTH, '%Y-%m')
     GROUP BY zona) AS valorMesAnterior
ON valorMesAtual.zona = valorMesAnterior.zona
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
        WHERE cidade = 'SP'
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
    valorMesAtual.zona,
    valorMesAtual.bairro,
    valorMesAtual.cidade,
    ROUND((valorMesAtual.mediaValorM2 - valorMesAnterior.mediaValorM2) / valorMesAnterior.mediaValorM2 * 100, 2) AS percentualValorizacao
FROM 
    (SELECT 
         zona,
         bairro,
         cidade,
         AVG(valorM2) AS mediaValorM2
     FROM DadosInseridos
     WHERE cidade = 'SP' AND DATE_FORMAT(dtInsercao, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m')
     GROUP BY zona, bairro, cidade) AS valorMesAtual
JOIN 
    (SELECT 
         zona,
         bairro,
         cidade,
         AVG(valorM2) AS mediaValorM2
     FROM DadosInseridos
     WHERE cidade = 'SP' AND DATE_FORMAT(dtInsercao, '%Y-%m') = DATE_FORMAT(CURDATE() - INTERVAL 1 MONTH, '%Y-%m')
     GROUP BY zona, bairro, cidade) AS valorMesAnterior
ON valorMesAtual.zona = valorMesAnterior.zona 
   AND valorMesAtual.bairro = valorMesAnterior.bairro 
ORDER BY percentualValorizacao DESC
LIMIT 1;
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
           rendaPerCapita, 
           densidadeDemografica, 
           ((rendaPerCapita - MIN(rendaPerCapita) OVER ()) / 
            (MAX(rendaPerCapita) OVER () - MIN(rendaPerCapita) OVER ())) AS renda_normalizada,
           ((densidadeDemografica - MIN(densidadeDemografica) OVER ()) / 
            (MAX(densidadeDemografica) OVER () - MIN(densidadeDemografica) OVER ())) AS densidade_normalizada,
           (((rendaPerCapita - MIN(rendaPerCapita) OVER ()) / 
             (MAX(rendaPerCapita) OVER () - MIN(rendaPerCapita) OVER ())) +
            ((densidadeDemografica - MIN(densidadeDemografica) OVER ()) / 
             (MAX(densidadeDemografica) OVER () - MIN(densidadeDemografica) OVER ()))) / 2 AS score_final
    FROM DadosInseridos
)
SELECT bairro, 
       rendaPerCapita, 
       densidadeDemografica, 
       renda_normalizada,
       densidade_normalizada,
       score_final
FROM (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY bairro ORDER BY score_final DESC) AS rn
    FROM NormalizedData
) subquery
WHERE rn = 1
ORDER BY score_final DESC
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