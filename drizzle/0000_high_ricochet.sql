DO $$ BEGIN
 CREATE TYPE "public"."hero_type" AS ENUM('strength', 'agility', 'intelligence');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hero" (
	"hero_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hero_name" varchar(20) NOT NULL,
	"attack" boolean DEFAULT false NOT NULL,
	"type" "hero_type" DEFAULT 'strength' NOT NULL,
	"complexity" real DEFAULT 1
);
