import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import CustomCursor from "@/components/CustomCursor";
import InteractiveBackground from "@/components/InteractiveBackground";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Itai Gelman — Founder & CEO, Gintex.ai",
  description:
    "Entrepreneur and business builder. Founder & CEO of Gintex.ai, exploring how trust, authority, and visibility shape the decisions markets make.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heebo.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <InteractiveBackground />
        <CustomCursor />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
