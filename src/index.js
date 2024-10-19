import "./styles.css"

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js"

const homeBtn = document.querySelector(".home")
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about")
const content = document.querySelector("#content")

home();

homeBtn.addEventListener("click", () => {
    home();
})

menuBtn.addEventListener("click", () => {
    menu();
})

aboutBtn.addEventListener("click", () => {
    content();
})