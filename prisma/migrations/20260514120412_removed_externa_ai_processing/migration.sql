/*
  Warnings:

  - You are about to drop the column `use_external_ai_processing` on the `user_tokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_tokens" DROP COLUMN "use_external_ai_processing";
