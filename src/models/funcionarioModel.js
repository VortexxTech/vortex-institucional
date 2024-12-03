var database = require("../database/config")

function cadastrarFunc(idUsuario, cpf, cargo) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",cpf, cargo);

    var instrucaoSql = `
        INSERT INTO Funcionario (idFuncionario, fkUsuario, cpf , cargo) VALUES (default, '${idUsuario}', '${cpf}', '${cargo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():");

    var instrucaoSql = `SELECT idFuncionario, fkUsuario, nome, cargo, cpf FROM Funcionario JOIN Usuario ON fkUsuario = idUsuario;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(id, idUsuario, cpf, cargo) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():",cpf, cargo);

    var instrucaoSql = `UPDATE Funcionario SET
    idUsuario = "${idUsuario}",
    cpf = "${cpf}",
    cargo = "${cargo}"
    WHERE idFuncionario = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(id) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");

    var instrucaoSql = `DELETE FROM Funcionario WHERE idFuncionario = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function validar(idUsuario) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():");

    var instrucaoSql = `SELECT idFuncionario, fkUsuario, cargo, FROM Funcionario JOIN Usuario ON fkUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarFunc,
    listar,
    atualizar,
    deletar,
    validar
};