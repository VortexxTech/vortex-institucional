var express = require("express");
var router = express.Router();

var idhController = require("../controllers/idhController");

router.post("/buscarIdh", function (req, res) {
    idhController.buscarIdh(req, res);
})

module.exports = router;