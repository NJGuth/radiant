import Image from "next/image";

type AbilityList = {
  abilities: Abilities[];
};

export default function HeroAbilities({ abilities }: AbilityList) {
  if (abilities.length === 0) {
    return <p>No Abilities added</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {abilities.map((ability) => (
        <div key={ability.id} className="rounded-md border border-border p-2">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={ability.imageUrl}
              alt=""
              objectFit="cover"
              width={400}
              height={400}
              sizes=""
              className="mb-1 rounded"
            />
          </div>
          <p>{ability.name}</p>
        </div>
      ))}
    </div>
  );
}
