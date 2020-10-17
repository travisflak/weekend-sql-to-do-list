CREATE TABLE "tasks" (
"id" SERIAL PRIMARY KEY,
"taskName" VARCHAR(50) NOT NULL,
"taskNotes" VARCHAR(50) NOT NULL,
"taskComplete" VARCHAR(3));