USE [master]
GO
/****** Object:  Database [YES]    Script Date: 8/2/2021 12:22:23 PM ******/
CREATE DATABASE [YES]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'YES', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\YES.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'YES_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\YES_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [YES] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [YES].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [YES] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [YES] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [YES] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [YES] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [YES] SET ARITHABORT OFF 
GO
ALTER DATABASE [YES] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [YES] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [YES] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [YES] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [YES] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [YES] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [YES] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [YES] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [YES] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [YES] SET  DISABLE_BROKER 
GO
ALTER DATABASE [YES] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [YES] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [YES] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [YES] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [YES] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [YES] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [YES] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [YES] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [YES] SET  MULTI_USER 
GO
ALTER DATABASE [YES] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [YES] SET DB_CHAINING OFF 
GO
ALTER DATABASE [YES] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [YES] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [YES] SET DELAYED_DURABILITY = DISABLED 
GO
USE [YES]
GO
/****** Object:  Table [dbo].[article]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[article](
	[id] [numeric](18, 0) NULL,
	[date] [datetime] NULL,
	[title] [varchar](max) NULL,
	[short_desc] [varchar](max) NULL,
	[banner_img] [varchar](max) NULL,
	[long_desc] [varchar](max) NULL,
	[author] [varchar](200) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CMS_fileupload]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CMS_fileupload](
	[fileid] [int] NULL,
	[filename] [varchar](200) NULL,
	[filetype] [varchar](100) NULL,
	[filepath] [varchar](max) NULL,
	[category] [varchar](50) NULL,
	[userid] [varchar](50) NULL,
	[date] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CMS_login]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CMS_login](
	[userid] [varchar](100) NULL,
	[password] [varchar](200) NULL,
	[type] [varchar](100) NULL,
	[email] [varchar](100) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CMS_session]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CMS_session](
	[userid] [varchar](100) NULL,
	[token] [varchar](200) NULL,
	[type] [varchar](100) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[deals]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[deals](
	[dealtype] [varchar](100) NULL,
	[discription] [nvarchar](max) NULL,
	[prices] [varchar](50) NULL,
	[sector] [varchar](100) NULL,
	[title] [varchar](100) NULL,
	[year] [nvarchar](50) NULL,
	[createddate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[media]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[media](
	[Link_Name] [varchar](500) NULL,
	[MediaType] [varchar](50) NULL,
	[Link_URL] [varchar](max) NULL,
	[CreatedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[pages]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[pages](
	[page_name] [varchar](50) NULL,
	[initial_content] [varchar](max) NULL,
	[current_content] [varchar](max) NULL,
	[last_content] [varchar](max) NULL,
	[modified_content] [varchar](max) NULL,
	[pending_approval] [varchar](50) NULL,
	[changed_by] [varchar](50) NULL,
	[approved_by] [varchar](50) NULL,
	[change_date] [datetime] NULL,
	[approve_date] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[sebi_data]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[sebi_data](
	[month] [numeric](18, 0) NULL,
	[Beginning_of_Month] [numeric](18, 0) NULL,
	[Received_during_Month] [numeric](18, 0) NULL,
	[Pending_End_of_Month] [numeric](18, 0) NULL,
	[Reasons_for_Pendency] [varchar](500) NULL,
	[Resolved_during_Month] [numeric](18, 0) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[CheckPassword]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CheckPassword]
@userid VARCHAR(100),
@password varchar(200)

AS
BEGIN


IF EXISTS(SELECT * FROM CMS_login WHERE userid = @userid AND password = @password)
    SELECT 'true' AS UserExists
ELSE
    SELECT 'false' AS UserExists

END


GO
/****** Object:  StoredProcedure [dbo].[CMS_AllFiles]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[CMS_AllFiles]
@filetype varchar(50)

AS

begin
select * from CMS_fileupload where filetype=@filetype
end


GO
/****** Object:  StoredProcedure [dbo].[CMS_CheckUserSession]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[CMS_CheckUserSession]
@userid VARCHAR(100)

AS

begin

select * from CMS_session where userid = @userid

end 

GO
/****** Object:  StoredProcedure [dbo].[CMS_getpage]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[CMS_getpage]
@pagename varchar(50),
@mode varchar(10)

AS

if(@mode='1')
begin
select page_name,current_content from pages where page_name=@pagename
end

else if(@mode='2')
begin
select page_name,modified_content from pages where page_name=@pagename
end

GO
/****** Object:  StoredProcedure [dbo].[CMS_InsertFile]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[CMS_InsertFile]
@filename varchar(100),
@filetype varchar(50),
@filepath varchar(100),
@category varchar(50),
@userid varchar(50)

AS

BEGIN

declare @file_id AS INT;
select @file_id = (select max(fileid) from CMS_fileupload ) +1

insert into CMS_fileupload values (@file_id, @filename, @filetype, @filepath, @category, @userid, getdate() )
END


GO
/****** Object:  StoredProcedure [dbo].[CMS_Modifypage]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[CMS_Modifypage]
@pagename varchar(100),
@pagedata varchar(max),
@userid varchar(100)


AS

update pages set modified_content=@pagedata, changed_by=@userid, change_date=getdate(),pending_approval='yes'
 where page_name =@pagename

GO
/****** Object:  StoredProcedure [dbo].[CMS_pagelist]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[CMS_pagelist]

AS
begin
select page_name, change_date,changed_by,pending_approval from pages
end

GO
/****** Object:  StoredProcedure [dbo].[CMS_userlogin]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[CMS_userlogin]
@userid VARCHAR(100),
@password varchar(200)

AS

declare @check_password AS varchar(200);
select @check_password = ( select password from CMS_login where userid = @userid )

if (@check_password = @password)
begin

declare @token AS varchar(200);
declare @type AS varchar(100);

select @type = (select type from CMS_login where userid = @userid )
select @token = (SELECT LEFT(CAST(RAND()*1000000000 AS INT),6))

--insert into CMS_session values (@userid,@token,@type);

if not exists (Select userid from CMS_session where userid =@userid)
    Begin
         insert into CMS_session values (@userid,@token,@type);  
    End
Else
    Begin
         update CMS_session set token=@token
    End 

select 'authenticated' as result

end

else if (@check_password <> @password)
begin
	select 'invalid password' as result
end 

else if (@check_password is null)
begin
	select 'invalid password' as result
end 


GO
/****** Object:  StoredProcedure [dbo].[GetArticleListdata]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[GetArticleListdata]
@id numeric(18)

As

if(@id=0)
begin
select id,date,title, banner_img,short_desc,author from article order by id desc
end

else if(@id  <> 0)
begin

select * from article
where id=@id
end


GO
/****** Object:  StoredProcedure [dbo].[GetDealData]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[GetDealData]
@dealtype varchar(100),
@sector varchar(100)

As

if(@dealtype='all' and @sector='all')
begin
select * from deals order by dealtype
end

else if (@dealtype='all')
begin
select * from deals where sector=@sector order by dealtype
end

else if (@sector ='all')
begin
select * from deals where dealtype=@dealtype order by dealtype
end 


GO
/****** Object:  StoredProcedure [dbo].[GetMediaData]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GetMediaData]
@MediaType varchar(50)
AS

select * from media where MediaType=@MediaType


GO
/****** Object:  StoredProcedure [dbo].[getpage]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[getpage]
@pagename varchar(50)

AS
begin
select page_name,current_content from pages where page_name=@pagename
end

GO
/****** Object:  StoredProcedure [dbo].[GetSebiData]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GetSebiData]
@month numeric(18)

AS

select * from sebi_data where month=@month


GO
/****** Object:  StoredProcedure [dbo].[ModifyArticleListdata]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[ModifyArticleListdata]
@action varchar(50),
@article_id numeric(18),
@article_title varchar(max),
@article_shortdesc varchar(max),
@article_banner varchar(max),
@article_longdesc varchar(max),
@article_author varchar(200)

AS


--select @temp_article_id

if(@action='new')
begin

declare @temp_article_id AS INT;
select @temp_article_id = (select max(id) from article ) +1

insert into article values (@temp_article_id,getdate(),@article_title,@article_shortdesc,@article_banner,@article_longdesc,@article_author)
end

else if(@action='update')
begin
if(@article_banner='')
begin
update article set title=@article_title, short_desc=@article_shortdesc, long_desc=@article_longdesc, author=@article_author
where id=@article_id
end

else
begin
update article set title=@article_title, short_desc=@article_shortdesc, banner_img=@article_banner, long_desc=@article_longdesc, author=@article_author
where id=@article_id
end


end

else if(@action='delete')
begin
delete from article where id=@article_id
end




GO
/****** Object:  StoredProcedure [dbo].[ModifySebiData]    Script Date: 8/2/2021 12:22:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[ModifySebiData]
@month numeric(18),
@begin_month numeric(18),
@receive_month numeric(18),
@pending_month numeric(18),
@reason varchar(500),
@resolve_month numeric(18)


AS


begin

update  sebi_data set Beginning_of_Month=@begin_month, Received_during_Month=@receive_month, Pending_End_of_Month=@pending_month,
Reasons_for_Pendency=@reason, Resolved_during_Month=@resolve_month where month=@month
end



GO
USE [master]
GO
ALTER DATABASE [YES] SET  READ_WRITE 
GO
