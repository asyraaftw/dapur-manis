import type { Metadata } from "next";
import { Geist_Mono, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { TopNavbar } from "@/components/top-navbar";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dapur Manis",
  description: "Simple home page for Dapur Manis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        geistMono.variable,
        "font-sans",
        jetbrainsMono.variable,
      )}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-full flex-col">
          <TopNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
