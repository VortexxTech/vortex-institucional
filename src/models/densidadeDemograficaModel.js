var database = require("../database/config");

function buscarDensidadeDemografica(/*idUsuarioB,*/ limite_linhas) {

    var instrucaoSql = `SELECT 
        densidadeDemografica as DensidadeDemografica, 
        momento,
        DATE_FORMAT(momento,'%H:%i:%s'),
        fkUsuario
        FROM DadosInseridos
        WHERE fkUsuario = ${idUsuarioB}
        ORDER BY idCusto DESC LIMIT ${limite_linhas}`;

    // console.log("idUsuario:", idUsuarioB);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDensidadeDemografica
}