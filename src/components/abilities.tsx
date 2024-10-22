type AbilityTagProps = {
  abilities?: {
    id: string;
    heroId: string;
    abilityName: string;
    levelAvailable: number;
  }[];
};

export default function AbilityTags({ abilities }: AbilityTagProps) {
  if (!abilities || abilities.length === -0) {
    return <div>No abilities available</div>;
  }

  return (
    <div>
      {abilities.map((ability) => (
        <div key={ability.id}>
          <p>{ability.abilityName}</p>
        </div>
      ))}
    </div>
  );
}
