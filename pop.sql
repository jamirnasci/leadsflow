-- Inserindo dados na tabela de usuários
INSERT INTO Usuarios (Nome, Email, Senha) VALUES 
('João Silva', 'joao.silva@example.com', 'senha123'),
('Maria Oliveira', 'maria.oliveira@example.com', 'senha456'),
('Pedro Santos', 'pedro.santos@example.com', 'senha789');

-- Inserindo dados na tabela de leads
INSERT INTO Leads (Nome, Email, Telefone, Status, UsuarioID) VALUES 
('Empresa A', 'contato@empresaA.com', '123456789', 'Novo', 1),
('Empresa B', 'contato@empresaB.com', '987654321', 'Em Andamento', 2),
('Empresa C', 'contato@empresaC.com', '456789123', 'Convertido', 3),
('Empresa D', 'contato@empresaD.com', '654321987', 'Não Convertido', 1);

-- Inserindo dados na tabela de anotações
INSERT INTO Anotacoes (LeadID, UsuarioID, Conteudo) VALUES 
(1, 1, 'Primeiro contato feito por e-mail.'),
(2, 2, 'Telefonema agendado para próxima semana.'),
(3, 3, 'Lead convertido com sucesso.'),
(4, 1, 'Decidiram não avançar no momento.');

-- Verificando os dados inseridos
SELECT * FROM Usuarios;
SELECT * FROM Leads;
SELECT * FROM Anotacoes;

