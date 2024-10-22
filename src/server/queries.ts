"use server";
import { db } from "./db";

export async function getHeroList() {
  const Heroes = await db.query.HeroTable.findMany({
    columns: {
      id: true,
      name: true,
      imageUrl: true,
    },
  });
  console.log(Heroes);
  return Heroes;
}

export async function getHeroProfile(heroId: string) {
  const hero = await db.query.HeroTable.findFirst({
    where: (heroes, { eq }) => eq(heroes.id, heroId),
    columns: {
      id: true,
      name: true,
      attack: true,
      complexity: true,
      type: true,
      imageUrl: true,
    },
    with: {
      attributes: true,
      abilities: true,
      roles: {
        with: { role: true, hero: true },
        columns: { roleId: true, heroId: true },
      },
    },
  });

  if (!hero) {
    throw new Error("Hero not found");
  }
  console.log(hero);
  console.log(JSON.stringify(hero, null, 2));
  return hero;
}
