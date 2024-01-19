use master
go

create database PruebaTecnica
go

use PruebaTecnica
go

create table viviendas (
  id UNIQUEIDENTIFIER PRIMARY KEY,
  tipoDeVivienda VARCHAR(50) NOT NULL,
  zona VARCHAR(50) NOT NULL,
  direccion VARCHAR(155) NOT NULL,
  precio MONEY NOT NULL,
  tamano FLOAT NOT NULL,
  observaciones VARCHAR(500)
);
GO

INSERT INTO viviendas (id, tipoDeVivienda, zona, direccion, precio, tamano, observaciones)
VALUES
  (NEWID(), 'Unifamiliar', 'Urbana', 'Dirección1', 100000, 150.5, 'Observaciones1'),
  (NEWID(), 'Colectiva', 'Rural', 'Dirección2', 120000, 200.3, 'Observaciones2'),
  (NEWID(), 'Unifamiliar', 'Urbana', 'Dirección3', 95000, 130.2, 'Observaciones3'),
  (NEWID(), 'Colectiva', 'Rural', 'Dirección4', 110000, 180.7, 'Observaciones4'),
  (NEWID(), 'Unifamiliar', 'Urbana', 'Dirección5', 105000, 160.8, 'Observaciones5'),
  (NEWID(), 'Colectiva', 'Rural', 'Dirección6', 115000, 190.1, 'Observaciones6'),
  (NEWID(), 'Unifamiliar', 'Urbana', 'Dirección7', 90000, 120.4, 'Observaciones7'),
  (NEWID(), 'Colectiva', 'Rural', 'Dirección8', 130000, 220.6, 'Observaciones8'),
  (NEWID(), 'Unifamiliar', 'Urbana', 'Dirección9', 98000, 140.9, 'Observaciones9'),
  (NEWID(), 'Colectiva', 'Rural', 'Dirección10', 125000, 210.0, 'Observaciones10');
GO
