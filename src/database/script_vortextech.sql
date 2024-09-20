create database feHumanidade;

use feHumanidade;

create table usuario (
idUsuario int primary key not null auto_increment,
nomeCompleto varchar(45) not null,
dtNasc char(10) not null,
telefone varchar(16) not null,
email varchar(45) not null,
senha varchar(45) not null
);

select * from usuario;

create table religiao(
idReligiao int primary key auto_increment,
religiao varchar(45),
momentoReligiao datetime,
fkUsuario int,
	foreign key (fkUsuario) references usuario(idUsuario)
);

select * from religiao;

create table game (
idGame int primary key auto_increment,
pontos varchar(45),
momento datetime,
fkUsuario int,
	foreign key (fkUsuario) references usuario(idUsuario)
);

select * from game;

create table comentarios (
idComentario int primary key auto_increment,
titulo varchar(100),
descricao varchar(250),
fkUsuario int,
	foreign key (fkUsuario) references usuario (idUsuario)
);

select * from comentarios;