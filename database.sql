CREATE TABLE "tasksToDo" (
"id" SERIAL PRIMARY KEY,
"person" VARCHAR (50) NOT NULL,
"taskName" VARCHAR(50) NOT NULL,
"taskNotes" VARCHAR(50) NOT NULL,
"taskComplete" VARCHAR(3));