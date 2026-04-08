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
    "Clínica odontológica no Centro de SP. Especialista em endodontia, estética, implantes e ortodontia. Mais de 20 anos de experiência. Próximo ao Metrô República.",
  keywords:
    "dentista centro SP, clínica odontológica centro São Paulo, implante dentário centro SP, ortodontia centro SP",
  authors: [{ name: "Dra. Maísa Rossetto" }],
  openGraph: {
    title: "Dra. Maísa Rossetto | Dentista no Centro de São Paulo",
    description: "Clínica odontológica premium no Centro de SP.",
    url: "https://www.dentistanocentro.com.br",
    siteName: "Consultório Dra. Maísa Rossetto",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://www.dentistanocentro.com.br/wp-content/uploads/2023/01/Logo-Dentista-no-centro-de-SP-logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Maísa Rossetto — Dentista no Centro de SP",
  url: "https://www.dentistanocentro.com.br",
  telephone: "+551131299822",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Nova Barão, 37, Sala 409",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01042-001",
    addressCountry: "BR",
  },
  openingHours: ["Mo-Fr 08:00-20:00", "Sa 11:00-16:00"],
  priceRange: "$$",
  image:
    "https://www.dentistanocentro.com.br/wp-content/uploads/2023/01/Dentista-Maisa-4.jpeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
