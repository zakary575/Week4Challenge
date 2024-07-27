const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

let mode = "dark";

themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
