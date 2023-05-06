import React from "react";
import Link from "next/link";

const TextFirst = () => {
  return (
    <div className="containers gap-y-2">
      <div className="flex items-center gap-2  w-fit">
        <span className="text1">Hey, moi c'est</span>
        <div className="relative">
          <span className="font-cabinetgrotesk uppercase text-[3rem] font-black text-first-color ">
            Ange Kano
          </span>
          <div className="absolute border-t-2 bg-light-color border-t-first-color w-full h-6 bg-opacity-25 top-0 left-0 translate-x-0 translate-y-11 -z-1"></div>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <span className="text1">Passionner de </span>
        <div className="relative">
          <span className="font-cabinetgrotesk uppercase text-[3rem] font-black text-first-color ">
            Design graphique
          </span>
          <div className="absolute border-t-2 bg-light-color border-t-first-color w-full h-6 bg-opacity-25 top-0 left-0 translate-x-0 translate-y-11 -z-1"></div>
        </div>
      </div>
      <span className="text-3xl">
        Je suis developpeur Front-end & web integrateur
      </span>
      <div id="text" class="flex items-center gap-x-2 mt-6  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        <Link href="/" legacyBehavior>
          <a>About Us</a>
        </Link>
        <span className="text-2xl font-light ">A propos de moi</span>
      </div>
    </div>
  );
};

export default TextFirst;
