import { Inter } from "next/font/google";

import { cn } from "~/lib/utils";

import "~/styles/globals.css";
import PlausibleProvider from "next-plausible";

import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Tincy Site - Get your own tiny website",
  description: "We provide fully managed websites, £0 up front",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="tincy.site" />
      </head>
      <body className={cn("bg-white font-sans antialiased", inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
