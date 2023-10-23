-- Criação da tabela de Usuários
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    senha VARCHAR(255) NOT NULL,
    login VARCHAR(50) NOT NULL UNIQUE
);

-- Criação da tabela de Skills
CREATE TABLE Skill (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela de Níveis de Skills
CREATE TABLE NivelSkill (
    id SERIAL PRIMARY KEY,
    nivel INT NOT NULL
);

-- Criação da tabela de Associação de Skills
CREATE TABLE UsuarioSkill (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES Usuario(id),
    skill_id INT REFERENCES Skill(id),
    nivel_id INT REFERENCES NivelSkill(id)
);

CREATE SEQUENCE usuario_id_sequence
    INCREMENT BY 1
    START WITH 1;
	
ALTER TABLE usuario
ALTER COLUMN id
SET DEFAULT nextval('usuario_id_sequence');

CREATE SEQUENCE ussk_id_sequence
    INCREMENT BY 1
    START WITH 1;
	
ALTER TABLE usuario_skill
ALTER COLUMN id
SET DEFAULT nextval('ussk_id_sequence');

CREATE SEQUENCE skill_id_sequence
    INCREMENT BY 1
    START WITH 1;
	
ALTER TABLE skill
ALTER COLUMN id
SET DEFAULT nextval('skill_id_sequence');

CREATE SEQUENCE nivel_id_sequence
    INCREMENT BY 1
    START WITH 1;
	
ALTER TABLE nivel
ALTER COLUMN id
SET DEFAULT nextval('nivel_id_sequence');