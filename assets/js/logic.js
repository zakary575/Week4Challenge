const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");
let mode = localStorage.getItem("mode");

// function to grab light and dark mode from local storage so it persists from one page to the other
function init() {
  if (mode === "dark") {
    container.setAttribute("class", "dark");
  } else if (mode === "light") {
    container.setAttribute("class", "light");
  } else {
  }
  return;
}
// event listener for the light mode dark mode button
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
    localStorage.setItem("mode", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
    localStorage.setItem("mode", "dark");
  }
});

init();
