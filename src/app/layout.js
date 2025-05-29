import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/NavigationBar";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard App",
  description: "A simple dashboard app with Next.js and NextAuth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <NavigationBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
