// Style
import "./globals.css";

// Font
import { Rubik } from "next/font/google";

// Components
import Footer from "./Components/Footer/page";
import Navbar from "./Components/Navbar/page";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "JOJO LIST",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
