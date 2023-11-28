"use client";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [active, setActive] = useState(2);

  return (
    <main className="flex min-h-fit justify-center">
      <div className="flex items-center justify-center gap-4 w-4/5">
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
              ? "h-full flex flex-col p-4 gap-y-4 items-center justify-center flex-[3] rounded-2xl transition-all ease-in cursor-none -z-10 "
              : "h-full flex flex-col p-4  justify-center flex-1 rounded-2xl transition-all ease-in "
          }
        >
          <span className="font-semibold text-2xl">
            Laissez un commentaire 😇
          </span>
          <div className="flex flex-col items-start  gap-y-2 w-full">
            <span className="text-xl font-medium">Email 📧</span>
            <input
              type="email"
              className="w-full rounded-full py-2 px-3 outline-none  "
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <span className="text-xl font-medium">Merci d'avance 👋</span>
            <textarea
              name=""
              id=""
              className="rounded-lg w-full h-40 py-2 px-3 outline-none"
            ></textarea>
          </div>
          <div className="flex-col flex items-start ">
            <button className="p-3 bg-red-500">Envoyer</button>
          </div>
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
