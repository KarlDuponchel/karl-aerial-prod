import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Karl - Télépilote Professionnel",
  description: "Prêts à élever vos contenus visuels ? Contactez-moi !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
