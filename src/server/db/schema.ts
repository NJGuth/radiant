import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { relations } from "drizzle-orm";
import {
  index,
  boolean,
  pgTable,
  varchar,
  pgEnum,
  real,
  serial,
  primaryKey,
  uuid,
  integer,
  numeric,
} from "drizzle-orm/pg-core";

////////////////////////////////////////////////

// Hero Type Enum
export const heroTypeEnum = pgEnum("hero_type", [
  "strength",
  "agility",
  "intelligence",
]);

// Hero Table
export const HeroTable = pgTable("hero", {
  id: uuid("hero_id").defaultRandom().notNull().primaryKey(),
  name: varchar("hero_name", { length: 20 }).notNull(),
  imageUrl: varchar("image_url"),
  attack: boolean("attack").default(false).notNull(),
  type: heroTypeEnum("type").default("strength").notNull(),
  complexity: real("complexity").default(1),
});

// Hero Relationships
export const HeroRelations = relations(HeroTable, ({ one, many }) => ({
  attributes: one(AttributesTable),
  abilities: many(AbilitiesTable),
  roles: many(HeroRolesTable),
}));

////////////////////////////////////////////////

// Attributes Table
export const AttributesTable = pgTable("attributes", {
  id: uuid("attribute_id").defaultRandom().primaryKey(),
  heroId: uuid("hero_id_ref")
    .references(() => HeroTable.id)
    .notNull()
    .unique(),
  health: integer("health"),
  healthRegen: numeric("health_regen", { precision: 3, scale: 1 }),
  mana: integer("mana"),
  manaRegen: numeric("mana_regen", { precision: 3, scale: 1 }),
  strength: integer("strength"),
  strengthGain: numeric("strength_gain", { precision: 3, scale: 1 }),
  agility: integer("agility"),
  agilityGain: numeric("agility_gain", { precision: 3, scale: 1 }),
  intelligence: integer("intelligence"),
  intelligenceGain: numeric("intelligence_gain", { precision: 3, scale: 1 }),
});

// Attributes Relations
export const AttributesRelations = relations(AttributesTable, ({ one }) => ({
  hero: one(HeroTable, {
    fields: [AttributesTable.heroId],
    references: [HeroTable.id],
  }),
}));

////////////////////////////////////////////////

// Abilities Table
export const AbilitiesTable = pgTable("abilities", {
  id: uuid("ability_id").defaultRandom().primaryKey(),
  heroId: uuid("hero_id_ref")
    .references(() => HeroTable.id)
    .notNull(),
  name: varchar("ability_name").notNull(),
  imageUrl: varchar("image_url").notNull(),
  order: integer("order").notNull(),
});

// Aility Relations
export const AbilityRelations = relations(AbilitiesTable, ({ one }) => ({
  hero: one(HeroTable, {
    fields: [AbilitiesTable.heroId],
    references: [HeroTable.id],
  }),
}));

////////////////////////////////////////////////

// Roles Table
export const RolesTable = pgTable("roles", {
  id: uuid("role_id").defaultRandom().primaryKey(),
  name: varchar("role_name").notNull(),
});

// Roles Relation
export const RoleRelations = relations(RolesTable, ({ many }) => ({
  heroRoles: many(HeroRolesTable),
}));

////////////////////////////////////////////////

// Hero Roles Junction
export const HeroRolesTable = pgTable(
  "hero_roles",
  {
    heroId: uuid("hero_id")
      .notNull()
      .references(() => HeroTable.id),
    roleId: uuid("role_id")
      .notNull()
      .references(() => RolesTable.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.heroId, table.roleId] }),
  }),
);

// Hero Roles Relations
export const HeroRolesRelations = relations(HeroRolesTable, ({ one }) => ({
  hero: one(HeroTable, {
    fields: [HeroRolesTable.heroId],
    references: [HeroTable.id],
  }),
  role: one(RolesTable, {
    fields: [HeroRolesTable.roleId],
    references: [RolesTable.id],
  }),
}));
