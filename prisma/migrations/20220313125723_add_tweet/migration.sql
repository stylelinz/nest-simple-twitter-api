-- CreateTable
CREATE TABLE "Tweet" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);
