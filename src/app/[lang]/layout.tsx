import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G-Metrics | AI-Driven Glaucoma Monitoring",
  description: "Pioneering predictive care with biosensors and artificial intelligence.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}>) {
  const {lang} = await params;

  return (
    <html lang={lang} className={`${inter.variable}`}>
      <body
        className="flex flex-col min-h-screen antialiased bg-background text-foreground"
      >
        <header className="fixed top-0 w-full z-50">
        </header>

        <main className="grow pt-24">
          {children}
        </main>

        <footer></footer>

      </body>
    </html>
  );
}
