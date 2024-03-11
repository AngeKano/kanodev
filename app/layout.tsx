import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";

import Navtop from "./components/Navtop";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-backLight ">
      <body className={inter.className}>
        <section className="">
          <div id="mouse" className="bg-color-rgba z-10 absolute "></div>
          <div id="click" className="bg-[#2589BD] opacity-0 "></div>
          <div id="sml" className="bg-[#2589BD] "></div>
          <div className="p-10">
            <Navtop />
          </div>

          {children}
          <Navbar />
        </section>
      </body>
      <Script type="text/javascript" src="/script/TimeLineMax.min.js" />
      <Script type="text/javascript" src="/script/TweenMax.min.js" />
      <Script type="text/javascript" src="/script/script.js" />
    </html>
  );
}
