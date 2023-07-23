const Label = document.querySelectorAll(".Label");
const Poste = document.querySelectorAll(".Poste");
const Exp = document.querySelectorAll(".Exp");
const Periode = document.querySelectorAll(".Periode");
const Lieu = document.querySelectorAll(".Lieu");
const Web = document.querySelectorAll(".Web");
const EntExp = document.querySelector(".EntExp");

const tl2 = new TimelineMax();

tl2
  .fromTo(
    EntExp,
    0.3,
    { opacity: 0, transform: "translateX(.6rem)" },
    { opacity: 1, transform: "translateX(0rem)" }
  )
  .fromTo(
    Label,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    Poste,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    Exp,
    0.2,
    { opacity: 0, transform: "translateX(.5rem)" },
    { opacity: 1, transform: "translateX(0rem)" }
  )
  .fromTo(
    Periode,
    0.25,
    { opacity: 0, transform: "translateX(.5rem)" },
    { opacity: 1, transform: "translateX(0rem)" },
    1
  )
  .fromTo(
    Lieu,
    0.23,
    { opacity: 0, transform: "translateX(.5rem)" },
    { opacity: 1, transform: "translateX(0rem)" }
  )
  .fromTo(
    Web,
    0.21,
    { opacity: 0, transform: "translateX(.5rem)" },
    { opacity: 1, transform: "translateX(0rem)" }
  );
