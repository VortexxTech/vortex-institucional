var database = require("../database/config")

function autenticarEmp(cnpj, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        SELECT idEmpresa, nome, cnpj FROM Empresa WHERE cnpj = '${cnpj}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarEmp(nome, cnpj, cep, cidade, bairro, numero, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, cnpj, cep, cidade, bairro, numero, senha);

    var instrucaoSql = `INSERT INTO Empresa (idEmpresa, nome, cnpj, cep, cidade, bairro, numero, senha) VALUES (default, '${nome}', '${cnpj}', '${cep}','${cidade}','${bairro}','${numero}', '${senha}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():");

    var instrucaoSql = "SELECT idEmpresa, nome, cnpj, cep, cidade, bairro, numero FROM Empresa;"
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(id, nome, cnpj, cep, cidade, bairro, numero) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():", nome, cnpj, cep, cidade, bairro, numero);

    var instrucaoSql = `UPDATE Empresa SET 
    nome = "${nome}", 
    cnpj = "${cnpj}", 
    cep = "${cep}", 
    cidade = "${cidade}", 
    bairro = "${bairro}", 
    numero = "${numero}" 
    WHERE idEmpresa = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(id) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");

    var instrucaoSql = `DELETE FROM Empresa WHERE idEmpresa = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticarEmp,
    cadastrarEmp,
    listar,
    atualizar,
    deletar
};