import React from "react";
import ItemNavbar from "./itemNavbar";

const Navbar = () => {
  return (
    <div className="flex gap-3 py-2 px-2 bg-[#272838] rounded-full absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <ItemNavbar label="Accueil" active="true" link = "home" />
      <ItemNavbar label="A Propos" link = "about"/>
      <ItemNavbar label="Experience" link = "experience" />
      <ItemNavbar label="Competences" link = "skills" />
      <ItemNavbar label="Contact" link = "contact" />
    </div>
  );
};

export default Navbar;
