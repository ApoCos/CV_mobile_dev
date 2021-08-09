var burger = document.querySelector(".button_burger");
var menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("visible");

})