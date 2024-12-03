var funcionarioModel = require("../models/funcionarioModel");

function cadastrarFunc(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var cpf = req.body.cpfServer;
    var idEmpresa = req.body.idEmpresaServer;
    var cargo = req.body.cargoServer;

    if (idUsuario == undefined) {
        res.status(400).send("O id de usuario desse funcionario está indefinido!");
    } else if (cpf == undefined) {
        res.status(400).send("O cpf está indefinido!");
    } else if(idEmpresa == undefined) {
        res.status(400).send("O id da empresa está indefinido!");
    } else if (cargo == undefined) {
        res.status(400).send("O cargo está indefinido");
    } else {

        funcionarioModel.cadastrarFunc(idUsuario, cpf, idEmpresa, cargo)
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

function atualizar(req, res) {
    var id = req.params.id;
    var cargo = req.body.cargoServer;

    if (id == undefined) {
        res.status(400).send("O id do funcionario está indefinido!");
    } else if (cargo == undefined) {
        res.status(400).send("O cargo do funcionario está indefinido!");
    } else {
        funcionarioModel.atualizar(id, cargo)
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
    var id = req.params.id

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

function validar(req, res) {
    var idUsuario = req.params.id;

    if (idUsuario == undefined) {
        res.status(400).send("Seu usuário está indefinida!");
    } else {

        funcionarioModel.validar(idUsuario)
            .then(
                function (resultadoValidar) {
                    console.log(`\nResultados encontrados: ${resultadoValidar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoValidar)}`);

                    if (resultadoValidar.length == 1) {
                        res.status(200).send(resultadoValidar);

                        res.status(200).json({
                            id: resultadoValidar[0].idUsuario,
                            cargo: resultadoValidar[0].cargo
                        });



                    } else if (resultadoValidar.length == 0) {
                        res.status(403).send("Usuário e/ou cargo inválido(s)");
                    } else {
                        res.status(403).send("Mais de um funcionario com o mesmo usuario!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a validação! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarFunc,
    listar,
    atualizar,
    deletar,
    validar
}