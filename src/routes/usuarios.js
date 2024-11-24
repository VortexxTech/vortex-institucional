var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res)
})

router.patch("/atualizar/:id", function (req, res) {
    usuarioController.atualizar(req, res)
})

router.delete("/deletar/:id", function (req, res) {
    usuarioController.deletar(req, res)
})

module.exports = router;