var express = require("express");
var router = express.Router();

var densidadeDemograficaController = require("../controllers/densidadeDemograficaController");

router.post("/buscarDensidadeDemografica", function (req, res) {
    densidadeDemograficaController.buscarDensidadeDemografica(req, res);
})

module.exports = router;