import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <main className="flex min-h-fit  justify-center">
      <div className="flex items-center justify-center gap-4  h-96 w-4/5">
        <Link
          href={"/"}
          className="h-full  flex flex-1 flex-col gap-y-10 bg-first-color rounded-2xl items-center justify-center  "
        >
          <div className="w-36 h-36 rounded-full bg-yellow-600"></div>
          <span className="font-semibold text-xl text-white ">
            
          </span>
        </Link>
        <div className="h-full contactActive rounded-2xl ">Ange KANO 002</div>
        <Link
          href={"/"}
          className="h-full flex flex-1 flex-col gap-y-10 bg-first-color rounded-2xl items-center justify-center "
        >
          <div className="w-36 h-36 rounded-full bg-yellow-600"></div>
          <span className="font-semibold text-xl text-white ">
            
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Contact;
