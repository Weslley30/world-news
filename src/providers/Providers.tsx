"use client";

import { FaqProvider } from "@/context/faq/faqContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FaqProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FaqProvider>
  );
}
