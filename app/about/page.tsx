import React from "react";
import TitreHight from "../components/TitreHight";
import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <main className="flex min-h-fit flex-row px-[3%]">
      <section className="flex-[2] px-28">
        <TitreHight text="a propos" />
        <p className="TextDescript text-ellipsis max-w-2xl text-justify py-7">
          Bonjour, je m'appelle Ange KANO. Je suis un développeur Frontend,
          intégrateur Web et Freelancer Full stack JS. À l&apos;âge de 20 ans,
          je suis passionné par la création de sites web beaux, intuitifs et
          réactifs. En plus de mon travail dans le développement, j&apos;aime
          aussi écouter de la musique et faire du sport. Dans mon temps libre,
          je réaliser souvent des challenge sur le développement que je partage
          sur mes diffèrent
          <Link href={"https://github.com/AngeKano"}>
            <span className="underline">réseaux sociaux</span>
          </Link>
          .
        </p>
        <div className="Other gap-3">
          <div className="font-cabinetgrotesk uppercase font-extrabold text-[2rem]">
            langues
          </div>
          <div className="mx-7 ">
            <span className="mr-4">Francais</span>
            <span className="font-light">Courant</span>
          </div>
          <div className="mx-7 ">
            <span className="mr-4">English</span>
            <span className="font-light">Basic</span>
          </div>
        </div>
      </section>
      <section className="flex-1 bg-black">
        <Image
          src="/img/images/PhotoCV.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </section>
    </main>
  );
};

export default About;
