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

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const contentsImg = document.querySelectorAll(".content-img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentimg = 0;

contentsImg.forEach((content, i) => {
    content.addEventListener("click", function () {
        modalImg.innerHTML = showImg(i + 1)
        modal.classList.add("show-modal");
    })

})

document.addEventListener("click", function (e) {
    const imgShow = document.querySelector(".showed");
    let dataI = imgShow.dataset.index;
    dataI = parseInt(dataI);
    // console.log(dataI);

    if (e.target.classList.contains("close-btn")) {
        modal.classList.remove("show-modal");
    }

    if (e.target.classList.contains("next")) {
        modalImg.innerHTML = toggleNext(dataI);
    }

    if (e.target.classList.contains("prev")) {
        modalImg.innerHTML = togglePrev(dataI);

    }
})

const showImg = (index) => {
    if (index === 1) {
        prev.style.display = "none";
    } else {
        prev.style.display = "block";
    }

    if (index === contentsImg.length) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }
    return `    
        <div class="close-btn">&times;</div>
        <img src="../assets/img/portfolio/thumbnails/${index}.jpg" alt="" data-index="${index}" class="showed"/>
        `;

}

function toggleNext(index) {
    if (index + 1 === contentsImg.length) {
        next.style.display = "none";
        return `    
        <div class="close-btn">&times;</div>
        <img src="../assets/img/portfolio/thumbnails/${index + 1}.jpg" alt="" data-index="${index + 1}" class="showed"/>
        `;
    } else {
        next.style.display = "block";
        prev.style.display = "block";
        return `    
        <div class="close-btn">&times;</div>
        <img src="../assets/img/portfolio/thumbnails/${index + 1}.jpg" alt="" data-index="${index + 1}" class="showed"/>
        `;
    }
}

const togglePrev = (index) => {
    if (index - 1 === 1) {
        prev.style.display = "none";
        return `    
        <div class="close-btn">&times;</div>
        <img src="../assets/img/portfolio/thumbnails/${index - 1}.jpg" alt="" data-index="${index - 1}" class="showed"/>
        `;
    } else {
        next.style.display = "block";
        prev.style.display = "block";
        return `    
        <div class="close-btn">&times;</div>
        <img src="../assets/img/portfolio/thumbnails/${index - 1}.jpg" alt="" data-index="${index - 1}" class="showed"/>
        `;
    }
}