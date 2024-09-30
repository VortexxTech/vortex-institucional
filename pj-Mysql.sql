create database VortexTech;

use VortexTech;

create table usuario (
idUsuario int primary key not null auto_increment,
nomeCompleto varchar(45) not null,
email varchar(45) not null,
senha varchar(45) not null
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
    preco_por_metro_quadrado INT NOT NULL,
    quantidade_quartos INT NOT NULL,
    id_localizacao INT,
    FOREIGN KEY (id_localizacao) REFERENCES Localizacao(id_localizacao)
);
