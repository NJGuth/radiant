import Link from "next/link";

export default function HeroCard({ name, id }: { name: string; id: string }) {
  return (
    <Link href={`/hero/${id}`}>
      <div>
        <p>Strength</p>
        <h2 className="text-3xl font-bold">{name}</h2>
        <p>Calls upon the forest to root his foes</p>
        <p>
          <span>Support</span>
          <span>Mele</span>
        </p>
      </div>
    </Link>
  );
}
