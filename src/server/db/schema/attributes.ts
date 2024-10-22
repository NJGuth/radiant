import { relations } from "drizzle-orm";

import {
  index,
  boolean,
  pgTable,
  varchar,
  pgEnum,
  serial,
  real,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";

//One to One
export const AttributesTable = pgTable("attributes", {
  id: serial("attribute_id").primaryKey(),
});
