-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
