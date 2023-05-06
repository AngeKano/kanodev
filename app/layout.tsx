"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

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
  /**qsqs */

  // console.log(mouse);

  // useEffect(() => {
  //   const mouse = document.querySelector("#mouse");
  //   const sml = document.querySelector("#sml");
  //   const click = document.querySelector("#click");

  //   window.addEventListener("mousemove", (e) => {
  //     mouse.style.top = e.pageY + "px";
  //     mouse.style.left = e.pageX + "px";
  //   });
  //   window.addEventListener("mousemove", (e) => {
  //     sml.style.top = e.pageY + "px";
  //     sml.style.left = e.pageX + "px";
  //   });
  //   window.addEventListener("mousemove", (e) => {
  //     click.style.top = e.pageY + "px";
  //     click.style.left = e.pageX + "px";
  //   });
  // }, []);

  /****sdsd */
  return (
    <html lang="en" className="bg-backLight overflow-hidden">
      <body className={inter.className}>
        <div className="p-10">
          <Navtop />
        </div>
        <div id="mouse" className="bg-color-rgba absolute "></div>
        <div id="click" className="bg-[#2589BD] opacity-0 "></div>
        <div id="sml" className="bg-[#2589BD]"></div>
        {children}
      </body>
      <Script type="text/javascript" src="/script/script.js" />
    </html>
  );
}
