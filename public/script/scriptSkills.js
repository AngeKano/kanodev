const TextAnim = document.querySelectorAll(".TextAnim");
const Bulle = document.querySelectorAll(".Bulle");
const EntSkills = document.querySelector(".EntSkills");

const tl3 = new TimelineMax();

tl3
  .fromTo(
    EntSkills,
    0.3,
    { opacity: 0, transform: "translateX(.6rem)" },
    { opacity: 1, transform: "translateX(0rem)" }
  )
  .fromTo(
    TextAnim,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    Bulle,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  );
