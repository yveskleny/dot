import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pontinhos",
  description: "Fundo preto com pontinhos brancos distribuídos pela tela",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
