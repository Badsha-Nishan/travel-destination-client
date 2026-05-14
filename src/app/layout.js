import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel App",
  description: "Created by Sk Badsha Nishan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefin.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col ">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
