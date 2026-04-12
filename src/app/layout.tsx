import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { rotas, SpaceHome } from "@/util/spaceHome";
import { Providers } from "@/providers/Providers";

export const metadata: Metadata = {
  title: "Portal Notícias",
  description: "Noticias do mundo todo e atualizações em tempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <header className="bg-[black] text-[white] p-[18px]">
            <nav
              className="flex items-center justify-center "
              aria-label="Menu principal"
            >
              <h1 className="text-[16px] font-bold">
                Portal <span className="text-[#b91e37]">Notícias</span>
              </h1>
              <ul className="flex items-center gap-[4px] list-none">
                {rotas.map((i) => (
                  <li key={i.name}>
                    <SpaceHome {...i} />
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
