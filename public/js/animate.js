const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", function(){
    menuToggle.classList.toggle("trigger");
    if(!menu.classList.contains("slider")){
        menu.classList.toggle("slider");
    } else {
        menu.classList.toggle("closeSlider");
        timeoutId = setTimeout(() => {
            menu.style.display = "none"
        }, 500);
        clearTimeout(timeoutId);
    }
})

