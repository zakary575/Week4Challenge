const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");
let mode = localStorage.getItem('mode')
function init(){
    // let mode = localStorage.getItem('mode')
    if (mode === 'dark'){
        container.setAttribute('class','dark')
    }else if(mode === 'light'){
        container.setAttribute('class','light')
    }else{
        
    }return 
}

themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
    localStorage.setItem('mode','light')
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
    localStorage.setItem('mode','dark')
  }
});

init()