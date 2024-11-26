const express = require("express");
const router = express.Router();
const idhController = require("../controllers/idhController");

router.get('/idh-grafico', idhController.buscarIdh);

router.get('/media-m2-grafico', function (req, res) { 
    idhController.buscarGraficoMediaValorM2(req, res);
});

router.get('/porcentagem-renda', function (req, res) {
    idhController.calcularPorcentagemRenda(req, res);
});

router.get('/densidade-bairro', function (req, res) {
    idhController.obterDensidade(req, res);
});

router.get('/ranking-bairro', function (req, res) {
    idhController.buscarRanking(req, res);
});

router.get('/taxa-valorizacao', function (req, res) {
    idhController.buscarTaxaValorizacao(req, res);
});

////
router.get('/valor-m2', function (req, res) { 
    idhController.buscarValorM2(req, res);
});

module.exports = router;