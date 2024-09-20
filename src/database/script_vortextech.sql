create database VortexTech;

use VortexTech;

create table usuario (
idUsuario int primary key not null auto_increment,
nomeCompleto varchar(45) not null,
email varchar(45) not null,
senha varchar(45) not null
);

select * from usuario;