var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.post("/cadastrarFunc", function (req, res) {
    funcionarioController.cadastrarFunc(req, res);
})

router.get("/listar", function (req, res) {
    funcionarioController.listar(req, res)
})

router.patch("/atualizar/:id", function (req, res) {
    funcionarioController.atualizar(req, res)
})

router.delete("/deletar/:id", function (req, res) {
    funcionarioController.deletar(req, res)
})

router.get("/validar/:id", function (req, res){
    funcionarioController.validar(req, res)
})

module.exports = router;