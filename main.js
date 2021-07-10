const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".error-msg");
const errorImg = document.querySelector(".error-img");

function showError() {
    errorMsg.style.display = "block";
    errorImg.style.display = "inline-block";
}

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    emailInput.classList.add("email-input");
    showError();
})