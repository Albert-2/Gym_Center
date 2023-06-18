function onToggle(event) {
  event.name = event.name === "menu" ? "close" : "menu";
  document.querySelector(".menu").classList.toggle("top-[10%]");
  document.querySelector(".menu").classList.toggle("bg-white");
  document.querySelector(".menu").classList.toggle("text-orange-600");
}