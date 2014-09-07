
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/07/2014 23:52:42
-- Generated from EDMX file: E:\Projects\Angular_training\Angular_training\Angular_Training\WebAPI_Training\Models\NoteModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [BookDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_CategoryNote]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NoteSet] DROP CONSTRAINT [FK_CategoryNote];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[NoteSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NoteSet];
GO
IF OBJECT_ID(N'[dbo].[CategorySet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[CategorySet];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'NoteSet'
CREATE TABLE [dbo].[NoteSet] (
    [NoteId] int IDENTITY(1,1) NOT NULL,
    [Header] nvarchar(max)  NOT NULL,
    [Text] nvarchar(max)  NULL,
    [NoteCategory] int  NOT NULL
);
GO

-- Creating table 'CategorySet'
CREATE TABLE [dbo].[CategorySet] (
    [CategoryId] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [NoteId] in table 'NoteSet'
ALTER TABLE [dbo].[NoteSet]
ADD CONSTRAINT [PK_NoteSet]
    PRIMARY KEY CLUSTERED ([NoteId] ASC);
GO

-- Creating primary key on [CategoryId] in table 'CategorySet'
ALTER TABLE [dbo].[CategorySet]
ADD CONSTRAINT [PK_CategorySet]
    PRIMARY KEY CLUSTERED ([CategoryId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [NoteCategory] in table 'NoteSet'
ALTER TABLE [dbo].[NoteSet]
ADD CONSTRAINT [FK_CategoryNote]
    FOREIGN KEY ([NoteCategory])
    REFERENCES [dbo].[CategorySet]
        ([CategoryId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_CategoryNote'
CREATE INDEX [IX_FK_CategoryNote]
ON [dbo].[NoteSet]
    ([NoteCategory]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------