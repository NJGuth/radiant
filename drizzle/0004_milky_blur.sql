ALTER TABLE "abilities" DROP CONSTRAINT "abilities_hero_id_ref_unique";--> statement-breakpoint
ALTER TABLE "abilities" ADD COLUMN "order" integer NOT NULL;