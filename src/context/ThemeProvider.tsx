"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="dark"
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
