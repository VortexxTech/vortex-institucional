var funcionarioModel = require("../models/funcionarioModel");

function cadastrarFunc(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var cpf = req.body.cpfServer;
    var cargo = req.body.cargoServer;


    if (idUsuario == undefined) {
        res.status(400).send("O id de usuario desse funcionario está indefinido!");
    } else if (cpf == undefined) {
        res.status(400).send("O cpf está indefinido!");
    } else if (cargo == undefined) {
        res.status(400).send("O cargo está indefinido");
    } else {

        funcionarioModel.cadastrarFunc(idUsuario, cpf, cargo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do seu funcionario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    var id = req.params.id;

    if (id == undefined) {
        res.status(400).send("O id do funcionário está indefinido!");
    } else {
        funcionarioModel.listar()
            .then(function (resultado) {
                res.json(resultado)
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao listar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar(req, res) {
    var id = req.body.id;
    var idUsuario = req.body.idUsuarioServer;
    var cpf = req.body.cpfServer;
    var cargo = req.body.cargoServer;

    if (id == undefined) {
        res.status(400).send("O id do funcionario está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id de usuario desse funcionario está indefinido!");
    } else if (cpf == undefined) {
        res.status(400).send("O cpf do funcionario está indefinido!");
    } else if (cargo == undefined) {
        res.status(400).send("O cargo do funcionario está indefinido!");
    } else {
        funcionarioModel.atualizar(id, idUsuario, cpf ,cargo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    var id = req.body.id;

    if (id == undefined) {
        res.status(400).send("O id do funcionário está indefinido!");
    } else {
        funcionarioModel.deletar(id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao deletar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarFunc,
    listar,
    atualizar,
    deletar
}