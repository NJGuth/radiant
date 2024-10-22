CREATE TABLE IF NOT EXISTS "hero_roles" (
	"hero_id" uuid NOT NULL,
	"role_id" uuid NOT NULL,
	CONSTRAINT "hero_roles_hero_id_role_id_pk" PRIMARY KEY("hero_id","role_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roles" (
	"role_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"role_name" varchar NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hero_roles" ADD CONSTRAINT "hero_roles_hero_id_hero_hero_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."hero"("hero_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hero_roles" ADD CONSTRAINT "hero_roles_role_id_roles_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("role_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
