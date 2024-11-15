var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var precoM2Router = require("./src/routes/precoM2");
var idhRouter = require("./src/routes/idh");
var rendaPerCaptaRouter = require("./src/routes/rendaPerCapta");
var densidadeDemograficaRouter = require("./src/routes/densidadeDemografica");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/pages")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/precoM2", precoM2Router);
app.use("/idh", idhRouter);
app.use("/rendaPerCapta", rendaPerCaptaRouter);
app.use("/densidadeDemografica", densidadeDemograficaRouter);


app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
