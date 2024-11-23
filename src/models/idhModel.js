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

module.exports = {
    buscarIdh
};