import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Maísa Rossetto | Dentista no Centro de São Paulo",
  description:
    "Clínica odontológica no Centro de SP. Especialista em endodontia, estética dental, implantes, ortodontia e harmonização facial. Mais de 20 anos de experiência. Próximo ao metrô República e Anhangabaú.",
  keywords: [
    "dentista centro SP",
    "dentista centro São Paulo",
    "clínica odontológica centro SP",
    "implante dentário centro SP",
    "ortodontia centro SP",
    "clareamento dental",
    "Dra Maísa Rossetto",
    "invisalign SP",
    "harmonização facial",
  ],
  authors: [{ name: "Dra. Maísa Rossetto" }],
  openGraph: {
    title: "Dra. Maísa Rossetto | Dentista no Centro de São Paulo",
    description:
      "Clínica odontológica premium no Centro de SP. Mais de 20 anos de experiência. Especialista em estética, implantes e ortodontia.",
    url: "https://www.dentistanocentro.com.br",
    siteName: "Consultório Dra. Maísa Rossetto",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
