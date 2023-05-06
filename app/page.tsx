import Navbar from "./components/Navbar";
import TextFirst from "./components/TextFirst";
import Navtop from "./components/Navtop";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-[5%] ">
      <TextFirst />
      <Link href={"/about"}>
        <h1 className="text-red-500 hover:text-yellow-600">arudof</h1>
      </Link>
      <Navbar />
    </main>
  );
}
