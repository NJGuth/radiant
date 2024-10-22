import { getHeroList } from "@/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const data = await getHeroList();
  return (
    <main>
      <div className="grid gap-4 py-8">
        {data.map((hero) => (
          <Link href={`/hero/${hero.id}`} key={hero.id}>
            <div className="border p-4 hover:border-primary">
              <h2 className="text-3xl font-bold">{hero.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
