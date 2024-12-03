var empresaModel = require("../models/empresaModel");

function autenticarEmp(req, res) {
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;

    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        empresaModel.autenticarEmp(cnpj, senha)
            .then(
                function (resultadoAutenticarEmp) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticarEmp.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticarEmp)}`);

                    if (resultadoAutenticarEmp.length == 1) {
                        res.status(200).send(resultadoAutenticarEmp);

                        res.status(200).json({
                            id: resultadoAutenticarEmp[0].idEmpresa,
                            nome: resultadoAutenticarEmp[0].nome,
                            cnpj: resultadoAutenticarEmp[0].cnpj,
                            cep: resultadoAutenticarEmp[0].cep,
                            cidade: resultadoAutenticarEmp[0].cidade,
                            bairro: resultadoAutenticarEmp[0].bairro,
                            numero: resultadoAutenticarEmp[0].numero,
                            senha: resultadoAutenticarEmp[0].senha
                        });
                    } else if (resultadoAutenticarEmp.length == 0) {
                        res.status(403).send("CNPJ e/ou Senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de uma empresa com o mesmo cnpj!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o Cadastro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEmp(req, res) {
    var nome = req.body.nomeServer;
    var cnpj = req.body.cnpjServer;
    var cep = req.body.cepServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var numero = req.body.numeroServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está indefinido");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está indefinida!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está indefinida!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está indefinida!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está indefinida!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        empresaModel.cadastrarEmp(nome, cnpj, cep, cidade, bairro, numero, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    empresaModel.listar()
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
    var nome = req.body.nomeServer;

    if (id == undefined) {
        res.status(400).send("O id da empresa está indefinido!");
    } else if (nome == undefined) {
        res.status(400).send("O nome da empresa está indefinido!");
    } else {
        empresaModel.atualizar(id, nome)
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
    var id = req.params.id;

    if (id == undefined) {
        res.status(400).send("O id da empresa está indefinido!");
    } else {
        empresaModel.deletar(id)
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
    autenticarEmp,
    cadastrarEmp,
    listar,
    atualizar,
    deletar
}