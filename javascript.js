document.body.style.backgroundColor = "red"

const element = document.querySelector(".text")

element.insertAdjacentHTML(
    "beforeend",
    "<p>живи а <span> живи</span></p>"
);