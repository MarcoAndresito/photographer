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
	[id]		[uniqueidentifier]	NOT NULL,
	[username]	[nvarchar](50)		NOT NULL,
	[email]		[nvarchar](50)		NOT NULL,
	[password]	[nvarchar](255)		NOT NULL,
	[createdAt]	[datetimeoffset](7) NOT NULL,
	[updatedAt]	[datetimeoffset](7) NOT NULL,
	PRIMARY KEY CLUSTERED	( [id] ASC )		WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
	UNIQUE NONCLUSTERED		( [email] ASC )		WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
	UNIQUE NONCLUSTERED		( [username] ASC )	WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Users]
	([id],[username],[email],[password],[createdAt],[updatedAt])
VALUES
	(NEWID(),'admin','sin@correo.com','123456',GETDATE(),GETDATE())
GO

select * from [Users]
go
