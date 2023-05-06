import Navbar from "./components/Navbar";
import TextFirst from "./components/TextFirst";
import Navtop from "./components/Navtop";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center flex-row">
      <div className="p-10">
        <Navtop />
      </div>
      <main className="flex min-h-screen flex-col items-center py-[5%] ">
        <div id="mouse" className="bg-color-rgba"></div>
        <div id="click" className="bg-[#2589BD] opacity-0 "></div>
        <div id="sml" className="bg-[#2589BD]"></div>

        <TextFirst />
        <Link href="/About" legacyBehavior>
          <a>
            <h1>arudof</h1>
          </a>
        </Link>
        <Navbar />
      </main>
    </div>
  );
}
