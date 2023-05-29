import React from "react";
import TitreHight from "../components/TitreHight";
import Data from "../data";

function Experience() {
  const { Data_Ex } = Data;
  return (
    <main className="flex min-h-screen flex-col px-[3%] ">
      <TitreHight text="travail" />
      <div className="mt-11 gap-y-11">
        {Data_Ex.map((items) => (
          <div className="flex justify-around mb-11 border-b-2 border-light-color border-opacity-30 py-2">
            <div className="flex-1 gap-3">
              <p className="text-xl font-cabinetgrotesk uppercase font-black">
                {items.Label}
              </p>
              <span className="text-xl">{items.Poste}</span>
              <div className="flex gap-2 mt-7">
                {items.Techno.map((items) => (
                  <div className="p-2 rounded-full border-2 justify-center items-center">
                    <span>{items.Label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 justify-between flex flex-col">
              <div className="flex items-end flex-col">
                <span className="text-gray-600">{items.Date}</span>
                <span className="font-medium">{items.Lieu}</span>
              </div>
              <span className="items-end justify-end flex text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>{" "}
                {items.Lien}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Experience;
