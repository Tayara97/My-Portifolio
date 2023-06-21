let scroll = document.querySelector(".div-arrow");
scroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

let burger = document.querySelector("#burger-menu");
ul = document.querySelector("ul");
nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});
let alllist = document.querySelectorAll(".nav-link");
alllist.forEach((list) =>
    list.addEventListener("click", () => {
        ul.classList.remove("show");
    }));


