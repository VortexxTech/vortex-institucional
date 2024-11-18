var express = require("express");
var router = express.Router();

var rendaPerCaptaController = require("../controllers/rendaPerCaptaController");

router.post("/buscarRendaPerCapta", function (req, res) {
    rendaPerCaptaController.buscarRendaPerCapta(req, res);
})

module.exports = router;