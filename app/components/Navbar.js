import React from "react";
import ItemNavbar from "./itemNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex gap-3 py-2 px-4 bg-[#272838] rounded-full fixed top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <ItemNavbar
        label="Accueil"
        active={path == "/" ? "true" : "false"}
        link="/"  
      />
      <ItemNavbar
        label="A Propos"
        active={path == "/about" ? "true" : "false"}
        link="/about"
      />
      <ItemNavbar
        label="Experience"
        active={path == "/experience" ? "true" : "false"}
        link="/experience"
      />
      <ItemNavbar
        label="Competences"
        active={path == "/skills" ? "true" : "false"}
        link="/skills"
      />
      <ItemNavbar
        label="Blog"
        active={path == "/blog" ? "true" : "false"}
        link="/blog"
      />
      <ItemNavbar
        label="Contact"
        active={path == "/contact" ? "true" : "false"}
        link="/contact"
      />
    </div>
  );
};

export default Navbar;
