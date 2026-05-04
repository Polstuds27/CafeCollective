import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins,  Inter, Lato, Cormorant_Garamond, Playfair_Display, DM_Serif_Display, Libre_Baskerville} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets:["latin"],
  weight:["300","400","500","600","700",],
  variable: "--font-poppins"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const cormorantGaramond = Cormorant_Garamond({
   subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-cormorantGaramond"
});

const playfairDisplay = Playfair_Display({
subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-playfairDisplay"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--font-inter"
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dmSerif"
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libreBaskerville",
})

export const metadata: Metadata = {
  title: "Cafe Collective",
  description: "Cafe Collective a cafe directive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
        <body className=" w-full min-h-screen flex flex-col bg-[#3E2723]">
          {children}
        </body>
    </html>
  );
}
