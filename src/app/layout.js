import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subida from "@/components/Subida";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Festicool",
  description: "¡Fiesta y diversión!",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <Subida></Subida>
        {children}
      <Footer/>
      </body>

    </html>
  );
}
