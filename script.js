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

    if(toggleTheme != 0 ) { //lightMode
        document.documentElement.style.setProperty("--ecritureHeader", "rgb(241, 245, 230)"); //light color
        document.documentElement.style.setProperty("--ecriture", "rgba(5,99,103,255)"); //dark color
        document.documentElement.style.setProperty("--background", "rgb(241, 245, 230)"); //light color
        document.documentElement.style.setProperty("--border-color", "rgba(5,99,103,255)"); 
        toggleTheme--;
    } else { //darkMode
        document.documentElement.style.setProperty("--ecritureHeader", "rgba(5,99,103,255)");//dark color
        document.documentElement.style.setProperty("--ecriture", "rgb(241, 245, 230)");//light color
        document.documentElement.style.setProperty("--background", "rgba(5,99,103,255)");//dark color
        document.documentElement.style.setProperty("--border-color", "rgb(241, 245, 230)");//light color
        toggleTheme++;
    }

}
