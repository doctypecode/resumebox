import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar";
import LogoFull from "@/components/logo/LogoFull";
import Sidebar from "@/components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-robotoMono`}
      >
        <ThemeProvider>
          <div className="grid grid-cols-[2fr_10fr] h-screen">
            <div className="py-[0.5em] px-[1rem]">
              <LogoFull />
              <Sidebar />
            </div>
            <div>
              <Navbar />
              <div className="px-10">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
