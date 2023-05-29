const TextDescript = document.querySelector(".TextDescript");
const Entete = document.querySelector(".Entete");
const Other = document.querySelector(".Other");

const tl1 = new TimelineMax();

tl1
  .fromTo(
    Entete,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    TextDescript,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    Other,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  );
