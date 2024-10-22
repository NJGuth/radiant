import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Heart, Droplet, Dumbbell, Wind, Brain, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const attributeVariants = cva(
  "inline-flex items-center rounded-lg px-2.5 py-2 text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring space-x-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        health: "bg-[#0F2E22] text-[#1FD8A4]",
        mana: "bg-[#003362] text-[#9EB1FF]",
        strength: "text-[#FF977D] bg-[#391714]",
        agility: "bg-[#0F2E22] text-[#1FD8A4]",
        intelligence: "bg-[#003362] text-[#9EB1FF]",
        universal: "bg-[#351A35] text-[#E796F3]",
        carry: "",
        support: "",
        pusher: "",
      },
    },
    defaultVariants: {
      variant: "health",
    },
  },
);

const variantConfig = {
  health: { icon: Heart, label: "Health" },
  mana: { icon: Droplet, label: "Mana" },
  strength: { icon: Dumbbell, label: "Strength" },
  agility: { icon: Wind, label: "Agility" },
  intelligence: { icon: Brain, label: "Intelligence" },
  universal: { icon: Star, label: "Universal" },
  carry: { icon: Star, label: "Universal" },
  support: { icon: Star, label: "Universal" },
  pusher: { icon: Star, label: "Universal" },
};

export interface AttributeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof attributeVariants> {
  value?: number | null;
  modifier?: number | string | null;
}

function Attribute({
  className,
  variant = "health",
  value,
  modifier,
  ...props
}: AttributeProps) {
  const { icon: Icon, label } = variantConfig[variant || "health"];

  return (
    <div className={cn(attributeVariants({ variant }), className)} {...props}>
      <Icon className="mr-1 h-5 w-5" />
      <span className="mr-1">{label}:</span>
      <span>{value ?? 0}</span>
      {modifier != null && <span className="ml-1">+{modifier}</span>}
    </div>
  );
}

export { Attribute, attributeVariants };
