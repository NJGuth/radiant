import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import type {
  HeroTable,
  AttributesTable,
  AbilitiesTable,
  RolesTable,
} from "@/server/db/schema";

type HeroType = InferSelectModel<typeof HeroTable>;
type AtrributesType = InferSelectModel<typeof AttributesTable>;
type AbilitiesType = InferSelectModel<typeof AbilitiesTable>;
type HeroRolesType = InferSelectModel<typeof RolesTable>;

declare global {
  type Hero = HeroType;
  type HeroAttributes = AtrributesType;
  type Abilities = AbilitiesType;
  type Roles = HeroRolesType;
  type HeroSummary = {
    name: string;
    id: string;
    imageUrl: string | null;
  };
}
