var burger = document.querySelector(".button_burger");
var menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("visible");
})

// Darkmode
var lightmode = document.querySelector(".far fa-lightbulb");
let toggleTheme = 1;

function changeMode() {

    if(toggleTheme != 0 ) {
        document.documentElement.style.setProperty("--ecritureHeader", "rgb(241, 245, 230)"); 
        document.documentElement.style.setProperty("--ecriture", "rgba(5,99,103,255)"); 
        document.documentElement.style.setProperty("--background", "rgb(241, 245, 230)"); 
        toggleTheme--;
    } else {
        document.documentElement.style.setProperty("--ecritureHeader", "rgba(5,99,103,255)");
        document.documentElement.style.setProperty("--ecriture", "white");
        document.documentElement.style.setProperty("--background", "rgba(5,99,103,255)");
        toggleTheme++;
    }
}
