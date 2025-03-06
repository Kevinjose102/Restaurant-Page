import "./styles.css"

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js"

const homeBtn = document.querySelector(".home")
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about")
const content = document.querySelector("#content")

home();
homeBtn.style.textDecoration = "underline";
const buyNowBtn = document.querySelector(".buynow")

homeBtn.addEventListener("click", () => {
    home()
    setupBuyNowBtn()
    homeBtn.style.textDecoration = "underline";
    menuBtn.style.textDecoration = "none";
    aboutBtn.style.textDecoration = "none";
})

menuBtn.addEventListener("click", () => {
    menu();
    menuBtn.style.textDecoration = "underline";
    homeBtn.style.textDecoration = "none";
    aboutBtn.style.textDecoration = "none";
})

aboutBtn.addEventListener("click", () => {
    about();
    aboutBtn.style.textDecoration = "underline";
    homeBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "none";
})

function setupBuyNowBtn() {
    const buyNowBtn = document.querySelector(".buynow");
    if (buyNowBtn) { // Check if the button exists before adding event listener
        buyNowBtn.addEventListener("click", () => {
            menu();
            menuBtn.style.textDecoration = "underline";
            homeBtn.style.textDecoration = "none";
            aboutBtn.style.textDecoration = "none";
        });
    }
}
setupBuyNowBtn();