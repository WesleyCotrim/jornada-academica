
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minha Jornada | Portfólio Acadêmico",
  description:
    "Minha trajetória acadêmica, contagem regressiva para o fim do semestre e projetos desenvolvidos durante a formação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
