const mouse = document.querySelector("#mouse");
const sml = document.querySelector("#sml");
const click = document.querySelector("#click");
const items = document.querySelectorAll("#item");

const Ange = document.querySelector(".Ange");
const Kano = document.querySelector(".Kano");
const Dev = document.querySelector(".Dev");

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
  Ange,
  0.2,
  { opacity: 0, transform: "translateY(.5rem)" },
  { opacity: 1, transform: "translateY(0rem)" },
  
)
.fromTo(
  Kano,
  0.2,
  { opacity: 0, transform: "translateY(.5rem)" },
  { opacity: 1, transform: "translateY(0rem)" },
  
)
.fromTo(
  Dev,
  0.2,
  { opacity: 0, transform: "translateY(.5rem)" },
  { opacity: 1, transform: "translateY(0rem)" },
  
)