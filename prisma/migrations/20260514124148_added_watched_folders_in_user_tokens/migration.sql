-- AlterTable
ALTER TABLE "user_tokens" ADD COLUMN     "watched_folders" JSONB NOT NULL DEFAULT '[]';
