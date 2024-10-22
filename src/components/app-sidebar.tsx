"use client";

import { SidebarMenu } from "./ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroListType = {
  heroes: HeroSummary[];
};

export function AppSidebar({ heroes }: HeroListType) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Heroes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton asChild>
                <Link href="/" className={pathname === "/" ? "active" : ""}>
                  <span>All heroes</span>
                </Link>
              </SidebarMenuButton>
              {heroes.map((hero) => {
                const isActive = pathname === `/hero/${hero.id}`;
                return (
                  <SidebarMenuItem key={hero.id}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "[data=active]:border-red-900 relative h-24 border border-muted bg-slate-500 p-0 opacity-50 hover:opacity-100",
                        isActive ? "border-2 border-blue-500 opacity-100" : "",
                      )}
                      isActive={pathname === `/hero/${hero.id}`}
                    >
                      <Link href={`/hero/${hero.id}`}>
                        <Image
                          src={hero.imageUrl ?? ""}
                          alt={hero.name}
                          objectFit="cover"
                          width={500}
                          height={600}
                          className="absolute"
                        />

                        <h3 className="absolute bottom-0 left-0 right-0 z-20 bg-black bg-opacity-50 p-1 text-white">
                          {hero.name}
                        </h3>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
