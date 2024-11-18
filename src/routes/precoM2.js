var express = require("express");
var router = express.Router();
var precoM2Controller = require("../controllers/precoM2Controller");

router.get("/buscarPreco", function (req, res) {
    precoM2Controller.buscarPreco(req, res);
});

router.get("/buscarValorizacao", function (req, res) {
    precoM2Controller.buscarValorizacao(req, res);
});

router.get("/buscarRegioesComMaiorPreco", function (req, res) {
    precoM2Controller.buscarRegioesComMaiorPreco(req, res);
});

router.get("/buscarZonasComMaiorPreco", function (req, res) {
    precoM2Controller.buscarZonasComMaiorPreco(req, res);
});

router.get("/buscarTopsIdh", function (req, res) {
    precoM2Controller.buscarTopsIdh(req, res);
});

router.get("/buscarDataAtualizacao", function (req, res) {
    precoM2Controller.buscarDataAtualizacao(req, res);
});

module.exports = router;