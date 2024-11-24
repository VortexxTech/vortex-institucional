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

module.exports = router;