USE [master]
GO

EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'db_photographer'
GO

ALTER DATABASE [db_photographer] SET  SINGLE_USER WITH ROLLBACK IMMEDIATE
GO

DROP DATABASE [db_photographer]
GO

create database [db_photographer]
go

use [db_photographer]
go

CREATE TABLE [dbo].[Users] (
	[id]		[uniqueidentifier]	NOT NULL PRIMARY KEY DEFAULT(NEWSEQUENTIALID()),
	[username]	[nvarchar](50)		NOT NULL UNIQUE,
	[email]		[nvarchar](50)		NOT NULL UNIQUE,
	[password]	[nvarchar](255)		NOT NULL,
	[createdAt]	[datetimeoffset](7) NOT NULL,
	[updatedAt]	[datetimeoffset](7) NOT NULL,
)
GO

INSERT INTO [dbo].[Users]
	([username],[email],[password],[createdAt],[updatedAt])
VALUES
	('admin','sin@correo.com','123456',GETDATE(),GETDATE())
GO

select * from [Users]
go
