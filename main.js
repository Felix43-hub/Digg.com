let menuBar = document.querySelector(".trigram");
let navBar = document.querySelector(".navbar");
let close = document.querySelector("#close");

menuBar.addEventListener("click", () => {
    navBar.classList.toggle("menu");
});
close.addEventListener("click", () => {
    navBar.classList.remove("menu");
})
        
    

