
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/05/2014 18:11:37
-- Generated from EDMX file: C:\Users\equity_s1\Source\Repos\Angular_Training\Angular_Training\WebAPI_Training\Models\BookModel.edmx
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


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Category]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Category];
GO
IF OBJECT_ID(N'[dbo].[Note]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Note];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Categories'
CREATE TABLE [dbo].[Categories] (
    [CategoryId] int  NOT NULL,
    [Name] nchar(50)  NULL
);
GO

-- Creating table 'Notes'
CREATE TABLE [dbo].[Notes] (
    [NoteId] int  NOT NULL,
    [Header] varchar(50)  NOT NULL,
    [Text] varchar(max)  NULL,
    [Category_CategoryId] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [CategoryId] in table 'Categories'
ALTER TABLE [dbo].[Categories]
ADD CONSTRAINT [PK_Categories]
    PRIMARY KEY CLUSTERED ([CategoryId] ASC);
GO

-- Creating primary key on [NoteId] in table 'Notes'
ALTER TABLE [dbo].[Notes]
ADD CONSTRAINT [PK_Notes]
    PRIMARY KEY CLUSTERED ([NoteId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Category_CategoryId] in table 'Notes'
ALTER TABLE [dbo].[Notes]
ADD CONSTRAINT [FK_CategoryNote]
    FOREIGN KEY ([Category_CategoryId])
    REFERENCES [dbo].[Categories]
        ([CategoryId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_CategoryNote'
CREATE INDEX [IX_FK_CategoryNote]
ON [dbo].[Notes]
    ([Category_CategoryId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------