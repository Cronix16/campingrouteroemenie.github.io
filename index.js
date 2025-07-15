const languages = document.querySelector(".language");
const language = document.querySelector(".language-container");

const menuIcon = document.querySelector(".menu-icon");
const navPhone = document.querySelector(".nav_links_phone");

const upBtn = document.querySelector(".go-up-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
        upBtn.classList.add("active");
    } else {
        upBtn.classList.remove("active");
    }
});

language.addEventListener("click", () => languages.classList.toggle("popup"));

menuIcon.addEventListener("click", () => navPhone.classList.toggle("popup"));




