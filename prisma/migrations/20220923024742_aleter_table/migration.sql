/*
  Warnings:

  - You are about to drop the column `tasksdeletedId` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `data` to the `tasksDeleted` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tasksDeleted` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `tasksDeleted` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_tasksdeletedId_fkey`;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `tasksdeletedId`;

-- AlterTable
ALTER TABLE `tasksdeleted` ADD COLUMN `data` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipo` VARCHAR(191) NOT NULL;
