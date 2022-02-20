/*
  Warnings:

  - You are about to drop the `_ProjectToTask` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `creationDate` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ProjectToTask_B_index";

-- DropIndex
DROP INDEX "_ProjectToTask_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProjectToTask";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assignedToUserId" INTEGER,
    "createdByUserId" INTEGER NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "description" TEXT,
    "dueDate" DATETIME,
    "projectId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_assignedToUserId_fkey" FOREIGN KEY ("assignedToUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Task_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("assignedToUserId", "createdByUserId", "description", "id", "title") SELECT "assignedToUserId", "createdByUserId", "description", "id", "title" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
