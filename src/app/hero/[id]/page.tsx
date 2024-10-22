import Attack from "@/components/attack";
import Complexity from "@/components/complexity";
import HeroAbilities from "@/components/layout/hero-abilities";
import { Attribute } from "@/components/layout/hero-attributes";

import HeroHero from "@/components/layout/hero-hero";
import HeroRoles from "@/components/layout/hero-roles";
import { getHeroProfile } from "@/server/queries";

export default async function HeroPage({ params }: { params: { id: string } }) {
  const hero = await getHeroProfile(params.id);

  const attributeMap = [
    {
      variant: "strength",
      value: hero.attributes?.strength,
      modifier: hero.attributes?.strengthGain,
    },
    {
      variant: "agility",
      value: hero.attributes?.agility,
      modifier: hero.attributes?.agilityGain,
    },
    {
      variant: "intelligence",
      value: hero.attributes?.intelligence,
      modifier: hero.attributes?.intelligenceGain,
    },
    {
      variant: "health",
      value: hero.attributes?.health,
      modifier: hero.attributes?.healthRegen,
    },
    {
      variant: "mana",
      value: hero.attributes?.mana,
      modifier: hero.attributes?.manaRegen,
    },
  ] as const;

  return (
    <div className="grid min-h-screen grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      <div className="col-span-1 lg:col-span-1 2xl:col-span-2">
        <HeroHero imageUrl={hero.imageUrl ?? ""} />
      </div>
      <div className="col-span-1 -mt-6 lg:col-span-3 lg:mt-0 2xl:col-span-2">
        <div className="space-y-4 py-4">
          <h1 className="text-4xl font-bold">{hero.name}</h1>
          <p>{hero.type}</p>

          <div className="flex w-full items-center justify-between">
            <p>Attack type</p>
            <Attack attack={hero.attack} />
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Complexity</p>
            <Complexity value={hero.complexity} />
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {attributeMap.map((attr) => (
            <Attribute
              key={attr.variant}
              variant={attr.variant}
              value={attr.value}
              modifier={attr.modifier}
            />
          ))}
        </div>
        <div className="grid gap-2 py-4">
          <h2 className="mt-3 text-2xl font-bold">Roles</h2>
          {/* <HeroRoles roles={hero.roles} /> */}
          <div className="inline-flex gap-4">
            {hero.roles.map((heroRole) => (
              <div
                key={heroRole.role.id}
                className="flex-none rounded-lg bg-muted px-2 py-1"
              >
                <p>{heroRole.role.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-2 py-4">
          <h2 className="mt-3 text-2xl font-bold">Abilities</h2>
          <HeroAbilities abilities={hero.abilities} />
        </div>
      </div>
    </div>
  );
}
