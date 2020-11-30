# Migration `20201130115746-new`

This migration has been generated by ykn88 at 11/30/2020, 5:27:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "ProductProfile_productId_unique"

PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Documents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "desc" TEXT,
    "productId" INTEGER,

    FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Documents" ("id", "name", "desc") SELECT "id", "name", "desc" FROM "Documents";
DROP TABLE "Documents";
ALTER TABLE "new_Documents" RENAME TO "Documents";
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL,
    "short" TEXT,
    "long" TEXT,
    "videoUrl" TEXT,
    "productHeadId" INTEGER NOT NULL,

    FOREIGN KEY ("productHeadId") REFERENCES "ProductHeader"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("id", "name", "price", "productHeadId") SELECT "id", "name", "price", "productHeadId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON

PRAGMA foreign_keys=off;
DROP TABLE "ProductProfile";
PRAGMA foreign_keys=on

PRAGMA foreign_keys=off;
DROP TABLE "ProductToDocuments";
PRAGMA foreign_keys=on
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201126084642-total6..20201130115746-new
--- datamodel.dml
+++ datamodel.dml
@@ -1,156 +1,138 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
-
-datasource db {
-  provider = "sqlite"
-  url = "***"
-}
-
-generator client {
-  provider = "prisma-client-js"
-}
-
-model Account {
-  id                 Int       @default(autoincrement()) @id
-  compoundId         String    @unique @map(name: "compound_id")
-  userId             Int       @map(name: "user_id")
-  providerType       String    @map(name: "provider_type")
-  providerId         String    @map(name: "provider_id")
-  providerAccountId  String    @map(name: "provider_account_id")
-  refreshToken       String?   @map(name: "refresh_token")
-  accessToken        String?   @map(name: "access_token")
-  accessTokenExpires DateTime? @map(name: "access_token_expires")
-  createdAt          DateTime  @default(now()) @map(name: "created_at")
-  updatedAt          DateTime  @default(now()) @map(name: "updated_at")
-
-  @@index([providerAccountId], name: "providerAccountId")
-  @@index([providerId], name: "providerId")
-  @@index([userId], name: "userId")
-
-  @@map(name: "accounts")
-}
-
-model Session {
-  id           Int      @default(autoincrement()) @id
-  userId       Int      @map(name: "user_id")
-  expires      DateTime
-  sessionToken String   @unique @map(name: "session_token")
-  accessToken  String   @unique @map(name: "access_token")
-  createdAt    DateTime @default(now()) @map(name: "created_at")
-  updatedAt    DateTime @default(now()) @map(name: "updated_at")
-
-  @@map(name: "sessions")
-}
-
-model User {
-  id            Int       @default(autoincrement()) @id
-  name          String?
-  email         String?   @unique
-  emailVerified DateTime? @map(name: "email_verified")
-  image         String?
-  role          String    @default("user") 
-  password      String?
-  businessName  String?
-  asker         ServiceHistory[]  @relation("Asker")
-  provider      ServiceHistory[]  @relation("Provider")
-  createdAt     DateTime  @default(now()) @map(name: "created_at")
-  updatedAt     DateTime  @default(now()) @map(name: "updated_at")
-
-  @@map(name: "users")
-}
-
-model VerificationRequest {
-  id         Int      @default(autoincrement()) @id
-  identifier String
-  token      String   @unique
-  expires    DateTime
-  createdAt  DateTime  @default(now()) @map(name: "created_at")
-  updatedAt  DateTime  @default(now()) @map(name: "updated_at")
-
-  @@map(name: "verification_requests")
-}
-
-model Category {
-  id        Int      @default(autoincrement()) @id
-  name      String
-  productHead   ProductHeader[]
-}
-
-model ProductHeader {
-  id         Int   @default(autoincrement()) @id
-  name       String
-  category   Category  @relation(fields: [categoryId], references: [id])
-  categoryId  Int
-  product     Product[]
-}
-
-model Product {
-  id        Int      @default(autoincrement())  @id
-  name      String
-  price     Float
-  productHead  ProductHeader  @relation(fields: [productHeadId], references: [id])
-  productHeadId Int
-  profile    ProductProfile?
-  faq       Faq[]
-  ptd       ProductToDocuments[]
-  service   ServiceHistory[]
-  steps     Steps[]
-}
-
-model ProductProfile {
-  headTitle  String?  
-  headDesc   String?
-  bodyTitle  String?
-  bodyDesc   String?
-  videoLink  String?
-  product    Product  @relation(fields: [productId], references: [id])
-  productId  Int
-  @@id([productId])
-
-}
-
-model Faq {
-  id         Int       @default(autoincrement())  @id
-  question   String
-  answers    String
-  product    Product?  @relation(fields: [productId], references: [id])
-  productId  Int?
-}
-
-model Documents {
-  id         Int       @default(autoincrement())  @id
-  name       String
-  desc       String?
-  ptd        ProductToDocuments[]
-}
-
-model Steps {
-  id        Int       @default(autoincrement())   @id
-  fromDay   Int       
-  toDay     Int
-  description  String
-  product     Product?   @relation(fields: [productId], references: [id])
-  productId   Int?
-}
-
-model ProductToDocuments {
-  document   Documents  @relation(fields: [documentId], references: [id])
-  documentId  Int
-  product    Product    @relation(fields: [productId], references: [id])
-  productId   Int
-  createdAt   DateTime   @default(now())
-  @@id([documentId, productId]) 
-}
-
-model ServiceHistory  {
-  id        Int       @default(autoincrement())  @id
-  asker     User      @relation(fields: [askerId], references: [id], "Asker")
-  askerId   Int
-  provider  User?      @relation(fields: [providerId], references: [id], "Provider")
-  providerId Int?
-  product    Product   @relation(fields: [productId], references: [id])
-  productId  Int
-  status     String    @default("PENDING")
-  createdAt  DateTime  @default(now())
-  updatedAt  DateTime  @default(now())
-}
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Account {
+  id                 Int       @id @default(autoincrement())
+  compoundId         String    @unique @map(name: "compound_id")
+  userId             Int       @map(name: "user_id")
+  providerType       String    @map(name: "provider_type")
+  providerId         String    @map(name: "provider_id")
+  providerAccountId  String    @map(name: "provider_account_id")
+  refreshToken       String?   @map(name: "refresh_token")
+  accessToken        String?   @map(name: "access_token")
+  accessTokenExpires DateTime? @map(name: "access_token_expires")
+  createdAt          DateTime  @default(now()) @map(name: "created_at")
+  updatedAt          DateTime  @default(now()) @map(name: "updated_at")
+
+
+  @@index([providerAccountId], name: "providerAccountId")
+  @@index([providerId], name: "providerId")
+  @@index([userId], name: "userId")
+  @@map(name: "accounts")
+}
+
+model Session {
+  id           Int      @id @default(autoincrement())
+  userId       Int      @map(name: "user_id")
+  expires      DateTime
+  sessionToken String   @unique @map(name: "session_token")
+  accessToken  String   @unique @map(name: "access_token")
+  createdAt    DateTime @default(now()) @map(name: "created_at")
+  updatedAt    DateTime @default(now()) @map(name: "updated_at")
+
+  @@map(name: "sessions")
+}
+
+model User {
+  id            Int              @id @default(autoincrement())
+  name          String?
+  email         String?          @unique
+  emailVerified DateTime?        @map(name: "email_verified")
+  image         String?
+  role          String           @default("user")
+  password      String?
+  businessName  String?
+  asker         ServiceHistory[] @relation("Asker")
+  provider      ServiceHistory[] @relation("Provider")
+  createdAt     DateTime         @default(now()) @map(name: "created_at")
+  updatedAt     DateTime         @default(now()) @map(name: "updated_at")
+
+  @@map(name: "users")
+}
+
+model VerificationRequest {
+  id         Int      @id @default(autoincrement())
+  identifier String
+  token      String   @unique
+  expires    DateTime
+  createdAt  DateTime @default(now()) @map(name: "created_at")
+  updatedAt  DateTime @default(now()) @map(name: "updated_at")
+
+  @@map(name: "verification_requests")
+}
+
+model Category {
+  id          Int             @id @default(autoincrement())
+  name        String
+  productHead ProductHeader[]
+}
+
+model ProductHeader {
+  id         Int       @id @default(autoincrement())
+  name       String
+  category   Category  @relation(fields: [categoryId], references: [id])
+  categoryId Int
+  product    Product[]
+}
+
+model Product {
+  id            Int                  @id @default(autoincrement())
+  name          String
+  price         Float?
+  short         String?
+  long          String?
+  videoUrl      String?
+  productHead   ProductHeader        @relation(fields: [productHeadId], references: [id])
+  productHeadId Int
+  faq           Faq[]
+  service       ServiceHistory[]
+  steps         Steps[]
+  document      Documents[]
+}
+
+model Faq {
+  id        Int      @id @default(autoincrement())
+  question  String
+  answers   String
+  product   Product? @relation(fields: [productId], references: [id])
+  productId Int?
+}
+
+model Documents {
+  id   Int                  @id @default(autoincrement())
+  name String?
+  desc String?
+  product  Product?  @relation(fields: [productId], references: [id])
+  productId  Int?
+}
+
+model Steps {
+  id          Int      @id @default(autoincrement())
+  fromDay     Int
+  toDay       Int
+  description String
+  product     Product? @relation(fields: [productId], references: [id])
+  productId   Int?
+}
+
+model ServiceHistory {
+  id         Int      @id @default(autoincrement())
+  asker      User     @relation(fields: [askerId], references: [id], "Asker")
+  askerId    Int
+  provider   User?    @relation(fields: [providerId], references: [id], "Provider")
+  providerId Int?
+  product    Product  @relation(fields: [productId], references: [id])
+  productId  Int
+  status     String   @default("PENDING")
+  createdAt  DateTime @default(now())
+  updatedAt  DateTime @default(now())
+}
```

