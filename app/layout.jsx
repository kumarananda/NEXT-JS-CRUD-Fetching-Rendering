/** @format */

import SiteHeader from "@/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="flex ">
          <Navbar />
          <div class="sm:ml-64 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
