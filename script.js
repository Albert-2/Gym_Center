function onToggle(event) {
  event.name = event.name === "menu" ? "close" : "menu";
  document.querySelector(".menu").classList.toggle("top-[10%]");
  document.querySelector(".menu").classList.toggle("bg-white");
  document.querySelector(".menu").classList.toggle("text-orange-600");
}
const childs = document.querySelectorAll(".child");

childs.forEach(function (divElement) {
  divElement.addEventListener("mouseover", function () {
    divElement.classList.add("bg-white", "text-black");
  });

  divElement.addEventListener("mouseout", function () {
    divElement.classList.remove("bg-white", "text-black");
  });
});

const div2 = document.querySelector("#one");

div2.addEventListener("mouseover", function () {
  document.querySelector(".effect1").classList.add("bg-orange-600");
});
div2.addEventListener("mouseout", function () {
  document.querySelector(".effect1").classList.remove("bg-orange-600");
});

const div4 = document.querySelector("#two");

div4.addEventListener("mouseover", function () {
  document.querySelector(".effect2").classList.add("bg-orange-600");
});

div4.addEventListener("mouseout", function () {
  document.querySelector(".effect2").classList.remove("bg-orange-600");
});

const div6 = document.querySelector("#three");

div6.addEventListener("mouseover", function () {
  document.querySelector(".effect3").classList.add("bg-orange-600");
});

div6.addEventListener("mouseout", function () {
  document.querySelector(".effect3").classList.remove("bg-orange-600");
});
