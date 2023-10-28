"use client";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [active, setActive] = useState(2);

  return (
    <main className="flex min-h-fit justify-center">
      <div className="flex items-center justify-center gap-4 h-96 w-4/5">
        <button
          onClick={() => {
            setActive(1);
          }}
          className={
            active == 1
              ? "h-full flex flex-[3] flex-col gap-y-10 bg-red-500 rounded-2xl items-center justify-center  transition-all ease-in "
              : "h-full flex flex-1 flex-col gap-y-10 bg-first-color rounded-2xl items-center justify-center  transition-all ease-in "
          }
        >
          <div className="w-36 h-36 rounded-full bg-yellow-600"></div>
          <span className="font-semibold text-xl text-white ">aezazaze</span>
        </button>

        <button
          onClick={() => {
            setActive(2);
          }}
          className={
            active == 2
              ? "h-full flex flex-[3] bg-amber-700 rounded-2xl transition-all ease-in "
              : "h-full flex flex-1 bg-amber-700 rounded-2xl transition-all ease-in "
          }
        >
          Ange KANO 002
        </button>
        <button
          onClick={() => {
            setActive(3);
          }}
          className={
            active == 3
              ? "h-full flex flex-[3] flex-col gap-y-10 bg-first-color rounded-2xl items-center justify-center  transition-all ease-in "
              : "h-full flex flex-1 flex-col gap-y-10 bg-first-color rounded-2xl items-center justify-center  transition-all ease-in "
          }
        >
          <div className="w-36 h-36 rounded-full bg-yellow-600"></div>
          <span className="font-semibold text-xl text-white ">zaezeze</span>
        </button>
      </div>
    </main>
  );
};

export default Contact;
