import React from "react";
import TitreHight from "../components/TitreHight";
import Data from "../data";
const Skills = () => {
  const { Skills } = Data;
  return (
    <main className="flex min-h-screen flex-col px-[3%] gap-y-20 mb-24 ">
      {Skills.map((item) => (
        <div className="flex flex-col ">
          <TitreHight text={item.Label} />
          <div className="mt-11 gap-14 flex">
            {item.langage.map((item) => (
              <div className="flex flex-col items-center">
                <div
                  className="Bulle w-[80px] h-[80px] rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: item.first_color,
                    backgroundColor: item.background_color,
                  }}
                >
                  <img src={item.img_lien} alt="" />
                </div>
                <p
                  className="TextAnim text-lg"
                  style={{ color: item.first_color }}
                >
                  {item.nom}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Skills;
