import { SwordIcon, Wand2 } from "lucide-react";

interface AttackProps {
  attack: boolean;
}

export default function Attack({ attack }: AttackProps) {
  return (
    <div>
      {attack ? (
        <div className="text inline-flex h-8 items-center rounded-xl bg-zinc-800 px-2 py-1 font-semibold text-zinc-50">
          <Wand2 className="mr-1 h-5 w-5" />
          <p className="text-sm">Ranged</p>
        </div>
      ) : (
        <div className="text inline-flex h-8 items-center rounded-xl bg-zinc-800 px-2 py-1 font-semibold text-zinc-50">
          <SwordIcon className="mr-1 h-5 w-5" />
          <p className="text-sm">Mele</p>
        </div>
      )}
    </div>
  );
}
