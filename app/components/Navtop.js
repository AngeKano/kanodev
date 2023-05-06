import React from "react";
import Image from "next/image";

import Slug from "../../public/img/slugLight.png";

const Navtop = () => {
  return (
    <div className="font-semibold text-4xl flex justify-between">
      <div className="flex gap-1 items-center">
        <Image src={Slug} alt="Code" className="w-7 h-7" />
        <span className="text-dark-color">Kano</span>
        <span className="text-light-color">dev.</span>
      </div>
      <div className="flex gap-10 items-center">
        <div className="p-3 rounded-full border-dark-color border-[2px] flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span className="text-dark-color text-xl">Télécharger mon CV</span>
        </div>
        <div className="p-3 rounded-full bg-dark-color w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
