// testConnection.js
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

const mysql = require('mysql2');  // ou 'mysql' dependendo do seu pacote

// Criando a conexão usando as variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,           // Carrega a variável de ambiente DB_HOST
    user: process.env.DB_USER,           // Carrega a variável de ambiente DB_USER
    password: process.env.DB_PASSWORD,   // Carrega a variável de ambiente DB_PASSWORD
    database: process.env.DB_DATABASE    // Carrega a variável de ambiente DB_DATABASE
});

// Verificando a conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ', err.message);  // Se houver erro na conexão
    } else {
        console.log('Conexão bem-sucedida com o banco de dados!');  // Se a conexão for bem-sucedida
    }

    connection.end();  // Fecha a conexão
});