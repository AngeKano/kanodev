import React from "react";
import Link from "next/link";

const TextFirst = () => {
  return (
    <div className="containers gap-y-2">
      <div className="flex items-center gap-2  w-fit">
        <span className="text1 spanText">Hey, moi c'est</span>
        <div className="relative spanTextGras">
          <span className="font-cabinetgrotesk uppercase text-[3rem] font-black text-first-color ">
            Ange Kano
          </span>
          <div className="absolute border-t-2 bg-light-color border-t-first-color w-full h-6 bg-opacity-25 top-0 left-0 translate-x-0 translate-y-11 -z-1"></div>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <span className="text1 spanText1">Passionner de </span>
        <div className="relative spanTextGras1">
          <span className="font-cabinetgrotesk uppercase text-[3rem] font-black text-first-color ">
            Design graphique gfd
          </span>
          <div className="absolute border-t-2 bg-light-color border-t-first-color w-full h-6 bg-opacity-25 top-0 left-0 translate-x-0 translate-y-11 -z-1"></div>
        </div>
      </div>
      <span className="text-3xl ">
        <span className="span1">Je suis</span>{" "}
        <span className="span2">developpeur</span>{" "}
        <span className="span3">Front-end &</span>{" "}
        <span className="span4">web integrateur</span>
      </span>
      <Link
        href={"/about"}
        id="text"
        class=" About flex items-center gap-x-2 mt-6 relative "
      >
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
        <span className=" text-xl font-light ">A propos de moi</span>
      </Link>
    </div>
  );
};

export default TextFirst;
