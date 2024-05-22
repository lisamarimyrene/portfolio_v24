import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo_black",
  weight: "400",
});

// const archivo = Archivo({ subsets: ["latin"] });
// const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Lisa Mari Myrene Portfolio",
  description: "Portfolio generated by Lisa Mari Myrene",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-archivo`}>
        {children}
      </body>
    </html>
  );
}
