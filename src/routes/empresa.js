var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrarEmp", function (req, res) {
    empresaController.cadastrarEmp(req, res);
})

router.post("/autenticarEmp", function (req, res) {
    empresaController.autenticarEmp(req, res);
});

router.get("/listar", function (req, res) {
    empresaController.listar(req, res)
})

router.patch("/atualizar/:id", function (req, res) {
    empresaController.atualizar(req, res)
})

router.delete("/deletar/:id", function (req, res) {
    empresaController.deletar(req, res)
})

module.exports = router;