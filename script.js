var burger = document.querySelector(".button_burger");
var menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("visible");
})

var darkmode = document.querySelector(".fa-lightbulb");

darkmode.addEventListener("click", () => {
    darkmode.classList.toggle("active")
})