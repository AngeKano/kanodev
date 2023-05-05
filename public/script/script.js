const mouse = document.querySelector("#mouse");
const sml = document.querySelector("#sml");
const click = document.querySelector("#click");

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

window.addEventListener("click", aniClick);

function aniClick(event) {
  click.classList.add("animate-pulse");
  setTimeout(function () {
    click.classList.remove("animate-pulse");
    console.log("c,est lancer");
  }, 3000);
}

console.log("sdsdldl");
