
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const container = document.querySelector(".container");
const item = [...container.querySelectorAll(".list .item")];
const indicator = document.querySelector(".indicator");
const dots = document.querySelectorAll(".indicator ul li");
let list = container.querySelector(".list");
const number = indicator.querySelector(".number");

let active = 0;
let firstPosition = 0;
let lastPosition = item.length - 1;

function setSlider(){
    let itemOld = container.querySelector(".list .item.active");
    if (itemOld) itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector("ul li.active");
    if (dotsOld) dotsOld.classList.remove("active");

    dots[active].classList.add("active");
    item[active].classList.add("active");

    number.textContent = String(active + 1).padStart(2,'0')
}

nextButton.onclick = () => {
    list.style.setProperty("--calculation", 1);
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
};

prevButton.onclick = () => {
    list.style.setProperty("--calculation", -1);
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
};
