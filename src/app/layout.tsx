import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-white font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
