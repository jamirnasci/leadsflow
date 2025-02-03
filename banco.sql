-- Criando o banco de dados
CREATE DATABASE leadflow;

-- Usando o banco de dados
USE leadflow;

-- Criando a tabela de usuários
CREATE TABLE Usuarios (
    UsuarioID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL,
    DataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criando a tabela de leads
CREATE TABLE Leads (
    LeadID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefone VARCHAR(15),
    Status ENUM('Novo', 'Em Andamento', 'Convertido', 'Não Convertido') DEFAULT 'Novo',
    UsuarioID INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    DataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criando a tabela de anotações
CREATE TABLE Anotacoes (
    AnotacaoID INT AUTO_INCREMENT PRIMARY KEY,
    LeadID INT,
    UsuarioID INT,
    Conteudo TEXT NOT NULL,
    DataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (LeadID) REFERENCES Leads(LeadID),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);
