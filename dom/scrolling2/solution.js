const moon = document.getElementById("moon");
const backM = document.getElementById("back-mountain");
const frontM = document.getElementById("front-mountain");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = `${value * 0.8}px`;
    backM.style.top = `${value * 0.5}px`;
    frontM.style.bottom = `0px`;
    header.style.top = `${value * 0.5}px`;
});
