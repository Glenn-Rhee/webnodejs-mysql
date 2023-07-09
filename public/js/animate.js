const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("trigger");
    if (!menu.classList.contains("slider")) {
        menu.classList.toggle("slider");
    } else {
        menu.classList.toggle("closeSlider");
        timeoutId = setTimeout(() => {
            menu.style.display = "none"
        }, 500);
        clearTimeout(timeoutId);
    }
})

const menuPage = document.querySelectorAll(".menu-page");
const url = window.location.href;
let activeUrl = url.split("/");
activeUrl = activeUrl[activeUrl.length - 1];
if (activeUrl == "about") {
    menuPage[0].classList.add("active");
} else if (activeUrl == "services") {
    menuPage[1].classList.add("active");
} else if (activeUrl == "portfolio") {
    menuPage[2].classList.add("active");
} else if (activeUrl == "contact") {
    menuPage[3].classList.add("active");
}