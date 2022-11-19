INSERT INTO [dbo].[Msv_ContactUs]
           ([RegDate]
           ,[FK_UserId]
           ,[FirstName]
           ,[lastName]
           ,[Email]
           ,[Message]
           ,[Details])
     VALUES
           (GETDATE()
           ,@UID
           ,@FirstName
           ,@lastName
           ,@Email
           ,@Message
           ,@Details)