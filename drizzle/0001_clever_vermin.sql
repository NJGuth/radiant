CREATE TABLE IF NOT EXISTS "attributes" (
	"attribute_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hero_id_ref" uuid NOT NULL,
	"health" integer,
	"health_regen" numeric(3, 1),
	"mana" integer,
	"mana_regen" numeric(3, 1),
	"strength" integer,
	"strength_gain" numeric(3, 1),
	"agility" integer,
	"agility_gain" numeric(3, 1),
	"intelligence" integer,
	"intelligence_gain" numeric(3, 1),
	CONSTRAINT "attributes_hero_id_ref_unique" UNIQUE("hero_id_ref")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attributes" ADD CONSTRAINT "attributes_hero_id_ref_hero_hero_id_fk" FOREIGN KEY ("hero_id_ref") REFERENCES "public"."hero"("hero_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
