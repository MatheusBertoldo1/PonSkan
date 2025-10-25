// Importando o Express com ES6 Modules
import express from "express"

//Importando o Sequelize (arquivo de conexao)
import connection from "./config/sequelize-config.js"

// Iniciando o Express na variável app
const app = express()

// Configurando o express para permitir o recebimento de dados vindos de formulários
app.use(express.urlencoded({extended: false}))

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs")

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"))

// Iniciando o servidor
const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});

// Realizando a conexao com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão realizada com sucesso")
}).catch(error => {
    console.log(error)
})

// Criando o banco de dados (se ele ainda não existir)
connection.query(`create database if not exists ponskan`).then(() => console.log("Banco criado")).catch(error => console.log(error))

// Importando os models
import {GetUser} from "./models/User.js"

// Definindo a rota principal
app.get("/", function (_req, res) {
  res.render("index");
});

// Importando os Controllers
import HomeController from './controllers/HomeController.js'
import LoginController from './controllers/LoginController.js'
import MakeAccountController from './controllers/MakeAccountController.js'
import ConfigAccount from './controllers/ConfigAccount.js'
import MapController from './controllers/MapController.js'
import HelpController from './controllers/HelpController.js'
import AnalysisController from './controllers/AnalysisController.js'
import Reports from './controllers/ReportsController.js'

// Definindo o uso das rotas dos Controllers
app.use('/', HomeController)
app.use('/', LoginController)
app.use('/', MakeAccountController)
app.use('/', ConfigAccount)
app.use('/', MapController)
app.use('/', HelpController)
app.use('/', AnalysisController)
app.use('/', Reports)