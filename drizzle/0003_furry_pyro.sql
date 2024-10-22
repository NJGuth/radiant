CREATE TABLE IF NOT EXISTS "abilities" (
	"ability_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hero_id_ref" uuid NOT NULL,
	"ability_name" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	CONSTRAINT "abilities_hero_id_ref_unique" UNIQUE("hero_id_ref")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "abilities" ADD CONSTRAINT "abilities_hero_id_ref_hero_hero_id_fk" FOREIGN KEY ("hero_id_ref") REFERENCES "public"."hero"("hero_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
