import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Brain, BicepsFlexed, Rabbit } from "lucide-react";

import { cn } from "@/lib/utils";

const typeVariants = cva(
  "inline-flex items-center rounded-xl px-2 py-1 text h-8 font-semibold ",
  {
    variants: {
      variant: {
        strength: "text-[#FF977D]/80 bg-[#391714]",
        agility: "bg-[#0F2E22]/80 text-[#1FD8A4]",
        intelligence: "bg-[#003362]/80 text-[#9EB1FF]",
      },
    },
    defaultVariants: {
      variant: "strength",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typeVariants> {}

function HeroType({ className, variant, ...props }: BadgeProps) {
  const IconComponent = React.useMemo(() => {
    switch (variant) {
      case "strength":
        return BicepsFlexed;
      case "agility":
        return Rabbit;
      case "intelligence":
        return Brain;
      default:
        return BicepsFlexed; // Default to strength icon
    }
  }, [variant]);

  return (
    <div className={cn(typeVariants({ variant }), className)} {...props}>
      <IconComponent className="mr-1 h-5 w-5" />
      {variant && variant.charAt(0).toUpperCase() + variant.slice(1)}
    </div>
  );
}

export { HeroType, typeVariants };
