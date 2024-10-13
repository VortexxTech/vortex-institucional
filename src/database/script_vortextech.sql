create database VortexTech;

use VortexTech;

CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    id_localizacao INT,
    FOREIGN KEY (id_localizacao) REFERENCES Localizacao(id_localizacao)
);


select * from usuario;

CREATE TABLE Localizacao (
    id_localizacao INT PRIMARY KEY AUTO_INCREMENT,
    endereco VARCHAR(255) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    cep VARCHAR(20)
);

CREATE TABLE Predio (
    id_predio INT PRIMARY KEY AUTO_INCREMENT,
    numero_pessoas INT NOT NULL,
    preco_por_metro_quadrado DECIMAL(10, 2) NOT NULL,
    quantidade_quartos INT NOT NULL,
    id_localizacao INT,
    FOREIGN KEY (id_localizacao) REFERENCES Localizacao(id_localizacao)
);
