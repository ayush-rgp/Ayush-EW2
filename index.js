const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

// Fixed Nav
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);

        const element = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
            behavior: "smooth"
        });

        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });
});

// Dark Mode Toggle
const icon1 = document.getElementById("icon1");
icon1.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon1.src = "sun.png";
    } else {
        icon1.src = "moon.png";
    }
    // Store dark mode preference in local storage
    localStorage.setItem("darkMode", document.body.classList.contains("dark-theme"));
});

// Check for dark mode preference from local storage
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-theme");
    icon1.src = "sun.png";
} else {
    document.body.classList.remove("dark-theme");
    icon1.src = "moon.png";
}