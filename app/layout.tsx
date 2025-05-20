import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
