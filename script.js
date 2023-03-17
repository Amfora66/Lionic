const burger = document.querySelector(".burgerButton");
const burgerMenu = document.querySelector(".burger");
burger.addEventListener("click", ()=>{
    burgerMenu.style.display = "flex"
})
const close = document.querySelector(".close");
close.addEventListener("click", ()=>{
    burgerMenu.style.display = "none"
})