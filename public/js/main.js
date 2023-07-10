const nama = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");
const errMes = document.querySelector(".form-error ul li");
const subBtn = document.querySelector("#submit");
const err = document.querySelectorAll(".form-error-fe h5");

nama.addEventListener("keyup", function (e) {
    checkInput(nama, 0);
    if (nama.value !== '' && email.value !== '') {
        if (message.value !== '') {
            subBtn.disabled = false;
            subBtn.classList.remove("disable")
        }
    }
})

email.addEventListener("keyup", function (e) {
    checkInput(email, 1);
    if (nama.value !== '' && email.value !== '') {
        if (message.value !== '') {
            subBtn.disabled = false;
            subBtn.classList.remove("disable")
        }
    }
})

message.addEventListener("keyup", function (e) {
    checkInput(message, 2);
    if (nama.value !== '' && email.value !== '') {
        if (message.value !== '') {
            subBtn.disabled = false;
            subBtn.classList.remove("disable")
        }
    }
})

function checkInput(element, i) {
    if (element.value == '') {
        err[i].parentElement.classList.add("error");
        nama.classList.add("error");
        subBtn.disabled = true;
        subBtn.classList.add("disable")
    } else {
        if (nama.value !== '' && email.value !== '') {
            if (message.value !== '') {
                err[i].parentElement.classList.remove("error");
                nama.classList.remove("error");
                subBtn.disabled = false;
                subBtn.classList.remove("disable")
            }
        }
    }
}
