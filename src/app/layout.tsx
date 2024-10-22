import { ThemeProvider } from "@/components/theme/theme-provider";
import "@/styles/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { getHeroList } from "@/server/queries";

export const metadata: Metadata = {
  title: "Radiant",
  description: "Learning DB by DOTA",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const heroes = await getHeroList();
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${GeistSans.variable}`}
    >
      <body>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <SidebarProvider>
            <AppSidebar heroes={heroes} />
            <main className="relative w-full p-4">
              <nav className="sticky top-0 z-50 w-full bg-background py-2">
                <SidebarTrigger />
              </nav>
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
