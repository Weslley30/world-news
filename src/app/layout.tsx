import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { rotas, SpaceHome } from "@/util/space-home";

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
            <nav className="flex items-center" aria-label="Menu principal">
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
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
