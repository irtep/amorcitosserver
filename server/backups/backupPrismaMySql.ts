/*
generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
  }
  
  model credentials {
    id       Int    @id @default(autoincrement())
    page     String @db.VarChar(100)
    username String @db.VarChar(300)
    password String @db.VarChar(300)
    userId   String @db.VarChar(100)
    user     user   @relation(fields: [userId], references: [id], onUpdate: Restrict, map: "fk_credentials_user")
  
    @@index([userId], map: "fk_credentials_user")
  }
  
  model user {
    id          String        @id @db.VarChar(100)
    username    String        @db.VarChar(300)
    password    String        @db.VarChar(300)
    admin       Boolean
    credentials credentials[]
  }
  */