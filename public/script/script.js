const mouse = document.querySelector("#mouse");
const sml = document.querySelector("#sml");
const click = document.querySelector("#click");
const items = document.querySelectorAll("#item");

const spanTextGras = document.querySelector(".spanTextGras");
const spanTextGras1 = document.querySelector(".spanTextGras1");
const spanText = document.querySelector(".spanText");
const spanText1 = document.querySelector(".spanText1");
const About = document.querySelector(".About");


const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");
const span4 = document.querySelector(".span4");



const tl = new TimelineMax();

window.addEventListener("mousemove", (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
});
window.addEventListener("mousemove", (e) => {
  sml.style.top = e.pageY + "px";
  sml.style.left = e.pageX + "px";
});
window.addEventListener("mousemove", (e) => {
  click.style.top = e.pageY + "px";
  click.style.left = e.pageX + "px";
});

tl.fromTo(
  spanText,
  0.2,
  { opacity: 0, transform: "translateY(.5rem)" },
  { opacity: 1, transform: "translateY(0rem)" }
)
  .fromTo(
    spanTextGras,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    spanText1,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    spanTextGras1,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    span1,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" },
    "-=.1"
  )
  .fromTo(
    span2,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" },
    "-=.1"
  )
  .fromTo(
    span3,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" },
    "-=.15"
  )
  .fromTo(
    span4,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" }
  )
  .fromTo(
    About,
    0.2,
    { opacity: 0, transform: "translateY(.5rem)" },
    { opacity: 1, transform: "translateY(0rem)" },
    "-=.3"

  );

