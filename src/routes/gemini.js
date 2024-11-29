// importando os bibliotecas necessárias
const express = require("express");
var router = express.Router();

var geminiController = require("../controllers/geminiController");

// carregando as variáveis de ambiente do projeto do arquivo .env
require("dotenv").config();

// rota para receber perguntas e gerar respostas
router.post("/perguntar", async (req, res) => {
    geminiController.perguntar(req, res);
});

module.exports = router;