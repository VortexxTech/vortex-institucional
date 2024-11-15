var express = require("express");
var router = express.Router();

var precoM2Controller = require("../controllers/precoM2Controller");

router.post("/buscarPreco", function (req, res) {
    precoM2Controller.buscarPreco(req, res);
})

module.exports = router;