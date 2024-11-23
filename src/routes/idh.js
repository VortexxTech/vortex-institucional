const express = require("express");
const router = express.Router();
const idhController = require("../controllers/idhController");

router.get('/idh-grafico', idhController.buscarIdh);

module.exports = router;