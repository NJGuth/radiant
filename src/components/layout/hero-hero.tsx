import Image from "next/image";

export default function HeroHero({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-xl bg-muted lg:h-[800px]">
      <Image
        src={imageUrl}
        alt="Hero image"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
